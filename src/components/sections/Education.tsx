
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, BrainCircuit } from "lucide-react";

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
    description: "Pre-university curriculum focusing on advanced computational mathematics and logic foundation.",
    icon: BookOpen,
    period: "Pre-University Registry"
  },
  {
    role: "Secondary School Certificate",
    institution: "Christ the King High School",
    description: "Initial academic registry and logic processing foundation.",
    icon: BrainCircuit,
    period: "Foundational Registry"
  },
];

export function Education() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="education" className="py-20 sm:py-32 px-4 sm:px-6 bg-secondary/10 relative overflow-hidden border-y border-border/30 scroll-mt-20">
      <div className="absolute inset-0 neural-grid opacity-[0.02] pointer-events-none" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.4em] border border-primary/20"
          >
            <BookOpen className="w-4 h-4" />
            Academic Registry
          </motion.div>
          <h2 className="text-3xl sm:text-6xl font-headline font-black tracking-tighter uppercase leading-none">
            TECHNICAL <span className="text-primary">FOUNDATION</span>
          </h2>
          <p className="text-xs sm:text-lg text-muted-foreground font-bold opacity-70 uppercase tracking-[0.15em] sm:tracking-[0.2em] px-4 leading-relaxed">
            The core academic foundation of my software engineering career.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:gap-6"
        >
          {education.map((edu, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="p-6 sm:p-12 glass-card border-border/50 hover:border-primary/40 transition-all group rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-12 items-start md:items-center">
                  <div className="p-5 sm:p-6 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                    <edu.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div className="space-y-2 sm:space-y-4 flex-1 min-w-0">
                    <div className="text-[10px] font-black text-primary uppercase tracking-widest opacity-60">
                      {edu.period}
                    </div>
                    <h3 className="text-xl sm:text-4xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">{edu.role}</h3>
                    <p className="text-primary font-black text-[11px] sm:text-base uppercase tracking-widest opacity-80">{edu.institution}</p>
                    <p className="text-[11px] sm:text-lg text-muted-foreground leading-relaxed font-bold opacity-80 uppercase tracking-tight">
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
