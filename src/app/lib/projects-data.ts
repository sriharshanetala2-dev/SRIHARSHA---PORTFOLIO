import { 
  Database, 
  Workflow, 
  Smartphone,
  ShieldCheck,
  Cloud,
  Server,
  Code2
} from 'lucide-react';

export const projects = [
  {
    id: 'neural-workflow-os',
    title: 'Neural Workflow OS',
    category: 'AI Systems',
    icon: 'Workflow',
    description: 'Autonomous task orchestration engine built with Next.js and Google Genkit for semantic intent parsing.',
    longDescription: 'Developed an enterprise-grade AI kernel that leverages Large Language Models (Claude 3.5 & Gemini 2.0) for autonomous task management. The system uses Genkit for logic flows and n8n for workflow integration.',
    tags: ['Next.js', 'Genkit', 'Claude 3.5', 'n8n'],
    techStack: ['Next.js', 'Google Genkit', 'Claude 3.5', 'TypeScript'],
    features: [
      'Semantic Intent Resolution',
      'AI Logic Orchestration',
      'n8n Workflow Integration',
      'Real-time State Management'
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
    codeSnippet: `{\n  "kernel": "NextJS_Genkit_Core",\n  "logic": "AI_Orchestrator",\n  "models": ["Claude_3.5", "Gemini_2.0"],\n  "status": "OPERATIONAL"\n}`
  },
  {
    id: 'sentinel-iam-hub',
    title: 'Sentinel IAM Hub',
    category: 'Security',
    icon: 'ShieldCheck',
    description: 'Centralized Identity & Access Management system utilizing Spring Boot and SQL for secure enterprise authentication.',
    longDescription: 'Architected a robust security gateway focusing on RBAC and secure session management. Implemented custom authentication filters and atomic database transactions using Java 21 and Spring Boot.',
    tags: ['Spring Boot', 'Java 21', 'SQL', 'Security'],
    techStack: ['Java 21', 'Spring Boot', 'SQL', 'Hibernate'],
    features: [
      'Spring Security Integration',
      'SQL Database Persistence',
      'Advanced RBAC Subsystem',
      'Atomic Transaction Control'
    ],
    metrics: [
      { label: 'Integrity', value: 'L4' },
      { label: 'Architecture', value: 'Systems' },
      { label: 'Security', value: 'Hardened' }
    ],
    systemLogs: [
      "[AUTH] Handshaking Spring Security...",
      "[SQL] Querying identity registry...",
      "[SENTINEL] Anomaly check: PASSED",
      "[DB] Session state persisted.",
      "[CORE] Auth gateway: SECURE"
    ],
    codeSnippet: `{\n  "subsystem": "SpringBoot_IAM",\n  "language": "Java_21",\n  "database": "PostgreSQL",\n  "auth": "JWT_Secure",\n  "state": "ACTIVE"\n}`
  },
  {
    id: 'skyguard-mobile',
    title: 'SkyGuard Mobile',
    category: 'Mobile Dev',
    icon: 'Smartphone',
    description: 'High-performance fleet tracking application developed with Flutter and Dart, integrated with Firebase real-time data.',
    longDescription: 'Engineered a cross-platform mobile solution for real-time asset tracking. Implemented reactive state management using Dart and connected to Firebase Firestore for zero-latency updates.',
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
    codeSnippet: `{\n  "platform": "Flutter_Dart_Core",\n  "service": "Firebase_Cloud",\n  "state": "Reactive_BLoC",\n  "status": "ACTIVE"\n}`
  },
  {
    id: 'pulse-analytics-node',
    title: 'Pulse Analytics Node',
    category: 'Data Science',
    icon: 'Server',
    description: 'Data processing pipeline for high-volume analytics using Python and SQL for predictive modeling.',
    longDescription: 'Engineered a data synthesis platform that handles massive datasets. Utilizes Python for data parsing and SQL for structured storage, with a Next.js interface for real-time visualization.',
    tags: ['Python', 'SQL', 'Next.js', 'AI'],
    techStack: ['Python', 'SQL', 'FastAPI', 'Next.js'],
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
    codeSnippet: `{\n  "engine": "Python_SQL_Pulse",\n  "throughput": "High_Volume",\n  "stack": ["Python", "NextJS"],\n  "analysis": "Predictive_L2",\n  "status": "RUNNING"\n}`
  },
  {
    id: 'cloudsync-vault',
    title: 'CloudSync Vault',
    category: 'Full Stack',
    icon: 'Cloud',
    description: 'Enterprise document management platform built with React and Node.js, featuring atomic Firebase storage operations.',
    longDescription: 'Developed a high-concurrency file management system. Utilized React for a responsive frontend and Node.js for backend orchestration, with Firebase handles for storage and security.',
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
    codeSnippet: `{\n  "stack": "React_NodeJS_Firebase",\n  "concurrency": "EventLoop",\n  "storage": "Firebase_Bucket",\n  "status": "RUNNING"\n}`
  },
  {
    id: 'core-logic-engine',
    title: 'Core Logic Engine',
    category: 'Backend Systems',
    icon: 'Database',
    description: 'Robust transaction management system focusing on high-concurrency Java systems and SQL integrity.',
    longDescription: 'Developed a high-performance backend core for handling complex data mutations. Focused on Spring Boot for logic and SQL for data persistence with ACID compliance.',
    tags: ['Java', 'Spring Boot', 'SQL', 'ACID'],
    techStack: ['Java', 'Spring Boot', 'SQL', 'Hibernate'],
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
    codeSnippet: `{\n  "system": "SpringBoot_SQL_Core",\n  "concurrency": "MultiThreaded",\n  "isolation": "Serializable",\n  "integrity": "Atomic",\n  "state": "ONLINE"\n}`
  }
];