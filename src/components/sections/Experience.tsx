"use client";

import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Zap, BrainCircuit, Code2 } from "lucide-react";

const experience = [
  {
    role: "Java Full Stack Specialization",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Intensive program focused on building robust full-stack applications. Mastery of Java, Spring Boot, JDBC, and SQL, coupled with modern frontend architectures for high-performance user experiences.",
    icon: Code2
  },
  {
    role: "Generative AI Mastery",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Specialized training in AI orchestration and LLM integration. Successfully completed 'AI for All' certification and a top contributor in AI Buildathons, focusing on building AI-driven solutions.",
    icon: BrainCircuit
  },
  {
    role: "Independent Software Development",
    company: "Self-Directed Mastery",
    period: "2024 — 2025",
    description: "Dedicated phase post-graduation focused on applying core Computer Science principles. Built a series of technical projects to master back-end logic and real-time interactive UIs.",
    icon: Zap
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black text-accent uppercase tracking-[0.4em]">
            <Briefcase className="w-4 h-4" />
            Growth Timeline
          </div>
          <h2 className="text-5xl font-headline font-black tracking-tighter">TECHNICAL MASTERY</h2>
          <p className="text-muted-foreground text-lg font-medium">A specialized mapping of technical development and industry-aligned certifications.</p>
        </div>

        <div className="space-y-12 relative">
          <div className="absolute left-10 md:left-14 top-0 bottom-0 w-px bg-white/5 hidden sm:block" />

          {experience.map((item, idx) => (
            <div key={idx} className="relative">
              <Card 
                className="p-10 bg-card border-white/5 hover:border-accent/40 transition-all shadow-2xl group relative overflow-hidden rounded-[2.5rem]"
              >
                 <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                  <item.icon className="w-32 h-32" />
                </div>
                <div className="flex flex-col md:flex-row md:items-start gap-10 relative z-10">
                  <div className="p-6 rounded-[2rem] bg-secondary group-hover:bg-accent text-accent group-hover:text-accent-foreground transition-all duration-500 w-fit shadow-2xl">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3 text-[10px] font-black text-accent uppercase tracking-[0.3em]">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                    <h3 className="text-3xl font-headline font-black tracking-tight group-hover:text-accent transition-colors">{item.role}</h3>
                    <p className="text-primary font-bold text-xl">{item.company}</p>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium opacity-80">
                      {item.description}
                    </p>
                    
                    <div className="flex gap-3 pt-4">
                      <div className="h-1.5 w-16 bg-accent/20 rounded-full group-hover:w-32 group-hover:bg-accent transition-all duration-700" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
