"use client";

import { motion } from "framer-motion";
import { Zap, Code2, Database, Globe, Cpu, Layout, Terminal, ShieldCheck, Box } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const skills = [
  { name: "React / Next.js", level: "Advanced", category: "Frontend", icon: Layout },
  { name: "Spring Boot", level: "Intermediate", category: "Backend", icon: Database },
  { name: "Java / JDBC", level: "Advanced", category: "Language", icon: Code2 },
  { name: "Python / Pandas", level: "Intermediate", category: "Language", icon: Terminal },
  { name: "JavaScript (ES6+)", level: "Advanced", category: "Language", icon: Code2 },
  { name: "SQL / PostgreSQL", level: "Advanced", category: "Database", icon: Database },
  { name: "HTML5 / CSS3", level: "Expert", category: "Frontend", icon: Layout },
  { name: "Tailwind CSS", level: "Advanced", category: "Frontend", icon: Layout },
  { name: "AWS Cloud", level: "Intermediate", category: "Cloud", icon: Globe },
  { name: "Git / GitHub", level: "Advanced", category: "Tools", icon: Terminal },
  { name: "Networking", level: "Intermediate", category: "Fundamentals", icon: Globe },
  { name: "IP Subnetting", level: "Advanced", category: "Fundamentals", icon: Cpu },
  { name: "Data Structures", level: "Advanced", category: "Fundamentals", icon: Code2 },
  { name: "Architecture", level: "Intermediate", category: "Fundamentals", icon: ShieldCheck },
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
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0 data-flow-grid opacity-[0.03] pointer-events-none" />
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 text-xs font-black text-primary uppercase tracking-widest border border-primary/20"
          >
            <Cpu className="w-4 h-4" />
            Engineering Stack
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-headline font-black tracking-tighter uppercase leading-none"
          >
            TECHNICAL <span className="text-gradient">CAPABILITIES</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed font-bold opacity-60 uppercase tracking-widest"
          >
            A high-density mapping of my software development toolkit and core systems engineering foundation.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <TooltipProvider delayDuration={0}>
            {skills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <motion.div 
                    variants={itemVariants}
                    className="group relative flex items-center gap-4 px-6 py-4 rounded-2xl bg-secondary/20 border border-border hover:border-primary/50 transition-all cursor-pointer overflow-hidden shadow-sm"
                  >
                    <skill.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-black tracking-tight text-sm sm:text-lg uppercase whitespace-nowrap">{skill.name}</span>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="glass-card p-6 border-border rounded-2xl w-64 space-y-4 shadow-xl backdrop-blur-xl bg-background/95">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-primary tracking-widest opacity-60">{skill.category}</p>
                    <p className="font-black text-lg tracking-tighter uppercase">{skill.name}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-50">
                      <span>Expertise</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '85%' : '65%' }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-primary" 
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
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 pt-8"
        >
          {[
            { label: "Frontend", color: "bg-blue-500" },
            { label: "Backend", color: "bg-indigo-500" },
            { label: "Languages", color: "bg-primary" },
            { label: "Systems", color: "bg-accent" }
          ].map(type => (
            <div key={type.label} className="flex items-center gap-2">
              <div className={cn("w-2 h-2 rounded-full", type.color)} />
              <span className="text-[10px] font-black uppercase tracking-widest">{type.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
