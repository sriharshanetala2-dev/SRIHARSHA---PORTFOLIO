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
    <section id="experience" className="py-24 sm:py-40 px-6 relative overflow-hidden bg-transparent border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-40 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            <Terminal className="w-4 h-4" />
            GROWTH MATRIX_v3.0
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl lg:text-9xl font-headline font-black tracking-tighter uppercase leading-[0.8] shimmer-text"
          >
            PROFESSIONAL <span className="text-gradient">JOURNEY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg sm:text-2xl text-muted-foreground font-bold uppercase tracking-tight opacity-95 max-w-3xl px-6 leading-relaxed"
          >
            A high-precision mapping of <span className="text-primary">industrial development milestones</span> and academic foundations.
          </motion.p>
        </div>

        <div className="relative space-y-12 sm:space-y-16">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start group"
            >
              <div className="lg:w-80 shrink-0 flex items-center gap-10">
                <div className="p-8 rounded-[2rem] bg-secondary/40 border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-2xl group-hover:shadow-primary/30 group-hover:rotate-6">
                  <item.icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-black text-primary tracking-[0.6em] uppercase">NODE_{item.id}</span>
                  <span className="text-[11px] font-black text-muted-foreground/50 uppercase tracking-[0.4em]">{item.type.toUpperCase()}</span>
                </div>
              </div>

              <div className="flex-1 glass-card p-12 sm:p-20 rounded-[3.5rem] hover:border-primary/60 transition-all duration-700 border border-border/50 bg-card/40 backdrop-blur-3xl shadow-4xl">
                <div className="space-y-12">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-5 text-[13px] font-black text-primary uppercase tracking-[0.4em] opacity-80">
                        <CalendarDays className="w-5 h-5" />
                        {item.period}
                      </div>
                      <h3 className="text-3xl sm:text-6xl font-headline font-black uppercase tracking-tight text-foreground leading-none">
                        {item.role}
                      </h3>
                    </div>
                    <div className="text-[11px] sm:text-[14px] font-black uppercase tracking-[0.5em] text-primary bg-primary/10 px-8 py-4 rounded-2xl border border-primary/30 w-fit backdrop-blur-2xl shadow-xl">
                      {item.type === 'work' ? item.company : item.institution}
                    </div>
                  </div>

                  <p className="text-lg sm:text-3xl text-foreground font-bold uppercase tracking-tight leading-relaxed max-w-5xl opacity-95">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-6 py-3 bg-background/60 border border-border rounded-xl text-[12px] font-black uppercase tracking-[0.4em] text-primary hover:border-primary/60 hover:bg-primary/10 transition-all cursor-default shadow-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-6 px-10 py-5 rounded-full bg-secondary/20 border border-border/50 backdrop-blur-3xl"
          >
            <Activity className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-muted-foreground">END_OF_JOURNEY_REGISTRY</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}