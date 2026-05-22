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
      { label: 'Integrity', value: 'Verified' },
      { label: 'Architecture', value: 'Neural' },
      { label: 'Security', value: 'Enterprise' }
    ],
    systemLogs: [
      "[SYSTEM] Initializing Neural Kernel v2.4...",
      "[TRACE] Semantic intent resolution: SUCCESS",
      "[NODE] Priority mapping weights adjusted: 0.892",
      "[SYNC] Firestore state push latency: 12ms",
      "[AGENT] Task orchestration loop started."
    ],
    codeSnippet: `class NeuralOrchestrator {
  async processIntent(input: string) {
    const intent = await genkit.parse(input);
    const nodes = this.mapToPriority(intent);
    return sync.distribute(nodes);
  }
}`
  },
  {
    id: 'tradeflux-engine',
    title: 'TradeFlux Engine',
    category: 'FinTech Logic',
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
      { label: 'Security', value: 'TLS 1.3' }
    ],
    systemLogs: [
      "[DB] Optimizing PostgreSQL B-Tree Index...",
      "[STREAM] Reactive buffer flushed: 1.2MB",
      "[ACID] Transaction verified: #TX-99021",
      "[STATS] Market volatility delta: +0.02%",
      "[W-WORKER] Chart re-render compute optimized."
    ],
    codeSnippet: `async function commitTrade(tx: Transaction) {
  const result = await db.transaction(async (client) => {
    await client.query('UPDATE accounts SET balance = balance - $1', [tx.amount]);
    return client.query('INSERT INTO audit_log ...');
  });
}`
  },
  {
    id: 'corelogic-db',
    title: 'CoreLogic DB',
    category: 'Systems Engineering',
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
    codeSnippet: `@Service
public class TransactionCore {
  @Transactional(propagation = Propagation.REQUIRED)
  public void executeAtomic(Payload data) {
    repository.save(data);
    auditService.log(data.getId());
  }
}`
  },
  {
    id: 'netops-topology',
    title: 'NetOps Topology',
    category: 'Network Systems',
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
      { label: 'Integrity', value: 'L3/L4' },
      { label: 'Architecture', value: 'Topology' },
      { label: 'Security', value: 'Verified' }
    ],
    systemLogs: [
      "[NET] Computing CIDR boundary for 192.168.0.0/24",
      "[MAP] Topological node graph generated.",
      "[BITWISE] Subnet mask mask applied: 255.255.255.0",
      "[SIM] Path simulation latency: 4ms",
      "[ZOD] Payload validation complete."
    ],
    codeSnippet: `function calculateSubnet(ip: string, cidr: number) {
  const mask = -1 << (32 - cidr);
  const network = (ipToLong(ip) & mask) >>> 0;
  return longToIp(network);
}`
  }
];