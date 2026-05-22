
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, BrainCircuit } from "lucide-react";

const education = [
  {
    role: "B.Sc in Computer Science",
    company: "Glocal University",
    period: "2021 — 2024",
    description: "Specialized in core computational theory, algorithms, and software development. Focused on relational database management and modern full-stack ecosystems.",
    icon: GraduationCap
  },
  {
    role: "Intermediate Education",
    company: "SRR & CVR Govt Jr College",
    period: "Physics, Chemistry, Math",
    description: "Focused on academic excellence with a strong emphasis on logical reasoning and mathematical foundations.",
    icon: BookOpen
  },
  {
    role: "Secondary School Certificate (SSC)",
    company: "Christ the King High School",
    period: "High Distinction",
    description: "Completed secondary education with high academic standing, fostering an early passion for technology and logic.",
    icon: BrainCircuit
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 md:py-44 px-6 bg-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-5 pointer-events-none" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 text-[11px] font-black text-accent uppercase tracking-[0.4em] border border-accent/20"
          >
            <BookOpen className="w-4 h-4" />
            Academic Node
          </motion.div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-headline font-black tracking-tighter uppercase">EDUCATION <span className="text-accent">PATH</span></h2>
          <p className="text-base sm:text-xl text-muted-foreground font-medium opacity-70">The computational foundation of my engineering career.</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {education.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-10 glass-card border-white/5 hover:border-accent/40 hover:bg-accent/5 transition-all group rounded-[3rem] shadow-3xl">
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="p-6 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 shadow-xl">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl sm:text-4xl font-headline font-black tracking-tight group-hover:text-accent transition-colors uppercase">{item.role}</h3>
                      <span className="hidden sm:block text-[10px] font-black text-muted-foreground uppercase tracking-widest">{item.period}</span>
                    </div>
                    <p className="text-accent font-black text-lg tracking-widest uppercase opacity-80">{item.company}</p>
                    <p className="text-base sm:text-xl text-muted-foreground leading-relaxed font-medium opacity-80">
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
