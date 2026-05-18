"use client";

import { useState } from "react";
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
  PieChart as PieChartIcon,
  Download,
  Filter
} from "lucide-react";
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  AreaChart, 
  Area,
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip as RechartsTooltip
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

const reports = [
  { title: "Annual Academic Audit", date: "2024-01-15", size: "2.4 MB", type: "PDF" },
  { title: "Semester performance Analytics", date: "2024-02-10", size: "1.8 MB", type: "XLS" },
  { title: "Student Retention Report", date: "2024-03-01", size: "3.1 MB", type: "PDF" },
  { title: "Infrastructure Utilization", date: "2024-03-05", size: "1.2 MB", type: "PDF" },
];

const chartConfig = {
  gpa: {
    label: "GPA Score",
    color: "hsl(var(--accent))",
  },
  attendance: {
    label: "Attendance %",
    color: "hsl(var(--primary))",
  }
} satisfies ChartConfig;

export function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("Student Data");
  const { toast } = useToast();

  const handleTabChange = (label: string) => {
    setActiveTab(label);
    toast({
      title: `Switched to ${label}`,
      description: `Accessing the ${label.toLowerCase()} module...`,
    });
  };

  const handleSimulatedAction = (action: string) => {
    toast({
      title: action,
      description: "This operation is being processed by the system core.",
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Student Data":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="bg-background/50 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-bold">Enrollment Registry</CardTitle>
                  <CardDescription>Comprehensive list of all registered students</CardDescription>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleSimulatedAction("Filter Applied")} className="p-2 rounded-lg border border-border hover:bg-secondary"><Filter className="w-4 h-4" /></button>
                  <button onClick={() => handleSimulatedAction("Search Active")} className="p-2 rounded-lg border border-border hover:bg-secondary"><Search className="w-4 h-4" /></button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>GPA</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {studentActivity.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-mono text-xs">{student.id_num}</TableCell>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell>{student.course}</TableCell>
                        <TableCell>{student.gpa}</TableCell>
                        <TableCell>
                          <span className={cn(
                            "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                            student.status === "Active" ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"
                          )}>
                            {student.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <button onClick={() => handleSimulatedAction(`Viewing ${student.name}`)} className="text-accent hover:underline text-xs font-bold">Details</button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        );

      case "Academic Data":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <Card className="bg-background/50 border-border/50 col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Grade Distribution (GPA vs Attendance)</CardTitle>
                <CardDescription>Correlation between presence and academic performance</CardDescription>
              </CardHeader>
              <CardContent className="h-80 pt-6">
                <ChartContainer config={chartConfig} className="h-full w-full">
                  <AreaChart data={gpaData} margin={{ left: -20, right: 10, top: 10 }}>
                    <defs>
                      <linearGradient id="colorGpa" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-gpa)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--color-gpa)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-attendance)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--color-attendance)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis dataKey="semester" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="gpa" stroke="var(--color-gpa)" fill="url(#colorGpa)" strokeWidth={3} />
                    <Area type="monotone" dataKey="attendance" stroke="var(--color-attendance)" fill="url(#colorAttendance)" strokeWidth={3} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        );

      case "Analytical Data":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="bg-background/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Project Submission Velocity</CardTitle>
                <CardDescription>Total submissions per module cluster</CardDescription>
              </CardHeader>
              <CardContent className="h-64">
                <ChartContainer config={{ submissions: { label: "Submissions", color: "hsl(var(--primary))" } }} className="h-full w-full">
                  <BarChart data={[
                    { name: 'Core', submissions: 400 },
                    { name: 'Adv', submissions: 300 },
                    { name: 'Lab', submissions: 200 },
                    { name: 'Proj', submissions: 278 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="submissions" fill="var(--color-submissions)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card className="bg-background/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Skill Acquisition Index</CardTitle>
                <CardDescription>Mastery levels across core competencies</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-8">
                <div className="space-y-4 w-full">
                  {[
                    { skill: "Data Structures", val: 88 },
                    { skill: "Algorithm Design", val: 92 },
                    { skill: "System Architecture", val: 75 },
                    { skill: "UI/UX Logic", val: 82 }
                  ].map((s) => (
                    <div key={s.skill} className="space-y-1">
                      <div className="flex justify-between text-xs font-bold uppercase">
                        <span>{s.skill}</span>
                        <span>{s.val}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${s.val}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "Report Data":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {reports.map((report) => (
              <Card key={report.title} className="bg-background/50 border-border/50 hover:border-accent transition-all group cursor-pointer" onClick={() => handleSimulatedAction(`Downloading ${report.title}`)}>
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">{report.title}</h5>
                      <p className="text-[10px] text-muted-foreground uppercase">{report.date} • {report.size}</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case "Overview":
      default:
        return (
          <div className="space-y-8 animate-in fade-in duration-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Total Students", value: "24,512", change: "+1.2k", icon: Users, delay: "delay-100" },
                { label: "Active Courses", value: "112", change: "+6", icon: BookOpen, delay: "delay-200" },
                { label: "Avg. GPA Score", value: "3.72", change: "+0.1", icon: TrendingUp, delay: "delay-300" },
              ].map((stat) => (
                <Card 
                  key={stat.label} 
                  className={cn(
                    "bg-background/50 border-border/50 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-500 cursor-pointer hover:bg-background transition-colors",
                    stat.delay
                  )}
                  onClick={() => handleSimulatedAction(`Analyzing ${stat.label}`)}
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

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <Card className="bg-background/50 border-border/50 animate-in fade-in slide-in-from-left-4 duration-700 overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-sm font-bold font-headline uppercase tracking-tight text-accent">Overview Trends</CardTitle>
                    <CardDescription className="text-xs">Aggregate Academic Performance</CardDescription>
                  </div>
                  <BarChart3 className="w-4 h-4 text-accent" />
                </CardHeader>
                <CardContent className="h-64 pt-4">
                  <ChartContainer config={chartConfig} className="h-full w-full">
                    <AreaChart data={gpaData} margin={{ left: -20, right: 10, top: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                      <XAxis dataKey="semester" axisLine={false} tickLine={false} tick={{ fontSize: 9 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9 }} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area type="monotone" dataKey="gpa" stroke="var(--color-gpa)" fill="hsl(var(--accent)/0.1)" strokeWidth={3} />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-border/50 animate-in fade-in slide-in-from-right-4 duration-700">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-sm font-bold font-headline uppercase tracking-tight text-accent">Security Logs</CardTitle>
                    <CardDescription className="text-xs">Live data access verification</CardDescription>
                  </div>
                  <Settings className="w-4 h-4 text-accent animate-spin-slow" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {studentActivity.slice(0, 4).map((student, idx) => (
                      <div 
                        key={student.id} 
                        onClick={() => handleSimulatedAction(`Viewing Data Record: ${student.name}`)}
                        className={cn(
                          "flex items-center justify-between p-3 rounded-xl bg-secondary/20 border border-border/30 transition-all hover:bg-secondary/40 cursor-pointer",
                          "animate-in fade-in slide-in-from-right-2 duration-500"
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
                        <MoreVertical className="w-4 h-4 text-muted-foreground cursor-pointer" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="dashboard" className="py-24 px-6 bg-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            <Database className="w-3 h-3" />
            Core Data Management
          </div>
          <h2 className="text-4xl font-headline font-bold">Student Data Environment</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A high-performance architectural simulation focusing on academic data integrity and predictive lifecycle analytics.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-2xl animate-in fade-in zoom-in-95 duration-1000">
          <div className="p-4 md:p-6 border-b border-border bg-secondary/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-accent text-accent-foreground">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-headline">EduSync Data Hub</h3>
                <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">Central Intelligence Node</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  placeholder="Query data records..." 
                  onKeyDown={(e) => e.key === 'Enter' && handleSimulatedAction("Record Query Executed")}
                  className="bg-background border border-border rounded-xl pl-10 pr-4 py-2 text-sm w-48 xl:w-64 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => handleSimulatedAction("Alerts Toggled")} className="p-2 rounded-xl bg-background border border-border text-muted-foreground hover:text-accent transition-colors"><Bell className="w-5 h-5" /></button>
                <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/20 flex items-center justify-center text-accent font-bold cursor-pointer" onClick={() => handleSimulatedAction("Security Profile")}>NS</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row min-h-[600px]">
            <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-border bg-secondary/10 p-4 lg:p-6">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 lg:space-y-2 no-scrollbar">
                {[
                  { icon: LayoutDashboard, label: "Overview" },
                  { icon: Users, label: "Student Data" },
                  { icon: BookOpen, label: "Academic Data" },
                  { icon: TrendingUp, label: "Analytical Data" },
                  { icon: FileText, label: "Report Data" },
                ].map((item) => (
                  <button 
                    key={item.label}
                    onClick={() => handleTabChange(item.label)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap lg:w-full",
                      activeTab === item.label
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

            <div className="flex-1 p-4 md:p-8 space-y-8 bg-gradient-to-br from-background to-secondary/5">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-headline font-bold text-foreground">
                  {activeTab} Management
                </h4>
                <div className="flex gap-2">
                  <button onClick={() => handleSimulatedAction("Syncing Records")} className="hidden sm:flex items-center gap-2 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-border hover:bg-secondary transition-colors uppercase">
                    <TrendingUp className="w-3 h-3" /> Sync
                  </button>
                  <button onClick={() => handleSimulatedAction("Exporting Data")} className="flex items-center gap-2 text-[10px] font-bold px-3 py-1.5 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors uppercase">
                    <Download className="w-3 h-3" /> Export
                  </button>
                </div>
              </div>

              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}