'use client';

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Layout, 
  Cpu, 
  Workflow, 
  Terminal, 
  ShieldCheck, 
  Activity,
  Zap,
  Globe,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

const skillCategories = [
  {
    title: "Backend Core",
    icon: Database,
    skills: [
      { name: "Java 21", level: "High", icon: Code2 },
      { name: "Spring Boot", level: "Core", icon: Settings },
      { name: "PostgreSQL", level: "Core", icon: Database },
      { name: "Python", level: "Advanced", icon: Terminal }
    ]
  },
  {
    title: "Frontend Node",
    icon: Layout,
    skills: [
      { name: "Next.js 15", level: "High", icon: Globe },
      { name: "TypeScript", level: "Core", icon: Code2 },
      { name: "React 19", level: "Core", icon: Activity },
      { name: "Tailwind CSS", level: "High", icon: Layout }
    ]
  },
  {
    title: "Intelligence & Cloud",
    icon: Cpu,
    skills: [
      { name: "Genkit", level: "Core", icon: Cpu },
      { name: "Claude 3.5", level: "Advanced", icon: Zap },
      { name: "Firebase", level: "High", icon: ShieldCheck },
      { name: "n8n Automation", level: "Advanced", icon: Workflow }
    ]
  }
];

export function Skills() {
  const skillsBackdrop = PlaceHolderImages.find(img => img.id === 'pulse-analytics-node');

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
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 border-t border-border bg-background relative overflow-hidden scroll-mt-20">
      {/* High-Fidelity Technical Backdrop */}
      {skillsBackdrop && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={skillsBackdrop.imageUrl}
            alt={skillsBackdrop.description}
            fill
            className="object-cover opacity-10 grayscale"
            data-ai-hint={skillsBackdrop.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
        </div>
      )}

      <div className="absolute inset-0 neural-grid opacity-[0.03] pointer-events-none z-[1]" />
      
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20 relative z-10">
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            TECHNICAL_MATRIX_v6.0
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-6xl font-headline font-black tracking-tighter uppercase leading-none"
          >
            Systems <span className="text-gradient">Proficiency</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] sm:text-lg text-muted-foreground font-bold max-w-2xl mx-auto opacity-70 uppercase tracking-[0.2em] leading-relaxed px-4"
          >
            A high-fidelity architectural audit of my core competencies, distributed across backend systems, frontend logic, and neural orchestration.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <div className="flex items-center gap-4 px-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-lg font-black uppercase tracking-[0.2em]">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => {
                  const Icon = skill.icon || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] bg-card border border-border/60 hover:border-primary/40 transition-all group shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span className="font-black text-xs sm:text-sm uppercase tracking-tight">{skill.name}</span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-primary/60">{skill.level}</span>
                      </div>
                      
                      <div className="w-full h-1.5 bg-secondary/50 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level === "High" ? "95%" : skill.level === "Core" ? "85%" : "75%" }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                          className="h-full bg-primary"
                        />
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-40">Status: Verified</span>
                        <Zap className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
