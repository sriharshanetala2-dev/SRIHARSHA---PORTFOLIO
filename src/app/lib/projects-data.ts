import { 
  Cpu, 
  Database, 
  Globe, 
  Lock, 
  Workflow, 
  Zap, 
  Shield, 
  BarChart3 
} from 'lucide-react';

export const projects = [
  {
    id: 'neural-workflow-os',
    title: 'Neural Workflow OS',
    category: 'Agentic Systems',
    icon: Workflow,
    imageId: 'neural-workflow-os',
    description: 'Autonomous orchestration engine utilizing Genkit for semantic intent parsing and priority mapping.',
    longDescription: 'Engineered an enterprise-grade AI kernel that leverages Large Language Models for autonomous task orchestration. The system implements a sophisticated priority scoring algorithm and real-time state synchronization via a low-latency Firestore architecture.',
    tags: ['Genkit', 'Firebase', 'Next.js', 'LLM'],
    techStack: ['Google Genkit', 'Firebase', 'TypeScript', 'Tailwind'],
    features: [
      'Semantic Intent Parsing Engine',
      'Real-time State Synchronization',
      'Neural Priority Mapping',
      'Agentic Execution Logic'
    ],
    metrics: [
      { label: 'Integrity', value: 'High' },
      { label: 'Architecture', value: 'Neural' },
      { label: 'Security', value: 'AES-256' }
    ]
  },
  {
    id: 'tradeflux-engine',
    title: 'TradeFlux Engine',
    category: 'FinTech Logic',
    icon: BarChart3,
    imageId: 'tradeflux-enterprise',
    description: 'High-frequency market analysis dashboard with real-time ACID-compliant data streams.',
    longDescription: 'Architected a low-latency financial dashboard that aggregates complex market data into real-time insights. Optimized for high-frequency rendering and data integrity using custom PostgreSQL indexing and reactive frontend logic.',
    tags: ['PostgreSQL', 'Recharts', 'Node.js', 'React'],
    techStack: ['PostgreSQL', 'Node.js', 'React', 'Web Workers'],
    features: [
      'ACID-Compliant Mutations',
      'High-Frequency Data Streaming',
      'Predictive Volatility Modeling',
      'Atomic Transaction Control'
    ],
    metrics: [
      { label: 'Integrity', value: 'ACID' },
      { label: 'Architecture', value: 'Reactive' },
      { label: 'Security', value: 'SSL/TLS' }
    ]
  },
  {
    id: 'corelogic-db',
    title: 'CoreLogic DB',
    category: 'Systems Engineering',
    icon: Database,
    imageId: 'corelogic-java-engine',
    description: 'Robust transaction management system focusing on high-concurrency data integrity.',
    longDescription: 'Developed a specialized backend core focusing on high-integrity data mutations and complex join optimization. Implemented custom JDBC pooling and atomic transaction lifecycles for enterprise-scale environments.',
    tags: ['Java', 'Spring Boot', 'SQL', 'Docker'],
    techStack: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Docker'],
    features: [
      'Custom JDBC Connection Pooling',
      'Optimized Execution Plans',
      'Multi-Threaded Sync Core',
      'Safe Failover Protocols'
    ],
    metrics: [
      { label: 'Integrity', value: 'Verified' },
      { label: 'Architecture', value: 'Monolith' },
      { label: 'Security', value: 'RBAC' }
    ]
  },
  {
    id: 'netops-topology',
    title: 'NetOps Topology',
    category: 'Network Systems',
    icon: Globe,
    imageId: 'netops-topology-engine',
    description: 'Visual IP orchestration tool for infrastructure mapping and subnet mask calculation.',
    longDescription: 'Built a specialized utility for network architects to simulate and visualize IP address distributions. Leverages advanced bitwise logic to handle high-performance CIDR mapping and topological routing simulations.',
    tags: ['Networking', 'Algorithms', 'TypeScript'],
    techStack: ['TypeScript', 'Framer Motion', 'Zod', 'Tailwind'],
    features: [
      'Real-time Subnet Logic',
      'Visual Topology Mapping',
      'Bitwise CIDR Calculation',
      'Path Simulation Logic'
    ],
    metrics: [
      { label: 'Integrity', value: 'L3/L4' },
      { label: 'Architecture', value: 'Topology' },
      { label: 'Security', value: 'Verified' }
    ]
  }
];