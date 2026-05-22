
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Laptop, Palette, Database, Cpu, BrainCircuit, Activity } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function About() {
  const aiVisual = PlaceHolderImages.find(img => img.id === "ai-about-visual");

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-[9px] font-black tracking-[0.4em] text-primary uppercase border border-primary/20">
                <BrainCircuit className="w-3.5 h-3.5" />
                Logic Synthesis Node
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-black leading-[1.1] tracking-tighter uppercase">
                Bridging Theory <br />
                <span className="text-gradient">& Experience</span>
              </h2>
            </div>

            <div className="space-y-8 text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
              <p>
                As a <span className="text-primary font-bold">B.Sc Computer Science graduate</span>, I view software as a medium for structured creativity. Every interface I engineer is a symphony of computational logic and pixel-perfect choreography.
              </p>
              <p>
                My approach focuses on architectural precision. I don't just build components; I design systems where <span className="text-accent font-bold uppercase tracking-widest text-xs">High Performance</span> meets seamless human interaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Frontend", icon: Laptop, color: "text-blue-500", desc: "Pixel-perfect builds" },
                { label: "Full Stack", icon: Database, color: "text-indigo-500", desc: "Real-time logic sync" },
                { label: "UI Design", icon: Palette, color: "text-purple-500", desc: "Interaction design" },
                { label: "AI Systems", icon: Cpu, color: "text-orange-500", desc: "Neural orchestration" }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-secondary/20 border border-border/50 group hover:border-primary transition-all shadow-sm"
                >
                  <div className={`p-3 rounded-xl bg-background ${item.color} group-hover:scale-110 transition-transform shadow-inner`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-[10px] uppercase tracking-widest">{item.label}</span>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-[0.1em] font-bold">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-border shadow-3xl bg-secondary/10 data-flow-grid group">
              {aiVisual && (
                <Image 
                  src={aiVisual.imageUrl}
                  alt="Neural Logic Matrix"
                  fill
                  className="object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"
                  data-ai-hint="data flow"
                />
              )}
              
              {/* Dynamic Flow Elements - AI Tech Flow Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-3/4 h-3/4 border-2 border-primary/20 rounded-full animate-pulse flex items-center justify-center">
                    <div className="w-2/3 h-2/3 border border-primary/10 rounded-full animate-ping" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent)]" />
                    <Activity className="w-16 h-16 text-primary absolute opacity-40 animate-pulse" />
                 </div>
                 
                 {/* Floating Data Nodes */}
                 {[...Array(6)].map((_, i) => (
                   <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -20, 0],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ 
                      duration: 3 + i, 
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    className="absolute w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]"
                    style={{
                      left: `${20 + (i * 12)}%`,
                      top: `${30 + (i * 8)}%`
                    }}
                   />
                 ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 p-5 glass-card rounded-2xl flex items-center gap-4 border border-white/5">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping absolute inset-0" />
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em]">Logic Stream</span>
                  <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Active Synthesis</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
