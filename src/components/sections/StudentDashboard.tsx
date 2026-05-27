"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  TrendingUp, 
  LayoutDashboard, 
  Database, 
  Settings, 
  Bell,
  Search,
  MoreVertical,
  FileText,
  BarChart3,
  Download,
  Filter,
  Activity
} from "lucide-react";
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  AreaChart, 
  Area,
  BarChart,
  Bar,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const gpaData = [
  { semester: "Sem 1", gpa: 3.2, attendance: 85 },
  { semester: "Sem 2", gpa: 3.5, attendance: 90 },
  { semester: "Sem 3", gpa: 3.4, attendance: 88 },
  { semester: "Sem 4", gpa: 3.8, attendance: 92 },
  { semester: "Sem 5", gpa: 3.7, attendance: 85 },
  { semester: "Sem 6", gpa: 3.9, attendance: 95 },
];

const studentActivity = [
  { id: "1", name: "Alice Johnson", course: "Computer Science", status: "Active", gpa: 3.8, id_num: "CS2024-001" },
  { id: "2", name: "Bob Smith", course: "Information Tech", status: "On Leave", gpa: 3.2, id_num: "IT2024-042" },
  { id: "3", name: "Charlie Davis", course: "Cyber Security", status: "Active", gpa: 3.5, id_num: "CY2024-112" },
  { id: "4", name: "Diana Prince", course: "Data Science", status: "Active", gpa: 3.9, id_num: "DS2024-088" },
  { id: "5", name: "Ethan Hunt", course: "Software Eng", status: "Active", gpa: 3.7, id_num: "SE2024-201" },
];

const chartConfig = {
  gpa: {
    label: "GPA Score",
    color: "hsl(var(--primary))",
  },
  attendance: {
    label: "Attendance %",
    color: "hsl(var(--accent))",
  }
} satisfies ChartConfig;

