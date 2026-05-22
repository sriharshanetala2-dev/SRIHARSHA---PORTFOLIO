"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Box } from "lucide-react";
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="portfolio" className="py-32 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="space-y-6 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black tracking-[0.5em] text-primary uppercase"
          >
            <Box className="w-4 h-4" />
            Project Archive
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl md:text-8xl font-headline font-black tracking-tighter uppercase leading-none"
          >
            ENGINEERING <span className="text-gradient">RECORDS</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-2xl text-[11px] sm:text-sm text-muted-foreground font-bold uppercase tracking-[0.3em] leading-relaxed mx-auto lg:mx-0 opacity-60"
          >
            Full Stack software systems built for enterprise performance and stable logic flows.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Link href={`/projects/${project.id}`} className="block h-full">
                <Card className="group h-full bg-secondary/30 border-border hover:border-primary/50 transition-all rounded-2xl overflow-hidden relative shadow-lg">
                  <CardContent className="p-8 space-y-8 flex flex-col h-full">
                    <div className="flex justify-between items-start">
                      <div className="p-4 rounded-xl bg-background border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <project.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded-md border border-primary/20">
                        {project.category}
                      </span>
                    </div>

                    <div className="space-y-4 flex-grow">
                      <h3 className="text-2xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-medium leading-relaxed text-sm opacity-70">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-background border border-border rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-border flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary opacity-60">Initialize Sync</span>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all" />
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
