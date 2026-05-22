
"use client";

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
    period: "", // Removed years as requested
    description: "Specialized in higher secondary education with a focus on analytical thinking and foundational science subjects.",
  },
  {
    role: "Secondary School Certificate (SSC)",
    company: "Christ the King English Medium High School",
    period: "", // Removed years as requested
    description: "Completed secondary education with a strong academic record and holistic development.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className="text-4xl font-headline font-black">EDUCATION</h2>
          <p className="text-muted-foreground text-lg">My foundation in computational science and academic growth.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {education.map((item, idx) => (
            <Card key={idx} className="p-8 glass-card border-none hover:shadow-lg transition-all group relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="space-y-2 flex-1">
                  {item.period && (
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </div>
                  )}
                  <h3 className="text-2xl font-headline font-bold">{item.role}</h3>
                  <p className="text-primary font-semibold text-lg">{item.company}</p>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
