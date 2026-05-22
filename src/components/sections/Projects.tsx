"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Activity, Zap, Layers, Fingerprint, Box } from "lucide-react";
import { projects } from "@/app/lib/projects-data";

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="portfolio" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        <div className="space-y-6 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black tracking-[0.5em] text-primary uppercase"
          >
            <Box className="w-4 h-4" />
            Systemic Archive
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter uppercase italic leading-[0.9]"
          >
            PROJECT <span className="text-gradient">MATRIX</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-2xl text-[11px] sm:text-sm text-muted-foreground font-bold uppercase tracking-[0.3em] leading-relaxed mx-auto lg:mx-0 opacity-60"
          >
            Elite technical systems engineered for enterprise performance and neural orchestration.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Link href={`/projects/${project.id}`} className="block h-full">
                <Card className="group h-full glass-card bg-secondary/30 border-white/5 hover:border-primary/50 transition-all rounded-3xl overflow-hidden relative shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
                  
                  <CardContent className="p-8 sm:p-12 space-y-10 flex flex-col h-full">
                    <div className="flex justify-between items-start">
                      <div className="p-4 rounded-xl bg-background border border-white/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl">
                        <project.icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded-md border border-primary/20">
                          {project.category}
                        </span>
                        <div className="flex gap-0.5">
                          {[1,2,3].map(i => (
                            <div key={i} className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" style={{ transitionDelay: `${i*100}ms` }} />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 flex-grow">
                      <h3 className="text-3xl sm:text-4xl font-headline font-black uppercase tracking-tighter group-hover:text-primary transition-colors leading-none">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-medium leading-relaxed text-sm sm:text-base opacity-70">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-background border border-white/5 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-white/5 flex items-center justify-between group-hover:px-2 transition-all duration-500">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary opacity-60 group-hover:opacity-100">Initialize Sync</span>
                      <ArrowRight className="w-5 h-5 text-primary translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}