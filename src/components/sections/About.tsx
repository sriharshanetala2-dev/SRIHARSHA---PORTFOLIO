
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Laptop, Rocket, Palette, Sparkles, Database } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function About() {
  const animeDevImage = PlaceHolderImages.find(img => img.id === "anime-dev");

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-[10px] font-black tracking-widest text-primary uppercase border border-primary/20">
                <Sparkles className="w-3 h-3" />
                The Story
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-black leading-tight">
                Orchestrating <br />
                <span className="text-gradient">Digital Symphonies</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
              <p>
                I don't just write code; I weave logic into experiences. My journey as a <span className="text-primary font-bold">Computer Science graduate</span> is a continuous exploration of the boundary where algorithmic efficiency meets human-centric design.
              </p>
              <p>
                Whether I'm architecting a robust <span className="text-accent font-bold">Full Stack ecosystem</span> or fine-tuning the choreography of a <span className="text-primary font-bold">UI interaction</span>, my goal is the same: to create software that doesn't just work, but feels like it breathes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Frontend", icon: Laptop, color: "text-blue-500" },
                { label: "Backend", icon: Database, color: "text-indigo-500" },
                { label: "UI/UX", icon: Palette, color: "text-purple-500" },
                { label: "AI Integration", icon: Rocket, color: "text-orange-500" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/50 border border-border/50 group hover:border-primary/50 transition-colors">
                  <div className={`p-2 rounded-xl bg-background shadow-sm group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm tracking-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse" />
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-border shadow-2xl group">
              {animeDevImage && (
                <Image 
                  src={animeDevImage.imageUrl}
                  alt="Anime Developer Working"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                  data-ai-hint={animeDevImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Dynamic Floating Badges */}
              <div className="absolute top-8 left-8 p-4 glass-card rounded-2xl flex items-center gap-3 animate-bounce shadow-xl">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest">Compiling Vision...</span>
              </div>
              
              <div className="absolute bottom-8 right-8 p-6 glass-card rounded-2xl space-y-2 max-w-[200px] shadow-2xl">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Active Status</p>
                <p className="text-sm font-bold leading-tight">Optimizing User Intent Analytics</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
