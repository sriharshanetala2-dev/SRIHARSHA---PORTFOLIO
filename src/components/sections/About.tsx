"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Laptop, Palette, Sparkles, Database, Cpu } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function About() {
  const aiVisual = PlaceHolderImages.find(img => img.id === "ai-about-visual");

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden bg-secondary/5">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-[10px] font-black tracking-[0.4em] text-primary uppercase border border-primary/20">
                <Sparkles className="w-3.5 h-3.5" />
                The Creative Logic
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-headline font-black leading-[1.1] tracking-tighter uppercase">
                Orchestrating <br />
                <span className="text-gradient">Digital Symphonies</span>
              </h2>
            </div>

            <div className="space-y-8 text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">
              <p>
                My journey as a <span className="text-primary font-bold">B.Sc Computer Science graduate</span> is driven by the thrill of solving complex puzzles. I don't just build websites; I engineer interactive environments where logic meets creativity.
              </p>
              <p>
                Specializing in <span className="text-accent font-bold">Full Stack & UI Development</span>, I focus on the "choreography" of data and design. Every line of code is a note in a larger computational sequence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Frontend", icon: Laptop, color: "text-blue-500", desc: "Pixel-perfect builds" },
                { label: "Full Stack", icon: Database, color: "text-indigo-500", desc: "Logic sync" },
                { label: "UI Design", icon: Palette, color: "text-purple-500", desc: "Intuitive flows" },
                { label: "AI Logic", icon: Cpu, color: "text-orange-500", desc: "Neural optimization" }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border group hover:border-primary transition-all shadow-sm"
                >
                  <div className={`p-3 rounded-xl bg-secondary ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-sm uppercase tracking-tight">{item.label}</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[4rem] overflow-hidden border-2 border-primary/20 shadow-3xl group">
              {aiVisual && (
                <Image 
                  src={aiVisual.imageUrl}
                  alt="AI Logic Matrix"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0"
                  data-ai-hint="artificial intelligence"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-10 left-10 p-6 glass-card rounded-3xl flex items-center gap-4">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-ping absolute inset-0" />
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_12px_#22c55e]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">System Status</span>
                  <span className="text-xs font-bold text-green-500 uppercase tracking-widest">Neural Logic Active</span>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}