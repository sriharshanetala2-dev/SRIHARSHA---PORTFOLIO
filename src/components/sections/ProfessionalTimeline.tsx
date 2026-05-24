"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  BrainCircuit, 
  Layers, 
  GraduationCap, 
  BookOpen,
  CalendarDays,
  CircleDot
} from "lucide-react";

const timelineItems = [
  {
    id: "01",
    type: "work",
    role: "Java Full Stack Developer",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Architecting high-performance enterprise systems with Java 21, Spring Boot, and PostgreSQL. Mastering the orchestration of complex full-stack ecosystems.",
    icon: Code2
  },
  {
    id: "02",
    type: "work",
    role: "Generative AI Specialist",
    company: "AI Buildathons & Academy",
    period: "2025 — 2026",
    description: "Developing autonomous task agents and semantic intent layers using Google Genkit, Claude 3.5, and Gemini 2.0.",
    icon: BrainCircuit
  },
  {
    id: "03",
    type: "work",
    role: "Full Stack Software Developer",
    company: "Independent Projects",
    period: "2024 — 2025",
    description: "Building responsive digital platforms with React, Node.js, and Python focusing on atomic data mutations and real-time logic.",
    icon: Layers
  },
  {
    id: "04",
    type: "edu",
    role: "B.Sc in Computer Science",
    institution: "Glocal University",
    period: "Academic Registry",
    description: "Graduated with honors focusing on computational logic, data structures, and systems engineering principles.",
    icon: GraduationCap
  },
  {
    id: "05",
    type: "edu",
    role: "Intermediate Education",
    institution: "SRR & CVR Govt Jr College",
    period: "Higher Secondary Registry",
    description: "Advanced computational mathematics and logic foundation processing.",
    icon: BookOpen
  },
  {
    id: "06",
    type: "edu",
    role: "Secondary School Certificate",
    institution: "Christ the King High School",
    period: "Foundational Registry",
    description: "Initial logic processing foundation and primary academic registry.",
    icon: CircleDot
  }
];

export function ProfessionalTimeline() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 border-t border-border bg-background relative overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            DEVELOPER_JOURNEY_v4.0
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text"
          >
            Professional Registry
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-lg text-muted-foreground font-bold uppercase tracking-wide opacity-70"
          >
            A technical mapping of development milestones and academic foundations.
          </motion.p>
        </div>

        <div className="relative space-y-12">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row gap-8 pl-0 md:pl-20"
            >
              <div className="absolute left-6 top-10 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
              
              <div className="flex-1 space-y-6 bg-card/40 p-8 sm:p-12 rounded-[2.5rem] border border-border shadow-2xl backdrop-blur-3xl group hover:border-primary/40 transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-xl">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-headline font-black uppercase tracking-tight leading-none">{item.role}</h3>
                      <p className="text-[10px] font-mono font-black text-primary uppercase tracking-[0.2em] mt-1">{item.company || item.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 text-[9px] font-black text-muted-foreground bg-secondary/60 border border-border/40 px-4 py-2 rounded-full w-fit uppercase tracking-[0.2em]">
                    <CalendarDays className="w-3.5 h-3.5" />
                    {item.period}
                  </div>
                </div>
                <p className="text-xs sm:text-base text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-80">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}