
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Layers, LayoutGrid } from "lucide-react";
import { projectsShort } from "@/app/lib/projects-data-short";

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-40 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.03),transparent_40%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
        <div className="text-center space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card text-[11px] font-black tracking-[0.5em] text-primary uppercase border-primary/30"
          >
            <LayoutGrid className="w-4 h-4" />
            Project Matrix v1.0
          </motion.div>
          
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-headline font-black tracking-tighter leading-[1.1] uppercase shimmer-text max-w-5xl mx-auto">
            COMPUTATIONAL <span className="text-gradient">SHOWCASE</span>
          </h2>
          
          <p className="text-sm sm:text-xl text-muted-foreground max-w-4xl mx-auto font-medium opacity-80 leading-relaxed uppercase tracking-[0.2em]">
            A curated archive of software experiments, ranging from core Java architectures to high-performance AI-orchestrated systems.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16"
        >
          {projectsShort.map((project, idx) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
            >
              <Card className="glass-card overflow-hidden group hover:border-primary/50 transition-all flex flex-col h-full rounded-[3.5rem] bg-card/20 hover:shadow-3xl border-border/60">
                <Link href={`/projects/${project.id}`} className="relative block flex-1">
                  <CardContent className="p-10 sm:p-16 space-y-12">
                    <div className="space-y-8">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-black uppercase text-accent tracking-[0.4em] px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20">
                          {project.category}
                        </span>
                        <div className="flex gap-2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-2.5 h-2.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all duration-700 shadow-sm" style={{ transitionDelay: `${i * 150}ms` }} />
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-start justify-between gap-8">
                        <h3 className="text-3xl sm:text-5xl font-headline font-black leading-[1.15] group-hover:text-primary transition-colors tracking-tighter uppercase max-w-[80%]">
                          {project.title}
                        </h3>
                        <div className="p-5 sm:p-6 rounded-[2rem] bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-2xl">
                          <ArrowUpRight className="w-7 h-7 sm:w-8 sm:h-8" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 sm:gap-4 pt-12 border-t border-border/40">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-5 py-2.5 rounded-xl bg-secondary/50 text-[10px] sm:text-[11px] font-black uppercase tracking-widest border border-border/60 hover:border-primary/40 transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
