import { Project, Experience, Education, Certification, SkillGroup, AIWorkflowFeature } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Pragnesh Rana',
  role: 'Full Stack Developer',
  location: 'Ahmedabad, Gujarat, India',
  email: 'heypragnesh@gmail.com',
  phone: '+91 7485946310',
  linkedinUrl: 'https://linkedin.com/in/hey-pragnesh',
  linkedinHandle: 'in/hey-pragnesh',
  githubUrl: 'https://github.com/pragnesh12',
  githubHandle: 'pragnesh12',
  portfolioUrl: 'https://pragnesh-portfolio.netlify.app',
  summary:
    'Full Stack Developer with production experience in JavaScript, TypeScript, React, Next.js, Node.js, and PostgreSQL, plus Docker and monorepo architectures. Skilled in architecting scalable web apps on AWS, and coordinating internal AI developer tooling workflows as AI Vice Captain.',
  availabilityStatus: 'Open to High-Impact Full-Stack Opportunities',
  experienceYears: '2+ Years Production Experience',
  cgpa: '9.73 CGPA',
};

export const HIGHLIGHT_METRICS = [
  { label: 'Academic Distinction', value: '9.73 CGPA', detail: 'Silver Oak University (BCA)' },
  { label: 'Backend & System Modules', value: '24+ Modules', detail: 'pnpm monorepo architecture' },
  { label: 'Developer Productivity', value: 'AI Vice Captain', detail: 'Token efficiency & tooling mentorship' },
  { label: 'Core Stack', value: 'TS + Next.js + Node', detail: 'PostgreSQL, Docker, AWS' },
];

