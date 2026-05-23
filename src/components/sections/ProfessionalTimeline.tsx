"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  BrainCircuit, 
  Layers, 
  GraduationCap, 
  BookOpen, 
  History,
  Terminal,
  Activity,
  CheckCircle2,
  Workflow
} from "lucide-react";

const timelineItems = [
  {
    id: "01",
    type: "work",
    role: "Java Full Stack Developer",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Architecting high-performance enterprise systems with Java 21, Spring Boot, and PostgreSQL. Mastering the orchestration of complex full-stack ecosystems.",
    icon: Code2,
    tags: ["Java 21", "Spring Boot", "SQL", "Next.js"]
  },
  {
    id: "02",
    type: "work",
    role: "Generative AI Specialist",
    company: "AI Buildathons & Academy",
    period: "2025 — 2026",
    description: "Developing autonomous task agents and semantic intent layers using Google Genkit, Claude 3.5, and Gemini 2.0. Expert in n8n logic workflow automation.",
    icon: BrainCircuit,
    tags: ["Genkit", "Claude 3.5", "Gemini", "n8n"]
  },
  {
    id: "03",
    type: "work",
    role: "Full Stack Software Developer",
    company: "Independent Projects",
    period: "2024 — 2025",
    description: "Building responsive digital platforms with React, Node.js, and Python. Focusing on atomic data mutations and real-time interface logic.",
    icon: Layers,
    tags: ["React", "Python", "Firebase", "TS"]
  },
  {
    id: "04",
    type: "edu",
    role: "B.Sc in Computer Science",
    institution: "Glocal University",
    period: "Academic Registry",
    description: "Mastery of core computational logic, data structures, and systems engineering principles. Graduated with honors in Computer Science foundation.",
    icon: GraduationCap,
    tags: ["CS Core", "Systems Design", "Logic"]
  },
  {
    id: "05",
    type: "edu",
    role: "Intermediate Education",
    institution: "SRR & CVR Govt Jr College",
    period: "Pre-University Registry",
    description: "Advanced computational mathematics and algorithmic foundation. Specialized in structured logical registry and logic processing.",
    icon: BookOpen,
    tags: ["Mathematics", "Logic", "Registry"]
  },
  {
    id: "06",
    type: "edu",
    role: "Secondary School Certificate",
    institution: "Christ the King High School",
    period: "Foundational Registry",
    description: "Initial academic registry and foundational logic processing. Established the core mathematical baseline for engineering.",
    icon: History,
    tags: ["SSC", "Foundational"]
  }
];

export function ProfessionalTimeline() {
  return (
    <section id="experience" className="py-24 sm:py-40 px-6 relative overflow-hidden bg-background border-t-2 border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-black text-primary uppercase tracking-[0.5em] flex items-center gap-3 shadow-lg"
          >
            <Terminal className="w-4 h-4" />
            PROFESSIONAL GROWTH REGISTRY
          </motion.div>
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-headline font-black tracking-tighter uppercase leading-none">
            TECHNICAL <span className="text-gradient">JOURNEY</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-[10px] sm:text-lg font-bold opacity-70 uppercase tracking-[0.2em] leading-relaxed">
            A chronological mapping of professional milestones, academic registries, and elite systems integration.
          </p>
        </div>

        <div className="relative space-y-8 sm:space-y-12 max-w-5xl mx-auto">
          {/* Vertical Spine */}
          <div className="absolute left-10 sm:left-14 top-0 bottom-0 w-px bg-border/40 hidden md:block" />

          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start">
                {/* Node Identifier */}
                <div className="flex items-center gap-6 md:w-40 shrink-0 relative z-10">
                  <div className="text-xs font-black text-primary/40 tracking-widest uppercase hidden md:block whitespace-nowrap">
                    NODE_{item.id}
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-secondary group-hover:bg-primary text-primary group-hover:text-primary-foreground transition-all duration-500 shadow-2xl border-2 border-border/50 group-hover:border-primary group-hover:scale-110">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                </div>

                {/* Registry Card */}
                <div className="flex-1 glass-card p-8 sm:p-14 rounded-[2.5rem] hover:border-primary/60 transition-all shadow-3xl relative overflow-hidden group-hover:bg-card/70 group-hover:translate-x-2">
                  <div className="absolute -top-10 -right-10 p-20 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <Activity className="w-24 h-24" />
                  </div>

                  <div className="space-y-8 relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-xs font-black text-primary uppercase tracking-[0.4em] opacity-80">
                          <CheckCircle2 className="w-4 h-4" />
                          {item.period}
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                          {item.role}
                        </h3>
                      </div>
                      <div className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground bg-secondary/80 px-5 py-2.5 rounded-xl border border-border shadow-inner w-fit">
                        {item.type === 'work' ? item.company : item.institution}
                      </div>
                    </div>

                    <p className="text-xs sm:text-lg text-muted-foreground font-bold uppercase tracking-tight leading-relaxed opacity-80 max-w-3xl">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-5 py-2.5 bg-background/50 border border-border rounded-xl text-xs font-black uppercase tracking-widest opacity-70 shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
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