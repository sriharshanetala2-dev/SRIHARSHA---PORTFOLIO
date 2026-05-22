"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, BrainCircuit } from "lucide-react";

const education = [
  {
    role: "B.Sc in Computer Science",
    institution: "Glocal University",
    description: "Foundational Computer Science degree focused on software engineering principles and computational logic.",
    icon: GraduationCap
  },
  {
    role: "Intermediate Education",
    institution: "SRR & CVR Govt Jr College",
    description: "Pre-university education focusing on science and mathematics.",
    icon: BookOpen
  },
  {
    role: "Secondary School Certificate",
    institution: "Christ the King High School",
    description: "Foundational academic training and logic development.",
    icon: BrainCircuit
  },
];

export function Education() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="education" className="py-24 md:py-32 px-6 bg-secondary/10 relative overflow-hidden border-y border-border/30">
      <div className="absolute inset-0 neural-grid opacity-[0.02] pointer-events-none" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 text-xs font-black text-primary uppercase tracking-widest border border-primary/20"
          >
            <BookOpen className="w-4 h-4" />
            Academic Registry
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-headline font-black tracking-tighter uppercase leading-none">
            TECHNICAL <span className="text-primary">FOUNDATION</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-bold opacity-70 uppercase tracking-widest">
            The core academic foundation of my software engineering career.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6"
        >
          {education.map((edu, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="p-8 md:p-10 glass-card border-border/50 hover:border-primary/40 transition-all group rounded-3xl overflow-hidden shadow-md">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <edu.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl sm:text-2xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors">{edu.role}</h3>
                    <p className="text-primary font-black text-xs uppercase tracking-widest opacity-80">{edu.institution}</p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-bold opacity-80 uppercase tracking-tight">
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
