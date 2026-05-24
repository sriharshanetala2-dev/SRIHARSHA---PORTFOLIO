"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  BrainCircuit, 
  Layers, 
  GraduationCap, 
  BookOpen,
  CalendarDays
} from "lucide-react";

const timelineItems = [
  {
    id: "01",
    type: "work",
    role: "Java Full Stack Developer",
    company: "NxtWave Academy",
    period: "2025 — 2026",
    description: "Architecting high-performance enterprise systems with Java 21, Spring Boot, and PostgreSQL. Mastering the orchestration of complex full-stack ecosystems.",
    icon: Code2
  },
  {
    id: "02",
    type: "work",
    role: "Generative AI Specialist",
    company: "AI Buildathons & Academy",
    period: "2025 — 2026",
    description: "Developing autonomous task agents and semantic intent layers using Google Genkit, Claude 3.5, and Gemini 2.0.",
    icon: BrainCircuit
  },
  {
    id: "03",
    type: "work",
    role: "Full Stack Software Developer",
    company: "Independent Projects",
    period: "2024 — 2025",
    description: "Building responsive digital platforms with React, Node.js, and Python focusing on atomic data mutations and real-time logic.",
    icon: Layers
  },
  {
    id: "04",
    type: "edu",
    role: "B.Sc in Computer Science",
    institution: "Glocal University",
    period: "Academic Registry",
    description: "Graduated with honors focusing on computational logic, data structures, and systems engineering principles.",
    icon: GraduationCap
  }
];

export function ProfessionalTimeline() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="section-label mx-auto">DEVELOPER JOURNEY</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Professional Registry</h2>
        </div>

        <div className="relative space-y-12">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          {timelineItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row gap-8 pl-0 md:pl-20"
            >
              <div className="absolute left-6 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />
              <div className="flex-1 space-y-4 bg-card p-8 rounded-2xl border border-border shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold leading-none">{item.role}</h3>
                      <p className="text-sm text-primary font-bold mt-2">{item.company || item.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                    <CalendarDays className="w-3 h-3" />
                    {item.period}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}