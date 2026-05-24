"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  BrainCircuit, 
  Layers, 
  GraduationCap, 
  BookOpen, 
  Terminal,
  CheckCircle2,
  CalendarDays
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
      <div className="max-w-6xl mx-auto space-y-20 sm:space-y-32 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            <Terminal className="w-4 h-4" />
            GROWTH MATRIX_v2
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl lg:text-7xl font-headline font-black tracking-tighter uppercase leading-[0.85] shimmer-text"
          >
            PROFESSIONAL <span className="text-gradient">JOURNEY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-xl text-muted-foreground font-bold uppercase tracking-tight opacity-90 max-w-2xl px-4"
          >
            A high-precision mapping of <span className="text-primary">development milestones</span> and academic foundations.
          </motion.p>
        </div>

        <div className="relative space-y-10">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start group"
            >
              <div className="lg:w-64 shrink-0 flex items-center gap-8">
                <div className="p-6 rounded-2xl bg-secondary border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-xl group-hover:shadow-primary/20">
                  <item.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-black text-primary tracking-[0.5em] uppercase">NODE_{item.id}</span>
                  <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.3em]">{item.type.toUpperCase()}</span>
                </div>
              </div>

              <div className="flex-1 glass-card p-10 sm:p-16 rounded-[3rem] hover:border-primary/50 transition-all border border-border/50 bg-card/40 backdrop-blur-3xl shadow-3xl">
                <div className="space-y-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-[12px] font-black text-primary uppercase tracking-[0.3em] opacity-80">
                        <CalendarDays className="w-4 h-4" />
                        {item.period}
                      </div>
                      <h3 className="text-2xl sm:text-5xl font-headline font-black uppercase tracking-tight text-foreground leading-none">
                        {item.role}
                      </h3>
                    </div>
                    <div className="text-[11px] sm:text-[13px] font-black uppercase tracking-[0.4em] text-primary bg-primary/5 px-6 py-3 rounded-xl border border-primary/20 w-fit backdrop-blur-md">
                      {item.type === 'work' ? item.company : item.institution}
                    </div>
                  </div>

                  <p className="text-base sm:text-2xl text-foreground font-bold uppercase tracking-tight leading-relaxed max-w-4xl opacity-90">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-5 py-2.5 bg-background/50 border border-border rounded-xl text-[11px] font-black uppercase tracking-[0.3em] text-primary/80 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}