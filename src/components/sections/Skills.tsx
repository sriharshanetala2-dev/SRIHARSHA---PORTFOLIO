'use client';

import { motion } from "framer-motion";
import { Code2, Database, Layout, Cpu, Workflow, Terminal, ShieldCheck, Activity } from "lucide-react";

const skills = [
  { name: "Java 21", category: "Backend", icon: Code2 },
  { name: "Spring Boot", category: "Framework", icon: Database },
  { name: "PostgreSQL", category: "Database", icon: Database },
  { name: "Next.js 15", category: "Frontend", icon: Layout },
  { name: "TypeScript", category: "Language", icon: Code2 },
  { name: "Genkit", category: "AI_Core", icon: Cpu },
  { name: "Claude 3.5", category: "LLM_Node", icon: Cpu },
  { name: "n8n", category: "Automation", icon: Workflow },
  { name: "Python", category: "Data_Node", icon: Terminal },
  { name: "Firebase", category: "Cloud_Sync", icon: ShieldCheck }
];

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 20 } }
  };

  return (
    <section id="skills" className="py-32 sm:py-48 px-8 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        <div className="text-center space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            TECHNICAL_MATRIX_v5.0
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-8xl font-headline font-black tracking-tighter uppercase leading-none"
          >
            Skill <span className="text-gradient">Registry</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-3xl text-muted-foreground font-black max-w-4xl mx-auto opacity-80 uppercase tracking-widest leading-relaxed"
          >
            A high-density technical audit of my core competencies and systems proficiency.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-10"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex items-center gap-8 px-14 py-10 rounded-[2.5rem] bg-card border border-border/80 shadow-3xl hover:border-primary hover:shadow-primary/20 transition-all group cursor-default backdrop-blur-3xl scale-100 hover:scale-110"
            >
              <div className="p-5 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-xl">
                <skill.icon className="w-10 h-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl sm:text-3xl uppercase tracking-[0.1em] leading-none">{skill.name}</span>
                <span className="text-[14px] font-mono font-black text-primary/60 uppercase tracking-[0.4em] mt-3 group-hover:text-primary">{skill.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
