"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Target, Zap, Layout, Database, Terminal, Globe, MousePointer2 } from "lucide-react";

export function About() {
  const [activeStep, setActiveStep] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    { title: "Blueprint", icon: Layout, detail: "Architecting responsive layouts", label: "Dashboard" },
    { title: "Logic", icon: Code, detail: "Writing clean, efficient code", label: "Editor" },
    { title: "Backend", icon: Database, detail: "Securing data infrastructure", label: "Database" },
    { title: "Deploy", icon: Globe, detail: "Launching to the world", label: "Hosting" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="about" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            <User className="w-3 h-3" />
            Who I Am
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            I am a passionate Junior Developer with a mission to create impactful digital experiences through clean code and innovative design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Problem Solver", icon: Code, desc: "I enjoy tackling complex challenges and breaking them down into manageable, efficient solutions using modern web technologies." },
            { title: "Quick Learner", icon: Zap, desc: "As a fresher, I am constantly learning and adapting to new frameworks and tools to stay at the forefront of the industry." },
            { title: "Goal Oriented", icon: Target, desc: "My focus is on delivering high-quality software that meets user needs and adds real value to business processes." }
          ].map((card, i) => (
            <Card key={i} className="group border-border bg-card/50 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8 space-y-4">
                <div className="p-4 w-fit rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 transform group-hover:rotate-6">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-bold">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="bg-secondary/10 rounded-3xl p-10 md:p-16 border border-border relative group/container transition-all duration-500 overflow-hidden"
        >
          {/* Interactive cursor follow effect */}
          <div 
            className="absolute pointer-events-none opacity-0 group-hover/container:opacity-20 transition-opacity duration-500 blur-[100px] w-64 h-64 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{ left: mousePos.x, top: mousePos.y }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <h3 className="text-3xl font-headline font-bold text-accent">My Creative Process</h3>
              <p className="text-muted-foreground leading-relaxed">
                My workflow is built on a foundation of clarity and performance. I don't just write code; I build systems that solve real problems.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {steps.map((step, idx) => (
                  <div 
                    key={step.title}
                    className={`p-4 rounded-2xl border transition-all duration-500 flex items-center gap-4 cursor-pointer ${
                      activeStep === idx 
                      ? "bg-accent/20 border-accent text-accent shadow-[0_0_25px_rgba(var(--accent),0.1)] scale-[1.02]" 
                      : "bg-card/50 border-border text-muted-foreground hover:border-accent/40"
                    }`}
                    onClick={() => setActiveStep(idx)}
                  >
                    <step.icon className={`w-5 h-5 ${activeStep === idx ? "animate-pulse" : ""}`} />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-tight">{step.title}</p>
                      <p className="text-[10px] opacity-70">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-4">
                {[
                  "Responsive & Accessible UI",
                  "Performance First Architecture",
                  "Secure & Scalable Backend logic",
                  "Continuous Learning & Integration"
                ].map((item, i) => (
                  <div key={item} className="flex items-center gap-3 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-[2] transition-transform duration-300" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive App Simulation */}
            <div 
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-[#0f1115] border border-border transition-transform duration-500 ease-out hover:scale-[1.02] hover:shadow-accent/10"
              style={{
                transform: `perspective(1000px) rotateX(${(mousePos.y - 300) / 50}deg) rotateY(${(mousePos.x - 400) / 50}deg)`
              }}
            >
              <div className="h-8 bg-secondary/80 border-b border-border flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-3 py-0.5 rounded bg-background/50 text-[10px] text-muted-foreground border border-border flex items-center gap-1.5">
                    <Terminal className="w-2.5 h-2.5" />
                    localhost:3000
                  </div>
                </div>
              </div>

              <div className="flex h-[calc(100%-32px)]">
                <div className="w-20 border-r border-border bg-card/30 flex flex-col py-6 gap-6">
                  {steps.map((step, idx) => (
                    <div 
                      key={idx}
                      className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                        activeStep === idx ? "text-accent scale-110" : "text-muted-foreground/20 hover:text-muted-foreground/40"
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${activeStep === idx ? "bg-accent/10" : ""}`}>
                        <step.icon className="w-4 h-4" />
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-tighter">{step.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex-1 p-6 relative overflow-hidden bg-gradient-to-br from-background to-card/50">
                   <div className="space-y-6">
                     <div className="flex items-center justify-between">
                        <div className="h-4 w-1/3 bg-accent/20 rounded animate-pulse" />
                        <div className="flex gap-2">
                           <div className="w-10 h-4 rounded bg-secondary/50 border border-border" />
                           <div className="w-10 h-4 rounded bg-accent/20 border border-accent/20" />
                        </div>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-4">
                        <div className="h-28 rounded-xl bg-secondary/50 border border-border p-4 space-y-3 relative overflow-hidden group/card">
                           <div className="h-2 w-full bg-muted/30 rounded" />
                           <div className="h-2 w-2/3 bg-muted/30 rounded" />
                           <div className={`h-1.5 w-1/2 rounded transition-all duration-1000 ${activeStep === 1 ? 'bg-accent w-full' : 'bg-muted/10'}`} />
                           <div className="absolute top-2 right-2 text-[8px] text-muted-foreground/30 font-code">FILE: main.tsx</div>
                        </div>
                        <div className="h-28 rounded-xl bg-secondary/50 border border-border p-4 flex flex-col justify-between">
                           <div className="flex justify-between items-center">
                              <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center">
                                 <Layout className="w-3 h-3 text-accent" />
                              </div>
                              <div className="flex items-center gap-1">
                                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                 <span className="text-[8px] text-muted-foreground uppercase font-bold">Online</span>
                              </div>
                           </div>
                           <div className="space-y-2">
                              <p className="text-[8px] text-muted-foreground font-bold">Uptime: 99.9%</p>
                              <div className="h-3 w-full bg-accent/10 rounded-full overflow-hidden">
                                 <div 
                                   className="h-full bg-accent transition-all duration-1000" 
                                   style={{ width: `${(activeStep + 1) * 25}%` }}
                                 />
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="h-28 rounded-xl bg-card border border-border p-4 relative">
                        <div className="flex items-center gap-2 mb-4 border-b border-border pb-2">
                           <Terminal className="w-3 h-3 text-muted-foreground/40" />
                           <span className="text-[10px] text-muted-foreground/60 font-code">Terminal — bash</span>
                        </div>
                        <div className="space-y-2 font-code">
                           <div className="flex gap-2">
                              <span className="text-accent text-[8px]">$</span>
                              <div className="h-2 w-full bg-muted/20 rounded" />
                           </div>
                           <div className="flex gap-2">
                              <span className="text-accent text-[8px] font-bold">DEPLOYED SUCCESS</span>
                           </div>
                        </div>
                        <div className="absolute bottom-4 right-4 animate-bounce z-20">
                           <MousePointer2 className="w-4 h-4 text-accent fill-accent" />
                        </div>
                     </div>
                   </div>

                   <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-background/95 backdrop-blur-xl border border-accent/40 p-4 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                         <div className="flex items-center gap-3">
                            <div className="p-2 bg-accent/10 rounded-lg text-accent">
                               {(() => {
                                 const StepIcon = steps[activeStep].icon;
                                 return <StepIcon className="w-4 h-4" />;
                               })()}
                            </div>
                            <div className="flex-1">
                               <p className="text-[10px] font-black text-accent uppercase tracking-widest">{steps[activeStep].title} Phase</p>
                               <p className="text-[10px] text-muted-foreground font-medium">Processing: {steps[activeStep].label} Menu Active</p>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}