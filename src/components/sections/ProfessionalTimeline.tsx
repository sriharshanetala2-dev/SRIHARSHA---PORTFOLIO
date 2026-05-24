"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  BrainCircuit, 
  Layers, 
  GraduationCap, 
  BookOpen,
  CalendarDays
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
  }
];

export function ProfessionalTimeline() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="section-label mx-auto">DEVELOPER JOURNEY</div>
          <h2 className="text-4xl sm:text-6xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text">Professional Registry</h2>
        </div>

        <div className="relative space-y-12">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row gap-8 pl-0 md:pl-20"
            >
              <div className="absolute left-6 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />
              <div className="flex-1 space-y-4 bg-card/40 p-8 sm:p-12 rounded-3xl border border-border shadow-2xl backdrop-blur-3xl group hover:border-primary/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-headline font-black uppercase tracking-tight">{item.role}</h3>
                      <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mt-2">{item.company || item.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[9px] font-black text-muted-foreground bg-secondary/60 border border-border/40 px-4 py-1.5 rounded-full w-fit uppercase tracking-[0.2em]">
                    <CalendarDays className="w-3 h-3" />
                    {item.period}
                  </div>
                </div>
                <p className="text-xs sm:text-base text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-70">
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