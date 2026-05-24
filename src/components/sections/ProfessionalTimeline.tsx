"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  BrainCircuit, 
  Layers, 
  GraduationCap, 
  BookOpen, 
  Terminal,
  CalendarDays,
  Activity
} from "lucide-react";

const timelineItems = [
  {
    id: "01",
    type: "work",
    role: "Java Full Stack Developer",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Architecting high-performance enterprise systems with Java 21, Spring Boot, and PostgreSQL. Mastering the orchestration of complex full-stack ecosystems with SQL integrity.",
    icon: Code2,
    tags: ["Java 21", "Spring Boot", "SQL", "Next.js"]
  },
  {
    id: "02",
    type: "work",
    role: "Generative AI Specialist",
    company: "AI Buildathons & Academy",
    period: "2025 — 2026",
    description: "Developing autonomous task agents and semantic intent layers using Google Genkit, Claude 3.5, and Gemini 2.0. Expert in n8n logic workflow automation and prompt engineering.",
    icon: BrainCircuit,
    tags: ["Genkit", "Claude 3.5", "Gemini", "n8n"]
  },
  {
    id: "03",
    type: "work",
    role: "Full Stack Software Developer",
    company: "Independent Projects",
    period: "2024 — 2025",
    description: "Building responsive digital platforms with React, Node.js, and Python. Focusing on atomic data mutations, real-time interface logic, and Python predictive pipelines.",
    icon: Layers,
    tags: ["React", "Python", "Firebase", "TS"]
  },
  {
    id: "04",
    type: "edu",
    role: "B.Sc in Computer Science",
    institution: "Glocal University",
    period: "Academic Registry",
    description: "Mastery of core computational logic, data structures, and systems engineering principles. Graduated with honors in Computer Science foundation and registry logic.",
    icon: GraduationCap,
    tags: ["CS Core", "Systems Design", "Logic"]
  },
  {
    id: "05",
    type: "edu",
    role: "Intermediate Education",
    institution: "SRR & CVR Govt Jr College",
    period: "Pre-University Registry",
    description: "Advanced computational mathematics and algorithmic foundation. Specialized in structured logical registry and high-level logic processing.",
    icon: BookOpen,
    tags: ["Mathematics", "Logic", "Registry"]
  }
];

export function ProfessionalTimeline() {
  return (
    <section id="experience" className="py-20 sm:py-32 px-6 relative overflow-hidden bg-transparent border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            <Terminal className="w-3.5 h-3.5" />
            GROWTH MATRIX_v3.0
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black leading-tight shimmer-text"
          >
            PROFESSIONAL JOURNEY
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-lg text-muted-foreground font-bold uppercase tracking-tight opacity-90 max-w-2xl px-6 leading-relaxed"
          >
            A high-precision mapping of <span className="text-primary">industrial development milestones</span> and academic foundations.
          </motion.p>
        </div>

        <div className="space-y-8 relative">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-stretch"
            >
              <div className="lg:w-64 shrink-0 flex flex-row lg:flex-col items-center lg:items-start gap-6 lg:gap-4 p-6 rounded-2xl bg-secondary/10 border border-border/40">
                <div className="p-4 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase">NODE_{item.id}</span>
                  <span className="text-[9px] font-black text-muted-foreground/50 uppercase tracking-widest">{item.type.toUpperCase()}</span>
                </div>
              </div>

              <div className="flex-1 glass-card p-8 sm:p-12 rounded-3xl border border-border/40 space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-widest opacity-80">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {item.period}
                    </div>
                    <h3 className="text-xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
                      {item.role}
                    </h3>
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary/70 bg-primary/5 px-3 py-1.5 rounded-md border border-primary/10 w-fit">
                      {item.type === 'work' ? item.company : item.institution}
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground font-bold uppercase tracking-tight leading-relaxed opacity-95">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-background/50 border border-border/40 rounded-lg text-[9px] font-black uppercase tracking-widest text-primary/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 px-6 py-3 rounded-full bg-secondary/20 border border-border/40 backdrop-blur-md"
          >
            <Activity className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground opacity-60">END_OF_JOURNEY_REGISTRY</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}