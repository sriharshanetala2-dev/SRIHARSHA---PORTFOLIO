"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Code2, 
  BrainCircuit, 
  Layers, 
  GraduationCap, 
  BookOpen, 
  History,
  Activity,
  Terminal
} from "lucide-react";
import { cn } from "@/lib/utils";

const timelineItems = [
  {
    type: "work",
    role: "Java Full Stack Developer",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Architecting high-performance enterprise systems with Java, Spring Boot, and reactive UI logic.",
    icon: Code2,
    tags: ["Systems", "Full Stack"]
  },
  {
    type: "work",
    role: "Generative AI Developer",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Neural integration specialist focusing on semantic intent parsing and Genkit orchestration.",
    icon: BrainCircuit,
    tags: ["AI", "Genkit"]
  },
  {
    type: "work",
    role: "Full Stack Developer",
    company: "Independent Projects",
    period: "2024 — 2025",
    description: "Developing atomic backend cores and real-time interactive UIs for enterprise-scale platforms.",
    icon: Layers,
    tags: ["React", "Firebase"]
  },
  {
    type: "edu",
    role: "B.Sc in Computer Science",
    institution: "Glocal University",
    period: "Academic Registry",
    description: "Mastery of computational logic, advanced data structures, and systems engineering fundamentals.",
    icon: GraduationCap,
    tags: ["CS Degree"]
  },
  {
    type: "edu",
    role: "Intermediate Education",
    institution: "SRR & CVR Govt Jr College",
    period: "Intermediate Registry",
    description: "Advanced computational mathematics and algorithmic logic foundation.",
    icon: BookOpen,
    tags: ["Science"]
  },
  {
    type: "edu",
    role: "Secondary School Certificate",
    institution: "Christ the King High School",
    period: "Foundational Registry",
    description: "Initial logic processing foundation and primary academic registry (SSC).",
    icon: History,
    tags: ["SSC"]
  }
];

export function ProfessionalTimeline() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section id="experience" className="py-24 sm:py-40 px-4 sm:px-6 relative overflow-hidden bg-background border-t border-border/50 scroll-mt-20">
      <div className="absolute inset-0 neural-grid opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto space-y-20 sm:space-y-32">
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-black text-primary uppercase tracking-[0.4em]"
          >
            <Terminal className="w-4 h-4" />
            Industrial Growth Registry
          </motion.div>
          <h2 className="text-4xl sm:text-7xl font-headline font-black tracking-tighter uppercase leading-none">
            TECHNICAL <span className="text-gradient">JOURNEY</span>
          </h2>
          <p className="text-sm sm:text-xl text-muted-foreground font-bold max-w-2xl mx-auto opacity-70 uppercase tracking-widest leading-relaxed">
            A standardized chronological mapping of professional milestones and foundational academic registries.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Spine */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-border opacity-50 hidden sm:block" />

          <div className="space-y-12 sm:space-y-24">
            {timelineItems.map((entry, idx) => (
              <motion.div key={idx} variants={item} className="relative">
                {/* Node Marker */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background z-20 hidden sm:block shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                
                <div className={cn(
                  "flex flex-col md:flex-row gap-8 items-start",
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}>
                  <div className={cn(
                    "md:w-1/2 w-full",
                    idx % 2 === 0 ? "md:text-left" : "md:text-right"
                  )}>
                    <Card className="p-8 sm:p-12 glass-card rounded-[2.5rem] shadow-3xl group hover:border-primary/50 transition-all">
                      <div className={cn(
                        "flex flex-col gap-8",
                        idx % 2 === 0 ? "items-start" : "items-start md:items-end"
                      )}>
                        <div className={cn(
                          "flex items-center gap-6",
                          idx % 2 === 0 ? "flex-row" : "flex-row md:flex-row-reverse"
                        )}>
                          <div className="p-5 rounded-2xl bg-secondary group-hover:bg-primary text-primary group-hover:text-primary-foreground transition-all duration-500 border border-border/50 shadow-xl">
                            <entry.icon className="w-7 h-7" />
                          </div>
                          <div className={cn("flex flex-col", idx % 2 === 0 ? "items-start" : "items-start md:items-end")}>
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] leading-none mb-2 opacity-60">{entry.period}</span>
                            <h3 className="text-xl sm:text-3xl font-headline font-black uppercase tracking-tight leading-none">{entry.role}</h3>
                          </div>
                        </div>
                        
                        <div className="space-y-6 flex-grow">
                          <p className="text-foreground/40 font-black text-xs uppercase tracking-[0.3em]">
                            {entry.type === 'work' ? entry.company : entry.institution}
                          </p>
                          <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-90">
                            {entry.description}
                          </p>
                        </div>

                        <div className={cn(
                          "flex flex-wrap gap-2",
                          idx % 2 === 0 ? "justify-start" : "justify-start md:justify-end"
                        )}>
                          {entry.tags.map(tag => (
                            <span key={tag} className="px-4 py-1.5 rounded-lg bg-background border border-border text-[10px] font-black uppercase tracking-widest opacity-60">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}