
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experience = [
  {
    role: "Senior Full-Stack Developer",
    company: "TechNexus Solutions",
    period: "2021 — Present",
    description: "Leading a team of 8 developers in building scalable cloud-native applications using Next.js and AWS.",
    type: "work",
  },
  {
    role: "Full-Stack Engineer",
    company: "Lumina Digital",
    period: "2018 — 2021",
    description: "Architected and delivered 15+ high-performance web applications for Fortune 500 clients.",
    type: "work",
  },
  {
    role: "Junior Web Developer",
    company: "Starlight Interactive",
    period: "2016 — 2018",
    description: "Specialized in front-end performance optimization and interactive UI component design.",
    type: "work",
  },
  {
    role: "Master of Computer Science",
    company: "Silicon Valley Tech University",
    period: "2014 — 2016",
    description: "Specialized in Distributed Systems and Artificial Intelligence.",
    type: "education",
  },
];

export function Resume() {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-headline font-bold">The Journey</h2>
          <p className="text-muted-foreground">My professional evolution and academic foundation.</p>
        </div>

        <div className="relative border-l border-border ml-4 md:ml-0 space-y-12 pb-8">
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {/* Timeline dot */}
              <div className="absolute -left-3 md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 rounded-full bg-accent border-4 border-background z-10" />

              <div className={`md:w-[45%] ${idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                <Card className="p-6 bg-card border-border hover:border-accent/30 transition-all shadow-lg group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary group-hover:bg-accent/10 transition-colors">
                      {item.type === 'work' ? (
                        <Briefcase className="w-5 h-5 text-accent" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-accent" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </div>
                      <h3 className="text-xl font-headline font-bold">{item.role}</h3>
                      <p className="text-primary font-medium">{item.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
