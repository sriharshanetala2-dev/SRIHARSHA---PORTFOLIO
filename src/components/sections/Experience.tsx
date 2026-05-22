
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Zap, BrainCircuit, Code2 } from "lucide-react";

const experience = [
  {
    role: "Java Full Stack Specialization",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Intensive program focused on building robust full-stack applications. Mastery of Java, Spring Boot, JDBC, and SQL, coupled with modern frontend architectures for high-performance user experiences.",
    icon: Code2
  },
  {
    role: "Generative AI Mastery",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Specialized training in AI orchestration and LLM integration. Successfully completed 'AI for All' certification and a top contributor in AI Buildathons, focusing on building AI-driven solutions.",
    icon: BrainCircuit
  },
  {
    role: "Independent Software Development",
    company: "Self-Directed Mastery",
    period: "2024 — 2025",
    description: "Dedicated phase post-graduation focused on applying core Computer Science principles. Built a series of technical projects to master back-end logic and real-time interactive UIs.",
    icon: Zap
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-44 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 animate-pulse" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-black text-primary uppercase tracking-[0.4em]"
          >
            <Briefcase className="w-4 h-4" />
            Engineering Timeline
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl font-headline font-black tracking-tighter uppercase"
          >
            SYSTEMIC <span className="text-gradient">GROWTH</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-xl text-muted-foreground font-medium max-w-2xl mx-auto opacity-70"
          >
            A specialized architectural mapping of technical development and high-level certification milestones.
          </motion.p>
        </div>

        <div className="space-y-12 relative">
          <div className="absolute left-10 md:left-14 top-0 bottom-0 w-px bg-primary/20 hidden sm:block" />

          {experience.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <Card 
                className="p-10 md:p-14 bg-card/20 border-white/5 hover:border-primary/40 transition-all shadow-3xl group relative overflow-hidden rounded-[3rem] backdrop-blur-xl"
              >
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                  <item.icon className="w-48 h-48" />
                </div>
                <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-14 relative z-10">
                  <div className="p-8 rounded-[2rem] bg-secondary group-hover:bg-primary text-primary group-hover:text-primary-foreground transition-all duration-500 w-fit shadow-2xl">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.4em]">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-3xl md:text-4xl font-headline font-black tracking-tight group-hover:text-primary transition-colors uppercase">{item.role}</h3>
                      <p className="text-foreground/60 font-black text-lg tracking-widest uppercase">{item.company}</p>
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium opacity-80 max-w-3xl">
                      {item.description}
                    </p>
                    
                    <div className="flex gap-4 pt-6">
                      <div className="h-1.5 w-32 bg-primary/10 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "100%" }}
                           transition={{ duration: 1.5, ease: "easeInOut" }}
                           className="h-full bg-primary" 
                         />
                      </div>
                    </div>
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
