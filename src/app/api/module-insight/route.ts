import { NextResponse } from 'next/server';
import { generateObject } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';
import { auth } from '@/auth';
import { checkRateLimit } from '@/lib/rateLimit';

const RequestSchema = z.object({
  moduleName: z.string().min(1, "Module name tidak boleh kosong"),
  roleName: z.string().min(1, "Role name tidak boleh kosong")
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

    // B. Rate Limit Check (Max 5 requests per minute per user)
    if (!checkRateLimit(session.user.id, 5, 60000)) {
      return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 });
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

    const { moduleName, roleName } = validationResult.data;

    const prompt = `
      Anda adalah pakar kurikulum dan karier untuk profesi ${roleName}.
      Saya sedang belajar modul: "${moduleName}".
      
      Tolong buatkan detail kurikulum untuk modul ini, dengan format JSON yang ketat mengikuti skema.
      
      Aturan untuk 'resources' (sumber belajar):
      1. Berikan minimal 3 rekomendasi sumber belajar riil (YouTube, Udemy, Coursera, dsb).
      2. Gunakan format URL pencarian yang valid dengan mengganti spasi menggunakan tanda plus (+).
         - Contoh YouTube: https://www.youtube.com/results?search_query=Tutorial+Belajar+[Topik]
         - Contoh Coursera: https://www.coursera.org/search?query=[Topik]
         - Contoh Udemy: https://www.udemy.com/courses/search/?q=[Topik]
      3. Field 'type' biasanya "Video", "Course", atau "Artikel".
      4. Pastikan rekomendasi sangat relevan dengan ${moduleName} untuk profesi ${roleName}.
    `;

    const result = await generateObject({
      model: google('gemini-2.5-flash'),
      schema: ModuleInsightSchema,
      prompt: prompt,
      temperature: 0.7,
    });

    return NextResponse.json(result.object);
  } catch (error) {
    console.error('Failed to generate module insight:', error);
    return NextResponse.json({ error: 'Failed to generate module insight' }, { status: 500 });
  }
}
