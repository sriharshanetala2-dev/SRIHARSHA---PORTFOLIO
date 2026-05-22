'use server';
/**
 * @fileOverview A comprehensive Genkit flow for generating brand identities with structured requirements and visual marks.
 *
 * - generateBrandIdentity - A function that handles the generation process.
 * - BrandIdentityInput - The input type for the function.
 * - BrandIdentityOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BrandIdentityInputSchema = z.object({
  projectName: z.string().describe('The name of the project or brand.'),
  mission: z.string().describe('The core purpose or problem being solved.'),
  audience: z.string().describe('The intended users or market.'),
  tone: z.enum(['Professional', 'Minimalist', 'Bold', 'Futuristic', 'Friendly']).describe('The desired brand personality.'),
});
export type BrandIdentityInput = z.infer<typeof BrandIdentityInputSchema>;

const BrandIdentityOutputSchema = z.object({
  techStack: z.array(z.string()).describe('List of recommended technology stack components.'),
  professionalDescription: z.string().describe('A professional, high-impact description of the project.'),
  uiConcept: z.string().describe('A brief (1 sentence) description of the UI/UX direction.'),
  logoUrl: z.string().optional().describe('Data URI of the generated logo.'),
});
export type BrandIdentityOutput = z.infer<typeof BrandIdentityOutputSchema>;

export async function generateBrandIdentity(
  input: BrandIdentityInput
): Promise<BrandIdentityOutput> {
  return generateBrandIdentityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'brandIdentityPrompt',
  input: {schema: BrandIdentityInputSchema},
  output: {schema: BrandIdentityOutputSchema.omit({logoUrl: true})},
  prompt: `You are an elite software architect and brand strategist.
  
PROJECT NAME: "{{{projectName}}}"
CORE MISSION: {{{mission}}}
TARGET AUDIENCE: {{{audience}}}
BRAND PERSONALITY: {{{tone}}}

Your task is to:
1. Select exactly 4 modern tech stack components (e.g. Next.js, Go, PostgreSQL, Tailwind) that best suit this mission.
2. Write a single, high-impact sentence that defines the project's market position in a "{{{tone}}}" tone.
3. Describe the UI/UX aesthetic direction in one punchy sentence.`,
});

const generateBrandIdentityFlow = ai.defineFlow(
  {
    name: 'generateBrandIdentityFlow',
    inputSchema: BrandIdentityInputSchema,
    outputSchema: BrandIdentityOutputSchema,
  },
  async input => {
    // 1. Generate textual identity
    const response = await prompt(input);
    const output = response.output;
    if (!output) throw new Error("Synthesis failure: Neural core failed to resolve identity.");

    // 2. Generate a visual mark (Logo)
    let logoUrl = undefined;
    try {
      const { media } = await ai.generate({
        model: 'googleai/imagen-4.0-fast-generate-001',
        prompt: `A high-end, ${input.tone} minimal vector software icon for a project named "${input.projectName}". 
        Context: ${input.mission}. 
        Style: Clean geometric design, solid background, tech aesthetic, no text, no letters, centered, professional.`,
      });
      logoUrl = media?.url;
    } catch (e) {
      console.error("Visual generation bypassed.", e);
    }

    return {
      ...output,
      logoUrl,
    };
  }
);
