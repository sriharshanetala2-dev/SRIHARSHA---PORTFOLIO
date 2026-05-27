"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code2, Terminal, Activity, Zap } from "lucide-react";
import { projects } from "@/app/lib/projects-data";
import { iconMap } from "@/app/lib/icon-map";

export function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-40 px-4 sm:px-8 bg-secondary/5 border-t border-border relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 neural-grid opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            PROJECT_REGISTRY_v6.0
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-7xl font-headline font-black tracking-tighter uppercase leading-none"
          >
            Technical <span className="text-gradient">Records</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto font-black opacity-70 uppercase tracking-[0.2em] leading-relaxed"
          >
            High-performance software systems engineered for enterprise stability and technical integrity.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {projects.map((project) => {
            const Icon = iconMap[project.icon] || Code2;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="h-full"
              >
                <Link href={`/projects/${project.id}`} className="group h-full block">
                  <Card className="h-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden glass-card border-border/20 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] transition-all duration-700 h-full">
                    <CardContent className="p-8 sm:p-12 space-y-10 flex flex-col h-full relative">
                      <div className="flex justify-between items-start">
                        <div className="p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-inner border border-primary/20">
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary bg-primary/10 px-5 py-2 rounded-full border border-primary/20 backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                      
                      <div className="space-y-4 flex-grow">
                        <h3 className="text-xl sm:text-3xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-[1.1]">{project.title}</h3>
                        <p className="text-[13px] sm:text-base text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-70 line-clamp-4 group-hover:opacity-100 transition-opacity">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 text-[10px] font-black text-primary/50 uppercase tracking-[0.4em]">
                          <Terminal className="w-4 h-4" /> SYSTEM_LOGS
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground/40 font-mono group-hover:text-primary/60 transition-colors">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-8 border-t border-border/40 flex items-center justify-between text-[11px] sm:text-[12px] font-black uppercase tracking-[0.4em] text-primary/80 group-hover:text-primary group-hover:gap-6 transition-all">
                        Registry Archive <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
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