'use server';
/**
 * @fileOverview A comprehensive Genkit flow for generating brand identities (stack, description, and logo).
 *
 * - generateBrandIdentity - A function that handles the generation process.
 * - BrandIdentityInput - The input type for the function.
 * - BrandIdentityOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BrandIdentityInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A brief description of the project idea or purpose.'),
});
export type BrandIdentityInput = z.infer<typeof BrandIdentityInputSchema>;

const BrandIdentityOutputSchema = z.object({
  techStack: z.string().describe('Recommended technology stack.'),
  professionalDescription: z.string().describe('A professional and concise description of the project.'),
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
  prompt: `You are a startup brand consultant and technical architect.
  
Based on this project idea: "{{{projectDescription}}}"

Please provide:
1. A recommended modern technology stack (comma-separated list).
2. A professional, high-impact description of the project suitable for a developer portfolio.`,
});

const generateBrandIdentityFlow = ai.defineFlow(
  {
    name: 'generateBrandIdentityFlow',
    inputSchema: BrandIdentityInputSchema,
    outputSchema: BrandIdentityOutputSchema,
  },
  async input => {
    // 1. Generate the textual identity
    const {output} = await prompt(input);
    if (!output) throw new Error("Failed to generate brand identity text.");

    // 2. Generate a logo based on the generated identity
    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `A professional, minimalist, and modern software logo icon. 
      The project is built with: ${output.techStack}. 
      Project concept: ${output.professionalDescription}. 
      Style: Clean vector icon, flat design, minimalist symbol, no text, suitable for a developer portfolio project card.`,
    });

    return {
      ...output,
      logoUrl: media?.url,
    };
  }
);
