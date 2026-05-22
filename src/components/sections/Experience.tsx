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
    <section id="experience" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10 animate-pulse" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 md:mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black text-accent uppercase tracking-[0.4em]"
          >
            <Briefcase className="w-4 h-4" />
            Growth Timeline
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-headline font-black tracking-tighter"
          >
            TECHNICAL <span className="text-gradient">MASTERY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto"
          >
            A specialized mapping of my technical development and industry-aligned certifications.
          </motion.p>
        </div>

        <div className="space-y-10 md:space-y-12 relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-10 md:left-14 top-0 bottom-0 w-px bg-border/20 hidden sm:block" />

          {experience.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <Card 
                className="p-8 md:p-12 bg-card/40 border-border/40 hover:border-accent/40 transition-all shadow-2xl group relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] backdrop-blur-xl"
              >
                 <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                  <item.icon className="w-32 h-32 md:w-48 md:h-48" />
                </div>
                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 relative z-10">
                  <div className="p-6 rounded-[2rem] bg-secondary group-hover:bg-accent text-accent group-hover:text-accent-foreground transition-all duration-500 w-fit shadow-2xl">
                    <item.icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <div className="space-y-4 md:space-y-6 flex-1">
                    <div className="flex items-center gap-3 text-[10px] font-black text-accent uppercase tracking-[0.3em]">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-black tracking-tight group-hover:text-accent transition-colors">{item.role}</h3>
                      <p className="text-primary font-bold text-lg md:text-xl tracking-tight uppercase opacity-80">{item.company}</p>
                    </div>
                    <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-medium opacity-90 max-w-3xl">
                      {item.description}
                    </p>
                    
                    <div className="flex gap-3 pt-4">
                      <motion.div 
                        initial={{ width: "4rem" }}
                        whileInView={{ width: "8rem" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-1.5 bg-accent/20 rounded-full group-hover:bg-accent" 
                      />
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
