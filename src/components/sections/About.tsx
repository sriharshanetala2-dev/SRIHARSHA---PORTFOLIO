
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Target, Zap, Layout, Database, Globe, Layers, Cpu } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function About() {
  const [activeStep, setActiveStep] = useState(0);
  const creativeImage = PlaceHolderImages.find(img => img.id === "creative-process");

  const steps = [
    { title: "Architect", icon: Layout, detail: "Structural Schema Design" },
    { title: "Develop", icon: Code, detail: "High-Efficiency Logic Synthesis" },
    { title: "Integrate", icon: Database, detail: "Distributed Data Persistence" },
    { title: "Optimize", icon: Zap, detail: "Performance & Throughput Tuning" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-[9px] font-black tracking-widest text-primary uppercase">
                <Cpu className="w-3 h-3" />
                The Craft
              </div>
              <h2 className="text-5xl md:text-8xl font-headline font-black leading-none tracking-tighter">
                ENGINEERING <br />
                <span className="text-primary">PHILOSOPHY</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">
                I translate complex business requirements into elegant software architectures. My methodology bridges the gap between raw data integrity and fluid, intelligent user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Logical Rigor", icon: Target, desc: "Decomposing multi-faceted problems into deterministic code solutions." },
                { title: "Neural Sync", icon: Zap, desc: "Implementing semantic AI layers to enhance application intelligence." },
                { title: "Scalable Core", icon: Database, desc: "Building modular systems designed for long-term growth and stability." },
                { title: "UX Precision", icon: Layout, desc: "Synthesizing intuitive interfaces with pixel-perfect architectural execution." }
              ].map((item, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="p-4 w-fit rounded-[1.5rem] bg-foreground/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-black text-xl uppercase tracking-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium opacity-70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="glass-card rounded-[3rem] p-10 space-y-10 border-foreground/5">
              <div className="flex items-center justify-between border-b border-foreground/5 pb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-black uppercase tracking-[0.3em] text-[10px]">Active Sequence</span>
                    <p className="text-xs font-bold opacity-40">System Lifecycle Node</p>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-accent/10 text-[9px] font-black text-accent uppercase tracking-widest animate-pulse">
                  Processing
                </div>
              </div>

              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden group border border-foreground/5 shadow-2xl">
                {creativeImage && (
                  <Image 
                    src={creativeImage.imageUrl}
                    alt="Process Illustration"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[4000ms] opacity-80"
                    data-ai-hint={creativeImage.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-8 left-8 right-8 p-8 glass-card rounded-[2rem] flex items-center gap-6 animate-in slide-in-from-bottom-6 shadow-3xl">
                  <div className="p-4 bg-primary text-primary-foreground rounded-2xl shadow-lg shadow-primary/30">
                    {(() => {
                      const Icon = steps[activeStep].icon;
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-primary tracking-[0.4em] mb-1">Module: {steps[activeStep].title}</p>
                    <p className="font-black text-lg tracking-tight">{steps[activeStep].detail}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                {steps.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-1 flex-1 rounded-full transition-all duration-700 ${activeStep === idx ? "bg-primary" : "bg-foreground/10"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
