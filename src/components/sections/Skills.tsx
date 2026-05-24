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
  return (
    <section id="skills" className="py-24 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="section-label mx-auto">TECHNICAL REGISTRY</div>
          <h2 className="text-4xl sm:text-6xl font-headline font-black tracking-tighter uppercase leading-none">Skill Matrix</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-card border border-border shadow-xl hover:border-primary transition-all group cursor-default backdrop-blur-xl"
            >
              <skill.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-black text-xs sm:text-sm uppercase tracking-[0.2em]">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}