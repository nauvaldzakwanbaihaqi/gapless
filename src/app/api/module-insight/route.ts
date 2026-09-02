import { NextResponse } from 'next/server';
import { generateObject } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { z } from 'zod';
import { auth } from '@/auth';
import { checkRateLimit } from '@/lib/rateLimit';
import { db } from '@/db';
import { aiModuleInsights } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const RequestSchema = z.object({
  moduleName: z.string().min(1, "Module name tidak boleh kosong"),
  roleName: z.string().min(1, "Role name tidak boleh kosong"),
  moduleSlug: z.string().min(1, "Module slug tidak boleh kosong"),
  careerSlug: z.string().min(1, "Career slug tidak boleh kosong")
});

const ModuleInsightSchema = z.object({
  target: z.string(),
  duration: z.string(),
  breakdown: z.array(z.object({
    title: z.string(),
    description: z.string()
  })).min(2),
  resources: z.array(z.object({
    title: z.string(),
    provider: z.string(),
    type: z.string(),
    isFree: z.boolean(),
    price: z.string().optional(),
    url: z.string()
  })).min(3)
});

export async function POST(req: Request) {
  try {
    // A. Auth Guard
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // C. Origin Check
    const origin = req.headers.get('origin');
    const referer = req.headers.get('referer');
    const host = req.headers.get('host');
    const isAllowedOrigin = (origin && origin.includes(host as string)) || (referer && referer.includes(host as string));
    
    if (!isAllowedOrigin && (origin || referer)) {
       return NextResponse.json({ error: 'Forbidden Origin' }, { status: 403 });
    }

    const rawBody = await req.json();
    
    // D. Validasi Zod
    const validationResult = RequestSchema.safeParse(rawBody);
    if (!validationResult.success) {
      return NextResponse.json({ error: 'Bad Request', details: validationResult.error.format() }, { status: 400 });
    }

    const { moduleName, roleName, moduleSlug, careerSlug } = validationResult.data;

    // E. Cek Cache di Database
    const cachedInsight = await db.query.aiModuleInsights.findFirst({
      where: and(
        eq(aiModuleInsights.moduleSlug, moduleSlug),
        eq(aiModuleInsights.careerSlug, careerSlug)
      )
    });

    if (cachedInsight) {
      console.log(`[CACHE HIT] Mengambil module insight untuk ${moduleSlug} (${careerSlug})`);
      return NextResponse.json(cachedInsight.insightData);
    }

    // B. Rate Limit Check (Max 15 requests per minute per user)
    if (!checkRateLimit(session.user.id, 15, 60000)) {
      return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 });
    }

    console.log(`[CACHE MISS] Generating module insight untuk ${moduleSlug} (${careerSlug})...`);

    const prompt = `
      Anda adalah pakar kurikulum dan karier untuk profesi ${roleName}.
      Saya sedang belajar modul: "${moduleName}".
      
      Tolong buatkan detail kurikulum untuk modul ini, dengan format JSON yang ketat mengikuti skema.
      
      Aturan untuk 'resources' (sumber belajar):
      1. Berikan 3-4 rekomendasi sumber belajar riil, spesifik, dan berkualitas tinggi.
      2. WAJIB mengutamakan URL langsung ke DOKUMENTASI RESMI atau platform belajar gratis terpercaya (seperti MDN Web Docs, W3Schools, freeCodeCamp, atau dokumentasi teknologi terkait). 
         - Berikan URL langsung yang pasti dan valid ke situs tersebut, bukan sekadar URL hasil pencarian.
         - DILARANG KERAS merekomendasikan atau memberikan link dari roadmap.sh (ini adalah kompetitor, jangan pernah sebutkan atau berikan link dari sana).
      3. Jika merekomendasikan video (seperti YouTube), dan kamu tidak tahu link spesifik videonya, baru boleh gunakan format URL pencarian dengan mengganti spasi menggunakan tanda plus (+).
         - Contoh YouTube: https://www.youtube.com/results?search_query=[Topik]+untuk+${roleName.replace(/ /g, '+')}
      4. Field 'type' gunakan salah satu dari: "Dokumentasi", "Video", "Course", atau "Artikel".
      5. Field 'provider' tuliskan nama situsnya dengan jelas (contoh: "MDN Web Docs", "freeCodeCamp", "YouTube", "Coursera").
      6. Pastikan rekomendasi sangat relevan dengan topik: ${moduleName}.
    `;

    const { object: moduleInsightData } = await generateObject({
      model: google('gemini-3.6-flash'), // Reverted model name
      schema: ModuleInsightSchema,
      prompt: prompt,
      temperature: 0.7,
    });

    // Simpan ke Cache
    await db.insert(aiModuleInsights).values({
      moduleSlug,
      careerSlug,
      insightData: moduleInsightData,
    }).onConflictDoNothing();

    return NextResponse.json(moduleInsightData);
  } catch (error) {
    console.error('Failed to generate module insight:', error);
    return NextResponse.json({ error: 'Failed to generate module insight' }, { status: 500 });
  }
}
