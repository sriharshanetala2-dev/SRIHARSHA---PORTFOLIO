import { 
  Cpu, 
  Database, 
  Globe, 
  Workflow, 
  Terminal,
  Activity,
  ShieldCheck,
  Server,
  Smartphone,
  Cloud,
  Box,
  Flame
} from 'lucide-react';

export const projects = [
  {
    id: 'neural-workflow-os',
    title: 'Neural Workflow OS',
    category: 'AI Systems',
    icon: Workflow,
    description: 'Autonomous task orchestration engine built with Next.js and Google Genkit for semantic intent parsing.',
    longDescription: 'Developed an enterprise-grade AI kernel that leverages Large Language Models for autonomous task management. The system uses Genkit for logic flows and Next.js for high-performance rendering.',
    tags: ['Next.js', 'Genkit', 'TypeScript', 'Tailwind'],
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
    id: 'skyguard-mobile',
    title: 'SkyGuard Mobile',
    category: 'Mobile Dev',
    icon: Smartphone,
    description: 'High-performance fleet tracking application developed with Flutter and Dart, integrated with Firebase real-time data.',
    longDescription: 'Engineered a cross-platform mobile solution for real-time asset tracking. Implemented reactive state management using Dart and connected to Firebase Firestore and Cloud Messaging for zero-latency updates.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Mobile'],
    techStack: ['Flutter', 'Dart', 'Firebase Firestore', 'Firebase Auth'],
    features: [
      'Real-time Geospatial Tracking',
      'Reactive Dart UI Logic',
      'Firebase Cloud Synchronization',
      'Biometric Secure Access'
    ],
    metrics: [
      { label: 'Integrity', value: 'Mobile-L1' },
      { label: 'Architecture', value: 'Reactive' },
      { label: 'Security', value: 'Hardened' }
    ],
    systemLogs: [
      "[DART] Initializing Flutter Kernel...",
      "[FIREBASE] Establishing stream listener...",
      "[GPS] Location polling active.",
      "[UI] Frame rate: 120fps stable.",
      "[APP] Fleet node: SYNCED"
    ],
    codeSnippet: `{
  "platform": "Flutter_Dart_Core",
  "service": "Firebase_Cloud",
  "state": "Reactive_BLoC",
  "status": "ACTIVE"
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
    id: 'cloudsync-vault',
    title: 'CloudSync Vault',
    category: 'Full Stack',
    icon: Cloud,
    description: 'Enterprise document management platform built with React and Node.js, featuring atomic Firebase storage operations.',
    longDescription: 'Developed a high-concurrency file management system. Utilized React for a responsive frontend and Node.js for backend orchestration, with Firebase handles for storage and complex auth rules.',
    tags: ['React', 'Node.js', 'Firebase', 'TS'],
    techStack: ['React', 'Node.js', 'Firebase Storage', 'TypeScript'],
    features: [
      'Atomic Document Mutations',
      'Firebase Security Logic',
      'Real-time Collaboration',
      'High-Speed CDN Delivery'
    ],
    metrics: [
      { label: 'Integrity', value: 'Atomic' },
      { label: 'Architecture', value: 'Serverless' },
      { label: 'Security', value: 'Verified' }
    ],
    systemLogs: [
      "[NODE] Initializing worker thread...",
      "[FIREBASE] Mounting bucket storage...",
      "[UI] Hydrating React components...",
      "[AUTH] Rule set deployed.",
      "[SYNC] Vault node: ONLINE"
    ],
    codeSnippet: `{
  "stack": "React_NodeJS_Firebase",
  "concurrency": "EventLoop",
  "storage": "Firebase_Bucket",
  "status": "RUNNING"
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
