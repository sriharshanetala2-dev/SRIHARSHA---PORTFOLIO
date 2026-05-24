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
    <section id="portfolio" className="py-32 sm:py-48 px-8 bg-secondary/10 border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        <div className="text-center space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            PROJECT_REGISTRY_v5.0
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-8xl font-headline font-black tracking-tighter uppercase leading-none"
          >
            Technical <span className="text-gradient">Records</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-3xl text-muted-foreground max-w-4xl mx-auto font-black opacity-80 uppercase tracking-widest leading-relaxed"
          >
            High-performance software systems engineered for enterprise stability and technical integrity.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
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
                  <Card className="h-full rounded-[3.5rem] overflow-hidden glass-card hover:translate-y-[-15px] transition-all duration-700 shadow-4xl">
                    <CardContent className="p-16 space-y-14 flex flex-col h-full relative">
                      <div className="flex justify-between items-start">
                        <div className="p-6 rounded-[1.5rem] bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-2xl">
                          <Icon className="w-10 h-10" />
                        </div>
                        <span className="text-[14px] font-black uppercase tracking-[0.4em] text-primary bg-primary/5 px-8 py-3 rounded-full border border-primary/20">
                          {project.category}
                        </span>
                      </div>
                      
                      <div className="space-y-6 flex-grow">
                        <h3 className="text-4xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                        <p className="text-base sm:text-xl text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-90 line-clamp-5">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex items-center gap-4 text-[13px] font-black text-primary uppercase tracking-[0.3em] opacity-50">
                          <Terminal className="w-5 h-5" /> SYSTEM_LOGS
                        </div>
                        <div className="flex flex-wrap gap-5">
                          {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[15px] font-black uppercase tracking-[0.4em] text-muted-foreground/50 font-mono">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-10 border-t border-border/60 flex items-center justify-between text-[16px] font-black uppercase tracking-[0.4em] text-primary group-hover:gap-6 transition-all">
                        Registry Archive <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform" />
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
