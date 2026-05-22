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
    period: "2019 — 2021",
    description: "Specialized in higher secondary education with a focus on analytical thinking and foundational science subjects.",
  },
  {
    role: "Secondary School Certificate (SSC)",
    company: "Christ the King English Medium High School",
    period: "Class of 2019",
    description: "Completed secondary education with a strong academic record and holistic development.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-32 px-6 bg-secondary/5 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black text-accent uppercase tracking-[0.3em]">
            <GraduationCap className="w-4 h-4" />
            Academic Node
          </div>
          <h2 className="text-5xl font-headline font-black tracking-tighter">EDUCATION</h2>
          <p className="text-muted-foreground text-lg font-medium">The computational foundation that shaped my technical understanding.</p>
        </div>

        <div className="space-y-10">
          {education.map((item, idx) => (
            <Card key={idx} className="p-10 bg-card/50 backdrop-blur-3xl border-white/5 hover:border-accent/40 transition-all shadow-2xl group relative overflow-hidden rounded-[2.5rem]">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <BookOpen className="w-32 h-32" />
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-8 relative z-10">
                <div className="p-6 rounded-3xl bg-secondary group-hover:bg-accent/20 transition-all w-fit shadow-xl">
                  <GraduationCap className="w-10 h-10 text-accent" />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3 text-[10px] font-black text-accent uppercase tracking-[0.3em]">
                    <Calendar className="w-4 h-4" />
                    {item.period}
                  </div>
                  <h3 className="text-3xl font-headline font-black tracking-tight">{item.role}</h3>
                  <p className="text-primary font-bold text-xl">{item.company}</p>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium opacity-80">
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
