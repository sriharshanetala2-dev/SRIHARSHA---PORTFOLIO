"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Activity, Zap, Layers, Fingerprint } from "lucide-react";
import { projects } from "@/app/lib/projects-data";

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 }
    }
  };

  return (
    <section id="portfolio" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        <div className="space-y-8 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-black tracking-[0.5em] text-primary uppercase"
          >
            <Fingerprint className="w-4 h-4" />
            Registry
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none"
          >
            Architectural <span className="text-gradient">Portfolio</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-3xl text-sm sm:text-lg text-muted-foreground font-medium uppercase tracking-[0.2em] leading-relaxed mx-auto lg:mx-0 opacity-70"
          >
            High-integrity systems engineered for performance and enterprise-scale orchestration.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
            >
              <Link href={`/projects/${project.id}`}>
                <Card className="group h-full bg-secondary/20 border-white/5 hover:border-primary/50 transition-all rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-primary/10">
                  <CardContent className="p-10 sm:p-14 space-y-12">
                    <div className="flex justify-between items-start">
                      <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl">
                        <project.icon className="w-8 h-8" />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                          {project.category}
                        </span>
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500/20" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors leading-none">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-medium leading-relaxed text-lg opacity-80">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-background/50 border border-white/10 rounded-xl group-hover:border-primary/30 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-10 border-t border-white/5 flex items-center justify-between group-hover:translate-x-2 transition-transform duration-500">
                      <span className="text-[12px] font-black uppercase tracking-[0.5em] text-primary">Access Manifest</span>
                      <ArrowRight className="w-6 h-6 text-primary" />
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
