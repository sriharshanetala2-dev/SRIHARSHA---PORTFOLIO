"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Cpu, Code2, Sparkles, Activity } from "lucide-react";
import { projects } from "@/app/lib/projects-data";
import { iconMap } from "@/app/lib/icon-map";

export function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.4 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 14 } }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-40 px-6 relative overflow-hidden bg-background/50 border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-40 relative z-10">
        <div className="space-y-12 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            <Cpu className="w-4 h-4" />
            PROJECT REGISTRY_v5.0
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl lg:text-9xl font-headline font-black tracking-tighter uppercase leading-[0.8] shimmer-text"
          >
            TECHNICAL <span className="text-gradient">RECORDS</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl text-lg sm:text-2xl text-muted-foreground font-bold uppercase tracking-tight mx-auto opacity-95 px-6 leading-relaxed"
          >
            High-performance software systems engineered for enterprise stability and technical integrity.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-20"
        >
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon] || Code2;
            return (
              <motion.div key={project.id} variants={item}>
                <Link href={`/projects/${project.id}`} className="block h-full group">
                  <Card className="h-full glass-card border border-border/50 hover:border-primary transition-all duration-1000 rounded-[3.5rem] overflow-hidden group-hover:shadow-[0_0_50px_rgba(var(--primary),0.15)] bg-card/40 backdrop-blur-3xl">
                    <CardContent className="p-12 sm:p-16 space-y-14 flex flex-col h-full relative">
                      <div className="flex justify-between items-start">
                        <div className="p-7 rounded-[1.5rem] bg-secondary border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-3xl">
                          <IconComponent className="w-12 h-12" />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary bg-primary/15 px-6 py-2.5 rounded-xl border border-primary/30 shadow-2xl">
                          {project.category}
                        </span>
                      </div>

                      <div className="space-y-8 flex-grow">
                        <h3 className="text-3xl sm:text-5xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-[1] shimmer-text">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground font-bold uppercase tracking-tight text-sm sm:text-base opacity-90 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[11px] font-black uppercase tracking-[0.3em] px-5 py-2.5 bg-secondary/60 border border-border rounded-xl group-hover:bg-primary/15 group-hover:border-primary/40 transition-all shadow-lg">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-12 border-t border-border/50 flex items-center justify-between">
                        <div className="flex items-center gap-5">
                          <Activity className="w-5 h-5 text-primary/50 animate-pulse" />
                          <span className="text-[11px] font-black uppercase tracking-[0.6em] text-primary/70">ACCESS_CORE</span>
                        </div>
                        <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-700 shadow-3xl">
                          <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-transform duration-500" />
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