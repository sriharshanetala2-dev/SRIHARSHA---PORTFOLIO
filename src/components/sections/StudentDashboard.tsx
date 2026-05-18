"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  TrendingUp, 
  LayoutDashboard, 
  UserCircle, 
  Settings, 
  Bell,
  Search,
  MoreVertical
} from "lucide-react";
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  AreaChart, 
  Area 
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

const gpaData = [
  { semester: "Sem 1", gpa: 3.2 },
  { semester: "Sem 2", gpa: 3.5 },
  { semester: "Sem 3", gpa: 3.4 },
  { semester: "Sem 4", gpa: 3.8 },
  { semester: "Sem 5", gpa: 3.7 },
  { semester: "Sem 6", gpa: 3.9 },
];

const studentActivity = [
  { id: "1", name: "Alice Johnson", course: "Computer Science", status: "Active", date: "2024-03-10" },
  { id: "2", name: "Bob Smith", course: "Information Tech", status: "On Leave", date: "2024-03-09" },
  { id: "3", name: "Charlie Davis", course: "Cyber Security", status: "Active", date: "2024-03-08" },
  { id: "4", name: "Diana Prince", course: "Data Science", status: "Active", date: "2024-03-07" },
];

const chartConfig = {
  gpa: {
    label: "GPA",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

export function StudentDashboard() {
  return (
    <section id="dashboard" className="py-24 px-6 bg-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            <LayoutDashboard className="w-3 h-3" />
            Project Spotlight
          </div>
          <h2 className="text-4xl font-headline font-bold">Student Management System</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A high-performance dashboard simulation demonstrating architecture for academic lifecycle management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-12 rounded-3xl overflow-hidden border border-border bg-card shadow-2xl animate-in fade-in zoom-in-95 duration-1000">
            {/* Dashboard Header */}
            <div className="p-4 md:p-6 border-b border-border bg-secondary/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-accent text-accent-foreground">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-headline">EduSync Pro</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Academic Terminal</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="relative hidden lg:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input 
                    placeholder="Search records..." 
                    className="bg-background border border-border rounded-xl pl-10 pr-4 py-2 text-sm w-48 xl:w-64 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-xl bg-background border border-border text-muted-foreground hover:text-accent transition-colors">
                    <Bell className="w-5 h-5" />
                  </button>
                  <button className="hidden sm:block p-2 rounded-xl bg-background border border-border text-muted-foreground hover:text-accent transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>
                  <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/20 flex items-center justify-center text-accent font-bold">
                    NS
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* Mock Sidebar - Hidden on small mobile or horizontal scrollable */}
              <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-border bg-secondary/10 p-4 lg:p-6">
                <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 lg:space-y-2 no-scrollbar">
                  {[
                    { icon: LayoutDashboard, label: "Dashboard", active: true },
                    { icon: Users, label: "Students", active: false },
                    { icon: BookOpen, label: "Courses", active: false },
                    { icon: TrendingUp, label: "Analytics", active: false },
                    { icon: UserCircle, label: "Profile", active: false },
                  ].map((item) => (
                    <button 
                      key={item.label}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap lg:w-full",
                        item.active 
                        ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20" 
                        : "text-muted-foreground hover:bg-accent/10 hover:text-accent"
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex-1 p-4 md:p-8 space-y-8 bg-gradient-to-br from-background to-secondary/5">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { label: "Total Students", value: "1,284", change: "+12%", icon: Users, delay: "delay-100" },
                    { label: "Active Courses", value: "48", change: "+4", icon: BookOpen, delay: "delay-200" },
                    { label: "Avg GPA", value: "3.64", change: "+0.2", icon: TrendingUp, delay: "delay-300" },
                  ].map((stat) => (
                    <Card 
                      key={stat.label} 
                      className={cn(
                        "bg-background/50 border-border/50 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-500",
                        stat.delay
                      )}
                    >
                      <CardContent className="p-6 flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold font-headline">{stat.value}</span>
                            <span className="text-[10px] font-bold text-green-500">{stat.change}</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                          <stat.icon className="w-5 h-5" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  <Card className="bg-background/50 border-border/50 animate-in fade-in slide-in-from-left-4 duration-700 delay-500">
                    <CardHeader>
                      <CardTitle className="text-sm font-bold font-headline uppercase tracking-tight">Performance Trends</CardTitle>
                      <CardDescription className="text-xs">GPA Evolution — Session 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="h-64">
                      <ChartContainer config={chartConfig}>
                        <AreaChart data={gpaData} margin={{ left: -20, right: 10, top: 10 }}>
                          <defs>
                            <linearGradient id="colorGpa" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="var(--color-gpa)" stopOpacity={0.4}/>
                              <stop offset="95%" stopColor="var(--color-gpa)" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                          <XAxis 
                            dataKey="semester" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }} 
                          />
                          <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }} 
                          />
                          <ChartTooltip 
                            content={<ChartTooltipContent hideIndicator />}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="gpa" 
                            stroke="var(--color-gpa)" 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorGpa)" 
                          />
                        </AreaChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>

                  <Card className="bg-background/50 border-border/50 animate-in fade-in slide-in-from-right-4 duration-700 delay-500">
                    <CardHeader>
                      <CardTitle className="text-sm font-bold font-headline uppercase tracking-tight">Recent Activity</CardTitle>
                      <CardDescription className="text-xs">Live enrollment verification log</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {studentActivity.map((student, idx) => (
                          <div 
                            key={student.id} 
                            className={cn(
                              "flex items-center justify-between p-3 rounded-xl bg-secondary/20 border border-border/30 transition-all hover:bg-secondary/40",
                              "animate-in fade-in slide-in-from-right-2 duration-500",
                              idx === 0 ? "delay-[800ms]" : idx === 1 ? "delay-[900ms]" : "delay-[1000ms]"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-[10px] font-bold text-accent">
                                {student.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <p className="text-xs font-bold">{student.name}</p>
                                <p className="text-[10px] text-muted-foreground uppercase">{student.course}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className={cn(
                                "text-[9px] font-black px-2 py-0.5 rounded-full uppercase",
                                student.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                              )}>
                                {student.status}
                              </span>
                              <MoreVertical className="w-4 h-4 text-muted-foreground cursor-pointer" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
