"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  BrainCircuit, 
  Layers, 
  GraduationCap, 
  BookOpen, 
  Terminal,
  CheckCircle2
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
    <section id="experience" className="py-24 sm:py-32 px-6 relative overflow-hidden bg-transparent border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-black text-primary uppercase tracking-[0.6em]"
          >
            <Terminal className="w-4 h-4" />
            GROWTH MATRIX
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text">
            PROFESSIONAL <span className="text-gradient">JOURNEY</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground font-bold uppercase tracking-tight opacity-70 max-w-2xl">
            A high-precision mapping of <span className="text-primary">development milestones</span> and academic foundations.
          </p>
        </div>

        <div className="relative space-y-12">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
            >
              <div className="md:w-48 shrink-0 flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-secondary border border-border text-primary group hover:bg-primary hover:text-primary-foreground transition-all duration-500">
                  <item.icon className="w-7 h-7" />
                </div>
                <div className="text-[11px] font-black text-primary tracking-[0.4em] uppercase whitespace-nowrap">
                  NODE_{item.id}
                </div>
              </div>

              <div className="flex-1 glass-card p-8 sm:p-12 rounded-[2.5rem] hover:border-primary/40 transition-all border border-border/50">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 text-[11px] font-black text-primary uppercase tracking-widest">
                        <CheckCircle2 className="w-4 h-4" />
                        {item.period}
                      </div>
                      <h3 className="text-xl sm:text-3xl font-headline font-black uppercase tracking-tight text-foreground/90 leading-tight">
                        {item.role}
                      </h3>
                    </div>
                    <div className="text-[11px] font-black uppercase tracking-[0.4em] text-primary bg-primary/5 px-4 py-2 rounded-lg border border-primary/10 w-fit">
                      {item.type === 'work' ? item.company : item.institution}
                    </div>
                  </div>

                  <p className="text-sm sm:text-lg text-foreground/80 font-bold uppercase tracking-tight leading-relaxed max-w-3xl">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-background border border-border rounded-lg text-[11px] font-black uppercase tracking-widest text-primary/70">
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
