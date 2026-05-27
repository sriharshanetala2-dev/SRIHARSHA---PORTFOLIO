
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
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

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
  const timelineBackdrop = PlaceHolderImages.find(img => img.id === 'sentinel-iam-hub');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-6 border-t border-border bg-background relative overflow-hidden scroll-mt-20">
      {/* High-Fidelity Technical Backdrop - Enhanced Visibility */}
      {timelineBackdrop && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={timelineBackdrop.imageUrl}
            alt={timelineBackdrop.description}
            fill
            className="object-cover opacity-80 grayscale brightness-[0.7] transition-all duration-1000"
            data-ai-hint={timelineBackdrop.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-[1]" />
        </div>
      )}

      <div className="absolute inset-0 neural-grid opacity-[0.05] pointer-events-none z-[2]" />
      
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-24 relative z-10">
        <div className="text-center space-y-6">
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
            className="text-3xl sm:text-6xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text"
          >
            LIFECYCLE <span className="text-gradient">ARCHIVE</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-xl text-muted-foreground font-bold uppercase tracking-widest opacity-80 max-w-2xl mx-auto px-4"
          >
            A high-fidelity audit of professional milestones and academic foundation nodes.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-12 relative"
        >
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-border/40 hidden md:block" />
          
          {timelineItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative flex flex-col md:flex-row gap-6 md:pl-24 group"
            >
              <div className="absolute left-6 top-10 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block z-20 shadow-[0_0_15px_rgba(var(--primary),0.4)] group-hover:scale-150 transition-transform" />
              
              <div className="flex-1 space-y-4 sm:space-y-8 bg-card/40 p-6 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] border border-border/60 shadow-2xl backdrop-blur-3xl group-hover:border-primary/40 transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="p-3 sm:p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700">
                      <item.icon className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-2xl font-headline font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors">{item.role}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                         <p className="text-[11px] sm:text-[12px] font-mono font-black text-primary/60 uppercase tracking-[0.2em]">{item.company || item.institution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-black text-muted-foreground bg-secondary/40 border border-border/40 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full w-fit uppercase tracking-widest">
                    <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4 opacity-50" />
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
