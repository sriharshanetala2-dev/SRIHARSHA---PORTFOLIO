'use client';

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Layout, 
  Terminal, 
  ShieldCheck, 
  Workflow, 
  BrainCircuit, 
  Zap, 
  Layers, 
  Fingerprint,
  Activity,
  Server
} from "lucide-react";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const skills = [
  { name: "Java 21", level: "Expert", category: "Systems Core", icon: Code2 },
  { name: "Spring Boot", level: "Expert", category: "Systems Core", icon: Server },
  { name: "SQL / Postgres", level: "Expert", category: "Data Registry", icon: Database },
  { name: "Claude 3.5", level: "Expert", category: "Neural Orchestration", icon: BrainCircuit },
  { name: "Gemini 2.0", level: "Expert", category: "Neural Orchestration", icon: BrainCircuit },
  { name: "Google Genkit", level: "Expert", category: "Neural Orchestration", icon: Cpu },
  { name: "Next.js 15", level: "Expert", category: "Frontend Core", icon: Layout },
  { name: "TypeScript", level: "Expert", category: "Frontend Core", icon: Fingerprint },
  { name: "n8n Automation", level: "Advanced", category: "Logic Workflows", icon: Workflow },
  { name: "Python", level: "Advanced", category: "Logic Systems", icon: Terminal },
  { name: "Flutter / Dart", level: "Advanced", category: "Interface Nodes", icon: Globe },
  { name: "Firebase", level: "Advanced", category: "Data Registry", icon: Zap },
  { name: "Hibernate", level: "Advanced", category: "Data Registry", icon: Layers },
  { name: "Systems Design", level: "Advanced", category: "Architectural", icon: ShieldCheck },
  { name: "ACID Integrity", level: "Expert", category: "Architectural", icon: Activity },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-48 px-4 sm:px-6 relative overflow-hidden bg-background border-t-2 border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        <div className="text-center space-y-8">
          <motion.div className="inline-flex items-center gap-4 px-6 py-2 rounded-xl bg-primary/10 text-[11px] font-black text-primary uppercase tracking-[0.5em] border-2 border-primary/20 mx-auto shadow-2xl">
            <Cpu className="w-4 h-4 animate-pulse" />
            ENGINEERING CAPABILITIES v3.0
          </motion.div>
          <h2 className="text-4xl sm:text-7xl lg:text-9xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text">
            TECHNICAL <span className="text-gradient">REGISTRY</span>
          </h2>
          <p className="text-sm sm:text-xl text-muted-foreground max-w-3xl mx-auto font-bold uppercase tracking-[0.2em] opacity-70">
            A high-precision mapping of industrial systems logic, AI orchestration, and architectural integrity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <TooltipProvider delayDuration={0}>
            {skills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-secondary/30 border border-border hover:border-primary transition-all cursor-pointer shadow-xl backdrop-blur-xl"
                  >
                    <div className="p-2.5 rounded-lg bg-background border border-border/50 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <span className="font-black tracking-widest text-xs uppercase whitespace-nowrap">{skill.name}</span>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="glass-card p-6 border-2 border-border rounded-2xl space-y-4 shadow-4xl backdrop-blur-3xl bg-background/95">
                  <p className="text-[9px] font-black uppercase text-primary tracking-[0.5em] opacity-60 leading-none">{skill.category}</p>
                  <p className="font-black text-xl tracking-tighter uppercase">{skill.name}</p>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden border border-border/50">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level === 'Expert' ? '100%' : '85%' }}
                      className="h-full bg-primary" 
                    />
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}