'use client';

import { motion } from "framer-motion";
import { Code2, Database, Layout, Cpu, Workflow, Terminal, ShieldCheck } from "lucide-react";

const skills = [
  { name: "Java 21", category: "Core", icon: Code2 },
  { name: "Spring Boot", category: "Core", icon: Database },
  { name: "PostgreSQL", category: "Database", icon: Database },
  { name: "Next.js 15", category: "Frontend", icon: Layout },
  { name: "TypeScript", category: "Frontend", icon: Code2 },
  { name: "Genkit", category: "AI", icon: Cpu },
  { name: "Claude 3.5", category: "AI", icon: Cpu },
  { name: "n8n", category: "Automation", icon: Workflow },
  { name: "Python", category: "Backend", icon: Terminal },
  { name: "Firebase", category: "Backend", icon: ShieldCheck }
];

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            TECHNICAL_REGISTRY_V4
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-7xl font-headline font-black tracking-tighter uppercase leading-none"
          >
            Skill <span className="text-gradient">Matrix</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg sm:text-2xl text-muted-foreground font-black max-w-3xl mx-auto opacity-70 uppercase tracking-widest leading-relaxed"
          >
            A high-density technical audit of my core competencies and systems proficiency.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex items-center gap-6 px-10 py-8 rounded-3xl bg-card border border-border shadow-2xl hover:border-primary hover:shadow-primary/10 transition-all group cursor-default backdrop-blur-xl scale-100 hover:scale-105"
            >
              <skill.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
              <div className="flex flex-col">
                <span className="font-black text-base sm:text-xl uppercase tracking-[0.2em] leading-none">{skill.name}</span>
                <span className="text-[12px] font-mono font-black text-primary/40 uppercase tracking-[0.3em] mt-2 group-hover:text-primary/60">{skill.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}