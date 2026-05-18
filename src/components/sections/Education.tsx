
"use client";

import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const education = [
  {
    role: "B.Tech in Computer Science & Engineering",
    company: "Engineering College of Excellence",
    period: "2020 — 2024",
    description: "Focusing on Software Engineering, Database Management Systems, and Web Technologies. Maintained a consistent high GPA.",
  },
  {
    role: "Advanced Web Development Certification",
    company: "Online Learning Platform",
    period: "2022",
    description: "Completed intensive training in modern JavaScript (ES6+), React, and Backend basics. Earned certification after finishing multiple real-world projects.",
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
