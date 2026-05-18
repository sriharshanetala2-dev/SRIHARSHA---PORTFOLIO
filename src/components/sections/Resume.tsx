
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Calendar, Award } from "lucide-react";

const experience = [
  {
    role: "Web Development Intern",
    company: "Tech Solutions Inc.",
    period: "June 2023 — December 2023",
    description: "Assisted in building responsive front-end components using React and Tailwind CSS. Participated in daily stand-ups and learned agile development workflows.",
    type: "work",
  },
  {
    role: "B.Tech in Computer Science & Engineering",
    company: "Engineering College of Excellence",
    period: "2020 — 2024",
    description: "Focusing on Software Engineering, Database Management Systems, and Web Technologies. Maintained a consistent high GPA.",
    type: "education",
  },
  {
    role: "Capstone Project: Student Management System",
    company: "Academic Project",
    period: "2023",
    description: "Developed a full-stack application to manage student records, using React for the frontend and Firebase for the backend database and authentication.",
    type: "project",
  },
  {
    role: "Advanced Web Development Certification",
    company: "Online Learning Platform",
    period: "2022",
    description: "Completed intensive training in modern JavaScript (ES6+), React, and Backend basics. Earned certification after finishing multiple real-world projects.",
    type: "education",
  },
];

export function Resume() {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            My Path
          </div>
          <h2 className="text-4xl font-headline font-bold">Educational Journey</h2>
          <p className="text-muted-foreground">The foundation of my engineering career and early professional exposure.</p>
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
                      ) : item.type === 'project' ? (
                        <Award className="w-5 h-5 text-accent" />
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
