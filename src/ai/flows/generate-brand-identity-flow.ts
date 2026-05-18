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
  prompt: `You are a high-level startup brand consultant and technical architect.
  
I am building a project called "{{{projectName}}}".
Mission: {{{mission}}}
Target Audience: {{{audience}}}
Brand Tone: {{{tone}}}

Please architect a complete identity:
1. Recommend a modern, high-performance technology stack (comma-separated list) that fits this specific domain.
2. Write a professional, punchy, and high-impact description (2-3 sentences) suitable for a top-tier developer portfolio project card, reflecting the {{{tone}}} tone.`,
});

const generateBrandIdentityFlow = ai.defineFlow(
  {
    name: 'generateBrandIdentityFlow',
    inputSchema: BrandIdentityInputSchema,
    outputSchema: BrandIdentityOutputSchema,
  },
  async input => {
    // 1. Generate the textual identity (Architecture + Copy)
    const {output} = await prompt(input);
    if (!output) throw new Error("Failed to generate brand identity text.");

    // 2. Generate a logo using Imagen 4.0
    // We use standard JS template literals here since this is a direct model call, not a prompt object
    let logoUrl = undefined;
    try {
      const { media } = await ai.generate({
        model: 'googleai/imagen-4.0-fast-generate-001',
        prompt: `A professional, ${input.tone} software logo icon for a project called "${input.projectName}". 
        Context: ${input.mission}. 
        Audience: ${input.audience}.
        Style: Clean vector icon, flat design, minimalist symbolic shape, professional tech brand style, no text.`,
      });
      logoUrl = media?.url;
    } catch (e) {
      console.error("Logo generation failed, skipping visual asset.", e);
    }

    return {
      ...output,
      logoUrl,
    };
  }
);
