
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Target, Zap, Layout, Database, Globe, MousePointer2, Sparkles } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function About() {
  const [activeStep, setActiveStep] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const creativeImage = PlaceHolderImages.find(img => img.id === "creative-process");

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

            {/* Anime Illustration Container */}
            <div 
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-card border border-border transition-transform duration-500 ease-out hover:scale-[1.02] hover:shadow-accent/10"
              style={{
                transform: `perspective(1000px) rotateX(${(mousePos.y - 300) / 50}deg) rotateY(${(mousePos.x - 400) / 50}deg)`
              }}
            >
              {creativeImage && (
                <Image 
                  src={creativeImage.imageUrl}
                  alt="Creative Process Illustration"
                  fill
                  className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-[2000ms]"
                  data-ai-hint={creativeImage.imageHint}
                />
              )}
              
              {/* Overlay elements to keep it feeling techy */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <div className="w-2 h-2 rounded-full bg-green-500/80" />
                </div>
                <div className="px-3 py-1 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 text-[10px] font-black text-accent uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  {steps[activeStep].title} Mode
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/80 backdrop-blur-xl border border-accent/30 p-5 rounded-2xl shadow-2xl transform transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl text-accent">
                      {(() => {
                        const StepIcon = steps[activeStep].icon;
                        return <StepIcon className="w-5 h-5" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-1">Current Focus</p>
                      <p className="text-sm font-bold text-foreground">{steps[activeStep].detail}</p>
                    </div>
                    <div className="relative">
                      <div className="w-2 h-2 rounded-full bg-accent animate-ping absolute inset-0" />
                      <div className="w-2 h-2 rounded-full bg-accent relative" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Scanline effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
