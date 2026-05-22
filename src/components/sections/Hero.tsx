
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="glow-mesh" />
      
      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-[10px] font-black tracking-[0.3em] text-primary uppercase border border-primary/20"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Full Stack & UI Developer
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-6xl md:text-8xl font-headline font-black leading-tight tracking-tighter">
            Bridging Logic & <br />
            <span className="text-gradient">Human Experience</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Transforming computational theory into high-performance, pixel-perfect digital solutions. Specializing in modern React ecosystems and intelligent backends.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
        >
          <Button 
            asChild
            size="lg" 
            className="h-16 px-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm group shadow-xl shadow-primary/20 hover:scale-105 transition-all"
          >
            <a href="#portfolio">
              Explore Showcase
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="h-16 px-10 rounded-full border-border hover:bg-secondary font-bold text-sm hover:scale-105 transition-all"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>
      </div>

      {/* Decorative Terminal Line */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-10 left-10 hidden xl:flex items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-widest"
      >
        <Terminal className="w-4 h-4" />
        <span>System active // Ready for deployment</span>
      </motion.div>
    </section>
  );
}
