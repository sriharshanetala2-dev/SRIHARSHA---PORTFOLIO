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
    <section id="skills" className="py-24 sm:py-40 px-6 relative overflow-hidden bg-transparent border-t-2 border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32 relative z-10">
        <div className="text-center space-y-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="section-label mx-auto"
          >
            <Cpu className="w-4 h-4 animate-pulse" />
            ENGINEERING CAPABILITIES v4.0
          </motion.div>
          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text">
            TECHNICAL <span className="text-gradient">REGISTRY</span>
          </h2>
          <p className="text-base sm:text-2xl text-muted-foreground max-w-4xl mx-auto font-bold uppercase tracking-[0.3em] opacity-90 leading-relaxed px-6">
            A high-precision mapping of industrial systems logic, AI orchestration, and architectural integrity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <TooltipProvider delayDuration={0}>
            {skills.map((skill, idx) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="group flex items-center gap-6 px-8 py-5 rounded-[2rem] bg-secondary/30 border border-border hover:border-primary transition-all duration-500 cursor-pointer shadow-2xl backdrop-blur-3xl"
                  >
                    <div className="p-3.5 rounded-xl bg-background border border-border/50 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-xl">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <span className="font-black tracking-widest text-[12px] uppercase whitespace-nowrap leading-none">{skill.name}</span>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="glass-card p-10 border-2 border-border rounded-[2.5rem] space-y-6 shadow-[0_0_60px_rgba(var(--primary),0.2)] backdrop-blur-4xl bg-background/98">
                  <div className="space-y-2">
                    <p className="text-[12px] font-black uppercase text-primary tracking-[0.5em] opacity-80 leading-none mb-3">{skill.category}</p>
                    <p className="font-black text-2xl sm:text-3xl tracking-tighter uppercase leading-none">{skill.name}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-60">
                      <span>Logically Verified</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="h-2.5 w-full bg-secondary rounded-full overflow-hidden border border-border/50 p-[1px]">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === 'Expert' ? '100%' : '85%' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]" 
                      />
                    </div>
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