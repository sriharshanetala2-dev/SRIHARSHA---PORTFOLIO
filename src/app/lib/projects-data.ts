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
    category: 'Agentic AI Systems',
    icon: Workflow,
    imageId: 'neural-workflow-os',
    description: 'A high-performance task orchestration hub leveraging Google Genkit for semantic intent parsing and neural priority mapping.',
    longDescription: 'Engineered an enterprise-grade AI ecosystem that utilizes Generative AI for intent-based task orchestration. The system implements a sophisticated priority scoring algorithm and real-time state synchronization via a low-latency Firestore architecture, designed for high-concurrency environments.',
    tags: ['Next.js 15', 'Genkit', 'Firebase', 'LLM'],
    techStack: ['Next.js 15', 'Google Genkit', 'Firebase', 'Tailwind CSS'],
    features: [
      'Semantic Intent Analysis Kernel',
      'Real-time Firestore State Streams',
      'Dynamic Priority Neural Scoring',
      'Agentic Execution Logic'
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
    category: 'FinTech Architecture',
    icon: BarChart3,
    imageId: 'tradeflux-enterprise',
    description: 'A real-time financial dashboard engineered for multi-asset market analysis and high-frequency data visualization.',
    longDescription: 'Architected a low-latency financial monitoring hub that aggregates complex market data into real-time visual insights. Optimized for high-frequency rendering of data-heavy charts using Recharts and non-blocking Web Worker logic to ensure zero UI lag during peak volatility.',
    tags: ['Recharts', 'TypeScript', 'Web3', 'Node.js'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Recharts'],
    features: [
      'High-Frequency Data Streaming',
      'Predictive Volatility Modeling',
      'Custom Technical Indicator Logic',
      'Multi-Asset Portfolio Sync'
    ],
    metrics: [
      { label: 'Integrity', value: 'PCI-DSS' },
      { label: 'Architecture', value: 'Real-time' },
      { label: 'Security', value: 'AES-256' }
    ]
  },
  {
    id: 'corelogic-java-engine',
    title: 'CoreLogic Java Engine',
    category: 'Backend Engineering',
    icon: Database,
    imageId: 'corelogic-java-engine',
    description: 'A robust, ACID-compliant relational core designed for high-concurrency enterprise transaction management.',
    longDescription: 'Developed a specialized backend engine focusing on high-integrity data mutations and complex join optimization. Implemented custom JDBC pooling and atomic transaction lifecycles to ensure zero data loss in distributed enterprise environments.',
    tags: ['Java', 'Spring Boot', 'SQL', 'ACID'],
    techStack: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Docker'],
    features: [
      'Custom JDBC Connection Pooling',
      'Optimized SQL Execution Plans',
      'Multi-Threaded Sync Core',
      'Atomic Transaction Control'
    ],
    metrics: [
      { label: 'Integrity', value: 'ACID' },
      { label: 'Architecture', value: 'Distributed' },
      { label: 'Security', value: 'TLS 1.3' }
    ]
  },
  {
    id: 'netops-topology-engine',
    title: 'NetOps Topology Hub',
    category: 'Network Systems',
    icon: Globe,
    imageId: 'netops-topology-engine',
    description: 'A visual networking engine for complex infrastructure mapping and high-speed subnet mask calculation.',
    longDescription: 'Built a specialized utility for network architects to simulate and visualize IP address distributions. Leverages advanced bitwise logic to handle high-performance CIDR mapping and topological routing path simulations in a responsive browser environment.',
    tags: ['Networking', 'CIDR', 'Algorithms', 'React'],
    techStack: ['TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zod'],
    features: [
      'Real-time Subnet Logic Engine',
      'Visual Topological Mapping',
      'Path Simulation Algorithms',
      'Dynamic CIDR Orchestration'
    ],
    metrics: [
      { label: 'Integrity', value: 'L3/L4' },
      { label: 'Architecture', value: 'Topology' },
      { label: 'Security', value: 'Verified' }
    ]
  },
  {
    id: 'securegate-iam',
    title: 'SecureGate IAM',
    category: 'Cybersecurity Logic',
    icon: Lock,
    imageId: 'securegate-iam',
    description: 'An advanced Identity and Access Management shell with OAuth 2.0 integration and Zero-Trust verification.',
    longDescription: 'Designed a security-first authentication layer focusing on zero-trust principles and robust session rotation. Implemented complex identity mapping and automated audit logging for high-compliance enterprise environments using modern cryptographic standards.',
    tags: ['Auth', 'Security', 'OAuth 2.0', 'Firebase'],
    techStack: ['Firebase Auth', 'JWT', 'TypeScript', 'Node.js'],
    features: [
      'MFA Verification Logic',
      'JWT Session Rotation',
      'Zero-Trust Identity Mapping',
      'Automated Audit Logging'
    ],
    metrics: [
      { label: 'Integrity', value: 'OAuth 2.0' },
      { label: 'Architecture', value: 'ZTA' },
      { label: 'Security', value: 'FIPS 140' }
    ]
  }
];
