
"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "React / Next.js", level: "Expert", category: "Frontend" },
  { name: "TypeScript", level: "Expert", category: "Language" },
  { name: "Node.js", level: "Expert", category: "Backend" },
  { name: "Tailwind CSS", level: "Advanced", category: "Frontend" },
  { name: "PostgreSQL", level: "Advanced", category: "Backend" },
  { name: "AWS / Cloud", level: "Advanced", category: "Infrastructure" },
  { name: "Docker", level: "Advanced", category: "Infrastructure" },
  { name: "GraphQL", level: "Intermediate", category: "Backend" },
  { name: "Python", level: "Intermediate", category: "AI/Data" },
  { name: "GenAI / LLMs", level: "Advanced", category: "AI/Data" },
  { name: "Figma", level: "Intermediate", category: "Design" },
  { name: "Unit Testing", level: "Expert", category: "Quality" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-headline font-bold">Tech Stack</h2>
        <p className="text-muted-foreground">My dynamic toolkit for building world-class products.</p>
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
