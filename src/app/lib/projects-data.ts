import { 
  Cpu, 
  Database, 
  Globe, 
  Workflow, 
  BarChart3,
  Terminal,
  Activity,
  ShieldCheck,
  Server,
  Code2,
  Box
} from 'lucide-react';

export const projects = [
  {
    id: 'neural-workflow-os',
    title: 'Neural Workflow OS',
    category: 'AI Systems',
    icon: Workflow,
    description: 'Autonomous task orchestration engine built with Next.js and Google Genkit for semantic intent parsing.',
    longDescription: 'Developed an enterprise-grade AI kernel that leverages Large Language Models for autonomous task management. The system uses Genkit for logic flows and Next.js for high-performance rendering.',
    tags: ['Next.js', 'Genkit', 'TypeScript', 'React'],
    techStack: ['Next.js', 'Google Genkit', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Semantic Intent Resolution',
      'AI Logic Orchestration',
      'Real-time State Management',
      'Automated Task Mapping'
    ],
    metrics: [
      { label: 'Integrity', value: 'High' },
      { label: 'Architecture', value: 'Neural' },
      { label: 'Security', value: 'Verified' }
    ],
    systemLogs: [
      "[SYSTEM] Initializing AI Kernel...",
      "[TRACE] Genkit flow registered.",
      "[NODE] Processing semantic intent.",
      "[SYNC] Next.js SSR active.",
      "[AGENT] Execution loop online."
    ],
    codeSnippet: `{
  "kernel": "NextJS_Genkit_Core",
  "logic": "AI_Orchestrator",
  "stack": ["React", "TypeScript", "Node"],
  "status": "OPERATIONAL"
}`
  },
  {
    id: 'sentinel-iam-hub',
    title: 'Sentinel IAM Hub',
    category: 'Security',
    icon: ShieldCheck,
    description: 'Centralized Identity & Access Management system utilizing Spring Boot and SQL for secure enterprise authentication.',
    longDescription: 'Architected a robust security gateway focusing on RBAC and secure session management. Implemented custom authentication filters and atomic database transactions using Spring Boot and SQL.',
    tags: ['Spring Boot', 'Java', 'SQL', 'Security'],
    techStack: ['Java', 'Spring Boot', 'SQL', 'Hibernate'],
    features: [
      'Spring Security Integration',
      'SQL Database Persistence',
      'Advanced RBAC Subsystem',
      'Atomic Transaction Control'
    ],
    metrics: [
      { label: 'Integrity', value: 'L4' },
      { label: 'Architecture', value: 'Distributed' },
      { label: 'Security', value: 'Hardened' }
    ],
    systemLogs: [
      "[AUTH] Handshaking Spring Security...",
      "[SQL] Querying identity registry...",
      "[SENTINEL] Anomaly check: PASSED",
      "[DB] Session state persisted.",
      "[CORE] Auth gateway: SECURE"
    ],
    codeSnippet: `{
  "subsystem": "SpringBoot_IAM",
  "language": "Java_21",
  "database": "SQL_Postgres",
  "auth": "JWT_Secure",
  "state": "ACTIVE"
}`
  },
  {
    id: 'pulse-analytics-node',
    title: 'Pulse Analytics Node',
    category: 'Big Data',
    icon: Server,
    description: 'Data processing pipeline for high-volume analytics using Python and SQL for predictive modeling.',
    longDescription: 'Engineered a data synthesis platform that handles massive datasets. Utilizes Python for data parsing and SQL for structured storage, with a React-based interface for real-time visualization.',
    tags: ['Python', 'SQL', 'React', 'Node.js'],
    techStack: ['Python', 'SQL', 'Node.js', 'React'],
    features: [
      'Python Predictive Modeling',
      'SQL Query Optimization',
      'Real-time Data Streams',
      'High-Density Visual Charts'
    ],
    metrics: [
      { label: 'Integrity', value: 'Atomic' },
      { label: 'Architecture', value: 'Pipeline' },
      { label: 'Security', value: 'Verified' }
    ],
    systemLogs: [
      "[PULSE] Python script executing...",
      "[SQL] Indexing large dataset...",
      "[DATA] Pulse stream: 45k ops/sec",
      "[SYNC] React UI update: 12ms",
      "[SYS] Analytics node: STABLE"
    ],
    codeSnippet: `{
  "engine": "Python_SQL_Pulse",
  "throughput": "High_Volume",
  "stack": ["NodeJS", "React"],
  "analysis": "Predictive_L2",
  "status": "RUNNING"
}`
  },
  {
    id: 'core-logic-engine',
    title: 'Core Logic Engine',
    category: 'Backend',
    icon: Database,
    description: 'Robust transaction management system focusing on high-concurrency Java systems and SQL integrity.',
    longDescription: 'Developed a high-performance backend core for handling complex data mutations. Focused on Spring Boot for logic and SQL for data persistence with ACID compliance.',
    tags: ['Java', 'Spring Boot', 'SQL', 'Node.js'],
    techStack: ['Java', 'Spring Boot', 'SQL', 'Node.js'],
    features: [
      'Spring Boot Core Logic',
      'SQL ACID Transactions',
      'Custom Connection Pooling',
      'High-Concurrency Support'
    ],
    metrics: [
      { label: 'Integrity', value: 'Atomic' },
      { label: 'Architecture', value: 'Systems' },
      { label: 'Security', value: 'Verified' }
    ],
    systemLogs: [
      "[CORE] Java HotSpot starting...",
      "[SQL] Connection pool: READY",
      "[BOOT] Spring Context loaded.",
      "[ACID] Transaction verified.",
      "[NODE] Worker threads active."
    ],
    codeSnippet: `{
  "system": "SpringBoot_SQL_Core",
  "concurrency": "MultiThreaded",
  "isolation": "Serializable",
  "integrity": "Atomic",
  "state": "ONLINE"
}`
  }
];
