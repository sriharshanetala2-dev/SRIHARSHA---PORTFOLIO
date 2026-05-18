
"use client";

import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Award, Star } from "lucide-react";

const experience = [
  {
    role: "Web Development Intern",
    company: "Tech Solutions Inc.",
    period: "June 2023 — December 2023",
    description: "Assisted in building responsive front-end components using React and Tailwind CSS. Participated in daily stand-ups and learned agile development workflows.",
  },
  {
    role: "Capstone Project: Student Management System",
    company: "Academic Project",
    period: "2023",
    description: "Developed a full-stack application to manage student records, using React for the frontend and Firebase for the backend database and authentication.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            <Briefcase className="w-3 h-3" />
            Professional Path
          </div>
          <h2 className="text-4xl font-headline font-bold">Experience</h2>
          <p className="text-muted-foreground">Real-world application of my skills through internships and major projects.</p>
        </div>

        <div className="space-y-8">
          {experience.map((item, idx) => (
            <Card key={idx} className="p-8 bg-card border-border hover:border-accent/30 transition-all shadow-lg group relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                <Star className="w-24 h-24" />
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-4 rounded-2xl bg-secondary group-hover:bg-accent/10 transition-colors w-fit">
                  <Briefcase className="w-8 h-8 text-accent" />
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
