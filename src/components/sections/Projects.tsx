"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code2, Terminal, Activity } from "lucide-react";
import { projects } from "@/app/lib/projects-data";
import { iconMap } from "@/app/lib/icon-map";

export function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-8 bg-secondary/10 border-t border-border relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            PROJECT_REGISTRY_v5.0
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-headline font-black tracking-tighter uppercase leading-none"
          >
            Technical <span className="text-gradient">Records</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto font-black opacity-80 uppercase tracking-widest leading-relaxed"
          >
            High-performance software systems engineered for enterprise stability and technical integrity.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  <Card className="h-full rounded-[2.5rem] overflow-hidden glass-card hover:translate-y-[-10px] transition-all duration-700 shadow-xl">
                    <CardContent className="p-10 space-y-10 flex flex-col h-full relative">
                      <div className="flex justify-between items-start">
                        <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-lg">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary bg-primary/5 px-6 py-2 rounded-full border border-primary/20">
                          {project.category}
                        </span>
                      </div>
                      
                      <div className="space-y-4 flex-grow">
                        <h3 className="text-2xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-90 line-clamp-4">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-[11px] font-black text-primary uppercase tracking-[0.3em] opacity-50">
                          <Terminal className="w-4 h-4" /> SYSTEM_LOGS
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[12px] font-black uppercase tracking-[0.3em] text-muted-foreground/50 font-mono">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-8 border-t border-border/60 flex items-center justify-between text-[13px] font-black uppercase tracking-[0.3em] text-primary group-hover:gap-4 transition-all">
                        Registry Archive <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
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
