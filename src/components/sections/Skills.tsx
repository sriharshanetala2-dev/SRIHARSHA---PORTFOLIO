"use client";

import { Badge } from "@/components/ui/badge";
import { Zap, Code2, Database, Globe, Cpu, Layout, Terminal } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const skills = [
  { name: "React / Next.js", level: "Advanced", category: "Frontend", icon: Layout },
  { name: "Spring Boot", level: "Intermediate", category: "Backend", icon: Database },
  { name: "Java / JDBC", level: "Advanced", category: "Language", icon: Code2 },
  { name: "Python / Pandas", level: "Intermediate", category: "Language", icon: Terminal },
  { name: "JavaScript (ES6+)", level: "Advanced", category: "Language", icon: Code2 },
  { name: "SQL / PostgreSQL", level: "Advanced", category: "Database", icon: Database },
  { name: "HTML5 / CSS3", level: "Expert", category: "Frontend", icon: Layout },
  { name: "Tailwind CSS", level: "Advanced", category: "Frontend", icon: Layout },
  { name: "AWS Cloud", level: "Intermediate", category: "Cloud", icon: Globe },
  { name: "Git / GitHub", level: "Advanced", category: "Tools", icon: Terminal },
  { name: "Networking", level: "Intermediate", category: "Fundamentals", icon: Globe },
  { name: "IP Subnetting", level: "Advanced", category: "Fundamentals", icon: Cpu },
  { name: "Data Structures", level: "Advanced", category: "Fundamentals", icon: Code2 },
  { name: "Architecture", level: "Intermediate", category: "Fundamentals", icon: Cpu },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-[10px] font-black tracking-widest text-primary uppercase">
            <Zap className="w-3 h-3" />
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-6xl font-headline font-bold">Technical <span className="text-primary">Ecosystem</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            A comprehensive view of my technical toolkit, ranging from core software engineering principles to modern web technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <TooltipProvider delayDuration={0}>
            {skills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <div className="glass-card px-8 py-5 rounded-3xl hover:border-primary/50 transition-all cursor-default group">
                    <div className="flex items-center gap-4">
                      <skill.icon className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                      <span className="font-bold tracking-tight text-lg">{skill.name}</span>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="glass-card p-6 border-white/10 rounded-2xl w-56 space-y-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-primary tracking-widest">{skill.category}</p>
                    <p className="font-bold text-lg">{skill.name}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase opacity-50">
                      <span>Proficiency</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '85%' : '65%' }} 
                      />
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>

        <div className="flex flex-wrap justify-center gap-12 pt-10 opacity-30">
          {[
            { label: "Frontend", color: "bg-primary" },
            { label: "Backend", color: "bg-accent" },
            { label: "Languages", color: "bg-white" }
          ].map(type => (
            <div key={type.label} className="flex items-center gap-2">
              <div className={cn("w-1.5 h-1.5 rounded-full", type.color)} />
              <span className="text-[10px] font-bold uppercase tracking-widest">{type.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}