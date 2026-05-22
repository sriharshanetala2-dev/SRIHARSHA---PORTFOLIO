"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Laptop, Rocket, Palette, Sparkles, Database, ChevronRight } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function About() {
  const animeDevImage = PlaceHolderImages.find(img => img.id === "anime-dev");

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-[10px] font-black tracking-widest text-primary uppercase border border-primary/20">
                <Sparkles className="w-3 h-3" />
                The Narrative
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-headline font-black leading-[1.1] tracking-tighter">
                Orchestrating <br />
                <span className="text-gradient">Digital Symphonies</span>
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              <p>
                I don't just write code; I weave logic into experiences. My journey as a <span className="text-primary font-bold">B.Sc Computer Science graduate</span> is a continuous exploration of the boundary where algorithmic efficiency meets human-centric design.
              </p>
              <p>
                Whether I'm architecting a robust <span className="text-accent font-bold">Full Stack ecosystem</span> or fine-tuning the choreography of a <span className="text-primary font-bold">UI interaction</span>, my goal is the same: to create software that doesn't just work, but feels like it breathes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { label: "Frontend", icon: Laptop, color: "text-blue-500", desc: "Pixel-perfect React builds" },
                { label: "Backend", icon: Database, color: "text-indigo-500", desc: "Robust data architectures" },
                { label: "UI/UX", icon: Palette, color: "text-purple-500", desc: "Intuitive user journeys" },
                { label: "AI Integration", icon: Rocket, color: "text-orange-500", desc: "Next-gen intelligent apps" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-5 rounded-[2rem] bg-secondary/30 border border-border/50 group hover:border-primary/50 transition-all shadow-sm"
                >
                  <div className={`p-3 rounded-2xl bg-background shadow-inner group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm tracking-tight">{item.label}</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="relative aspect-square rounded-[3.5rem] overflow-hidden border border-border shadow-3xl group">
              {animeDevImage && (
                <Image 
                  src={animeDevImage.imageUrl}
                  alt="Creative Developer Visualization"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  data-ai-hint={animeDevImage.imageHint}
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              
              {/* Dynamic Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 p-4 glass-card rounded-2xl flex items-center gap-3 shadow-2xl backdrop-blur-xl border-white/10"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest">Logic Synthesizing...</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-10 p-6 glass-card rounded-2xl space-y-2 max-w-[220px] shadow-3xl backdrop-blur-xl border-white/10"
              >
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Active Status</p>
                <p className="text-sm font-bold leading-tight">Optimizing Computational Efficiency</p>
                <div className="flex items-center gap-1 text-[9px] font-bold text-muted-foreground">
                  Learn more <ChevronRight className="w-3 h-3" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
