"use client";

import { motion } from "framer-motion";
import { Zap, Code2, Database, Globe, Cpu, Layout, Terminal } from "lucide-react";
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
  { name: "Architecture", level: "Intermediate", category: "Fundamentals", icon: Cpu },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 px-6 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-[10px] font-black tracking-widest text-primary uppercase"
          >
            <Zap className="w-3 h-3" />
            Core Competencies
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-headline font-black tracking-tighter"
          >
            Technical <span className="text-gradient">Ecosystem</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium"
          >
            A comprehensive view of my technical toolkit, from core software engineering principles to modern Full Stack technologies.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <TooltipProvider delayDuration={0}>
            {skills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <motion.div 
                    variants={itemVariants}
                    className="glass-card px-6 sm:px-8 py-4 sm:py-5 rounded-2xl sm:rounded-3xl hover:border-primary/50 transition-all cursor-default group"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                      <span className="font-bold tracking-tight text-base sm:text-lg whitespace-nowrap">{skill.name}</span>
                    </div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="glass-card p-6 border-white/10 rounded-2xl w-64 space-y-4 shadow-3xl backdrop-blur-2xl">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-primary tracking-widest">{skill.category}</p>
                    <p className="font-bold text-lg">{skill.name}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase opacity-60">
                      <span>Proficiency</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '85%' : '65%' }}
                        transition={{ duration: 1, ease: "easeOut" }}
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
          whileInView={{ opacity: 0.4 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 pt-6 md:pt-10"
        >
          {[
            { label: "Frontend", color: "bg-blue-500" },
            { label: "Backend", color: "bg-indigo-500" },
            { label: "Languages", color: "bg-primary" },
            { label: "Systems", color: "bg-accent" }
          ].map(type => (
            <div key={type.label} className="flex items-center gap-2">
              <div className={cn("w-2 h-2 rounded-full", type.color)} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{type.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
