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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,hsl(var(--primary)/0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 sm:mb-24 space-y-4 sm:space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-black text-primary uppercase tracking-widest"
          >
            <Briefcase className="w-4 h-4" />
            Developer Timeline
          </motion.div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-headline font-black tracking-tighter uppercase leading-none">
            GROWTH <span className="text-gradient">MATRIX</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-black max-w-2xl mx-auto opacity-60 uppercase tracking-widest leading-relaxed px-4">
            A technical mapping of development milestones and high-level project integration.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8 relative"
        >
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-border hidden sm:block" />

          {experience.map((exp, idx) => (
            <motion.div key={idx} variants={item}>
              <Card 
                className="p-8 sm:p-12 glass-card bg-card/30 border-border/50 hover:border-primary/40 transition-all rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-lg group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 sm:gap-8 md:gap-12 relative z-10">
                  <div className="p-5 rounded-2xl bg-secondary group-hover:bg-primary text-primary group-hover:text-primary-foreground transition-all duration-500 w-fit border border-border/50">
                    <exp.icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-3 sm:space-y-4 flex-1 min-w-0">
                    <div className="flex items-center gap-3 text-xs font-black text-primary uppercase tracking-widest">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-headline font-black tracking-tight uppercase group-hover:text-primary transition-colors leading-tight">{exp.role}</h3>
                      <p className="text-foreground/50 font-black text-xs sm:text-sm uppercase tracking-widest">{exp.company}</p>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-bold opacity-80 max-w-3xl uppercase tracking-tight">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}