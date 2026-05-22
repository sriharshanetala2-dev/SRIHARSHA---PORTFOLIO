"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, BrainCircuit } from "lucide-react";

const education = [
  {
    role: "B.Sc in Computer Science",
    company: "Glocal University",
    description: "Foundational Computer Science degree focused on software engineering principles and computational logic.",
    icon: GraduationCap
  },
  {
    role: "Intermediate Education",
    company: "SRR & CVR Govt Jr College",
    description: "Pre-university education focusing on science and mathematics.",
    icon: BookOpen
  },
  {
    role: "Secondary School Certificate",
    company: "Christ the King High School",
    description: "Foundational academic training and logic development.",
    icon: BrainCircuit
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6 bg-secondary/20 relative overflow-hidden">
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
            Academic Registry
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-headline font-black tracking-tighter uppercase leading-none">
            TECHNICAL <span className="text-primary">FOUNDATION</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground font-bold opacity-70 uppercase tracking-widest">
            The core academic foundation of my software engineering career.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {education.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 glass-card border-border/50 hover:border-primary/40 transition-all group rounded-2xl overflow-hidden shadow-sm">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors">{item.role}</h3>
                    </div>
                    <p className="text-primary font-black text-[10px] uppercase tracking-[0.3em] opacity-80">{item.company}</p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-bold opacity-80 uppercase tracking-tight">
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