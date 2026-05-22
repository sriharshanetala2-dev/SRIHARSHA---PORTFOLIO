import { Database, Sparkles, Network, Code2, LineChart, Search, LucideIcon, Cpu, Globe, Zap, Shield, Server, Box, Terminal } from "lucide-react";

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
  metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "ai-task-manager",
    title: "Cognitive Workflow OS",
    category: "Generative AI",
    tags: ["Next.js", "Genkit", "Firebase", "AI"],
    description: "A neural-orchestrated productivity hub that leverages LLMs for semantic task prioritization and user intent analysis.",
    longDescription: "The next evolution of productivity tools. This platform utilizes Google Genkit to perform semantic analysis on user intent, automatically categorizing and prioritizing workflows based on natural language context. It integrates real-time synchronization through Firestore, ensuring a seamless experience across all devices with zero-latency updates.",
    icon: Code2,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/ai-task-manager",
    features: [
      "Semantic Intent Parsing",
      "Real-time Firestore Sync",
      "OAuth 2.0 Security Flow",
      "Predictive Deadline Estimation",
      "AI-Generated Subtask Arrays"
    ],
    techStack: ["Next.js 15", "Google Genkit", "Firebase", "ShadCN UI", "Zod"],
    metrics: [
      { label: "Inference Time", value: "~0.8s" },
      { label: "Sync Latency", value: "<30ms" },
      { label: "Accuracy", value: "98.5%" }
    ]
  },
  {
    id: "marketsync",
    title: "MarketSync: Financial Hub",
    category: "FinTech Development",
    tags: ["React", "Recharts", "Firebase", "Real-time"],
    description: "Engineered a low-latency financial monitoring dashboard for real-time asset tracking and virtual portfolio management.",
    longDescription: "A high-performance trading simulation that handles high-frequency data streams. It features advanced data visualization components that map market volatility onto interactive time-series charts. Built with a focus on real-time data integrity and reactive UI updates, allowing for precise tracking of virtual portfolios.",
    icon: LineChart,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/marketsync",
    features: [
      "High-Frequency Data Streams",
      "Advanced Time-Series Visuals",
      "Transactional Ledger System",
      "Live P/L Calculation Engine"
    ],
    techStack: ["React", "Recharts", "Firebase", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { label: "Data Points", value: "50k+" },
      { label: "Update Rate", value: "250ms" },
      { label: "Resolution", value: "4K Optimized" }
    ]
  },
  {
    id: "student-system",
    title: "Academic Record Engine",
    category: "Database Systems",
    tags: ["Java", "SQL", "JDBC", "Back-end"],
    description: "Architected a high-concurrency academic record engine using relational integrity and optimized JDBC throughput for scale.",
    longDescription: "A mission-critical management layer designed to handle complex relational datasets. This project focuses on ACID compliance, transaction isolation levels, and efficient query execution plans for educational institutions. The system utilizes advanced JDBC pooling techniques to ensure high performance.",
    icon: Database,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/student-system",
    features: [
      "ACID Compliant Transactions",
      "Dynamic JDBC Connection Pooling",
      "Normalized Relational Schema (3NF)",
      "Automated Performance Logging"
    ],
    techStack: ["Java SE", "PostgreSQL", "JDBC", "Swing UI"],
    metrics: [
      { label: "Query Latency", value: "<8ms" },
      { label: "Relational Tables", value: "18+" },
      { label: "Throughput", value: "2.5k req/s" }
    ]
  },
  {
    id: "subnet-master",
    title: "NetViz: Logical IP Matrix",
    category: "Computer Networks",
    tags: ["React", "Algorithms", "Networking"],
    description: "Developed a mathematical visualization engine for complex CIDR subnetting and network topology mapping.",
    longDescription: "An engineering tool built to demystify binary subnetting. It translates bitwise operations into interactive visual maps, providing a precise blueprint for IPv4 infrastructure planning. Features a real-time validation engine that prevents overlapping network segments.",
    icon: Network,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/subnet-master",
    features: [
      "Bitwise Mask Computation",
      "Variable Length Subnet Masking",
      "Real-time Topology Generation",
      "Conflict Resolution Logic"
    ],
    techStack: ["React", "Canvas API", "TypeScript", "Bitwise Ops"],
    metrics: [
      { label: "Calc Accuracy", value: "100%" },
      { label: "Subnet Limit", value: "Infinite" },
      { label: "Render Speed", value: "60fps" }
    ]
  }
];
