
"use client";

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
import { cn } from "@/lib/utils";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 }
    },
  };

  return (
    <section id="skills" className="py-24 sm:py-48 px-4 sm:px-6 relative overflow-hidden bg-background border-t-2 border-border scroll-mt-20">
      {/* Dynamic Background Subsystem */}
      <div className="absolute inset-0 data-packet-layer opacity-[0.03] dark:opacity-[0.08] pointer-events-none" />
      <div className="absolute inset-0 neural-grid opacity-[0.02] dark:opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-40 relative z-10">
        <div className="text-center space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 px-6 py-2.5 rounded-2xl bg-primary/10 text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.5em] border-2 border-primary/20 mx-auto shadow-2xl backdrop-blur-sm"
          >
            <Cpu className="w-5 h-5 animate-pulse" />
            ENGINEERING CAPABILITIES v3.0
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-7xl md:text-8xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text"
          >
            TECHNICAL <span className="text-gradient">REGISTRY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-bold uppercase tracking-[0.2em] px-4 opacity-80"
          >
            Professional mapping of high-performance systems logic, AI orchestration, and industrial architectural integrity.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-6 px-2"
        >
          <TooltipProvider delayDuration={0}>
            {skills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative flex items-center gap-4 sm:gap-8 px-6 py-5 sm:px-10 sm:py-8 rounded-2xl sm:rounded-[2.5rem] bg-secondary/30 dark:bg-secondary/20 border-2 border-border hover:border-primary transition-all cursor-pointer overflow-hidden shadow-2xl backdrop-blur-xl"
                  >
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-background border border-border/50 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                      <skill.icon className="w-5 h-5 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-black tracking-tight text-xs sm:text-2xl uppercase whitespace-nowrap">{skill.name}</span>
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="glass-card p-8 sm:p-10 border-2 border-border rounded-[2rem] sm:rounded-[3rem] w-64 sm:w-80 space-y-8 sm:space-y-10 shadow-4xl backdrop-blur-3xl bg-background/95">
                  <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase text-primary tracking-[0.6em] opacity-60 leading-none">{skill.category}</p>
                    <p className="font-black text-xl sm:text-3xl tracking-tighter uppercase">{skill.name}</p>
                  </div>
                  <div className="space-y-5">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
                      <span>INTEGRITY_LEVEL</span>
                      <span className="text-primary">{skill.level}</span>
                    </div>
                    <div className="h-3 w-full bg-secondary rounded-full overflow-hidden shadow-inner border border-border/50">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '85%' : '65%' }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="h-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]" 
                      />
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 sm:gap-20 pt-16 sm:pt-24 px-6 border-t-2 border-border/50"
        >
          {[
            { label: "Systems Core", color: "bg-blue-500" },
            { label: "Neural Orchestration", color: "bg-primary" },
            { label: "Data Registry", color: "bg-cyan-500" },
            { label: "Architectural", color: "bg-indigo-500" }
          ].map(type => (
            <div key={type.label} className="flex items-center gap-3">
              <div className={cn("w-3 h-3 rounded-full animate-pulse shadow-lg", type.color)} />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-foreground/60">{type.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