export const PROJECTS: Project[] = [
  {
    id: 'eyeneedadoc',
    title: 'EyeNeedADoc',
    subtitle: 'Two-Sided Healthcare Staffing Marketplace',
    category: 'Full-Stack',
    featured: true,
    description:
      'A high-performance two-sided marketplace connecting optometrists with medical practices needing temporary shift coverage. Features multi-role workflows, automated Stripe split payouts, DocuSign contracting, and Google Cloud Vision credential verification.',
    highlights: [
      'Engineered complete shift/job posting, application, and selection pipelines across 3 distinct roles (optometrist, practice, admin).',
      'Integrated Stripe Connect payments with automated payouts, platform fee splitting, and no-show fee enforcement rules.',
      'Automated medical licensing and ID verification via Google Cloud Vision API.',
      'Implemented legal contracting on shift confirmation using DocuSign e-signatures.',
      'Built real-time shift messaging and alerts using Socket.io and Firebase Cloud Messaging (FCM).',
      'Automated cron billing pipelines, PDF generation via Puppeteer, AWS S3 asset storage, and Sentry error monitoring.',
    ],
    techStack: [
      'Next.js 16',
      'Node.js',
      'Express',
      'Prisma ORM',
      'PostgreSQL',
      'Stripe Connect',
      'DocuSign API',
      'Google Cloud Vision',
      'Socket.io',
      'Firebase FCM',
      'Puppeteer',
      'AWS S3',
      'Sentry',
    ],
    architecture: {
      frontend: ['Next.js 16 App Router', 'Tailwind CSS', 'Responsive Role Dashboards', 'Socket.io Client'],
      backend: ['Node.js & Express.js', 'Prisma ORM', 'Scheduled Cron Jobs', 'Puppeteer PDF Engine'],
      database: ['PostgreSQL on AWS RDS', 'Prisma Relational Migrations', 'Row-Level Auditing'],
      integrations: ['Stripe Escrow & Payouts', 'DocuSign REST API', 'Google Cloud Vision', 'Firebase FCM', 'AWS S3'],
    },
    metrics: [
      { label: 'Platform Model', value: 'Two-Sided Network' },
      { label: 'Verification', value: 'Vision AI + DocuSign' },
      { label: 'Payments', value: 'Stripe Split Payouts' },
      { label: 'Real-time', value: 'Socket.io + FCM' },
    ],
    demoUrl: 'https://eyeneedadoc.com',
  },
  {
    id: 'property-proof',
    title: 'Property Proof',
    subtitle: 'AI-Powered Asset Ownership & Provenance Platform',
    category: 'AI & Platform',
    featured: true,
    description:
      'An intelligent platform designed to register, verify, and transfer ownership of physical assets (electronics, jewelry, tools) utilizing Gemini 2.5 Flash for multimodal visual recognition, phone-based ownership transfer, and a DNA security-pin protection index.',
    highlights: [
      'Built multimodal item identification powered by Gemini 2.5 Flash to automatically detect brand, model, serial condition, and category from uploaded photos.',
      'Architected secure phone-number-based asset ownership transfer with OTP and biometric authentication.',
      'Engineered an algorithmic DNA security-pin index computing per-item protection and counterfeit risk level.',
      'Implemented asynchronous background worker queues using BullMQ and Redis for heavy image processing and asset audit trails.',
      'Built an administrative command center using Next.js 16, shadcn/ui, Tailwind CSS, React Query, and Zod.',
      'Hardened the platform with Jest + Supertest automated coverage and interactive Swagger API documentation.',
    ],
    techStack: [
      'Gemini 2.5 Flash',
      'Express 5',
      'TypeScript',
      'Prisma ORM',
      'PostgreSQL',
      'Next.js 16',
      'shadcn/ui',
      'BullMQ',
      'Redis',
      'Cloudinary',
      'Zod',
      'Swagger / OpenAPI',
      'Jest & Supertest',
    ],
    architecture: {
      frontend: ['Next.js 16 Admin Panel', 'shadcn/ui', 'React Query', 'Zod Schema Validation'],
      backend: ['Express 5', 'TypeScript Strict Mode', 'BullMQ Worker Processors', 'Argon2 / Multi-session'],
      database: ['PostgreSQL', 'Redis Cache & Queue Broker', 'Asset Provenance Chains'],
      integrations: ['Google Gemini 2.5 Flash API', 'Cloudinary Media CDN', 'SMS Gateway for OTP'],
    },
    metrics: [
      { label: 'Architecture', value: 'Multimodal AI Pipeline' },
      { label: 'AI Vision Model', value: 'Gemini 2.5 Flash' },
      { label: 'Queue Engine', value: 'BullMQ + Redis' },
      { label: 'Auth System', value: 'Biometric + OTP' },
    ],
    demoUrl: 'https://propertyproof.app',
  },
  {
    id: 'passfcps',
    title: 'PassFCPS',
    subtitle: 'Medical Examination Prep & Mock MCQ Monorepo',
    category: 'Monorepo & EdTech',
    featured: true,
    description:
      'A comprehensive subscription exam preparation platform for FCPS medical candidates featuring timed practice, full mock exams, pause/resume state tracking, bulk question ingestion, and real-time discussion forums organized across a 24-module pnpm monorepo.',
    highlights: [
      'Architected a 24-module pnpm monorepo separating auth, question pool engine, mock exam sessions, commerce, and student/admin apps.',
      'Built passwordless OTP authentication (email/SMS) featuring refresh-token rotation and Argon2 password hashing.',
      'Engineered a realistic mock-exam engine supporting timed sections, pause/resume, break tracking, auto-submission, and percentile ranking.',
      'Created a high-throughput bulk XLSX question importer with SHA-1 cryptographic hashing to eliminate duplicates across tens of thousands of MCQs.',
      'Designed real-time per-question discussion threads using Socket.io with upvoting, downvoting, and medical accuracy flagging.',
      'Hardened API endpoints with Helmet security headers, dynamic IP rate-limiting, and Joi payload validation.',
    ],
    techStack: [
      'pnpm Monorepo',
      'Express 5',
      'TypeScript',
      'Next.js 16',
      'PostgreSQL',
      'Socket.io',
      'Argon2',
      'BullMQ',
      'Docker',
      'Helmet',
      'Joi Validation',
      'Jest + Supertest',
    ],
    architecture: {
      frontend: ['Next.js 16 Student App', 'Next.js 16 Admin Portal', 'Socket.io Client', 'Exam Timer State'],
      backend: ['24 Monorepo Modules (pnpm)', 'Express 5', 'Argon2 Passwordless Auth', 'XLSX Batch Ingestion'],
      database: ['PostgreSQL', 'Question Banks & Taxonomies', 'Candidate Attempts & Score Histories'],
      integrations: ['SHA-1 Ingestion Deduplication', 'Docker Local Dev', 'Real-time WebSocket Bus'],
    },
    metrics: [
      { label: 'Workspace Scope', value: '24 Modules (pnpm)' },
      { label: 'Backend Scope', value: '24 Modules' },
      { label: 'Monorepo', value: 'pnpm Workspace' },
      { label: 'Deduplication', value: 'SHA-1 Hash Filter' },
    ],
    demoUrl: 'https://passfcps.com',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Software Developer',
    company: 'Nyusoft Solutions LLP',
    location: 'Ahmedabad, Gujarat',
    period: 'Dec 2025 – Present',
    isCurrent: true,
    achievements: [
      'Building and maintaining scalable full-stack web applications using React.js, Node.js, and TypeScript.',
      'Serving as internal AI Vice Captain within our engineering unit, guiding peers on productive AI tool usage (Cursor, Claude, Gemini) and token-efficient coding.',
      'Delivered featured internal tech talk "STEP UP: Token-Efficient Code Reviews with code-review-graph", demonstrating persistent codebase graphs (Tree-sitter, MCP), achieving up to 49× token reduction and 8× cost savings in Claude Code reviews.',
      'Practicing structured, deliberate AI-assisted development rather than relying on AI output blindly, keeping all generated code modular, reviewable, and maintainable.',
      'Sharing modern IDE workflows and practical guidelines as part of our internal engineering continuous learning initiative.',
    ],
    skills: [
      'React.js',
      'TypeScript',
      'Node.js',
      'code-review-graph',
      'Tree-sitter & MCP',
      'Token Optimization',
      'Cursor',
      'Claude Code',
      'Code Review',
      'Team Leadership',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Koolmind Technolab LLP',
    location: 'Ahmedabad, Gujarat',
    period: 'Jan 2025 – Nov 2025',
    isCurrent: false,
    achievements: [
      'Honored with the prestigious "Outstanding Team Player Award" in recognition of consistent efforts to uplift the team, support colleagues, and foster a collaborative environment.',
      'Developed and maintained scalable full-stack web applications using React.js, Node.js, and TypeScript.',
      'Architected robust RESTful APIs and implemented database optimizations ensuring high-speed query execution for high-traffic environments.',
      'Managed cloud infrastructure on AWS (EC2, S3) with secure, automated, and repeatable CI/CD deployment routines.',
      'Collaborated closely with cross-functional product teams and stakeholders to translate complex business requirements into high-performance technical solutions.',
    ],
    skills: [
      'React.js',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'AWS EC2',
      'AWS S3',
      'REST APIs',
      'Team Leadership',
      'Performance Tuning',
    ],
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Silver Oak University',
    location: 'Ahmedabad, Gujarat',
    period: 'Aug 2022 – Mar 2025',
    grade: '9.73 CGPA (First Class with Distinction)',
    details:
      'Built a rock-solid foundation in full-stack software development, database systems design, data structures, algorithms, and distributed web architectures.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Prakash High School',
    location: 'Ahmedabad, Gujarat',
    period: 'Mar 2021 – Aug 2022',
    grade: '78%',
    details:
      'Demonstrated strong mathematical reasoning, algorithmic logic, and computer science foundations.',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Outstanding Team Player Award',
    issuer: 'Koolmind Technolab LLP',
    date: '2025',
    category: 'award',
    badge: 'Honors & Recognition',
    description:
      'Awarded in honor of consistent efforts to uplift the team, support colleagues, and create an inspiring, highly collaborative work environment.',
  },
  {
    title: 'STEP UP: Token-Efficient Code Reviews with code-review-graph',
    issuer: 'Nyusoft Solutions LLP (Tech Talk Speaker)',
    date: '2025',
    category: 'workshop',
    badge: 'Speaker & Tech Lead',
    description:
      'Delivered technical session on leveraging Tree-sitter & Model Context Protocol (MCP) to construct persistent codebase graphs, achieving up to 49× token reduction and 8× cost savings in Claude Code reviews.',
  },
  {
    title: 'Global Job Readiness Program (Foundation Level)',
    issuer: 'Deakin University & Skill India Digital Hub',
    date: 'May 2024',
    category: 'certification',
    badge: 'Professional Skills',
    description:
      'Mastered critical workplace competencies, agile cross-functional collaboration, and strategic professional communication.',
  },
  {
    title: 'Python 3.4.3 Certification',
    issuer: 'IIT Bombay (Spoken Tutorial Project)',
    date: 'Certified',
    score: 'Score: 66.57%',
    category: 'certification',
    badge: 'Algorithms & Code',
    description:
      'Demonstrated core programming mastery, algorithmic problem-solving, and Python software engineering.',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    iconName: 'Code2',
    skills: [
      { name: 'TypeScript', level: 'Expert', highlight: true },
      { name: 'JavaScript (ES6+)', level: 'Expert', highlight: true },
      { name: 'Python', level: 'Proficient' },
      { name: 'HTML5', level: 'Expert' },
      { name: 'CSS3 / Tailwind', level: 'Expert', highlight: true },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    iconName: 'Layers',
    skills: [
      { name: 'React.js', level: 'Expert', highlight: true },
      { name: 'Next.js 16', level: 'Expert', highlight: true },
      { name: 'Node.js', level: 'Expert', highlight: true },
      { name: 'Express.js 5', level: 'Expert', highlight: true },
      { name: 'shadcn/ui', level: 'Advanced' },
      { name: 'React Query', level: 'Advanced' },
    ],
  },
  {
    category: 'Databases & ORMs',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Expert', highlight: true },
      { name: 'Prisma ORM', level: 'Expert', highlight: true },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'Redis', level: 'Advanced', highlight: true },
    ],
  },
  {
    category: 'Cloud, DevOps & Tools',
    iconName: 'Server',
    skills: [
      { name: 'Docker', level: 'Advanced', highlight: true },
      { name: 'pnpm Monorepos', level: 'Advanced', highlight: true },
      { name: 'AWS (EC2, S3)', level: 'Advanced', highlight: true },
      { name: 'Git & GitHub Actions', level: 'Expert' },
      { name: 'PM2', level: 'Advanced' },
      { name: 'BullMQ', level: 'Advanced' },
    ],
  },
  {
    category: 'AI & Developer Productivity',
    iconName: 'Sparkles',
    skills: [
      { name: 'Structured AI Development', level: 'Expert', highlight: true },
      { name: 'Gemini 2.5 Flash / Vision', level: 'Advanced', highlight: true },
      { name: 'Cursor & Windsurf', level: 'Expert', highlight: true },
      { name: 'Token-Efficient Workflows', level: 'Expert', highlight: true },
      { name: 'Prompt Engineering', level: 'Advanced' },
    ],
  },
  {
    category: 'APIs, Security & Real-Time',
    iconName: 'ShieldCheck',
    skills: [
      { name: 'WebSocket / Socket.io', level: 'Advanced', highlight: true },
      { name: 'Stripe Connect', level: 'Advanced' },
      { name: 'Argon2 & Passwordless OTP', level: 'Advanced' },
      { name: 'DocuSign API', level: 'Advanced' },
      { name: 'Sentry Monitoring', level: 'Advanced' },
      { name: 'Swagger / OpenAPI', level: 'Advanced' },
    ],
  },
];

