"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Cpu, Layout, Terminal, ShieldCheck, Workflow, BrainCircuit, Zap } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Claude 3.5", level: "Expert", category: "Neural Integration", icon: BrainCircuit },
  { name: "Gemini 2.0", level: "Expert", category: "Neural Integration", icon: BrainCircuit },
  { name: "GPT-4o", level: "Advanced", category: "Neural Integration", icon: BrainCircuit },
  { name: "n8n Automation", level: "Advanced", category: "Logic Workflows", icon: Workflow },
  { name: "Next.js 15", level: "Expert", category: "Frontend Core", icon: Layout },
  { name: "Spring Boot", level: "Advanced", category: "Systems Core", icon: Database },
  { name: "Java 21", level: "Advanced", category: "Language Logic", icon: Code2 },
  { name: "SQL / Postgres", level: "Advanced", category: "Data Registry", icon: Database },
  { name: "Flutter / Dart", level: "Intermediate", category: "Mobile Interface", icon: Globe },
  { name: "Firebase", level: "Advanced", category: "Serverless Node", icon: Zap },
  { name: "TypeScript", level: "Advanced", category: "Type Integrity", icon: Terminal },
  { name: "Systems Design", level: "Advanced", category: "Architectural", icon: ShieldCheck },
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
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
  };

  return (
    <section id="skills" className="py-24 sm:py-40 px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0 data-flow-grid opacity-[0.05] pointer-events-none" />
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-primary/10 text-[11px] font-black text-primary uppercase tracking-[0.5em] border-2 border-primary/20 mx-auto shadow-lg"
          >
            <Cpu className="w-5 h-5" />
            ENGINEERING CAPABILITIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-7xl font-headline font-black tracking-tighter uppercase leading-none"
          >
            TECHNICAL <span className="text-primary">REGISTRY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed font-bold opacity-70 uppercase tracking-[0.2em] px-4"
          >
            Professional mapping of Full Stack tools, automated n8n workflows, and high-performance neural orchestration.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 px-2 sm:px-0"
        >
          <TooltipProvider delayDuration={0}>
            {skills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <motion.div 
                    variants={itemVariants}
                    className="group relative flex items-center gap-4 px-6 py-4 rounded-2xl bg-secondary/30 border-2 border-border hover:border-primary transition-all cursor-pointer overflow-hidden shadow-xl"
                  >
                    <skill.icon className="w-5 h-5 text-primary group-hover:scale-125 transition-transform" />
                    <span className="font-black tracking-tight text-xs sm:text-base uppercase whitespace-nowrap">{skill.name}</span>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="glass-card p-6 border-2 border-border rounded-3xl w-72 space-y-4 shadow-4xl backdrop-blur-2xl bg-background/95">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-primary tracking-[0.5em] opacity-60">{skill.category}</p>
                    <p className="font-black text-lg tracking-tight uppercase">{skill.name}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-50">
                      <span>INTEGRITY_LEVEL</span>
                      <span className="text-primary">{skill.level}</span>
                    </div>
                    <div className="h-2.5 w-full bg-primary/10 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '85%' : '65%' }}
                        transition={{ duration: 1, ease: "circOut" }}
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
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 pt-12 px-4 border-t-2 border-border/40"
        >
          {[
            { label: "Neural Integration", color: "bg-primary" },
            { label: "Systems Core", color: "bg-blue-500" },
            { label: "Frontend Core", color: "bg-cyan-500" },
            { label: "Logic Workflows", color: "bg-indigo-500" }
          ].map(type => (
            <div key={type.label} className="flex items-center gap-3">
              <div className={cn("w-3 h-3 rounded-full animate-pulse", type.color)} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">{type.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
