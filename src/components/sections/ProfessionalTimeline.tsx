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
  ArrowDown
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
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 border-t border-border bg-background relative overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto space-y-24 relative z-10">
        <div className="text-center space-y-8">
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
            className="text-4xl sm:text-7xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text"
          >
            Professional Registry
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg sm:text-2xl text-muted-foreground font-bold uppercase tracking-wide opacity-70"
          >
            A technical mapping of development milestones and academic foundations.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative space-y-16"
        >
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          {timelineItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative flex flex-col md:flex-row gap-8 pl-0 md:pl-24"
            >
              <div className="absolute left-6 top-12 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block shadow-[0_0_15px_rgba(var(--primary),0.5)] z-20" />
              
              <div className="flex-1 space-y-8 bg-card/40 p-10 sm:p-14 rounded-[3rem] border border-border shadow-2xl backdrop-blur-3xl group hover:border-primary/40 transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                  <div className="flex items-center gap-8">
                    <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-xl">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors">{item.role}</h3>
                      <p className="text-[14px] font-mono font-black text-primary uppercase tracking-[0.3em] mt-1">{item.company || item.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[12px] font-black text-muted-foreground bg-secondary/60 border border-border/40 px-6 py-3 rounded-full w-fit uppercase tracking-[0.3em] shadow-sm">
                    <CalendarDays className="w-4 h-4" />
                    {item.period}
                  </div>
                </div>
                <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-80">
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