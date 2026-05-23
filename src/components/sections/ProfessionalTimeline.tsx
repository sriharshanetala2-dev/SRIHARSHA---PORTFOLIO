
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
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const timelineItems = [
  {
    id: "01",
    type: "work",
    role: "Java Full Stack Developer",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Architecting enterprise-grade systems with Java, Spring Boot, and high-performance UI logic.",
    icon: Code2,
    tags: ["Systems", "Java 21", "Spring"]
  },
  {
    id: "02",
    type: "work",
    role: "Generative AI Developer",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Neural integration specialist focusing on semantic intent parsing and Genkit AI orchestration.",
    icon: BrainCircuit,
    tags: ["GenAI", "Genkit", "LLMs"]
  },
  {
    id: "03",
    type: "work",
    role: "Full Stack Software Developer",
    company: "Independent Projects",
    period: "2024 — 2025",
    description: "Developing atomic backend cores and reactive interfaces for industrial-scale platforms.",
    icon: Layers,
    tags: ["React", "Firebase", "SQL"]
  },
  {
    id: "04",
    type: "edu",
    role: "B.Sc in Computer Science",
    institution: "Glocal University",
    period: "Academic Registry",
    description: "Foundational mastery of computational logic, data structures, and systems engineering.",
    icon: GraduationCap,
    tags: ["CS Degree", "Systems"]
  },
  {
    id: "05",
    type: "edu",
    role: "Intermediate Education",
    institution: "SRR & CVR Govt Jr College",
    period: "Intermediate Registry",
    description: "Advanced computational mathematics and core algorithmic logic foundation.",
    icon: BookOpen,
    tags: ["MPC", "Science"]
  },
  {
    id: "06",
    type: "edu",
    role: "SSC",
    institution: "Christ the King High School",
    period: "Foundational Registry",
    description: "Initial academic registry and primary computational logic foundation.",
    icon: History,
    tags: ["Foundational", "SSC"]
  }
];

export function ProfessionalTimeline() {
  return (
    <section id="experience" className="py-24 sm:py-40 px-6 relative overflow-hidden bg-background border-t border-border/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-black text-primary uppercase tracking-[0.5em] flex items-center gap-3"
          >
            <Terminal className="w-4 h-4" />
            INDUSTRIAL GROWTH REGISTRY
          </motion.div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-headline font-black tracking-tighter uppercase leading-none">
            TECHNICAL <span className="text-gradient">JOURNEY</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-xs sm:text-lg font-bold opacity-70 uppercase tracking-[0.2em] leading-relaxed">
            A verified chronological mapping of professional milestones and foundational academic registries.
          </p>
        </div>

        {/* Timeline Registry */}
        <div className="relative space-y-6 max-w-5xl mx-auto">
          {/* Vertical Spine */}
          <div className="absolute left-10 sm:left-12 top-0 bottom-0 w-px bg-border/40 hidden md:block" />

          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
                {/* Node ID & Icon */}
                <div className="flex items-center gap-6 md:w-32 shrink-0 relative z-10">
                  <div className="text-[10px] font-black text-primary/30 tracking-widest uppercase hidden md:block">
                    NODE_{item.id}
                  </div>
                  <div className="p-4 rounded-xl bg-secondary group-hover:bg-primary text-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl border border-border/50">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex-1 bg-card/40 backdrop-blur-sm border border-border/50 p-8 sm:p-12 rounded-[2rem] hover:border-primary/50 transition-all shadow-2xl relative overflow-hidden group-hover:bg-card/60">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Activity className="w-16 h-16" />
                  </div>

                  <div className="space-y-6 relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] opacity-60">
                          {item.period}
                        </span>
                        <h3 className="text-xl sm:text-3xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-none">
                          {item.role}
                        </h3>
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-50 bg-secondary/50 px-4 py-1.5 rounded-lg border border-border/30">
                        {item.type === 'work' ? item.company : item.institution}
                      </div>
                    </div>

                    <p className="text-sm sm:text-lg text-muted-foreground font-bold uppercase tracking-tight leading-relaxed opacity-80 max-w-3xl">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-background/50 border border-border rounded-lg text-[10px] font-black uppercase tracking-widest opacity-60">
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
