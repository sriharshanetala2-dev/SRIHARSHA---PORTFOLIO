import { 
  Code2, 
  Bot, 
  Cloud, 
  Database, 
  BarChart3, 
  Cpu, 
  Zap, 
  Lock, 
  Globe, 
  Activity, 
  ShieldCheck, 
  Server, 
  Workflow 
} from 'lucide-react';

export const projects = [
  {
    id: 'neural-workflow-os',
    title: 'Neural Workflow OS',
    category: 'Full Stack & AI',
    icon: Workflow,
    imageId: 'neural-workflow-os',
    description: 'An enterprise-grade AI orchestration ecosystem leveraging Google Genkit for semantic task management and neural priority mapping.',
    longDescription: 'Architected a high-performance productivity hub that utilizes Generative AI for intent parsing and automated priority mapping. This system focuses on real-time data integrity using a low-latency Firestore architecture designed to minimize cognitive overhead for high-performance teams.',
    tags: ['Next.js 15', 'Genkit', 'Firebase', 'LLM'],
    techStack: ['Next.js 15', 'Google Genkit', 'Firebase', 'Tailwind CSS'],
    features: [
      'Semantic Intent Analysis Engine',
      'Real-time Firestore State Streams',
      'Dynamic Priority Neural Scoring',
      'Agentic Task Execution Logic'
    ],
    metrics: [
      { label: 'Integrity', value: 'Verified' },
      { label: 'Architecture', value: 'Neural' },
      { label: 'Security', value: 'Enterprise' }
    ]
  },
  {
    id: 'tradeflux-enterprise',
    title: 'TradeFlux Enterprise',
    category: 'FinTech Systems',
    icon: BarChart3,
    imageId: 'tradeflux-enterprise',
    description: 'A low-latency financial dashboard engineered for high-frequency trading visualization and multi-asset market analysis.',
    longDescription: 'Engineered an enterprise-grade financial monitoring system that aggregates complex market data into real-time visual insights. Optimized for high-frequency rendering of data-heavy charts using Recharts and custom Web Worker logic for non-blocking data processing on the main thread.',
    tags: ['Recharts', 'TypeScript', 'Web3', 'Node.js'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Recharts'],
    features: [
      'High-Frequency Data Streaming',
      'Predictive Volatility Modeling',
      'Custom Technical Indicator Logic',
      'Multi-Asset Portfolio Synchronization'
    ],
    metrics: [
      { label: 'Standard', value: 'PCI-DSS' },
      { label: 'Protocol', value: 'WSS/JSON' },
      { label: 'Status', value: 'Stable' }
    ]
  },
  {
    id: 'corelogic-java-engine',
    title: 'CoreLogic Java Engine',
    category: 'Backend Architecture',
    icon: Database,
    imageId: 'corelogic-java-engine',
    description: 'A robust, ACID-compliant relational engine designed for high-concurrency enterprise transaction management and data integrity.',
    longDescription: 'Developed a specialized backend core focusing on high-integrity data mutations and complex join optimization. Implemented custom JDBC pooling and transaction management to ensure zero data loss during peak loads in enterprise-critical environments.',
    tags: ['Java', 'Spring Boot', 'SQL', 'ACID'],
    techStack: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Docker'],
    features: [
      'Custom JDBC Connection Pooling',
      'Optimized SQL Execution Plans',
      'Multi-Threaded Sync Architecture',
      'Atomic Transaction Lifecycle Control'
    ],
    metrics: [
      { label: 'Type', value: 'ACID' },
      { label: 'Core', value: 'Spring' },
      { label: 'Nodes', value: 'Distributed' }
    ]
  },
  {
    id: 'netops-topology-engine',
    title: 'NetOps Topology Hub',
    category: 'Network Engineering',
    icon: Globe,
    imageId: 'netops-topology-engine',
    description: 'A visual networking engine for complex data center infrastructure mapping and subnet mask calculation.',
    longDescription: 'Built a specialized tool for network architects to simulate and visualize IP address distributions and routing topologies. Uses advanced bitwise logic to handle high-performance IP range calculations and CIDR mapping in a responsive browser environment.',
    tags: ['Networking', 'CIDR', 'Algorithms', 'React'],
    techStack: ['TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zod'],
    features: [
      'Real-time Subnet Logic Calculation',
      'Visual Topological Node Mapping',
      'Latency Path Simulation Algorithm',
      'Dynamic CIDR Orchestration UI'
    ],
    metrics: [
      { label: 'Layer', value: 'L3/L4' },
      { label: 'Logic', value: 'Bitwise' },
      { label: 'Format', value: 'CIDR' }
    ]
  },
  {
    id: 'securegate-iam',
    title: 'SecureGate IAM',
    category: 'Cybersecurity',
    icon: Lock,
    imageId: 'securegate-iam',
    description: 'An advanced Identity and Access Management shell with OAuth 2.0 integration and MFA biometric verification logic.',
    longDescription: 'Designed a security-first authentication layer focusing on zero-trust principles and robust session management. Implemented complex identity mapping and audit logging for high-compliance enterprise environments using modern cryptographic standards.',
    tags: ['Auth', 'Security', 'OAuth 2.0', 'Firebase'],
    techStack: ['Firebase Auth', 'JWT', 'TypeScript', 'Node.js'],
    features: [
      'Biometric MFA Integration Logic',
      'JWT Session Rotation Strategy',
      'Zero-Trust Identity Mapping',
      'Automated Enterprise Audit Logging'
    ],
    metrics: [
      { label: 'Auth', value: 'OAuth 2.0' },
      { label: 'Encryption', value: 'AES-256' },
      { label: 'Strategy', value: 'ZTNA' }
    ]
  }
];
