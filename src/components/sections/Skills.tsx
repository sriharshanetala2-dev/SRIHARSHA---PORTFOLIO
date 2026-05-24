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
    <section id="skills" className="py-20 sm:py-32 px-6 relative overflow-hidden bg-transparent border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="section-label mx-auto"
          >
            <Cpu className="w-3.5 h-3.5 animate-pulse" />
            ENGINEERING CAPABILITIES v4.0
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-black leading-tight shimmer-text">
            TECHNICAL REGISTRY
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto font-bold uppercase tracking-tight opacity-90 px-6">
            A high-precision mapping of industrial systems logic, AI orchestration, and architectural integrity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <TooltipProvider delayDuration={0}>
            {skills.map((skill, idx) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group flex items-center gap-4 px-6 py-4 rounded-xl bg-secondary/10 border border-border/40 hover:border-primary/40 transition-all cursor-pointer shadow-lg backdrop-blur-md"
                  >
                    <div className="p-2.5 rounded-lg bg-background border border-border/50 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <span className="font-black tracking-widest text-[10px] uppercase whitespace-nowrap leading-none">{skill.name}</span>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="glass-card p-6 border border-border/50 rounded-2xl space-y-4 shadow-xl backdrop-blur-2xl bg-background/95">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase text-primary tracking-widest opacity-70 mb-2">{skill.category}</p>
                    <p className="font-black text-xl tracking-tight uppercase leading-none">{skill.name}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[8px] font-black uppercase tracking-widest opacity-50">
                      <span>Logically Verified</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden border border-border/20">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === 'Expert' ? '100%' : '85%' }}
                        transition={{ duration: 1 }}
                        className="h-full bg-primary rounded-full" 
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