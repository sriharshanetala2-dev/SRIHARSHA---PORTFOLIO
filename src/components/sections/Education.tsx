"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, BrainCircuit } from "lucide-react";

const education = [
  {
    role: "B.Sc in Computer Science",
    company: "Glocal University",
    period: "2021 — 2024",
    description: "Intensive focus on computational theory, algorithms, and advanced software engineering principles. Built a strong foundation in systems design and database logic.",
    icon: GraduationCap
  },
  {
    role: "Intermediate Education",
    company: "SRR & CVR Govt Jr College",
    period: "2019 — 2021",
    description: "Core academic foundation focusing on analytical reasoning, logical problem solving, and mathematical modeling.",
    icon: BookOpen
  },
  {
    role: "Secondary School Certificate",
    company: "Christ the King High School",
    period: "Completed",
    description: "Foundational academic training with early exposure to logic, technical sciences, and creative problem solving.",
    icon: BrainCircuit
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-5 pointer-events-none" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black text-primary uppercase tracking-[0.3em] border border-primary/20"
          >
            <BookOpen className="w-4 h-4" />
            Academic Subsystem
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-headline font-black tracking-tighter uppercase leading-none">
            TECHNICAL <span className="text-primary">FOUNDATION</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground font-medium opacity-70 uppercase tracking-widest">
            The intellectual core mapping of my engineering career.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {education.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 glass-card hover:border-primary/40 transition-all group rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors">{item.role}</h3>
                      <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest bg-secondary/50 px-3 py-1 rounded-full">{item.period}</span>
                    </div>
                    <p className="text-primary font-black text-xs uppercase tracking-widest opacity-80">{item.company}</p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium opacity-80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
