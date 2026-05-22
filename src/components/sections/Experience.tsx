
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Code2, BrainCircuit, Layers } from "lucide-react";

const experience = [
  {
    role: "Java Full Stack Developer",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Intensive development program focused on building robust full-stack systems. Mastery of Java, Spring Boot, JDBC, and SQL, coupled with modern high-performance frontend orchestration.",
    icon: Code2
  },
  {
    role: "Generative AI Developer",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Specialized training in neural integration and LLM application development. Successfully completed 'AI for All' certification and a top contributor in AI Buildathons.",
    icon: BrainCircuit
  },
  {
    role: "Full Stack Software Developer",
    company: "Independent Projects",
    period: "2024 — 2025",
    description: "Dedicated phase post-graduation focused on applying core Computer Science principles to real-time interactive UIs and backend logic cores.",
    icon: Layers
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-44 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,hsl(var(--primary)/0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-black text-primary uppercase tracking-widest"
          >
            <Briefcase className="w-4 h-4" />
            Developer Timeline
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-headline font-black tracking-tighter uppercase"
          >
            GROWTH <span className="text-gradient">MATRIX</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-lg text-muted-foreground font-black max-w-2xl mx-auto opacity-60 uppercase tracking-widest leading-relaxed"
          >
            A technical mapping of development milestones and high-level project integration.
          </motion.p>
        </div>

        <div className="space-y-8 relative">
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[1px] bg-border hidden sm:block" />

          {experience.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <Card 
                className="p-8 md:p-12 glass-card bg-card/30 border-border/50 hover:border-primary/40 transition-all rounded-[2.5rem] overflow-hidden shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-14 relative z-10">
                  <div className="p-8 rounded-2xl bg-secondary group-hover:bg-primary text-primary group-hover:text-primary-foreground transition-all duration-500 w-fit shadow-md border border-border/50">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <div className="space-y-8 flex-1">
                    <div className="flex items-center gap-4 text-xs font-black text-primary uppercase tracking-widest">
                      <Calendar className="w-5 h-5" />
                      {item.period}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-4xl font-headline font-black tracking-tight uppercase">{item.role}</h3>
                      <p className="text-foreground/50 font-black text-base sm:text-xl tracking-widest uppercase">{item.company}</p>
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-bold opacity-80 max-w-3xl uppercase tracking-tight">
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
