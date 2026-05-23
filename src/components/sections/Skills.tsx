"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Cpu, Layout, Terminal, ShieldCheck, Workflow, BrainCircuit, Zap } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Claude 3.5", level: "Expert", category: "Neural Orchestration", icon: BrainCircuit },
  { name: "Gemini 2.0", level: "Expert", category: "Neural Orchestration", icon: BrainCircuit },
  { name: "GPT-4o", level: "Advanced", category: "Neural Orchestration", icon: BrainCircuit },
  { name: "n8n Automation", level: "Advanced", category: "Logic Workflows", icon: Workflow },
  { name: "Java 21", level: "Expert", category: "Systems Core", icon: Code2 },
  { name: "Python", level: "Advanced", category: "Logic Systems", icon: Terminal },
  { name: "Next.js 15", level: "Expert", category: "Frontend Core", icon: Layout },
  { name: "SQL / Postgres", level: "Expert", category: "Data Registry", icon: Database },
  { name: "Spring Boot", level: "Advanced", category: "Systems Core", icon: Database },
  { name: "Flutter / Dart", level: "Advanced", category: "Mobile Interface", icon: Globe },
  { name: "Firebase", level: "Advanced", category: "Serverless Node", icon: Zap },
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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  return (
    <section id="skills" className="py-24 sm:py-48 px-6 relative overflow-hidden bg-background border-t-2 border-border scroll-mt-20">
      <div className="absolute inset-0 data-packet-layer opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-40">
        <div className="text-center space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 px-8 py-3 rounded-2xl bg-primary/10 text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.6em] border-2 border-primary/20 mx-auto shadow-2xl"
          >
            <Cpu className="w-5 h-5 animate-pulse" />
            ENGINEERING CAPABILITIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-7xl md:text-8xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text"
          >
            TECHNICAL <span className="text-primary">REGISTRY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-bold uppercase tracking-[0.25em] px-4 opacity-80"
          >
            Professional mapping of systems core, AI agents, and high-performance industrial orchestration.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4"
        >
          <TooltipProvider delayDuration={0}>
            {skills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    className="group relative flex items-center gap-6 px-10 py-8 rounded-[2.5rem] bg-secondary/30 dark:bg-secondary/20 border-2 border-border hover:border-primary transition-all cursor-pointer overflow-hidden shadow-2xl backdrop-blur-xl"
                  >
                    <div className="p-4 rounded-2xl bg-background border border-border/50 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                      <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-black tracking-tight text-base sm:text-2xl uppercase whitespace-nowrap">{skill.name}</span>
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="glass-card p-10 border-2 border-border rounded-[3rem] w-80 space-y-10 shadow-4xl backdrop-blur-3xl bg-background/95">
                  <div className="space-y-4">
                    <p className="text-[10px] sm:text-[11px] font-black uppercase text-primary tracking-[0.6em] opacity-60 leading-none">{skill.category}</p>
                    <p className="font-black text-3xl tracking-tighter uppercase">{skill.name}</p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground">
                      <span>INTEGRITY_LEVEL</span>
                      <span className="text-primary">{skill.level}</span>
                    </div>
                    <div className="h-4 w-full bg-secondary rounded-full overflow-hidden shadow-inner border border-border/50">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '85%' : '65%' }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="h-full bg-primary shadow-[0_0_20px_rgba(var(--primary),0.6)]" 
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
          className="flex flex-wrap justify-center gap-10 sm:gap-24 pt-20 px-6 border-t-2 border-border/50"
        >
          {[
            { label: "Neural Orchestration", color: "bg-primary" },
            { label: "Systems Core", color: "bg-blue-500" },
            { label: "Data Integrity", color: "bg-cyan-500" },
            { label: "Logic Workflows", color: "bg-indigo-500" }
          ].map(type => (
            <div key={type.label} className="flex items-center gap-4">
              <div className={cn("w-4 h-4 rounded-full animate-pulse shadow-lg", type.color)} />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.5em] whitespace-nowrap text-foreground/60">{type.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}