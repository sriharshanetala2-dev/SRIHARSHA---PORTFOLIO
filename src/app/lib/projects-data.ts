import { Database, Sparkles, Network, Code2, LineChart, Search, LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: string;
  phase: 'learning' | 'fullstack';
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
    phase: 'learning',
    tags: ["Java", "SQL", "JDBC"],
    description: "A database-driven system built to manage and track student academic records efficiently.",
    longDescription: "Developed as a foundational project to master Java and SQL integration. This system handles student registration, grade management, and attendance tracking using optimized JDBC connections and a relational database structure.",
    icon: Database,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/student-system",
    features: [
      "Student Record Management",
      "Automated Grade Input",
      "Attendance Tracking System",
      "Basic Performance Reporting"
    ],
    techStack: ["Java SE", "PostgreSQL", "JDBC", "Swing UI"]
  },
  {
    id: "subnet-master",
    title: "SubnetMaster: Visual IP Engine",
    category: "Network Engineering",
    phase: 'learning',
    tags: ["React", "Networking", "Subnetting"],
    description: "A practical tool for network engineers to calculate and visualize IP subnetting schemes.",
    longDescription: "A hands-on engineering project that simplifies complex CIDR calculations. It provides a visual representation of network topologies, helping students and professionals plan network infrastructures with precision.",
    icon: Network,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/subnet-master",
    features: [
      "CIDR Range Calculation",
      "Visual Network Topology",
      "Subnet Mask Generator",
      "IP Address Validation"
    ],
    techStack: ["React", "Canvas API", "TypeScript", "Lucide Icons"]
  },
  {
    id: "data-analytics",
    title: "Data Analytics Platform",
    category: "Business Intel",
    phase: 'learning',
    tags: ["Python", "SQL", "Pandas"],
    description: "A data processing tool designed to analyze and visualize business datasets using Python.",
    longDescription: "Built during my core learning phase to understand data manipulation. This platform uses Python libraries to extract insights from CSV/SQL data, presenting them through interactive charts for better decision-making.",
    icon: Search,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/data-analytics",
    features: [
      "Automated Data Cleaning",
      "Trend Visualization",
      "CSV/SQL Data Import",
      "Basic Predictive Modeling"
    ],
    techStack: ["Python", "Pandas", "SQLAlchemy", "Plotly"]
  },
  {
    id: "ai-task-manager",
    title: "AI Cognitive Task Manager",
    category: "GenAI / Coding",
    phase: 'fullstack',
    tags: ["Next.js", "Genkit", "Firebase"],
    description: "A modern task management app that uses AI to help prioritize daily workflows.",
    longDescription: "A full-stack project integrating Google Genkit AI. It analyzes task descriptions to suggest priority levels and categories, demonstrating the practical application of LLMs in productivity tools.",
    icon: Code2,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/ai-task-manager",
    features: [
      "AI Task Analysis",
      "Real-time Data Sync",
      "User Authentication",
      "Smart Priority Sorting"
    ],
    techStack: ["Next.js 15", "Google Genkit", "Firebase Firestore", "ShadCN UI"]
  },
  {
    id: "marketsync",
    title: "MarketSync: Trading Hub",
    category: "FinTech",
    phase: 'fullstack',
    tags: ["React", "Tailwind", "Firebase"],
    description: "A simulated trading environment for monitoring and analyzing asset trends.",
    longDescription: "MarketSync was built to explore real-time data handling. It simulates a digital marketplace where users can track asset prices and manage a virtual portfolio, all synced through Firebase.",
    icon: LineChart,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/marketsync",
    features: [
      "Live Price Simulation",
      "Virtual Portfolio Management",
      "Interactive Market Charts",
      "User Balance Tracking"
    ],
    techStack: ["React", "Recharts", "Firebase Firestore", "Tailwind CSS"]
  },
  {
    id: "weather-oracle",
    title: "AI Weather Oracle",
    category: "Generative AI",
    phase: 'fullstack',
    tags: ["React", "OpenWeather API", "AI"],
    description: "A weather application that provides AI-generated insights based on real-time data.",
    longDescription: "This project combines API integration with generative AI. It fetches weather data from OpenWeather and uses AI to provide helpful 'atmospheric insights' and travel tips through a modern UI.",
    icon: Sparkles,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/weather-oracle",
    features: [
      "Real-time Weather Fetching",
      "AI-Generated Tips",
      "Modern Glassmorphism UI",
      "Location-based Search"
    ],
    techStack: ["React", "OpenWeather API", "Tailwind CSS", "Next.js"]
  }
];
