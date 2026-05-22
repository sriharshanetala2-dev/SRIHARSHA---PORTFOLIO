
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="glow-mesh" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12 relative z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-[10px] font-black tracking-[0.3em] text-primary uppercase border border-primary/20"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Full Stack & UI Developer
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-headline font-black leading-none tracking-tighter text-balance">
            Bridging Logic & <br />
            <span className="text-gradient">Human Experience</span>
          </h1>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium text-balance opacity-80"
        >
          Transforming computational theory into high-performance, pixel-perfect digital solutions. B.Sc Computer Science graduate specializing in modern React ecosystems and intelligent systems.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-10"
        >
          <Button 
            asChild
            size="lg" 
            className="w-full sm:w-auto h-14 sm:h-16 px-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm group shadow-xl shadow-primary/20 hover:scale-105 transition-all"
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
            className="w-full sm:w-auto h-14 sm:h-16 px-10 rounded-full border-border hover:bg-secondary font-bold text-sm hover:scale-105 transition-all"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative Terminal Line */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-10 left-10 hidden xl:flex items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-widest"
      >
        <Terminal className="w-4 h-4" />
        <span>System active // Node ready for deployment</span>
      </motion.div>
    </section>
  );
}
