
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Code2, BrainCircuit, Layers, GraduationCap, BookOpen, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineItems = [
  {
    type: "work",
    role: "Java Full Stack Developer",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Intensive systems engineering focused on Java, Spring Boot, and high-performance full-stack architectures.",
    icon: Code2
  },
  {
    type: "work",
    role: "Generative AI Developer",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Neural integration specialist focusing on Google Genkit and LLM-native application logic.",
    icon: BrainCircuit
  },
  {
    type: "edu",
    role: "B.Sc in Computer Science",
    institution: "Glocal University",
    period: "Foundational Registry",
    description: "Core Computer Science foundation focusing on computational logic and systems engineering.",
    icon: GraduationCap
  },
  {
    type: "work",
    role: "Full Stack Developer",
    company: "Independent Projects",
    period: "2024 — 2025",
    description: "Architecting real-time interactive UIs and atomic backend systems using Next.js and Firebase.",
    icon: Layers
  },
  {
    type: "edu",
    role: "Intermediate Education",
    institution: "SRR & CVR Govt Jr College",
    period: "Registry Sync",
    description: "Advanced computational mathematics and logic foundation.",
    icon: BookOpen
  }
];

export function ProfessionalTimeline() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="timeline" className="py-24 sm:py-32 px-4 sm:px-6 bg-background relative overflow-hidden border-t border-border/50 scroll-mt-20">
      <div className="absolute inset-0 neural-grid opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-24">
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-black text-primary uppercase tracking-widest"
          >
            <Activity className="w-4 h-4" />
            Growth Matrix & Academic Registry
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-headline font-black tracking-tighter uppercase leading-none">
            TECHNICAL <span className="text-gradient">JOURNEY</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground font-black max-w-2xl mx-auto opacity-60 uppercase tracking-widest leading-relaxed">
            A unified timeline of professional milestones and foundational academic registries.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8 relative"
        >
          {/* Central Line for Desktop */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-border hidden sm:block opacity-30" />

          {timelineItems.map((entry, idx) => (
            <motion.div key={idx} variants={item} className="relative">
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-10 w-4 h-4 rounded-full bg-primary border-4 border-background z-20 hidden sm:block shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
              
              <div className={cn(
                "flex flex-col md:flex-row gap-8 items-start",
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-left md:text-right"
              )}>
                <div className="md:w-1/2 w-full">
                  <Card className="p-8 sm:p-10 glass-card bg-card/30 border-border/50 hover:border-primary/40 transition-all rounded-[2rem] shadow-xl group">
                    <div className={cn(
                      "flex flex-col gap-6",
                      idx % 2 === 0 ? "items-start" : "items-start md:items-end"
                    )}>
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-secondary group-hover:bg-primary text-primary group-hover:text-primary-foreground transition-all duration-500 border border-border/50">
                          <entry.icon className="w-6 h-6" />
                        </div>
                        <div className={cn("flex flex-col", idx % 2 === 0 ? "items-start" : "items-start md:items-end")}>
                          <span className="text-xs font-black text-primary uppercase tracking-widest">{entry.period}</span>
                          <h3 className="text-xl sm:text-2xl font-headline font-black uppercase tracking-tight leading-tight">{entry.role}</h3>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-foreground/50 font-black text-xs uppercase tracking-widest">
                          {entry.type === 'work' ? entry.company : entry.institution}
                        </p>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-bold opacity-80 uppercase tracking-tight">
                          {entry.description}
                        </p>
                      </div>

                      <div className={cn(
                        "flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 text-[10px] font-black uppercase tracking-widest",
                        entry.type === 'work' ? "bg-blue-500/10 text-blue-500" : "bg-indigo-500/10 text-indigo-500"
                      )}>
                        {entry.type === 'work' ? "Professional" : "Academic"}
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
