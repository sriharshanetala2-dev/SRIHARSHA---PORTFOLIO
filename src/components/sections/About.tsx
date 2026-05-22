"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Target, Zap, Layout, Database, Globe, Layers } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function About() {
  const [activeStep, setActiveStep] = useState(0);
  const creativeImage = PlaceHolderImages.find(img => img.id === "creative-process");

  const steps = [
    { title: "Architect", icon: Layout, detail: "Defining structure and flow" },
    { title: "Develop", icon: Code, detail: "Crafting clean, scalable logic" },
    { title: "Integrate", icon: Database, detail: "Managing data ecosystems" },
    { title: "Launch", icon: Globe, detail: "Optimizing for performance" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-headline font-bold">About My <span className="text-primary">Craft</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I am a passionate Junior Developer focused on bridging the gap between complex engineering requirements and intuitive user experiences. My approach combines foundational Java strength with modern AI innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Problem Solving", icon: Target, desc: "Breaking down complex logic into elegant solutions." },
                { title: "Rapid Growth", icon: Zap, desc: "Constantly evolving with the latest tech stacks." },
                { title: "Clean Code", icon: Code, desc: "Writing readable, maintainable, and efficient code." },
                { title: "User Centric", icon: Layout, desc: "Designing for the human on the other side." }
              ].map((item, i) => (
                <div key={i} className="space-y-3 p-6 glass-card rounded-2xl hover:border-primary/30 transition-all group">
                  <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse" />
            <div className="glass-card rounded-[2.5rem] p-8 space-y-8">
              <div className="flex items-center justify-between border-b border-white/5 pb-6">
                <div className="flex items-center gap-3">
                  <Layers className="w-6 h-6 text-primary" />
                  <span className="font-bold uppercase tracking-widest text-xs">Work Sequence</span>
                </div>
                <div className="px-3 py-1 rounded-full glass-card text-[10px] font-bold text-primary">LIVE FLOW</div>
              </div>

              <div className="relative aspect-square rounded-3xl overflow-hidden group">
                {creativeImage && (
                  <Image 
                    src={creativeImage.imageUrl}
                    alt="Process Illustration"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                    data-ai-hint={creativeImage.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-2xl flex items-center gap-4 animate-in slide-in-from-bottom-4">
                  <div className="p-3 bg-primary text-primary-foreground rounded-xl">
                    {(() => {
                      const Icon = steps[activeStep].icon;
                      return <Icon className="w-5 h-5" />;
                    })()}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">Active Step</p>
                    <p className="font-bold text-sm">{steps[activeStep].detail}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {steps.map((step, idx) => (
                  <div 
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-500 ${activeStep === idx ? "bg-primary w-full" : "bg-white/10"}`}
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