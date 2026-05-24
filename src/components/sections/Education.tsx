"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, BrainCircuit, CircleDot } from "lucide-react";

const education = [
  {
    role: "B.Sc in Computer Science",
    institution: "Glocal University",
    description: "Foundational Computer Science registry focused on high-performance systems and engineering logic.",
    icon: GraduationCap,
    period: "Academic Registry"
  },
  {
    role: "Intermediate Education",
    institution: "SRR & CVR Govt Jr College",
    description: "Higher secondary curriculum focusing on computational mathematics and logic foundation.",
    icon: BookOpen,
    period: "Pre-University Registry"
  },
  {
    role: "Secondary School Certificate",
    institution: "Christ the King High School",
    description: "Initial academic registry and logic processing foundation.",
    icon: CircleDot,
    period: "Foundational Registry"
  },
];

export function Education() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="education" className="py-24 sm:py-32 px-6 bg-secondary/5 relative overflow-hidden border-y border-border/30 scroll-mt-20">
      <div className="absolute inset-0 neural-grid opacity-[0.03] pointer-events-none" />
      <div className="max-w-5xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            ACADEMIC_FOUNDATION
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-headline font-black tracking-tighter uppercase leading-none">
            Technical <span className="text-gradient">Registry</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground font-bold opacity-70 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
            The core academic foundation of my software engineering career, from foundational logic to computational systems.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8"
        >
          {education.map((edu, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="p-10 sm:p-14 glass-card group rounded-[3rem] shadow-3xl">
                <div className="flex flex-col md:flex-row gap-10 sm:gap-14 items-start md:items-center">
                  <div className="p-6 rounded-3xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-xl">
                    <edu.icon className="w-10 h-10" />
                  </div>
                  <div className="space-y-4 flex-1 min-w-0">
                    <div className="text-[10px] font-mono font-black text-primary uppercase tracking-[0.4em] opacity-60">
                      {edu.period}
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">{edu.role}</h3>
                    <p className="text-foreground/80 font-black text-xs sm:text-sm uppercase tracking-widest">{edu.institution}</p>
                    <p className="text-xs sm:text-lg text-muted-foreground leading-relaxed font-bold opacity-80 uppercase tracking-tight max-w-3xl">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}