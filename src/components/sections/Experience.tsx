"use client";

import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Award, Star, Code2, GraduationCap, Zap, Globe, Sparkles } from "lucide-react";

const experience = [
  {
    role: "Advanced AI & Cloud Specialization",
    company: "Self-Paced Innovation & Research",
    period: "2027 — Future",
    description: "Architecting a self-paced roadmap for the next frontier of engineering: AI-native applications and scalable cloud-first infrastructures. Focusing on advanced GenAI patterns, RAG systems, and high-concurrency backend design through independent research.",
    icon: Sparkles
  },
  {
    role: "Full-Stack Specialization & Certification",
    company: "NxtWave Academy (Self-Paced Intensive)",
    period: "2025 — 2026",
    description: "Completing an industry-ready certification program via a self-paced curriculum. Mastered the MERN stack (MongoDB, Express, React, Node.js) through hands-on coding, solving 500+ algorithmic problems, and building scalable full-stack applications.",
    icon: Award
  },
  {
    role: "Self-Directed Full-Stack Development",
    company: "Independent Learning Journey",
    period: "2024 — 2025",
    description: "Dedicated a self-paced period post-graduation to mastering modern web architecture. Built a portfolio of responsive applications using React, Next.js, and Firebase, focusing on clean code principles and UI/UX best practices.",
    icon: Zap
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            <Briefcase className="w-3 h-3" />
            My Growth Path
          </div>
          <h2 className="text-4xl font-headline font-bold">Self-Paced Engineering Journey</h2>
          <p className="text-muted-foreground">A timeline of independent skill acquisition and industry-ready specialization.</p>
        </div>

        <div className="space-y-8 relative">
          <div className="absolute left-10 md:left-12 top-0 bottom-0 w-px bg-border/50 hidden sm:block" />

          {experience.map((item, idx) => (
            <Card 
              key={idx} 
              className="p-8 bg-card border-border hover:border-accent/30 transition-all shadow-lg group relative overflow-hidden tilt-element"
            >
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-24 h-24" />
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                <div className="p-4 rounded-2xl bg-secondary group-hover:bg-accent text-accent group-hover:text-accent-foreground transition-all duration-300 w-fit shadow-lg">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </div>
                  <h3 className="text-2xl font-headline font-bold group-hover:text-accent transition-colors">{item.role}</h3>
                  <p className="text-primary font-medium text-lg">{item.company}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex gap-2 pt-2">
                    <div className="h-1 w-12 bg-accent/20 rounded-full group-hover:w-24 group-hover:bg-accent transition-all duration-500" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
