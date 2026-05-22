import { 
  Cpu, 
  Database, 
  Globe, 
  Lock, 
  Workflow, 
  Zap, 
  Shield, 
  BarChart3,
  Terminal,
  Activity,
  ShieldCheck,
  Server,
  Code2
} from 'lucide-react';

export const projects = [
  {
    id: 'neural-workflow-os',
    title: 'Neural Workflow OS',
    category: 'Agentic AI',
    icon: Workflow,
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
      { label: 'Security', value: 'Verified' }
    ],
    systemLogs: [
      "[SYSTEM] Initializing Neural Kernel v2.4...",
      "[TRACE] Semantic intent resolution: SUCCESS",
      "[NODE] Priority mapping weights adjusted: 0.892",
      "[SYNC] Firestore state push latency: 12ms",
      "[AGENT] Task orchestration loop started."
    ],
    codeSnippet: `{
  "kernel": "Neural_Orchestrator_v2",
  "logic_gate": "Semantic_Intent_Parser",
  "objective": "Autonomous_Task_Mapping",
  "state_sync": "Firestore_ACID",
  "status": "OPERATIONAL"
}`
  },
  {
    id: 'sentinel-security-hub',
    title: 'Sentinel IAM Hub',
    category: 'Cybersecurity',
    icon: ShieldCheck,
    description: 'Cloud Identity and Access Management platform with multi-factor biometric simulation.',
    longDescription: 'Developed a robust IAM gateway focusing on zero-trust principles. Implemented custom OAuth2 flows and RBAC (Role-Based Access Control) using Spring Security and JWT for high-integrity authentication.',
    tags: ['Spring Security', 'JWT', 'PostgreSQL', 'Docker'],
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    features: [
      'Zero-Trust Architecture',
      'JWT Payload Encryption',
      'Advanced RBAC Subsystem',
      'Biometric Simulation Logic'
    ],
    metrics: [
      { label: 'Integrity', value: 'L4' },
      { label: 'Architecture', value: 'Zero-Trust' },
      { label: 'Security', value: 'Hardened' }
    ],
    systemLogs: [
      "[AUTH] Handshaking JWT Header...",
      "[SENTINEL] Anomaly detection active: NO_THREAT",
      "[DB] Session state persisted in Postgres.",
      "[RBAC] Access permission verified for UID:8812",
      "[CORE] Security gateway: LOCKED"
    ],
    codeSnippet: `{
  "subsystem": "Sentinel_IAM_Core",
  "auth_model": "OAuth2_JWT_v3",
  "isolation": "Zero_Trust_L4",
  "encryption": "AES_256_GCM",
  "state": "SECURE"
}`
  },
  {
    id: 'tradeflux-engine',
    title: 'TradeFlux Engine',
    category: 'FinTech',
    icon: BarChart3,
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
      { label: 'Security', value: 'Verified' }
    ],
    systemLogs: [
      "[DB] Optimizing PostgreSQL B-Tree Index...",
      "[STREAM] Reactive buffer flushed: 1.2MB",
      "[ACID] Transaction verified: #TX-99021",
      "[STATS] Market volatility delta: +0.02%",
      "[W-WORKER] Chart re-render compute optimized."
    ],
    codeSnippet: `{
  "engine": "TradeFlux_L1_Stream",
  "data_integrity": "ACID_COMPLIANT",
  "latency_target": "<15ms",
  "threading_model": "WebWorkers_Parallel",
  "stream_status": "ACTIVE"
}`
  },
  {
    id: 'pulse-data-engine',
    title: 'Pulse Data Engine',
    category: 'Big Data',
    icon: Server,
    description: 'Massive dataset visualization and predictive analytics pipeline.',
    longDescription: 'Engineered a data processing pipeline that visualizes multi-million record sets with sub-second response times. Implemented specialized caching layers and optimized SQL query plans for deep analytics.',
    tags: ['Next.js', 'SQL', 'Redis', 'Python'],
    techStack: ['Next.js', 'PostgreSQL', 'Redis', 'Python'],
    features: [
      'Predictive Modeling Node',
      'L2 Caching Subsystem',
      'Multi-Million Record Parsing',
      'Visual Data Mapping'
    ],
    metrics: [
      { label: 'Integrity', value: 'Atomic' },
      { label: 'Architecture', value: 'Pipeline' },
      { label: 'Security', value: 'L3 Verified' }
    ],
    systemLogs: [
      "[PULSE] Parsing dataset: 4.2M records",
      "[CACHE] Redis L2 Hit Rate: 94%",
      "[SQL] Parallel scan optimization: COMPLETE",
      "[MOD] Predictive delta coefficient: 0.12",
      "[SYS] Analytics node heartbeat: OK"
    ],
    codeSnippet: `{
  "core": "Pulse_Analytics_v1",
  "pipeline": "ETL_Optimized_L2",
  "caching": "Redis_Distributed",
  "throughput": "50k_ops/sec",
  "status": "OPERATIONAL"
}`
  },
  {
    id: 'corelogic-db',
    title: 'CoreLogic DB',
    category: 'Systems',
    icon: Database,
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
      { label: 'Integrity', value: 'Atomic' },
      { label: 'Architecture', value: 'Distributed' },
      { label: 'Security', value: 'RBAC' }
    ],
    systemLogs: [
      "[CORE] Java JVM HotSpot compilation optimized.",
      "[POOL] JDBC connection pool health: 98%",
      "[SQL] Execution plan re-analyzed for JOIN speed.",
      "[SYNC] Worker thread cluster: ONLINE",
      "[FAILOVER] Secondary node heartbeat verified."
    ],
    codeSnippet: `{
  "core": "Atomic_Commit_Manager",
  "persistence": "JPA_Hibernate_L2",
  "concurrency": "MultiThread_Worker_Pool",
  "isolation_level": "SERIALIZABLE",
  "integrity": "VERIFIED"
}`
  },
  {
    id: 'netops-topology',
    title: 'NetOps Topology',
    category: 'Networking',
    icon: Globe,
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
      { label: 'Integrity', value: 'Verified' },
      { label: 'Architecture', value: 'Topological' },
      { label: 'Security', value: 'L3 Sec' }
    ],
    systemLogs: [
      "[NET] Computing CIDR boundary for 192.168.0.0/24",
      "[MAP] Topological node graph generated.",
      "[BITWISE] Subnet mask applied: 255.255.255.0",
      "[SIM] Path simulation latency: 4ms",
      "[ZOD] Payload validation complete."
    ],
    codeSnippet: `{
  "system": "Network_Topology_Solver",
  "logic": "Bitwise_CIDR_Mapping",
  "layer": "L3_Network_Interface",
  "validation": "Zod_Type_Safe",
  "mapping_status": "SYNCED"
}`
  }
];
