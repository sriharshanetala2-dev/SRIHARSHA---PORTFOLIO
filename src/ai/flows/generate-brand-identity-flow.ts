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
  techStack: z.string().describe('Recommended technology stack, e.g. "React, Next.js, Firebase, Tailwind".'),
  professionalDescription: z.string().describe('A professional, high-impact description of the project for a portfolio.'),
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
  prompt: `You are an elite startup brand consultant and technical architect.
  
Project Name: "{{{projectName}}}"
Mission: {{{mission}}}
Target Audience: {{{audience}}}
Desired Brand Tone: {{{tone}}}

Your task is to:
1. Architect a modern, production-grade technology stack (comma-separated list) optimized for this specific domain and mission.
2. Draft a compelling, high-impact project description (2-3 sentences) that sounds like it came from a senior engineer's portfolio. The tone must strictly reflect the chosen "{{{tone}}}" personality.`,
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
    if (!output) throw new Error("The identity architect failed to synthesize the requirements.");

    // 2. Generate a visual mark (Logo)
    let logoUrl = undefined;
    try {
      const { media } = await ai.generate({
        model: 'googleai/imagen-4.0-fast-generate-001',
        prompt: `A high-end, ${input.tone} minimal software icon for a project named "${input.projectName}". 
        Mission context: ${input.mission}. 
        Style: Clean geometric vector, flat design, professional tech aesthetic, centered composition, high contrast, no text, no letters, no words.`,
      });
      logoUrl = media?.url;
    } catch (e) {
      // Non-blocking: If image fails, text is still valuable
      console.error("Visual asset generation bypassed due to engine limits.", e);
    }

    return {
      ...output,
      logoUrl,
    };
  }
);
