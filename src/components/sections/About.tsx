"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Laptop, Palette, Sparkles, Database, Cpu } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function About() {
  const animeDevImage = PlaceHolderImages.find(img => img.id === "anime-dev");

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-[10px] font-black tracking-widest text-primary uppercase border border-primary/20">
                <Sparkles className="w-3 h-3" />
                The Creative Logic
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-headline font-black leading-[1.1] tracking-tighter">
                Orchestrating <br />
                <span className="text-gradient">Digital Symphonies</span>
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              <p>
                My journey as a <span className="text-primary font-bold">B.Sc Computer Science graduate</span> is driven by the thrill of solving complex puzzles. I don't just build websites; I engineer interactive environments where logic meets creativity.
              </p>
              <p>
                Specializing in <span className="text-accent font-bold">Full Stack & UI Development</span>, I focus on the "choreography" of data and design. Every line of code is a note in a larger computational sequence, aimed at delivering seamless experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Frontend", icon: Laptop, color: "text-blue-500", desc: "Pixel-perfect builds" },
                { label: "Full Stack", icon: Database, color: "text-indigo-500", desc: "Logic sync" },
                { label: "UI Design", icon: Palette, color: "text-purple-500", desc: "Intuitive flows" },
                { label: "AI Logic", icon: Cpu, color: "text-orange-500", desc: "Next-gen automation" }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-background border border-border group hover:border-primary transition-all"
                >
                  <div className={`p-3 rounded-xl bg-secondary ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm tracking-tight">{item.label}</span>
                    <span className="text-[10px] text-muted-foreground uppercase">{item.desc}</span>
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
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border-2 border-primary/20 shadow-2xl group">
              {animeDevImage && (
                <Image 
                  src={animeDevImage.imageUrl}
                  alt="Developer working at desk"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint="anime developer"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              
              <div className="absolute top-10 left-10 p-4 glass-card rounded-2xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                <span className="text-[10px] font-black uppercase tracking-widest">Logic Initialized...</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}