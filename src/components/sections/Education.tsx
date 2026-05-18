
"use client";

import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const education = [
  {
    role: "B.Sc in Computer Science",
    company: "Glocal University",
    period: "2021 — 2024",
    description: "Focused on core computer science principles, software development, and modern engineering practices. Engaged in various technical projects and research initiatives.",
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
    description: "Completed secondary education with a strong academic record, focusing on English medium instruction and holistic development.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            <GraduationCap className="w-3 h-3" />
            My Foundation
          </div>
          <h2 className="text-4xl font-headline font-bold">Education</h2>
          <p className="text-muted-foreground">The academic background that shaped my technical understanding.</p>
        </div>

        <div className="space-y-8">
          {education.map((item, idx) => (
            <Card key={idx} className="p-8 bg-card border-border hover:border-accent/30 transition-all shadow-lg group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <BookOpen className="w-24 h-24" />
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-4 rounded-2xl bg-secondary group-hover:bg-accent/10 transition-colors w-fit">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </div>
                  <h3 className="text-2xl font-headline font-bold">{item.role}</h3>
                  <p className="text-primary font-medium text-lg">{item.company}</p>
                  <p className="text-muted-foreground leading-relaxed">
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
