"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Cpu, Code2 } from "lucide-react";
import { projects } from "@/app/lib/projects-data";
import { iconMap } from "@/app/lib/icon-map";

export function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-48 px-4 sm:px-6 relative overflow-hidden bg-background/20 border-t-2 border-border scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 neural-grid opacity-[0.05] dark:opacity-[0.12]" />
        <div className="logic-scan-subsystem opacity-[0.03] dark:opacity-[0.08]" />
      </div>
      
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32 relative z-10">
        <div className="space-y-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 px-8 py-3 rounded-2xl bg-primary/10 border-2 border-primary/25 text-[11px] font-black tracking-[0.6em] text-primary uppercase mx-auto shadow-2xl backdrop-blur-xl"
          >
            <Cpu className="w-5 h-5 animate-pulse" />
            TECHNICAL RECORDS ARCHIVE
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-7xl lg:text-8xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text"
          >
            TECHNICAL <span className="text-gradient">RECORDS</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl text-sm sm:text-xl lg:text-2xl text-muted-foreground font-bold uppercase tracking-[0.15em] leading-relaxed mx-auto opacity-80 px-4"
          >
            High-performance software systems engineered for enterprise stability and mobile scale.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
        >
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon] || Code2;
            return (
              <motion.div key={project.id} variants={item}>
                <Link href={`/projects/${project.id}`} className="block h-full group">
                  <Card className="h-full glass-card border-2 border-border hover:border-primary transition-all rounded-[2.5rem] overflow-hidden shadow-4xl group-hover:scale-[1.03] active:scale-95 duration-500">
                    <CardContent className="p-8 sm:p-12 space-y-10 flex flex-col h-full">
                      <div className="flex justify-between items-start">
                        <div className="p-5 rounded-2xl bg-secondary/80 border-2 border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-2xl group-hover:shadow-primary/30">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-6 py-2.5 rounded-full border-2 border-primary/25 shadow-xl backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>

                      <div className="space-y-6 flex-grow min-w-0">
                        <h3 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground font-bold uppercase tracking-tight leading-relaxed text-xs sm:text-base opacity-70">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] px-5 py-3 bg-secondary/40 border border-border rounded-xl shadow-lg whitespace-nowrap">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-10 border-t-2 border-border/50 flex items-center justify-between">
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary opacity-60">ACCESS ARCHITECTURE</span>
                        <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <ArrowRight className="w-6 h-6 -translate-x-1 group-hover:translate-x-0 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
