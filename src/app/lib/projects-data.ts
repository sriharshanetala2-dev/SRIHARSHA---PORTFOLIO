
import { Database, Sparkles, Network, Code2, LineChart, Search, LucideIcon, Cpu, Globe, Zap } from "lucide-react";

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
  metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "student-system",
    title: "Enterprise Record Engine",
    category: "System Architecture",
    phase: 'learning',
    tags: ["Java", "SQL", "JDBC"],
    description: "Architected a high-concurrency academic record engine using relational integrity and optimized JDBC throughput.",
    longDescription: "A mission-critical management layer designed to handle complex relational datasets. This project focuses on ACID compliance, transaction isolation levels, and efficient query execution plans for educational institutions.",
    icon: Database,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/student-system",
    features: [
      "ACID Compliant Transactions",
      "Dynamic JDBC Connection Pooling",
      "Normalized Relational Schema (3NF)",
      "Automated Performance Logging",
      "SQL Injection Prevention Layers",
      "Multi-threaded Background Reports"
    ],
    techStack: ["Java SE", "PostgreSQL", "JDBC", "Swing UI", "SQLAlchemy Concepts"],
    metrics: [
      { label: "Query Speed", value: "<10ms" },
      { label: "Relational Tables", value: "14+" }
    ]
  },
  {
    id: "subnet-master",
    title: "NetViz: Logical IP Matrix",
    category: "Network Engineering",
    phase: 'learning',
    tags: ["React", "Algorithms", "Networking"],
    description: "Developed a mathematical visualization engine for complex CIDR subnetting and network topology mapping.",
    longDescription: "An engineering tool built to demystify binary subnetting. It translates bitwise operations into interactive visual maps, providing engineers with a precise blueprint for IPv4 infrastructure planning.",
    icon: Network,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/subnet-master",
    features: [
      "Bitwise Mask Computation",
      "Variable Length Subnet Masking (VLSM)",
      "Real-time Topology Generation",
      "Conflict Resolution Logic",
      "Binary-to-Decimal Visualizers",
      "Network Capacity Forecasting"
    ],
    techStack: ["React", "Canvas API", "TypeScript", "Bitwise Ops"],
    metrics: [
      { label: "Calc Accuracy", value: "100%" },
      { label: "Subnet Limit", value: "Unlimited" }
    ]
  },
  {
    id: "ai-task-manager",
    title: "Cognitive Workflow OS",
    category: "Generative AI",
    phase: 'fullstack',
    tags: ["Next.js", "Genkit", "Firebase"],
    description: "A neural-orchestrated productivity hub that leverages LLMs for semantic task prioritization.",
    longDescription: "The next evolution of productivity tools. This platform utilizes Google Genkit to perform semantic analysis on user intent, automatically categorizing and prioritizing workflows based on natural language context.",
    icon: Code2,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/ai-task-manager",
    features: [
      "Semantic Intent Parsing",
      "Real-time Firestore Sync",
      "OAuth 2.0 Security Flow",
      "Predictive Deadline Estimation",
      "AI-Generated Subtask Arrays",
      "Workload Balancing Algorithms"
    ],
    techStack: ["Next.js 15", "Google Genkit", "Firebase Firestore", "ShadCN UI", "Zod"],
    metrics: [
      { label: "Inference Time", value: "~1.2s" },
      { label: "Sync Latency", value: "<50ms" }
    ]
  },
  {
    id: "marketsync",
    title: "MarketSync: Financial Hub",
    category: "FinTech Architecture",
    phase: 'fullstack',
    tags: ["React", "Recharts", "Firebase"],
    description: "Engineered a low-latency financial monitoring dashboard for real-time asset tracking and virtual trading.",
    longDescription: "A high-performance trading simulation that handles high-frequency data streams. It features advanced data visualization components that map market volatility onto interactive time-series charts.",
    icon: LineChart,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/marketsync",
    features: [
      "High-Frequency Data Streams",
      "Advanced Time-Series Visuals",
      "Transactional Ledger System",
      "Live P/L Calculation Engine",
      "Market Sentiment Analysis",
      "WebSocket Data Simulation"
    ],
    techStack: ["React", "Recharts", "Firebase Firestore", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { label: "Data Points", value: "10k+" },
      { label: "Update Rate", value: "500ms" }
    ]
  }
];
