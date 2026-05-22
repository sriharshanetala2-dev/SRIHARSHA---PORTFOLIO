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
    description: 'An AI-orchestrated productivity ecosystem leveraging Google Genkit for semantic task management.',
    longDescription: 'Architected a high-performance productivity hub that utilizes Generative AI for intent parsing and automated priority mapping. Built with a focus on real-time data integrity using Firestore and a low-latency UI architecture that prioritizes developer velocity and cognitive ease.',
    tags: ['Next.js 15', 'Genkit', 'Firebase', 'LLM'],
    techStack: ['Next.js 15', 'Google Genkit', 'Firebase', 'Tailwind CSS'],
    features: [
      'Semantic Intent Analysis',
      'Real-time Firestore Streams',
      'Dynamic Priority Scoring',
      'Agentic Task Automation'
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
    description: 'A low-latency financial dashboard for enterprise-grade trading visualization and market analysis.',
    longDescription: 'Engineered an enterprise-grade financial monitoring system that aggregates complex market data into real-time visual insights. Optimized for high-frequency rendering of data-heavy charts using Recharts and custom Web Worker logic for non-blocking data processing.',
    tags: ['Recharts', 'TypeScript', 'Web3', 'Node.js'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Recharts'],
    features: [
      'High-Frequency Data Streams',
      'Predictive Volatility Modeling',
      'Custom Indicator Logic',
      'Multi-Asset Portfolio Sync'
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
    description: 'A robust, ACID-compliant relational engine designed for high-concurrency enterprise transaction management.',
    longDescription: 'Developed a specialized backend core focusing on high-integrity data mutations and complex join optimization. Implemented custom JDBC pooling and transaction management to ensure zero data loss during peak loads in enterprise environments.',
    tags: ['Java', 'Spring Boot', 'SQL', 'ACID'],
    techStack: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Docker'],
    features: [
      'Custom JDBC Connection Pooling',
      'Optimized SQL Execution Plans',
      'Multi-Threaded Sync Logic',
      'Atomic Transaction Control'
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
    description: 'A visual networking visualizer and subnet mask calculator for complex data center infrastructure mapping.',
    longDescription: 'Built a specialized tool for network architects to simulate and visualize IP address distributions and routing topologies. Uses advanced bitwise logic to handle high-performance IP range calculations and CIDR mapping in real-time.',
    tags: ['Networking', 'CIDR', 'Algorithms', 'React'],
    techStack: ['TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zod'],
    features: [
      'Real-time Subnet Calculation',
      'Visual Node Mapping',
      'Latency Path Simulation',
      'Dynamic CIDR Orchestration'
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
    description: 'An advanced Identity and Access Management shell with OAuth 2.0 integration and MFA biometric logic.',
    longDescription: 'Designed a security-first authentication layer focusing on zero-trust principles and robust session management. Implemented complex identity mapping and audit logging for high-compliance enterprise environments using modern cryptographic standards.',
    tags: ['Auth', 'Security', 'OAuth 2.0', 'Firebase'],
    techStack: ['Firebase Auth', 'JWT', 'TypeScript', 'Node.js'],
    features: [
      'Biometric MFA Integration',
      'JWT Session Rotation',
      'Zero-Trust Identity Mapping',
      'Automated Audit Logging'
    ],
    metrics: [
      { label: 'Auth', value: 'OAuth 2.0' },
      { label: 'Encryption', value: 'AES-256' },
      { label: 'Strategy', value: 'ZTNA' }
    ]
  },
  {
    id: 'cloudscale-orchestrator',
    title: 'CloudScale Monitor',
    category: 'Cloud Systems',
    icon: Server,
    description: 'A specialized Kubernetes cluster monitoring dashboard for real-time resource allocation and health sync.',
    longDescription: 'Orchestrated a cloud-native monitoring suite that provides deep observability into containerized workloads. Features automated threshold alerts, resource consumption forecasting, and cluster-wide health synchronization.',
    tags: ['DevOps', 'Cloud', 'Monitoring', 'Next.js'],
    techStack: ['Next.js', 'Prometheus API', 'Docker', 'AWS'],
    features: [
      'Real-time Pod Monitoring',
      'Resource Burst Analysis',
      'Predictive Auto-Scaling',
      'Cluster Health Scoring'
    ],
    metrics: [
      { label: 'Cluster', value: 'K8s' },
      { label: 'Stack', value: 'TIG' },
      { label: 'Health', value: '99.9%' }
    ]
  },
  {
    id: 'algoviz-engine',
    title: 'AlgoViz Visualizer',
    category: 'Computer Science',
    icon: Zap,
    description: 'A visualization platform for complex data structures and sorting algorithms with step-by-step logic.',
    longDescription: 'Created an educational tool that brings abstract CS concepts to life. Uses advanced React state management to animate complex pointer movements and tree traversals in real-time, helping developers debug logic visually.',
    tags: ['Algorithms', 'Data Structures', 'Education', 'UI'],
    techStack: ['React', 'Framer Motion', 'TypeScript', 'Tailwind'],
    features: [
      'Dynamic Tree Visualizer',
      'Step-through Logic Debugger',
      'Asymptotic Complexity Map',
      'Custom Scriptable Algorithms'
    ],
    metrics: [
      { label: 'Complexity', value: 'O(n log n)' },
      { label: 'Mode', value: 'Visual' },
      { label: 'Sync', value: 'Real-time' }
    ]
  },
  {
    id: 'sentinel-threat-node',
    title: 'Sentinel Threat Node',
    category: 'Security Operations',
    icon: ShieldCheck,
    description: 'A real-time threat detection and incident response dashboard for SecOps teams to mitigate risks.',
    longDescription: 'Developed a high-fidelity security operations center dashboard. Integrates multiple threat feeds into a unified neural interface for rapid incident prioritization, triage, and automated remediation playbooks.',
    tags: ['SecOps', 'Threat Intel', 'Next.js', 'Dashboard'],
    techStack: ['Next.js', 'Firebase', 'Radix UI', 'Lucide'],
    features: [
      'Neural Threat Prioritization',
      'Incident Triage Flow',
      'Real-time Alert Streams',
      'Remediation Playbooks'
    ],
    metrics: [
      { label: 'Level', value: 'Critical' },
      { label: 'Feed', value: 'OSINT' },
      { label: 'Triage', value: 'Automated' }
    ]
  }
];