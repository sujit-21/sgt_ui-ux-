export const projectsData = [
  {
    id: "enterprise-fintech-portal",
    title: "Enterprise Financial Operations & Clearing Portal",
    category: "Web Application Development",
    badge: "Sample Case Study",
    overview: "A unified financial analytics and multi-entity reconciliation portal engineered to aggregate cross-border currency streams with sub-second data refreshes and granular audit logging.",
    challenge: "Disparate legacy settlement ledgers were causing manual spreadsheet reconciliation delays across global treasury operations.",
    solution: "Engineered an event-driven web dashboard utilizing React, Node.js microservices, and PostgreSQL with real-time WebSocket ledger streams and automated reconciliation rules.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSocket"],
    keyFeatures: [
      "Real-time ledger data streams via WebSocket",
      "Multi-entity role-based access control and approval flows",
      "Automated financial reconciliation engine with anomaly alerts",
      "Encrypted export generation for regulatory audit requirements"
    ],
    architecture: "Microservices backend running in containerized Docker environments with Redis caching layer and partitioned PostgreSQL tables.",
    projectType: "Illustrative Project Example"
  },
  {
    id: "intelligent-supply-chain-ai",
    title: "AI-Augmented Document Processing & Logistics Workflow",
    category: "AI Integration & Automation",
    badge: "Sample Case Study",
    overview: "An automated intelligent document processing pipeline that extracts, verifies, and routes multi-language shipping manifests, bills of lading, and customs declarations.",
    challenge: "Logistics coordinators spent over 30 hours weekly manually re-typing unstructured PDF manifests into internal ERP software.",
    solution: "Implemented an optical character and LLM-assisted document parsing engine that extracts structured JSON data with human-in-the-loop review fallbacks.",
    technologies: ["Python", "PyTorch", "FastAPI", "Vector Search", "Docker", "React Dashboard"],
    keyFeatures: [
      "Multi-format document ingestion (PDF, TIFF, Scanned Images)",
      "High-accuracy key-value extraction for complex tabular invoices",
      "Automated validation against ERP vendor registries",
      "Human-in-the-loop verification portal for ambiguous cases"
    ],
    architecture: "FastAPI inference service paired with asynchronous Celery worker queues and secure S3-compatible document storage.",
    projectType: "Illustrative Project Example"
  },
  {
    id: "healthcare-telemedicine-suite",
    title: "Patient Engagement & Telehealth Platform",
    category: "Mobile & Web Application",
    badge: "Sample Case Study",
    overview: "A HIPAA-aligned digital healthcare suite consisting of a responsive patient portal, clinician video consultation interface, and prescription history tracking.",
    challenge: "Fragmented appointment booking and unencrypted video consultation links were disrupting patient communication and care continuity.",
    solution: "Built a compliant cross-platform mobile app and doctor web workstation featuring WebRTC peer-to-peer encrypted video and instant push appointment reminders.",
    technologies: ["React Native", "React", "WebRTC", "Go", "PostgreSQL", "Docker"],
    keyFeatures: [
      "End-to-end encrypted WebRTC video consultation rooms",
      "Push-notified appointment scheduling and calendar sync",
      "Secure medical document and lab result review vault",
      "Strict data encryption at rest and in transit adhering to HIPAA standards"
    ],
    architecture: "Go microservices backend with WebRTC signaling server and end-to-end encrypted relational data stores.",
    projectType: "Illustrative Project Example"
  },
  {
    id: "cloud-infrastructure-migration",
    title: "Multi-Region Cloud Modernization & Kubernetes Mesh",
    category: "Cloud Solutions & Infrastructure",
    badge: "Sample Case Study",
    overview: "A complete infrastructure modernization migrating fragile bare-metal application servers into declarative, immutable Terraform and multi-region Kubernetes clusters.",
    challenge: "Unplanned hardware downtime and manual deployment steps created critical release bottlenecks and downtime risks.",
    solution: "Designed and deployed Infrastructure as Code (IaC) across AWS with Amazon EKS, automated GitOps CI/CD pipelines, and proactive Prometheus monitoring.",
    technologies: ["AWS", "Terraform", "Kubernetes", "Docker", "Prometheus", "GitHub Actions"],
    keyFeatures: [
      "Zero-downtime rolling blue/green deployments via Kubernetes",
      "100% version-controlled infrastructure declared in Terraform",
      "Automated multi-availability zone failover configuration",
      "Unified logging and telemetry dashboard in Grafana"
    ],
    architecture: "AWS EKS cluster spanned across multiple availability zones with automated horizontal pod autoscaling and CloudWatch alerts.",
    projectType: "Illustrative Project Example"
  },
  {
    id: "b2b-api-ecosystem-gateway",
    title: "Partner API Gateway & Developer Ecosystem",
    category: "API Development & Integration",
    badge: "Sample Case Study",
    overview: "A developer-first API gateway and documentation hub enabling external technology partners to securely integrate inventory data, place orders, and receive webhooks.",
    challenge: "External business partners had no standardized mechanism to query catalog inventory or programmatically submit wholesale requests.",
    solution: "Engineered a high-throughput REST and GraphQL API gateway equipped with granular API key management, token-bucket rate limiting, and automated webhook retries.",
    technologies: ["Go", "GraphQL", "Redis", "Kafka", "Swagger / OpenAPI", "PostgreSQL"],
    keyFeatures: [
      "Interactive Swagger and GraphQL playground for partner developers",
      "Granular API key permission scoping and usage analytics",
      "Idempotent webhook delivery with automated exponential backoff",
      "Sub-25ms response latency under heavy concurrent partner queries"
    ],
    architecture: "High-performance Go reverse proxy leveraging Redis in-memory rate limiting and Kafka message brokering.",
    projectType: "Illustrative Project Example"
  },
  {
    id: "corporate-brand-showcase",
    title: "High-Craft Corporate Digital Brand Platform",
    category: "Website Design & Development",
    badge: "Sample Case Study",
    overview: "A responsive corporate digital brand experience featuring refined typography, accessible contrast, smooth micro-interactions, and a headless content architecture.",
    challenge: "An established consulting firm needed a modern digital presence that reflected their high caliber of enterprise advisory services.",
    solution: "Crafted a bespoke, minimalist digital platform using Next.js and custom CSS, achieving 99+ Google Lighthouse performance and accessibility scores.",
    technologies: ["React", "Next.js", "TypeScript", "Modern CSS", "Figma", "Headless CMS"],
    keyFeatures: [
      "Pixel-perfect responsive typography and luxury minimalist layouts",
      "Subtle micro-animations with zero layout shifts or jank",
      "Accessible contrast meeting WCAG 2.1 AA accessibility guidelines",
      "Sub-second First Contentful Paint (FCP) across global regions"
    ],
    architecture: "Statically generated frontend hosted on edge CDN nodes with serverless API route handlers.",
    projectType: "Illustrative Project Example"
  }
];
