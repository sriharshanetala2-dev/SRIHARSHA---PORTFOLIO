
import { Database, Sparkles, Network, Code2, LineChart, Search, LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  longDescription: string;
  icon: LucideIcon;
  github: string;
  demo: string;
  features: string[];
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: "student-system",
    title: "Student Management System",
    category: "Academic / Management",
    tags: ["Java", "SQL", "JDBC"],
    description: "An intelligent database system designed for seamless academic lifecycle tracking.",
    longDescription: "A robust enterprise-grade solution for educational institutions. This system streamlines student registration, grading, attendance tracking, and performance analytics using optimized SQL queries and a high-performance Java backend.",
    icon: Database,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/student-system",
    features: [
      "Real-time Academic Tracking",
      "Automated Grade Calculation",
      "Secure Student Identity Management",
      "Performance Trend Visualization"
    ],
    techStack: ["Java SE", "PostgreSQL", "JDBC", "Swing UI"]
  },
  {
    id: "weather-oracle",
    title: "AI Weather Oracle",
    category: "Generative AI",
    tags: ["JavaScript", "OpenWeather API", "Neural Networks"],
    description: "Creative AI-powered weather forecasting application with futuristic visualization.",
    longDescription: "Bridging meteorology and artificial intelligence, the Oracle uses neural network patterns to interpret OpenWeather data, providing not just forecasts but atmospheric insights delivered through a stunning glassmorphism interface.",
    icon: Sparkles,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/weather-oracle",
    features: [
      "Neural Forecast Engine",
      "Dynamic Atmospheric Visuals",
      "Real-time API Integration",
      "Global Weather Search"
    ],
    techStack: ["React", "TensorFlow.js", "Tailwind CSS", "OpenWeather API"]
  },
  {
    id: "ai-task-manager",
    title: "AI Cognitive Task Manager",
    category: "GenAI / Coding",
    tags: ["Next.js", "Genkit", "Firebase"],
    description: "Dynamic orchestration engine utilizing code-driven logic and LLMs to prioritize tasks.",
    longDescription: "A productivity powerhouse that uses Google Genkit to analyze task descriptions and automatically categorize, prioritize, and suggest optimal schedules based on cognitive load analysis.",
    icon: Code2,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/ai-task-manager",
    features: [
      "AI-Powered Prioritization",
      "Semantic Task Search",
      "Real-time Firebase Sync",
      "Automated Scheduling Logic"
    ],
    techStack: ["Next.js 15", "Google Genkit", "Firebase Auth/Firestore", "ShadCN UI"]
  },
  {
    id: "marketsync",
    title: "MarketSync: Adaptive Trading Hub",
    category: "E-Commerce / FinTech",
    tags: ["React", "Tailwind", "Firebase"],
    description: "Professional marketing analytics platform integrating real-time data visualization.",
    longDescription: "MarketSync is a comprehensive digital marketplace simulator that monitors live asset trends and provides users with a simulated trading environment to master market dynamics.",
    icon: LineChart,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/marketsync",
    features: [
      "Live Trend Monitoring",
      "Simulated Asset Trading",
      "User Portfolio Analytics",
      "Responsive Marketplace UI"
    ],
    techStack: ["React", "Recharts", "Firebase Firestore", "Tailwind CSS"]
  },
  {
    id: "subnet-master",
    title: "SubnetMaster: Visual IP Engine",
    category: "Network Engineering",
    tags: ["React", "Networking", "Subnetting"],
    description: "Autonomous network topology designer for precision IP subnetting.",
    longDescription: "A specialized tool for network engineers to calculate and visualize complex IP subnetting schemes. It features a terminal-based input system and a visual topology generator for optimized network planning.",
    icon: Network,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/subnet-master",
    features: [
      "Visual IP Topology Mapping",
      "Automated CIDR Calculation",
      "Binary/Decimal Conversion Engine",
      "Network Efficiency Analytics"
    ],
    techStack: ["React", "Canvas API", "TypeScript", "Lucide Icons"]
  },
  {
    id: "data-analytics",
    title: "Data Analytics Platform",
    category: "Business Intel",
    tags: ["Python", "SQL", "Pandas"],
    description: "Advanced analytical engine for synthesizing complex business datasets.",
    longDescription: "A powerful data synthesis platform that automates the extraction and transformation of large business datasets into interactive dashboards and predictive visual insights.",
    icon: Search,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/data-analytics",
    features: [
      "Automated Data Synthesis",
      "Predictive Trend Analysis",
      "Interactive Visualization Hub",
      "Cross-Platform Reporting"
    ],
    techStack: ["Python", "Pandas", "SQLAlchemy", "Plotly"]
  }
];
