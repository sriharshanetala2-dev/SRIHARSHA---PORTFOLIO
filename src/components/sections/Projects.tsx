"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Box } from "lucide-react";
import { projects } from "@/app/lib/projects-data";

export function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="portfolio" className="py-20 sm:py-32 px-4 sm:px-6 relative bg-background border-t border-border">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20 relative z-10">
        <div className="space-y-4 sm:space-y-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-lg bg-primary/10 border border-primary/20 text-xs font-black tracking-widest text-primary uppercase mx-auto"
          >
            <Box className="w-5 h-5" />
            Project Archive
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-headline font-black tracking-tighter uppercase leading-none"
          >
            TECHNICAL <span className="text-gradient">RECORDS</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-xs sm:text-sm lg:text-base text-muted-foreground font-black uppercase tracking-widest leading-relaxed mx-auto opacity-70 px-4"
          >
            Full Stack & Mobile software systems engineered for performance and structural stability.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Link href={`/projects/${project.id}`} className="block h-full group">
                <Card className="h-full bg-secondary/30 border-border hover:border-primary transition-all rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2">
                  <CardContent className="p-6 sm:p-8 space-y-6 sm:space-y-8 flex flex-col h-full">
                    <div className="flex justify-between items-start">
                      <div className="p-4 rounded-2xl bg-background border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-md">
                        <project.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                        {project.category}
                      </span>
                    </div>

                    <div className="space-y-3 sm:space-y-4 flex-grow min-w-0">
                      <h3 className="text-xl sm:text-2xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-bold uppercase tracking-tight leading-relaxed text-xs opacity-80">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-background border border-border rounded-lg shadow-sm whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-border flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest text-primary opacity-60">View Logic</span>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
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