export const AI_VICE_CAPTAIN_INITIATIVES: AIWorkflowFeature[] = [
  {
    title: 'Token-Efficient Prompt Architecture',
    description:
      'Engineered structured context-packing templates and scoped file feeding strategies that cut unneeded token consumption across developer teams.',
    impact: 'Reduced token usage & lowered cost per feature cycle',
    badge: 'Cost & Context Optimization',
  },
  {
    title: 'Deliberate vs. Blind AI Engineering',
    description:
      'Instituted a culture where AI accelerates boilerplate and scaffolding while all architectural decisions, types, security invariants, and edge cases are human-verified.',
    impact: 'Eliminated AI hallucinations and fragile code drift',
    badge: 'Code Review Rigor',
  },
  {
    title: 'Internal Engineering Tech Talks & Workshops',
    description:
      'Delivered "STEP UP: Token-Efficient Code Reviews with code-review-graph", demonstrating how Tree-sitter and MCP build persistent codebase graphs to slash token consumption by up to 49× in Claude Code reviews.',
    impact: 'Up to 49× token reduction & 8× cost savings demonstrated',
    badge: 'Speaker & Lead',
  },
  {
    title: 'Multimodal AI in Production',
    description:
      'Shipped real-world automated visual recognition using Gemini 2.5 Flash in Property Proof, categorizing physical assets and identifying models directly from images.',
    impact: 'Sub-second classification of user-uploaded inventory',
    badge: 'Production Shipped',
  },
];

export const INTERESTS = [
  'Exploring novel backend optimization techniques & database indexing strategies',
  'Architecting full-stack side projects to master distributed systems',
  'Engaging in team-based games and sports to strengthen collaboration and endurance',
  'Solving algorithmic challenges and participating in competitive programming events',
];
