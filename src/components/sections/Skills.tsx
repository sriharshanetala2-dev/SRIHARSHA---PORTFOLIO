"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "React", level: "Advanced", category: "Frontend" },
  { name: "JavaScript", level: "Advanced", category: "Language" },
  { name: "HTML5 / CSS3", level: "Expert", category: "Frontend" },
  { name: "Bootstrap", level: "Advanced", category: "Frontend" },
  { name: "Python", level: "Intermediate", category: "Language" },
  { name: "Java", level: "Intermediate", category: "Language" },
  { name: "Spring Boot", level: "Intermediate", category: "Backend" },
  { name: "SQL", level: "Intermediate", category: "Backend" },
  { name: "Git / GitHub", level: "Advanced", category: "Tools" },
  { name: "AWS S3 Basics", level: "Intermediate", category: "Cloud" },
  { name: "Networking Fundamentals", level: "Intermediate", category: "Fundamentals" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
          My Capabilities
        </div>
        <h2 className="text-4xl font-headline font-bold">My Toolkit</h2>
        <p className="text-muted-foreground">A comprehensive list of the technologies and concepts I have mastered.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <TooltipProvider>
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <div className="cursor-default">
                  <Badge 
                    variant="outline" 
                    className="px-6 py-3 text-sm md:text-base border-border bg-card/50 hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-300 rounded-xl"
                  >
                    {skill.name}
                  </Badge>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-secondary border-border p-4 shadow-xl">
                <div className="space-y-1">
                  <p className="font-headline font-bold text-accent">{skill.name}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{skill.category}</p>
                  <div className="pt-2">
                    <div className="h-1.5 w-32 bg-background rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent" 
                        style={{ 
                          width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '80%' : '60%' 
                        }} 
                      />
                    </div>
                    <p className="text-[10px] mt-1 text-right font-bold text-accent/80">{skill.level}</p>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </section>
  );
}
