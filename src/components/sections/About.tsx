
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Target, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            <User className="w-3 h-3" />
            Who I Am
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            I am a passionate Junior Developer with a mission to create impactful digital experiences through clean code and innovative design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-border bg-card/50 hover:border-accent/30 transition-all duration-300">
            <CardContent className="p-8 space-y-4">
              <div className="p-3 w-fit rounded-xl bg-accent/10 text-accent">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-headline font-bold">Problem Solver</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I enjoy tackling complex challenges and breaking them down into manageable, efficient solutions using modern web technologies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50 hover:border-accent/30 transition-all duration-300">
            <CardContent className="p-8 space-y-4">
              <div className="p-3 w-fit rounded-xl bg-accent/10 text-accent">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-headline font-bold">Quick Learner</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                As a fresher, I am constantly learning and adapting to new frameworks and tools to stay at the forefront of the industry.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50 hover:border-accent/30 transition-all duration-300">
            <CardContent className="p-8 space-y-4">
              <div className="p-3 w-fit rounded-xl bg-accent/10 text-accent">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-headline font-bold">Goal Oriented</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                My focus is on delivering high-quality software that meets user needs and adds real value to business processes.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary/20 rounded-3xl p-10 md:p-16 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-headline font-bold">My Creative Process</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in a user-first approach to development. Whether it's a student management system or a complex e-commerce platform, my process begins with understanding the core objective and building outward with scalability and performance in mind.
              </p>
              <div className="space-y-4">
                {[
                  "Responsive & Accessible UI",
                  "Performance First Architecture",
                  "Secure & Scalable Backend logic",
                  "Continuous Learning & Integration"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/process/800/600" 
                alt="My Creative Process" 
                fill
                className="object-cover"
                data-ai-hint="planning brainstorming"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
