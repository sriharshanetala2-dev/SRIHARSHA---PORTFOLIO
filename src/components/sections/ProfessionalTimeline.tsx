"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  BrainCircuit, 
  Layers, 
  GraduationCap, 
  BookOpen,
  CalendarDays,
  CircleDot,
  Activity
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

export function SystemRegistry() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 border-t border-border bg-background relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 neural-grid opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto space-y-24 relative z-10">
        <div className="text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            <Activity className="w-4 h-4" />
            SYSTEM_REGISTRY_V6.0
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text"
          >
            LIFECYCLE <span className="text-gradient">ARCHIVE</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-muted-foreground font-bold uppercase tracking-widest opacity-80 max-w-2xl mx-auto"
          >
            A high-fidelity audit of professional milestones and academic foundation nodes.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12 relative"
        >
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border/40 hidden md:block" />
          
          {timelineItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative flex flex-col md:flex-row gap-8 pl-0 md:pl-24 group"
            >
              <div className="absolute left-6 top-10 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block z-20 shadow-[0_0_15px_rgba(var(--primary),0.4)] group-hover:scale-150 transition-transform" />
              
              <div className="flex-1 space-y-8 bg-card/40 p-10 sm:p-12 rounded-[2.5rem] border border-border/60 shadow-2xl backdrop-blur-3xl group-hover:border-primary/40 transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-xl">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-headline font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors">{item.role}</h3>
                      <p className="text-[12px] font-mono font-black text-primary/60 uppercase tracking-[0.3em] mt-1">{item.company || item.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-black text-muted-foreground bg-secondary/40 border border-border/40 px-5 py-2.5 rounded-full w-fit uppercase tracking-[0.3em]">
                    <CalendarDays className="w-4 h-4 opacity-50" />
                    {item.period}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-70">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
