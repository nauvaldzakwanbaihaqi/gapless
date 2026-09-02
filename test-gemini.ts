import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateObject, generateText } from 'ai';
import { z } from 'zod';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  console.log('Testing gemini-3.6-flash with generateObject (search grounding)...');
  try {
    const { object } = await generateObject({
      model: google('gemini-3.6-flash', { useSearchGrounding: true }),
      schema: z.object({ facts: z.array(z.string()) }),
      prompt: 'Give me 3 recent facts about AI.',
    });
    console.log('generateObject Success:', object);
  } catch (e: any) {
    console.error('generateObject Error:', e.message);
  }

  console.log('\nTesting gemini-3.6-flash with generateText (search grounding)...');
  try {
    const { text } = await generateText({
      model: google('gemini-3.6-flash', { useSearchGrounding: true }),
      prompt: 'Give me 3 recent facts about AI. Return as JSON array.',
    });
    console.log('generateText Success:', text);
  } catch (e: any) {
    console.error('generateText Error:', e.message);
  }
}

main();
