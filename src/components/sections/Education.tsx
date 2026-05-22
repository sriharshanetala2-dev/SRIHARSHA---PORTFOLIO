"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const education = [
  {
    role: "B.Sc in Computer Science",
    company: "Glocal University",
    period: "2021 — 2024",
    description: "Focused on core computational theory, algorithms, and software development practices. Graduated with a strong foundation in data structures and systems analysis.",
  },
  {
    role: "Intermediate Education",
    company: "SRR & CVR Govt Jr College",
    period: "",
    description: "Specialized in higher secondary education with a focus on analytical thinking and foundational science subjects.",
  },
  {
    role: "Secondary School Certificate (SSC)",
    company: "Christ the King English Medium High School",
    period: "",
    description: "Completed secondary education with a strong academic record and holistic development.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-headline font-black tracking-tight"
          >
            EDUCATION
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto"
          >
            My foundation in computational science and academic growth milestones.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {education.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="p-8 sm:p-10 glass-card border-none hover:shadow-2xl transition-all group relative overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] backdrop-blur-xl">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="p-5 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-lg">
                    <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <div className="space-y-3 flex-1">
                    {item.period && (
                      <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </div>
                    )}
                    <h3 className="text-2xl sm:text-3xl font-headline font-black tracking-tight group-hover:text-primary transition-colors">{item.role}</h3>
                    <p className="text-primary font-bold text-lg md:text-xl">{item.company}</p>
                    <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-medium opacity-80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
