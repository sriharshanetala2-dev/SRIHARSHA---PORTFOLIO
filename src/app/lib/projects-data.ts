import { 
  Database, 
  Network, 
  Code2, 
  LineChart, 
  ShieldCheck, 
  BrainCircuit,
  Zap,
  Activity,
  Cpu,
  Layers,
  Terminal,
  Cloud,
  Eye,
  Lock,
  LucideIcon 
} from "lucide-react";

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
    id: "neural-workflow-os",
    title: "Neural Workflow OS",
    category: "Full Stack & AI",
    tags: ["Next.js 15", "Genkit", "Firebase", "LLM"],
    description: "An AI-first productivity ecosystem leveraging Google Genkit for semantic task orchestration and real-time state sync.",
    longDescription: "Architected a high-performance productivity hub that utilizes Generative AI for intent parsing and automated priority mapping. Built with a focus on real-time data integrity using Firestore and a low-latency UI architecture.",
    icon: BrainCircuit,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/neural-workflow-os",
    features: [
      "Semantic Intent Analysis",
      "Real-time Firestore Streams",
      "Dynamic Priority Scoring",
      "Agentic Task Automation"
    ],
    techStack: ["Next.js 15", "Google Genkit", "Firebase", "Tailwind CSS"],
    metrics: [
      { label: "Sync Latency", value: "<25ms" },
      { label: "AI Accuracy", value: "98.2%" }
    ]
  },
  {
    id: "tradeflux-enterprise",
    title: "TradeFlux Enterprise",
    category: "FinTech & UI",
    tags: ["React", "Recharts", "Framer Motion", "Real-time"],
    description: "Low-latency financial monitoring dashboard for real-time asset tracking and predictive trend visualization.",
    longDescription: "Engineered a professional-grade FinTech dashboard focused on high-frequency data visualization. Implemented advanced charting logic with Recharts and smooth state-driven animations with Framer Motion.",
    icon: LineChart,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/tradeflux-enterprise",
    features: [
      "High-Frequency Data Streams",
      "Interactive Time-Series Charts",
      "Predictive Trend Analysis",
      "Dynamic Portfolio Rebalancing"
    ],
    techStack: ["React", "Recharts", "Firebase", "Framer Motion"],
    metrics: [
      { label: "Frame Rate", value: "60fps" },
      { label: "Data Points", value: "100k+" }
    ]
  },
  {
    id: "cloudscale-orchestrator",
    title: "CloudScale Orchestrator",
    category: "DevOps & Cloud",
    tags: ["Go", "React", "Docker", "Monitoring"],
    description: "Enterprise-grade container monitoring hub for real-time cluster health and automated resource scaling.",
    longDescription: "Architected a high-fidelity monitoring shell for distributed systems. Implemented real-time resource telemetry and automated incident response logic for high-availability environments.",
    icon: Cloud,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/cloudscale-orchestrator",
    features: [
      "Real-time Resource Telemetry",
      "Automated Scaling Logic",
      "Cluster Health Visualizer",
      "Container Lifecycle Hooks"
    ],
    techStack: ["Go", "React", "Docker", "Prometheus"],
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Scaling Speed", value: "<2s" }
    ]
  },
  {
    id: "corelogic-java-engine",
    title: "CoreLogic Java Engine",
    category: "Backend Architecture",
    tags: ["Java", "Spring Boot", "SQL", "PostgreSQL"],
    description: "Mission-critical backend system focused on high-concurrency transaction management and SQL optimization.",
    longDescription: "Architected a scalable enterprise layer using Java and Spring Boot. Focused on ACID compliance, connection pooling optimization, and efficient relational schema design for high-load environments.",
    icon: Database,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/corelogic-java-engine",
    features: [
      "ACID Transaction Logic",
      "JDBC Connection Pooling",
      "Optimized Query Execution",
      "Multi-threaded Processing"
    ],
    techStack: ["Java SE", "Spring Boot", "PostgreSQL", "JDBC"],
    metrics: [
      { label: "Query Latency", value: "<5ms" },
      { label: "Concurrency", value: "2k req/s" }
    ]
  },
  {
    id: "algoviz-engine",
    title: "AlgoViz Engine",
    category: "Computer Science",
    tags: ["TypeScript", "Algorithms", "Visualizer"],
    description: "Deep-dive visualization engine for complex data structures and pathfinding algorithms.",
    longDescription: "Developed an interactive educational tool to visualize algorithmic complexity. Implemented step-through logic for A*, Dijkstra, and Red-Black Tree balancing to demystify core CS principles.",
    icon: Eye,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/algoviz-engine",
    features: [
      "Step-through Algorithm Execution",
      "Complexity Heatmap Generation",
      "Dynamic Pathfinding Visuals",
      "Real-time Data Structure Sync"
    ],
    techStack: ["TypeScript", "React", "Canvas API", "Algorithms"],
    metrics: [
      { label: "Frame Rate", value: "144fps" },
      { label: "Algo Depth", value: "24+" }
    ]
  },
  {
    id: "netops-topology-engine",
    title: "NetOps Topology Engine",
    category: "Network Engineering",
    tags: ["TypeScript", "Algorithms", "React", "Networking"],
    description: "Mathematical visualization engine for complex CIDR subnetting and hierarchical network topology mapping.",
    longDescription: "Developed an engineering tool to translate bitwise IPv4 operations into an interactive visual map. Built with a custom topological sorting algorithm to ensure conflict-free network planning.",
    icon: Network,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/netops-topology-engine",
    features: [
      "Bitwise Mask Computation",
      "VLSM Logic Engine",
      "Hierarchical Map Generation",
      "Auto-Conflict Resolution"
    ],
    techStack: ["React", "TypeScript", "Bitwise Ops", "Canvas API"],
    metrics: [
      { label: "Calculation Error", value: "0%" },
      { label: "Map Rendering", value: "<15ms" }
    ]
  },
  {
    id: "sentinel-security-hub",
    title: "Sentinel Security Hub",
    category: "Cybersecurity",
    tags: ["Python", "React", "Security", "Analytics"],
    description: "Real-time threat detection and security analytics dashboard for enterprise network protection.",
    longDescription: "Engineered a centralized security hub focusing on anomaly detection and risk scoring. Implemented real-time log ingestion and automated threat classification using heuristic analysis.",
    icon: Lock,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/sentinel-security-hub",
    features: [
      "Real-time Anomaly Detection",
      "Dynamic Risk Scoring Hub",
      "Automated Threat Analysis",
      "Security Policy Enforcement"
    ],
    techStack: ["Python", "React", "Firebase", "Heuristics"],
    metrics: [
      { label: "Threat Detection", value: "<100ms" },
      { label: "False Positives", value: "<0.1%" }
    ]
  },
  {
    id: "securegate-iam",
    title: "SecureGate Identity",
    category: "Security & Cloud",
    tags: ["Firebase Auth", "Security Rules", "OAuth 2.0"],
    description: "An enterprise identity and access management (IAM) blueprint featuring multi-provider OAuth and RBAC patterns.",
    longDescription: "Designed a production-ready authentication shell focusing on security best practices. Implemented Role-Based Access Control (RBAC) and secure session management using Firebase Authentication.",
    icon: ShieldCheck,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "/projects/securegate-iam",
    features: [
      "Multi-Provider OAuth 2.0",
      "RBAC Logic Implementation",
      "Secure Session Lifecycle",
      "Encrypted Data Sync"
    ],
    techStack: ["Next.js", "Firebase Auth", "Firestore Rules", "JWT"],
    metrics: [
      { label: "Auth Latency", value: "<100ms" },
      { label: "Security Audit", value: "Pass" }
    ]
  }
];