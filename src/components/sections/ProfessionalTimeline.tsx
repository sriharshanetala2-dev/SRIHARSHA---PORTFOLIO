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
  },
  {
    id: "06",
    type: "edu",
    role: "Secondary School Certificate",
    institution: "Christ the King High School",
    period: "Foundational Registry",
    description: "Initial academic registry and foundational logic processing. Established the core mathematical baseline for engineering and system logic.",
    icon: History,
    tags: ["SSC", "Foundational"]
  }
];

export function ProfessionalTimeline() {
  return (
    <section id="experience" className="py-24 sm:py-48 px-6 relative overflow-hidden bg-background/50 border-t-2 border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-40">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-8 py-3 rounded-full bg-primary/15 border-2 border-primary/25 text-xs font-black text-primary uppercase tracking-[0.6em] flex items-center gap-4 shadow-2xl"
          >
            <Terminal className="w-5 h-5" />
            PROFESSIONAL GROWTH REGISTRY
          </motion.div>
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-headline font-black tracking-tighter uppercase leading-none">
            TECHNICAL <span className="text-gradient">JOURNEY</span>
          </h2>
          <p className="text-foreground/80 max-w-3xl text-sm sm:text-xl font-bold uppercase tracking-[0.25em] leading-relaxed opacity-90 px-4">
            A high-precision mapping of development milestones, academic foundations, and specialized AI systems integration.
          </p>
        </div>

        <div className="relative space-y-12 sm:space-y-20 max-w-6xl mx-auto">
          {/* Vertical Spine */}
          <div className="absolute left-10 sm:left-14 top-0 bottom-0 w-[2px] bg-border/60 hidden md:block" />

          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8, type: "spring", stiffness: 80 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="flex flex-col md:flex-row gap-10 md:gap-24 items-start">
                {/* Node Identifier */}
                <div className="flex items-center gap-8 md:w-48 shrink-0 relative z-10">
                  <div className="text-[11px] font-black text-primary/50 tracking-widest uppercase hidden md:block whitespace-nowrap">
                    NODE_{item.id}
                  </div>
                  <div className="p-5 sm:p-6 rounded-2xl bg-secondary group-hover:bg-primary text-primary group-hover:text-primary-foreground transition-all duration-700 shadow-4xl border-2 border-border group-hover:border-primary group-hover:scale-110">
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                </div>

                {/* Registry Card */}
                <div className="flex-1 glass-card p-10 sm:p-16 rounded-[3rem] hover:border-primary/70 transition-all shadow-4xl relative overflow-hidden group-hover:bg-card/80">
                  <div className="absolute -top-12 -right-12 p-24 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <Activity className="w-32 h-32" />
                  </div>

                  <div className="space-y-10 relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                      <div className="space-y-3">
                        <div className="flex items-center gap-4 text-xs font-black text-primary uppercase tracking-[0.5em] opacity-90">
                          <CheckCircle2 className="w-5 h-5" />
                          {item.period}
                        </div>
                        <h3 className="text-2xl sm:text-5xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                          {item.role}
                        </h3>
                      </div>
                      <div className="text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground bg-secondary/80 px-6 py-3 rounded-2xl border-2 border-border shadow-inner w-fit">
                        {item.type === 'work' ? item.company : item.institution}
                      </div>
                    </div>

                    <p className="text-sm sm:text-xl text-foreground font-bold uppercase tracking-tight leading-relaxed opacity-90 max-w-4xl">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-6 py-3 bg-background/50 border-2 border-border rounded-xl text-xs font-black uppercase tracking-widest opacity-90 shadow-lg hover:border-primary transition-colors">
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