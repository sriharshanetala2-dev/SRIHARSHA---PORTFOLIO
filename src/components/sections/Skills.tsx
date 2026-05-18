"use client";

import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Zap, Code2, Database, Globe, Cpu, Layout, Terminal } from "lucide-react";

const skills = [
  { name: "React / Next.js", level: "Advanced", category: "Frontend", icon: Layout },
  { name: "Spring Boot", level: "Intermediate", category: "Backend", icon: Database },
  { name: "Java / JDBC", level: "Advanced", category: "Language", icon: Code2 },
  { name: "Python / Pandas", level: "Intermediate", category: "Language", icon: Terminal },
  { name: "JavaScript (ES6+)", level: "Advanced", category: "Language", icon: Code2 },
  { name: "SQL / PostgreSQL", level: "Advanced", category: "Database", icon: Database },
  { name: "HTML5 / CSS3", level: "Expert", category: "Frontend", icon: Layout },
  { name: "Tailwind / Bootstrap", level: "Advanced", category: "Frontend", icon: Layout },
  { name: "AWS S3 / Cloud", level: "Intermediate", category: "Cloud", icon: Globe },
  { name: "Git / GitHub", level: "Advanced", category: "Tools", icon: Terminal },
  { name: "Networking / OSI", level: "Intermediate", category: "Fundamentals", icon: Globe },
  { name: "IP Subnetting", level: "Advanced", category: "Fundamentals", icon: Cpu },
  { name: "Data Structures", level: "Advanced", category: "Fundamentals", icon: Code2 },
  { name: "System Architecture", level: "Intermediate", category: "Fundamentals", icon: Cpu },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            <Zap className="w-3 h-3" />
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Technical Toolkit</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive overview of the specialized technologies and core engineering principles I leverage to build modern solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <TooltipProvider delayDuration={100}>
            {skills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <div className="group">
                    <Badge 
                      variant="outline" 
                      className="px-6 py-4 text-sm md:text-base border-border bg-card/40 backdrop-blur-sm hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-500 rounded-2xl cursor-default flex items-center gap-3 shadow-sm hover:shadow-accent/20 group-hover:-translate-y-1"
                    >
                      <skill.icon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <span className="font-semibold tracking-tight">{skill.name}</span>
                    </Badge>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-secondary/95 backdrop-blur-md border-border p-4 shadow-2xl rounded-xl">
                  <div className="space-y-3 min-w-[140px]">
                    <div className="flex items-center justify-between">
                      <p className="font-headline font-bold text-accent">{skill.name}</p>
                      <skill.icon className="w-3 h-3 text-accent" />
                    </div>
                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">{skill.category} Expertise</p>
                    <div className="space-y-1.5">
                      <div className="h-1.5 w-full bg-background rounded-full overflow-hidden border border-border/50">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out" 
                          style={{ 
                            width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '85%' : '65%' 
                          }} 
                        />
                      </div>
                      <p className="text-[9px] text-right font-bold text-accent/80">{skill.level} Proficiency</p>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>

        <div className="flex justify-center gap-8 pt-8 opacity-40">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Frontend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Backend</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Core Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
