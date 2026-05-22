import { config } from 'dotenv';
config();

// Standard flow registrations for portfolio AI features
import '@/ai/flows/generate-project-description-flow';
import '@/ai/flows/generate-brand-identity-flow';

console.log('[DEBUG] Neural core initialized and flows registered.');
