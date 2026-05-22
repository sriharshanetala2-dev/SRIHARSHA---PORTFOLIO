import { Database, Network, Code2, LineChart, LucideIcon } from "lucide-react";

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
    category: "Full Stack & AI",
    tags: ["Next.js", "Genkit", "Firebase", "AI"],
    description: "A high-performance productivity hub leveraging LLMs for semantic task prioritization and real-time state synchronization.",
    longDescription: "Architected a next-generation task orchestration platform that utilizes Google Genkit for semantic analysis of user intent. Built with a focus on real-time data integrity using Firestore and high-performance UI responsiveness.",
    icon: Code2,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/ai-task-manager",
    features: [
      "Semantic Intent Parsing",
      "Real-time Firestore Sync",
      "OAuth 2.0 Security",
      "Predictive Analytics"
    ],
    techStack: ["Next.js 15", "Google Genkit", "Firebase", "Tailwind CSS"],
    metrics: [
      { label: "Sync Latency", value: "<30ms" },
      { label: "Accuracy", value: "98.5%" }
    ]
  },
  {
    id: "marketsync",
    title: "MarketSync Dashboard",
    category: "UI & FinTech",
    tags: ["React", "Recharts", "Firebase", "Real-time"],
    description: "Low-latency financial monitoring dashboard for real-time asset tracking and virtual portfolio management.",
    longDescription: "Engineered a high-performance financial data visualization tool handling live high-frequency streams. Focused on interactive time-series analysis and state-driven UI responsiveness.",
    icon: LineChart,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/marketsync",
    features: [
      "High-Frequency Streams",
      "Advanced Charting",
      "Transactional Integrity",
      "Live P/L Engine"
    ],
    techStack: ["React", "Recharts", "Firebase", "Framer Motion"],
    metrics: [
      { label: "Update Rate", value: "250ms" },
      { label: "Data Points", value: "50k+" }
    ]
  },
  {
    id: "student-system",
    title: "Academic Record Engine",
    category: "Backend Systems",
    tags: ["Java", "SQL", "JDBC", "Back-end"],
    description: "High-concurrency academic record engine using relational integrity and optimized JDBC throughput for scale.",
    longDescription: "Architected a mission-critical management layer focused on ACID compliance and transaction isolation. Designed efficient query execution plans for high-load educational data environments.",
    icon: Database,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/student-system",
    features: [
      "ACID Compliance",
      "JDBC Connection Pooling",
      "Normalized Schema",
      "Performance Logging"
    ],
    techStack: ["Java SE", "PostgreSQL", "JDBC", "Back-end Logic"],
    metrics: [
      { label: "Query Latency", value: "<8ms" },
      { label: "Throughput", value: "2.5k req/s" }
    ]
  },
  {
    id: "subnet-master",
    title: "NetViz IP Matrix",
    category: "Computer Networks",
    tags: ["React", "Algorithms", "Networking"],
    description: "Mathematical visualization engine for complex CIDR subnetting and network topology mapping.",
    longDescription: "Developed an engineering tool to visualize bitwise operations in IPv4 subnetting. Translated complex networking algorithms into interactive visual maps for precise infrastructure planning.",
    icon: Network,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/subnet-master",
    features: [
      "Bitwise Mask Computation",
      "VLSM Logic",
      "Topology Generation",
      "Conflict Resolution"
    ],
    techStack: ["React", "TypeScript", "Bitwise Ops", "Algorithms"],
    metrics: [
      { label: "Calc Accuracy", value: "100%" },
      { label: "Render Speed", value: "60fps" }
    ]
  }
];