export function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTabChange = (label: string) => {
    setActiveTab(label);
    toast({
      title: `Accessing Node: ${label}`,
      description: `Switching to the ${label.toLowerCase()} subsystem...`,
    });
  };

  const handleSimulatedAction = (action: string) => {
    toast({
      title: "Action Initiated",
      description: `${action} is being processed by the core logic.`,
    });
  };

  if (!mounted) return null;

  const renderContent = () => {
    switch (activeTab) {
      case "Student Data":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="bg-background/40 border-border/50 overflow-hidden backdrop-blur-xl">
              <CardHeader className="flex flex-row items-center justify-between p-6">
                <div className="space-y-1">
                  <CardTitle className="text-sm sm:text-lg font-black uppercase tracking-tight">Enrollment Registry</CardTitle>
                  <CardDescription className="text-[10px] uppercase font-black opacity-50 tracking-widest">Live registered student database</CardDescription>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleSimulatedAction("Filter Registry")} className="p-2 rounded-lg border border-border hover:bg-secondary transition-all"><Filter className="w-3.5 h-3.5" /></button>
                  <button onClick={() => handleSimulatedAction("Query Registry")} className="p-2 rounded-lg border border-border hover:bg-secondary transition-all"><Search className="w-3.5 h-3.5" /></button>
                </div>
              </CardHeader>
              <CardContent className="p-0 sm:p-6 overflow-hidden">
                <div className="overflow-x-auto no-scrollbar w-full">
                  <Table className="min-w-[600px] sm:min-w-full">
                    <TableHeader>
                      <TableRow className="border-border/50 hover:bg-transparent">
                        <TableHead className="text-[10px] font-black uppercase tracking-widest px-4">ID</TableHead>
                        <TableHead className="text-[10px] font-black uppercase tracking-widest px-4">Name</TableHead>
                        <TableHead className="hidden sm:table-cell text-[10px] font-black uppercase tracking-widest px-4">Course</TableHead>
                        <TableHead className="text-[10px] font-black uppercase tracking-widest px-4">GPA</TableHead>
                        <TableHead className="text-right px-4 text-[10px] font-black uppercase tracking-widest">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {studentActivity.map((student) => (
                        <TableRow key={student.id} className="border-border/20 group hover:bg-primary/5 transition-colors">
                          <TableCell className="font-mono text-[10px] text-muted-foreground">{student.id_num}</TableCell>
                          <TableCell className="font-black text-xs uppercase tracking-tight">{student.name}</TableCell>
                          <TableCell className="hidden sm:table-cell text-[10px] font-black uppercase opacity-60 tracking-wider">{student.course}</TableCell>
                          <TableCell className="font-black text-primary text-xs">{student.gpa}</TableCell>
                          <TableCell className="text-right">
                            <span className={cn(
                              "px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest border",
                              student.status === "Active" 
                                ? "bg-primary/5 border-primary/20 text-primary" 
                                : "bg-accent/5 border-accent/20 text-accent"
                            )}>
                              {student.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "Academic Data":
        return (
          <div className="grid grid-cols-1 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <Card className="bg-background/40 border-border/50 overflow-hidden backdrop-blur-xl">
              <CardHeader className="p-6">
                <CardTitle className="text-sm sm:text-lg font-black uppercase tracking-tight">Grade Velocity</CardTitle>
                <CardDescription className="text-[10px] uppercase font-black opacity-50 tracking-widest">Aggregate semester performance tracking</CardDescription>
              </CardHeader>
              <CardContent className="h-[250px] sm:h-[400px] pt-4 px-2 sm:px-6">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <AreaChart data={gpaData} margin={{ left: -25, right: 10, top: 10 }}>
                    <defs>
                      <linearGradient id="colorGpa" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-gpa)" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="var(--color-gpa)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.3)" />
                    <XAxis dataKey="semester" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: "hsl(var(--muted-foreground))" }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: "hsl(var(--muted-foreground))" }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="gpa" stroke="var(--color-gpa)" fill="url(#colorGpa)" strokeWidth={3} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        );

      case "Overview":
      default:
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Total Students", value: "24,512", icon: Users, delay: "delay-100" },
                { label: "Active Courses", value: "112", icon: BookOpen, delay: "delay-200" },
                { label: "Avg. GPA", value: "3.72", icon: TrendingUp, delay: "delay-300" },
              ].map((stat) => (
                <Card 
                  key={stat.label} 
                  className={cn(
                    "bg-background/40 border-border/50 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-500 hover:border-primary/50 transition-all cursor-pointer group shadow-xl",
                    stat.delay
                  )}
                  onClick={() => handleSimulatedAction(`Analyzing ${stat.label}`)}
                >
                  <CardContent className="p-6 sm:p-8 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">{stat.label}</p>
                      <span className="text-2xl sm:text-3xl font-black font-headline text-foreground leading-none">{stat.value}</span>
                    </div>
                    <div className="p-3 sm:p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <Card className="bg-background/40 border-border/50 animate-in fade-in slide-in-from-left-4 duration-700 overflow-hidden backdrop-blur-xl">
                <CardHeader className="flex flex-row items-center justify-between p-6">
                  <div className="space-y-1">
                    <CardTitle className="text-[11px] sm:text-sm font-black font-headline uppercase tracking-[0.4em] text-primary">System Trends</CardTitle>
                    <CardDescription className="text-[10px] font-black uppercase opacity-40">Historical GPA metrics</CardDescription>
                  </div>
                  <BarChart3 className="w-4 h-4 text-primary opacity-30" />
                </CardHeader>
                <CardContent className="h-40 sm:h-64 pt-2 px-4">
                  <ChartContainer config={chartConfig} className="h-full w-full">
                    <AreaChart data={gpaData} margin={{ left: -25, right: 10, top: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.2)" />
                      <XAxis dataKey="semester" hide />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area type="monotone" dataKey="gpa" stroke="var(--color-gpa)" fill="hsl(var(--primary)/0.05)" strokeWidth={3} />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="bg-background/40 border-border/50 animate-in fade-in slide-in-from-right-4 duration-700 overflow-hidden backdrop-blur-xl">
                <CardHeader className="p-6">
                  <CardTitle className="text-[11px] sm:text-sm font-black font-headline uppercase tracking-[0.4em] text-primary">Live Activity</CardTitle>
                  <CardDescription className="text-[10px] font-black uppercase opacity-40">Recent data access logs</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  {studentActivity.slice(0, 3).map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 rounded-xl bg-secondary/20 border border-border/40 group hover:border-primary/60 transition-all cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xs font-black text-primary border border-primary/20">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-black uppercase tracking-tight">{student.name}</span>
                          <span className="text-[9px] uppercase font-black opacity-40 tracking-widest">{student.id_num}</span>
                        </div>
                      </div>
                      <MoreVertical className="w-3.5 h-3.5 text-muted-foreground opacity-20 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="dashboard" className="py-24 px-4 sm:px-6 bg-secondary/5 border-t border-border overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-primary/10 border border-primary/25 text-[11px] font-black text-primary uppercase tracking-[0.5em] shadow-lg">
            <Activity className="w-4 h-4" />
            Core Analytics Node
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black tracking-tighter uppercase leading-[1.1] sm:leading-[0.9] shimmer-text">
            INTELLIGENT <br className="sm:hidden" /> 
            DATA <br className="sm:hidden" /> 
            <span className="text-gradient">ECOSYSTEM</span>
          </h2>
          <p className="text-[11px] sm:text-lg text-muted-foreground max-w-3xl mx-auto font-black opacity-70 uppercase tracking-[0.2em] leading-relaxed px-4">
            A high-performance architectural simulation focusing on academic data integrity and predictive lifecycle analytics.
          </p>
        </div>

        <div className="rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden border-2 border-border bg-card shadow-4xl animate-in fade-in zoom-in-95 duration-1000">
          <div className="p-6 sm:p-10 border-b border-border bg-secondary/30 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-primary text-primary-foreground shadow-2xl">
                <Database className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-headline uppercase tracking-tight text-foreground">ANALYTICS ENGINE v3.0</h3>
                <p className="text-[10px] text-primary uppercase tracking-[0.5em] font-black opacity-80 mt-1">Node Status: Verified // SYNCED</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative hidden lg:block">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground opacity-50" />
                <input 
                  placeholder="QUERY REGISTRY..." 
                  className="bg-background/50 border border-border rounded-xl pl-12 pr-6 py-3 text-[11px] w-48 xl:w-72 focus:outline-none focus:border-primary transition-all font-black uppercase tracking-widest"
                />
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => handleSimulatedAction("Alerts Node")} className="p-3 rounded-xl bg-background border border-border text-muted-foreground hover:text-primary transition-all shadow-md"><Bell className="w-4 h-4 sm:w-5 sm:h-5" /></button>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/20 border-2 border-primary/20 flex items-center justify-center text-primary font-black cursor-pointer text-[11px] sm:text-[12px] shadow-lg hover:scale-105 transition-all" onClick={() => handleSimulatedAction("User Identity Node")}>NS</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row min-h-[600px]">
            <div className="w-full lg:w-72 border-b lg:border-b-0 lg:border-r-2 border-border bg-secondary/10 p-6">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 lg:space-y-3 no-scrollbar pb-2 lg:pb-0">
                {[
                  { icon: LayoutDashboard, label: "Overview" },
                  { icon: Users, label: "Student Data" },
                  { icon: BookOpen, label: "Academic Data" },
                ].map((item) => (
                  <button 
                    key={item.label}
                    onClick={() => handleTabChange(item.label)}
                    className={cn(
                      "flex items-center gap-3 px-5 py-4 rounded-xl text-[11px] font-black transition-all whitespace-nowrap lg:w-full uppercase tracking-[0.3em] shadow-sm",
                      activeTab === item.label
                      ? "bg-primary text-primary-foreground shadow-xl scale-[1.02]" 
                      : "text-muted-foreground hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 p-6 sm:p-14 space-y-8 sm:space-y-10 bg-gradient-to-br from-background via-background to-secondary/5 overflow-hidden">
              <div className="flex items-center justify-between gap-6">
                <h4 className="text-xl sm:text-3xl font-black font-headline text-foreground uppercase tracking-tight leading-none">
                  {activeTab} <span className="text-primary opacity-30 text-sm sm:text-xl">Subsystem</span>
                </h4>
                <div className="flex gap-2 sm:gap-3">
                  <button onClick={() => handleSimulatedAction("Data Sync")} className="hidden sm:flex items-center gap-3 text-[10px] sm:text-[11px] font-black px-4 py-2.5 rounded-xl border-2 border-border hover:border-primary hover:text-primary transition-all uppercase tracking-widest shadow-md">
                    <TrendingUp className="w-3.5 h-3.5" /> Sync
                  </button>
                  <button onClick={() => handleSimulatedAction("Data Export")} className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-black px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:brightness-110 transition-all uppercase tracking-widest shadow-2xl">
                    <Download className="w-3.5 h-3.5" /> Export
                  </button>
                </div>
              </div>

              <div className="w-full">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}