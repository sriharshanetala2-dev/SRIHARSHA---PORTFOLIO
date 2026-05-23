"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Box, Cpu } from "lucide-react";
import { projects } from "@/app/lib/projects-data";

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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-4 sm:px-6 relative bg-background border-t-2 border-border">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="space-y-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-xl bg-primary/10 border-2 border-primary/20 text-[12px] font-black tracking-[0.5em] text-primary uppercase mx-auto shadow-lg"
          >
            <Cpu className="w-5 h-5" />
            Project Archive
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-7xl font-headline font-black tracking-tighter uppercase leading-none"
          >
            TECHNICAL <span className="text-gradient">RECORDS</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl text-sm sm:text-lg text-muted-foreground font-bold uppercase tracking-widest leading-relaxed mx-auto opacity-70 px-4"
          >
            High-performance software systems engineered for enterprise stability and mobile scale.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Link href={`/projects/${project.id}`} className="block h-full group">
                <Card className="h-full bg-card border-2 border-border hover:border-primary transition-all rounded-[2rem] overflow-hidden shadow-2xl">
                  <CardContent className="p-8 sm:p-10 space-y-8 flex flex-col h-full">
                    <div className="flex justify-between items-start">
                      <div className="p-5 rounded-2xl bg-background border-2 border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl">
                        <project.icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-primary bg-primary/10 px-5 py-2 rounded-full border-2 border-primary/20 shadow-md">
                        {project.category}
                      </span>
                    </div>

                    <div className="space-y-4 flex-grow min-w-0">
                      <h3 className="text-2xl sm:text-3xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-bold uppercase tracking-tight leading-relaxed text-xs sm:text-sm opacity-80">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-background border border-border rounded-xl shadow-md whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-8 border-t-2 border-border flex items-center justify-between">
                      <span className="text-[12px] font-black uppercase tracking-widest text-primary opacity-70">View Architecture</span>
                      <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-6 group-hover:translate-x-0" />
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