
'use server';
/**
 * @fileOverview A Genkit flow for generating professional project descriptions for portfolios.
 *
 * - generateProjectDescription - A function that handles the generation of a project description.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  technologyStack: z
    .string()
    .describe(
      'A comma-separated list of technologies used in the project (e.g., "React, Node.js, MongoDB").'
    ),
  projectScope: z
    .string()
    .describe('A brief description of the project\'s purpose and key features.'),
});
export type GenerateProjectDescriptionInput = z.infer<
  typeof GenerateProjectDescriptionInputSchema
>;

const GenerateProjectDescriptionOutputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A professional and concise description of the project.'),
});
export type GenerateProjectDescriptionOutput = z.infer<
  typeof GenerateProjectDescriptionOutputSchema
>;

export async function generateProjectDescription(
  input: GenerateProjectDescriptionInput
): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are a professional technical writer and copywriter specializing in creating concise and impactful project descriptions for technical portfolios.

Based on the following technology stack and project scope, generate a professional, engaging, and concise project description. The description should highlight the project's key features, the technologies used, and its overall value or purpose, making it suitable for a professional portfolio. Use a tone that is technical yet accessible.

Technology Stack: {{{technologyStack}}}
Project Scope: {{{projectScope}}}`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    try {
      const {output} = await prompt(input);
      if (!output) throw new Error("Synthesis failed: Model returned null output.");
      return output;
    } catch (e: any) {
      console.error("[AI Flow Error]", e);
      throw new Error("The Narrative Engine encountered a processing exception. Please verify your inputs.");
    }
  }
);
