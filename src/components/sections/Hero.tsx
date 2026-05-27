'use client';

import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Zap, Terminal, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'system-backdrop');

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-8 relative overflow-hidden bg-background">
      {/* High-Fidelity Background Image Layer - Enhanced Visibility */}
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-90 brightness-[0.9] transition-opacity duration-1000"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          {/* Refined Overlays for Peak Visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background)/0.7)_100%)] z-10" />
        </div>
      )}
      
      {/* Neural Interface Background Overlay */}
      <div className="absolute inset-0 neural-grid opacity-[0.1] pointer-events-none z-[5]" />
      
      {/* Dynamic Luminous Nodes */}
      <div className="absolute top-[10%] left-[-15%] w-[70%] h-[70%] bg-primary/15 rounded-full blur-[180px] pointer-events-none animate-pulse-slow z-[2]" />
      <div className="absolute bottom-[-10%] right-[-15%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[180px] pointer-events-none animate-pulse-slow z-[2]" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto text-center space-y-8 sm:space-y-16 relative z-[10] w-full">
        <div className="space-y-6 sm:space-y-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-7xl font-headline font-black tracking-tighter uppercase flex flex-col items-center select-none leading-[0.95] sm:leading-[1.05]">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-foreground"
              >
                Full Stack & App
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="shimmer-text px-4"
              >
                Developer
              </motion.span>
            </h1>
          </motion.div>
          
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xs xs:text-sm sm:text-xl lg:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed font-bold uppercase tracking-tight opacity-90 px-4"
            >
              Architecting high-performance digital ecosystems where technical integrity meets autonomous orchestration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="section-label mx-auto"
            >
              <Activity className="w-4 h-4 text-primary animate-pulse" />
              SYSTEM_INIT: SUCCESS_v6.0
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
        >
          <Button size="lg" className="w-full sm:w-auto rounded-full h-12 sm:h-14 px-8 sm:px-12 text-[10px] sm:text-sm font-black uppercase tracking-[0.4em] shadow-xl hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:scale-105 active:scale-95 bg-primary text-primary-foreground transition-all duration-300 group border-none" asChild>
            <a href="#portfolio">
              Archive <ArrowRight className="ml-3 sm:ml-4 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-3 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full h-12 sm:h-14 px-8 sm:px-12 text-[10px] sm:text-sm font-black uppercase tracking-[0.4em] text-primary hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] hover:scale-105 active:scale-95 transition-all duration-300 border-none bg-secondary/20" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </motion.div>

        <div className="pt-8 sm:pt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {[
            { label: "Core Kernel", value: "Neural_v6", icon: Cpu },
            { label: "Integrity", value: "Hardened", icon: Code2 },
            { label: "Subsystem", value: "Verified", icon: Zap },
            { label: "Latency", value: "0.4ms", icon: Terminal }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i, duration: 0.8 }}
              className="space-y-3 p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] bg-secondary/40 border border-border/40 text-left hover:border-primary/40 hover:bg-secondary/50 hover:shadow-[0_0_25px_rgba(var(--primary),0.1)] transition-all group backdrop-blur-3xl shadow-xl cursor-default"
            >
              <stat.icon className="w-5 h-5 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
              <div className="space-y-1">
                <p className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</p>
                <p className="text-xs sm:text-lg font-black uppercase text-primary font-mono leading-none tracking-tight">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
