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
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 70, damping: 15 } }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-40 px-6 relative overflow-hidden bg-background/50 border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-32 relative z-10">
        <div className="space-y-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            <Cpu className="w-4 h-4" />
            PROJECT REGISTRY_v4
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl lg:text-7xl font-headline font-black tracking-tighter uppercase leading-[0.85] shimmer-text"
          >
            TECHNICAL <span className="text-gradient">RECORDS</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl text-base sm:text-xl text-muted-foreground font-bold uppercase tracking-tight mx-auto opacity-90 px-4"
          >
            High-performance software systems engineered for enterprise stability and technical integrity.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16"
        >
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon] || Code2;
            return (
              <motion.div key={project.id} variants={item}>
                <Link href={`/projects/${project.id}`} className="block h-full group">
                  <Card className="h-full glass-card border border-border/50 hover:border-primary transition-all duration-1000 rounded-[3rem] overflow-hidden group-hover:shadow-3xl group-hover:shadow-primary/10 bg-card/40 backdrop-blur-3xl">
                    <CardContent className="p-10 sm:p-14 space-y-12 flex flex-col h-full relative">
                      <div className="flex justify-between items-start">
                        <div className="p-6 rounded-2xl bg-secondary border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl">
                          <IconComponent className="w-10 h-10" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary bg-primary/10 px-5 py-2 rounded-xl border border-primary/20 shadow-lg">
                          {project.category}
                        </span>
                      </div>

                      <div className="space-y-6 flex-grow">
                        <h3 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-[1.1]">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground font-bold uppercase tracking-tight text-xs sm:text-sm opacity-80 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 bg-secondary/80 border border-border rounded-xl group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-10 border-t border-border/50 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Activity className="w-4 h-4 text-primary/40 animate-pulse" />
                          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/60">ACCESS_CORE</span>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all shadow-2xl">
                          <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
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