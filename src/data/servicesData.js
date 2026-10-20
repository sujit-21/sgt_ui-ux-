export const servicesData = [
  {
    id: "website-design-development",
    title: "Website Design & Development",
    shortDesc: "High-performance, beautifully sculpted corporate websites and brand platforms engineered for conversions, speed, and modern brand presence.",
    fullDesc: "We craft modern, responsive corporate websites that establish commanding digital presence. Combining sophisticated aesthetics with modern web architecture, our websites are designed to engage enterprise decision-makers and deliver frictionless user journeys.",
    icon: "Globe",
    businessBenefits: [
      "Elevated brand authority and trust with enterprise stakeholders",
      "Sub-second page speeds optimizing search visibility and engagement",
      "Seamless responsive performance across desktop, tablet, and mobile",
      "Intuitive content management enabling agile marketing operations"
    ],
    typicalUseCases: [
      "Corporate brand headquarters for growing businesses and enterprises",
      "Investor relations portals and institutional technology showcases",
      "High-converting B2B lead generation websites with custom workflows"
    ],
    problemsSolved: [
      "Outdated, sluggish websites that compromise corporate credibility",
      "Poor mobile usability causing high bounce rates among prospects",
      "Inflexible legacy templates that restrict content marketing agility"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Modern CSS", "Web Vitals", "Headless CMS"]
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    shortDesc: "Bespoke software platforms engineered from the ground up to solve complex operational challenges and scale seamlessly with business growth.",
    fullDesc: "When off-the-shelf software falls short of your operational demands, SGT Technologies architects tailored systems built precisely to your business logic. We design fault-tolerant, modular architectures that eliminate bottlenecks and unlock competitive differentiation.",
    icon: "Code2",
    businessBenefits: [
      "Software 100% aligned with your exact operational workflows",
      "Full intellectual property ownership without ongoing per-seat vendor fees",
      "Modular architecture enabling rapid feature evolution and adaptations",
      "Robust data security built around your enterprise compliance guidelines"
    ],
    typicalUseCases: [
      "Bespoke operational ERP and inventory orchestration systems",
      "Enterprise workflow automation engines and approval pipelines",
      "Proprietary computational engines and domain-specific modeling software"
    ],
    problemsSolved: [
      "Bloated SaaS subscriptions that enforce rigid, unnatural business workflows",
      "Fragmented spreadsheets and manual data handoffs between disconnected tools",
      "Technical debt in legacy proprietary systems holding back company expansion"
    ],
    technologies: ["Node.js", "Go", "Python", "PostgreSQL", "Kafka", "Docker", "REST / gRPC"]
  },
  {
    id: "web-application-development",
    title: "Web Application Development",
    shortDesc: "Scalable, secure, and interactive cloud web applications engineered for heavy concurrency, complex user permissions, and real-time data.",
    fullDesc: "We design and engineer enterprise-grade web applications with responsive frontend frameworks and reactive backend microservices. From customer dashboards to multi-tenant SaaS architectures, our web applications are engineered for reliability and high throughput.",
    icon: "Layout",
    businessBenefits: [
      "Frictionless browser-based accessibility with zero local installation overhead",
      "Real-time state synchronization and reactive user interfaces",
      "Granular role-based access control (RBAC) and data isolation",
      "Elastic auto-scaling to accommodate unpredictable usage spikes"
    ],
    typicalUseCases: [
      "Multi-tenant B2B client management and customer service portals",
      "Interactive data dashboards with real-time charting and reporting",
      "Collaborative team workspaces and internal administrative back-offices"
    ],
    problemsSolved: [
      "Sluggish web interfaces causing user frustration and lost productivity",
      "Concurrency bottlenecks when hundreds of simultaneous users interact",
      "Insecure authentication architectures vulnerable to session hijack"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redis", "WebSocket", "GraphQL", "PostgreSQL"]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc: "Cross-platform and native iOS and Android mobile applications crafted for intuitive touch experiences, offline capability, and device hardware integration.",
    fullDesc: "Deliver your core services into the palms of your customers and field staff. SGT Technologies develops smooth, responsive mobile applications that combine native operating system capabilities with reliable offline data persistence and push notifications.",
    icon: "Smartphone",
    businessBenefits: [
      "Direct engagement channel with push notifications and localized access",
      "Offline-first functionality ensuring field productivity in zero-coverage zones",
      "Consistent, native-feeling user experience on both iOS and Android",
      "Seamless bi-directional sync with central enterprise backends"
    ],
    typicalUseCases: [
      "Customer service and account management mobile companion apps",
      "Field operations, barcode scanning, and asset inspection tools",
      "Executive reporting mobile dashboards with biometrics authentication"
    ],
    problemsSolved: [
      "Expensive dual-codebase maintenance between separate iOS and Android teams",
      "Frequent mobile crashes caused by unhandled network disruptions",
      "Clunky touch interfaces that fail app store quality evaluations"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "SQLite", "Firebase", "App Store Connect"]
  },
  {
    id: "ai-integration-automation",
    title: "AI Integration & Automation",
    shortDesc: "Intelligent machine learning integration, autonomous workflow automation, and proprietary LLM solutions that streamline operations.",
    fullDesc: "Bridge the gap between artificial intelligence concepts and tangible operational efficiency. We embed intelligent LLMs, document understanding pipelines, and automated bots directly into your existing enterprise software stack with strict data privacy boundaries.",
    icon: "Cpu",
    businessBenefits: [
      "Dramatic reduction in repetitive manual data entry and invoice triage",
      "Sub-second retrieval from internal document vaults via semantic search",
      "Round-the-clock automated customer and staff inquiry resolution",
      "Continuous predictive insights from unstructured business data"
    ],
    typicalUseCases: [
      "Automated document processing and contract intelligence extraction",
      "Private enterprise knowledge retrieval-augmented generation (RAG)",
      "Smart ticket classification, triage routing, and response drafting"
    ],
    problemsSolved: [
      "Valuable staff hours consumed by manual repetitive copy-paste workflows",
      "Corporate knowledge trapped in siloed PDFs, wikis, and email threads",
      "Security risks from employees pasting confidential IP into public AI tools"
    ],
    technologies: ["Python", "PyTorch", "vLLM", "LangChain", "Vector DBs", "OpenAI / Claude API", "FastAPI"]
  },
  {
    id: "cloud-solutions-infrastructure",
    title: "Cloud Solutions & IT Infrastructure",
    shortDesc: "Resilient cloud architecture design, Kubernetes orchestration, and automated Infrastructure as Code across AWS, Google Cloud, and Azure.",
    fullDesc: "Transform your infrastructure from a fragile operational risk into a resilient competitive foundation. Our cloud engineers design automated, self-healing cloud environments using Infrastructure as Code (Terraform), proactive monitoring, and automated CI/CD pipelines.",
    icon: "Cloud",
    businessBenefits: [
      "High availability and disaster recovery with automated multi-zone failover",
      "Predictable, auditable infrastructure changes via version-controlled IaC",
      "Significant cloud bill optimization through automated rightsizing",
      "Accelerated engineering velocity with automated staging and preview environments"
    ],
    typicalUseCases: [
      "Migration of legacy on-premise servers into cloud-native architectures",
      "Multi-region Kubernetes deployment with automated blue/green cutovers",
      "Zero-downtime database clustering, read-replica scaling, and backup automation"
    ],
    problemsSolved: [
      "Unplanned downtime and stressful manual server configuration drift",
      "Runaway cloud bills resulting from unmonitored idle instances",
      "Slow, manual deployment processes requiring weekend maintenance windows"
    ],
    technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Terraform", "Kubernetes", "Docker", "Prometheus"]
  },
  {
    id: "api-development-integration",
    title: "API Development & System Integration",
    shortDesc: "Robust REST and GraphQL APIs, third-party payment and ERP integrations, and resilient event-driven message architectures.",
    fullDesc: "Unify your business ecosystem by connecting legacy software, modern third-party services, and external client portals. We build secure, well-documented APIs with strict rate limiting, schema validation, and event streaming for seamless interoperability.",
    icon: "Network",
    businessBenefits: [
      "Seamless data flow between disparate CRMs, ERPs, and accounting suites",
      "New revenue streams through partner-facing API developer portals",
      "Guaranteed data consistency through idempotent webhook processing",
      "Exhaustive OpenAPI/Swagger documentation ensuring smooth developer onboarding"
    ],
    typicalUseCases: [
      "Payment gateway integrations (Stripe, PayPal, Adyen, local processors)",
      "Bi-directional synchronization between CRM (Salesforce, HubSpot) and internal DB",
      "Microservice communication networks orchestrated with Kafka or RabbitMQ"
    ],
    problemsSolved: [
      "Siloed databases forcing duplicate manual entries across multiple tools",
      "Brittle webhook handlers that lose critical data during momentary network blips",
      "Undocumented internal APIs that slow down development and partner integration"
    ],
    technologies: ["Node.js", "Go", "Python", "GraphQL", "Kafka", "RabbitMQ", "OpenAPI / Swagger"]
  },
  {
    id: "maintenance-technical-support",
    title: "Maintenance & Technical Support",
    shortDesc: "Proactive uptime monitoring, security patching, performance profiling, and continuous technical maintenance for mission-critical software.",
    fullDesc: "Software delivery is just the beginning. SGT Technologies provides continuous operational peace of mind with 24/7 uptime monitoring, security vulnerability patching, dependency updates, and SLA-backed bug resolution so your team can focus on growth.",
    icon: "ShieldAlert",
    businessBenefits: [
      "Proactive issue resolution before operational disruptions affect end users",
      "Guaranteed response SLAs with direct escalation to senior engineering leads",
      "Regular security patches defending against newly discovered CVE vulnerabilities",
      "Continuous performance profiling keeping application latency optimal"
    ],
    typicalUseCases: [
      "Long-term SLA maintenance contracts for production web and mobile platforms",
      "Monthly security auditing, dependency upgrades, and database index tuning",
      "On-call engineering support for mission-critical business periods"
    ],
    problemsSolved: [
      "Software decay caused by neglected dependencies and expired certificates",
      "Panic and revenue loss when an application crashes with no dedicated team to fix it",
      "Security compromises caused by unpatched third-party library vulnerabilities"
    ],
    technologies: ["Datadog", "Sentry", "New Relic", "Grafana", "Linux Administration", "GitHub Actions", "PagerDuty"]
  }
];
