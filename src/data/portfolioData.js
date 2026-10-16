/**
 * Portfolio Data Model
 * Real projects, authentic metrics, and factual engineering details.
 */

export const PERSONAL_INFO = {
  name: "Mouiezuddin Killedar",
  role: "Full-Stack Developer",
  subRole: "Python · Django · React · PostgreSQL",
  tagline: "Building practical software for real-world problems.",
  shortBio: "I design and build reliable, database-backed web applications and business systems. Rather than collecting programming languages, I focus on building practical tools that solve genuine day-to-day operational pain points—from ACID-compliant digital ledgers to multi-role inventory ERPs.",
  location: "Bijapur, Karnataka, India",
  email: "killedarmouiezuddin@gmail.com",
  phone: "+91 8867555660",
  whatsapp: "918867555660",
  github: "https://github.com/Mouiezuddin",
  linkedin: "https://linkedin.com/in/mouiezuddin-killedar",
  resumePath: "/mouiezuddin_resume.pdf",
  status: "Available for full-time engineering roles & selective freelance projects",
  gpa: "8.5 / 10.0",
  degree: "Bachelor of Computer Applications (BCA)",
  college: "Kumudben Darbar College, Rani Channamma University, Belagavi",
  gradDate: "June 2026"
};

export const FEATURED_PROJECTS = [
  {
    id: "hisabpoint",
    number: "01",
    title: "HisabPoint",
    subtitle: "Digital Bahi Khata & Cloud Ledger for Local Merchants",
    category: "Small Business FinTech",
    badge: "Live Production",
    badgeType: "production",
    image: "/assets/hisabpoint_preview.png",
    hasRealImage: true,
    oneLiner: "A mobile-first digital accounting ledger built for Indian retail shopkeepers to eliminate manual paper notebook errors and credit calculation disputes.",
    problem: "Small kirana and retail shopkeepers struggle to track daily customer credits (udhar), partial repayments, and outstanding balances using handwritten paper khatas. Manual bookkeeping leads to lost pages, calculation disputes, zero audit trail, and high vulnerability to physical damage or lost records.",
    solution: "Designed and engineered a culturally tailored 'Bahi Khata' web application that mimics traditional ledger ergonomics (warm parchment aesthetics, clear credit/debit distinctions) while backing transactions with an ACID-compliant Django REST + PostgreSQL ledger engine.",
    keyFeatures: [
      "Customer khata ledger with phone/name indexing and instant balance summaries",
      "ACID-compliant credit/debit transaction logging via Django's @transaction.atomic",
      "<200ms counter checkout query latency achieved via composite database indexes",
      "Enterprise fraud prevention: 5-attempt, 30-minute lockout system + Google Authenticator TOTP 2FA",
      "Daily and monthly collection reports with customer transaction history summaries",
      "40+ automated test suite across Django APITestCase and Vitest with 100% pass rate"
    ],
    tech: ["React 19", "TypeScript", "Python", "Django REST Framework", "PostgreSQL", "Vite", "Tailwind CSS"],
    links: {
      live: "https://hisab-point.vercel.app",
      github: "https://github.com/Mouiezuddin/HisabPoint"
    },
    caseStudy: {
      overview: "HisabPoint is a production-deployed digital ledger created to bridge the gap between traditional Indian merchant bookkeeping and modern cloud accounting. By speaking the visual and procedural language of local retail shopkeepers, it eliminates friction while ensuring rock-solid mathematical accuracy.",
      userFlow: [
        "Merchant logs in with password and optional Google Authenticator 2FA verification.",
        "Dashboard immediately presents total outstanding receivables (Market Udhar) and customer directory.",
        "During counter checkout, merchant searches customer by name or phone (<200ms query).",
        "Adds credit purchase or logs repayment with item description and timestamp.",
        "System executes atomic transaction, updates ledger history, and recalibrates net balance with zero drift."
      ],
      architecture: [
        { label: "Frontend", detail: "React 19 with TypeScript, Vite bundling, and mobile-first responsive layout tailored for low-cost Android smartphones." },
        { label: "Backend API", detail: "Django REST Framework with granular serializers, viewsets, and rate-limiting throttling middleware." },
        { label: "Database Layer", detail: "PostgreSQL with composite indexes (customer_id, created_at) and ACID transaction constraints." },
        { label: "Security", detail: "Client + server dual-enforced 5-attempt brute-force lockout and RFC 6238 TOTP two-factor authentication." }
      ],
      decisions: [
        "Chose PostgreSQL atomic transactions (@transaction.atomic) over async eventual consistency because financial data cannot tolerate partial updates or race conditions.",
        "Used composite indexing (customer_id, created_at) to avoid full table scans as transaction volumes grow into thousands of entries per merchant.",
        "Adopted traditional parchment & warm leather UI accents to respect existing merchant habits rather than imposing sterile corporate SaaS aesthetics."
      ],
      challenges: "Balancing strict cryptographic security with the simplicity demanded by non-technical retail store owners. Solved by implementing one-click session resumption with biometric-friendly local fallbacks alongside server-side session revoking."
    }
  },
  {
    id: "royal-enterprises",
    number: "02",
    title: "Royal Enterprises",
    subtitle: "Battery & Lighting Stock Management System",
    category: "B2B Inventory & Sales ERP",
    badge: "Production / Staging",
    badgeType: "production",
    image: "/assets/royal_enterprises.jpg",
    hasRealImage: true,
    oneLiner: "An end-to-end inventory, sales invoicing, and warranty tracking web platform built specifically for battery, inverter, and solar equipment dealerships.",
    problem: "Battery and solar equipment retailers face complex operational hurdles: tracking individual battery serial numbers, monitoring manufacturer warranty periods, managing scrap core allowances (trade-in discounts for old lead-acid batteries), and reconciling distributor shipments against physical shelf stock.",
    solution: "A centralized web ERP that automates stock movements (inward purchases, retail counter sales, dealer adjustments), logs battery serial numbers, calculates core scrap trade-in deductions on invoices, and triggers automated low-stock warnings.",
    keyFeatures: [
      "Inventory catalog with AH capacity classifications, brand categorization, and serial logging",
      "Core exchange module: automatically applies old battery scrap discounts during checkout",
      "Automated low-stock threshold alerts preventing stockouts on high-demand inverter batteries",
      "Customer sales billing with GST-compliant invoice generation and transaction logs",
      "Supplier purchase tracking and distributor inventory reconciliation",
      "JWT-authenticated role-based access separating counter cashiers from store administrators"
    ],
    tech: ["Python 3.11", "Django 5.0", "Django REST Framework", "React 19", "Vite", "Tailwind CSS", "PostgreSQL", "JWT Auth"],
    links: {
      live: "https://royalenterprise.netlify.app",
      github: "https://github.com/Mouiezuddin/Stock_management-"
    },
    caseStudy: {
      overview: "Royal Enterprises is a multi-brand battery and solar distributor operating in regional markets. This custom ERP replaced fragile paper registers and Excel spreadsheets with a unified system tracking thousands of inventory units across batteries, inverters, UPS units, and solar luminaires.",
      userFlow: [
        "Inward stock arrival: Store manager enters distributor invoice and logs batch serial numbers.",
        "Customer counter checkout: Cashier selects battery model, enters vehicle/customer info, and inputs old battery exchange weight/deduction if applicable.",
        "Invoice generated with serial registration for warranty verification.",
        "Stock decrement reflected instantly across inventory dashboards."
      ],
      architecture: [
        { label: "Frontend", detail: "React 19 Single Page Application styled with Tailwind CSS, supporting fast keyboard-driven counter data entry." },
        { label: "Backend", detail: "Django 5 REST Framework with custom viewsets for inventory movements and automated audit logging." },
        { label: "Database", detail: "PostgreSQL relational schema with foreign key constraints across products, serials, purchases, and invoices." },
        { label: "Authentication", detail: "Stateless JWT authentication with automated refresh tokens and role permissions." }
      ],
      decisions: [
        "Modeled old battery scrap exchange as a first-class transaction line item because scrap value is a critical margin driver in the Indian automotive battery trade.",
        "Implemented real-time threshold monitoring via database triggers to warn managers when stock falls below 3 units."
      ],
      challenges: "Handling rapid counter sales during peak business hours without slow UI response. Optimized serializer queries and implemented debounced product search to keep counter operations instant."
    }
  },
  {
    id: "lms-platform",
    number: "03",
    title: "AI Learning Platform",
    subtitle: "Full-Stack Learning Management System with AI Study Tools",
    category: "EdTech & Learning Architecture",
    badge: "Working MVP",
    badgeType: "prototype",
    image: null,
    placeholderType: "lms",
    hasRealImage: false,
    oneLiner: "A unified learning management platform combining structured curriculum progression, interactive coding exercises, and AI-assisted revision tools.",
    problem: "Students and bootcamp learners juggle disconnected tools: video platforms for lessons, external judge sites for coding practice, separate flashcard apps, and fragmented revision notes. This fragmentation leads to lost progress continuity and inefficient study routines.",
    solution: "Engineered an integrated educational platform that brings course progression, in-browser code evaluation, and LLM-assisted study tools into a single authenticated workspace with role-based access for students, educators, and administrators.",
    keyFeatures: [
      "Role-based authentication & dashboards (Student, Educator, Administrator)",
      "Course curriculum and module content delivery engine",
      "Interactive in-browser coding workspace with syntax highlighting and practice assessments",
      "AI Study Companion: dynamic topic explanation generator and smart flashcard generator",
      "Student progress and assessment milestone tracking",
      "Clearly Labeled Planned Roadmap: AI Mock Interview Simulator and automated ATS resume feedback"
    ],
    tech: ["React", "Python", "Django REST Framework", "PostgreSQL", "OpenAI API", "Vite", "Tailwind CSS", "JWT Auth"],
    links: {
      github: "https://github.com/Mouiezuddin"
    },
    caseStudy: {
      overview: "An architectural prototype designed to provide a comprehensive learning and assessment platform. It demonstrates full-stack software integration, token-budgeted AI endpoint orchestration, and strict role-based permission boundaries.",
      userFlow: [
        "Student authenticates into personal learning dashboard showing active courses and progress.",
        "Navigates through modular lessons and launches interactive coding exercises.",
        "Requests AI-assisted explanations or generates topic flashcards when encountering difficult concepts.",
        "Educator monitors cohort completion rates and updates quiz questions through instructor portal."
      ],
      architecture: [
        { label: "Frontend", detail: "React SPA with componentized course viewer, coding editor sandbox, and interactive flashcard state machine." },
        { label: "Backend", detail: "Django REST Framework with granular permission classes separating student submissions from instructor grading keys." },
        { label: "AI Integration", detail: "OpenAI API proxy with rate limiting, prompt sanitization, and structured JSON output parsing." },
        { label: "Database", detail: "PostgreSQL modeling users, roles, courses, lessons, submissions, and generated study artifacts." }
      ],
      decisions: [
        "Explicitly segregated AI generation requests into asynchronous proxy endpoints to prevent API timeout errors during long completions.",
        "Separated core LMS database records from transient AI summaries to avoid schema pollution."
      ],
      challenges: "Distinguishing implemented core capabilities from conceptual additions. All completed modules (curriculum, auth, coding sandbox, flashcards) are operational, while advanced career prep features are formally segmented as roadmap items."
    }
  },
  {
    id: "vehicle-assist",
    number: "04",
    title: "VehicleAssist",
    subtitle: "On-Demand Roadside Assistance Platform",
    category: "Geospatial Dispatch Prototype",
    badge: "Concept MVP",
    badgeType: "concept",
    image: null,
    placeholderType: "dispatch",
    hasRealImage: false,
    oneLiner: "A location-aware roadside assistance prototype connecting stranded motorists with verified service providers through real-time geospatial dispatch.",
    problem: "Motorists experiencing unexpected highway breakdowns, flat tires, or mechanical failures lack a transparent, reliable way to summon nearby assistance with upfront cost estimates and verifiable technician arrival times.",
    solution: "A mobile-first roadside assistance prototype modeling the full dispatch lifecycle—from customer emergency incident reporting and geospatial provider matching to live service state tracking and completion review.",
    keyFeatures: [
      "Geolocation-enabled service request creation with breakdown category selector (towing, flat tire, battery, fuel)",
      "Provider dispatch matching based on nearest eligible technician coordinates via Leaflet & OpenStreetMap",
      "Finite-state job workflow: Requested → Assigned → En Route → In Progress → Completed",
      "Secure authentication using JWT in httpOnly cookies with explicit CSRF token verification",
      "Seeded demonstration test suite with 15 test accounts (5 customers, 10 mechanics) validating workflow stability",
      "Clearly Labeled Status: Architectural Prototype & Concept MVP (Not an operational emergency dispatch)"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Leaflet / OSM", "Python", "Django REST Framework", "PostgreSQL", "JWT / httpOnly"],
    links: {
      github: "https://github.com/Mouiezuddin"
    },
    caseStudy: {
      overview: "VehicleAssist is an architectural MVP developed to demonstrate geospatial matching, stateful asynchronous job progression, and cookie-secured REST authentication in an on-demand service economy context.",
      userFlow: [
        "Stranded driver submits incident details: vehicle type, issue category, and coordinates.",
        "Backend query evaluates nearest available service providers within eligible radius.",
        "Provider receives push dispatch notification and accepts the job.",
        "Customer tracks provider status transitions until service completion and submits feedback."
      ],
      architecture: [
        { label: "Frontend", detail: "React application integrated with Leaflet map markers, reactive status badges, and mobile-optimized request wizards." },
        { label: "Backend", detail: "Django REST Framework service modeling a strict finite-state transition machine for dispatch reliability." },
        { label: "Security", detail: "Defense-in-depth auth: JWT stored exclusively in httpOnly cookies alongside SameSite protection and Django CSRF tokens." },
        { label: "Database", detail: "PostgreSQL schema storing geospatial coordinates, provider capabilities, incident logs, and ratings." }
      ],
      decisions: [
        "Used httpOnly cookies for JWT storage instead of browser localStorage to protect sensitive session tokens from cross-site scripting (XSS) risks.",
        "Implemented strict finite-state machine validation on the backend to make illegal job state jumps (e.g. Requested directly to Completed) impossible."
      ],
      challenges: "Ensuring clarity about project scope. The platform is framed honestly as an architectural prototype with full demonstration seed data rather than an operational municipal emergency service."
    }
  }
];

export const MORE_PROJECTS = [
  {
    title: "Library Management System",
    description: "Replaced spreadsheet tracking for 50+ concurrent users with multi-role RBAC, full catalog CRUD, and 0.3s full-text search indexing.",
    tech: ["Django 4.2", "SQLite", "Bootstrap 5", "Render"],
    status: "Live Production",
    live: "https://librarymanagementsystem-0cty.onrender.com",
    github: "https://github.com/Mouiezuddin"
  },
  {
    title: "Restaurant & Ordering Platform",
    description: "E-commerce menu catalogs, dynamic cart routing, order pipeline management, and role-based administrative dashboards.",
    tech: ["Django", "PostgreSQL", "React", "REST API"],
    status: "Backend Architecture",
    github: "https://github.com/Mouiezuddin"
  },
  {
    title: "Developer's Tale Blog Platform",
    description: "Technical blogging platform with rich-text publishing, category filtering, user moderation, and 99%+ uptime deployment.",
    tech: ["Django", "PostgreSQL", "Bootstrap 5", "Render"],
    status: "Live Production",
    live: "https://developers-tale.onrender.com",
    github: "https://github.com/Mouiezuddin/Blog_platform"
  },
  {
    title: "Calorie & Nutrition Tracker",
    description: "Health analytics engine tracking daily caloric intake, macro breakdowns, and historical trends with zero-latency REST lookups.",
    tech: ["Django ORM", "SQLite", "JavaScript", "REST"],
    status: "Active Repo",
    github: "https://github.com/Mouiezuddin/Calories_Counter"
  },
  {
    title: "SpendWise Expense Tracker",
    description: "Personal expense management structured around modular Flask blueprints with session-secured CRUD and visual budget breakdowns.",
    tech: ["Flask", "Blueprints", "SQLite", "CSS3"],
    status: "Active Repo",
    github: "https://github.com/Mouiezuddin/Expense_tracker"
  },
  {
    title: "MedRemind Medication Assistant",
    description: "Patient medication reminder system with dosage interval triggers, secure profiles, and clean DOM-driven interfaces.",
    tech: ["Flask", "REST API", "JavaScript", "HTML5"],
    status: "Active Repo",
    github: "https://github.com/Mouiezuddin/Medicine_remainder"
  }
];

export const ENGINEERING_PRINCIPLES = [
  {
    title: "ACID Transactions & Financial Precision",
    description: "In ledger and financial systems like HisabPoint, partial updates cause catastrophic financial drift. I enforce atomic transaction blocks (@transaction.atomic) so that credit decrements and debit increments commit as one unit or roll back entirely.",
    icon: "database-shield"
  },
  {
    title: "Query Optimization & Composite Indexing",
    description: "Counter software cannot lag while customers wait in line. By implementing composite indexes (customer_id, created_at) and eliminating N+1 queries via select_related() and prefetch_related(), I squeeze query latency down to <200ms.",
    icon: "bolt"
  },
  {
    title: "Layered Security & Fraud Lockout",
    description: "Authentication isn't just about login forms. I engineer dual-enforced rate-limit lockout systems (5 failed attempts trigger a 30-minute freeze) alongside Google Authenticator TOTP 2FA and httpOnly cookie-based JWT storage with CSRF validation.",
    icon: "lock"
  },
  {
    title: "Multi-Role RBAC & Clean REST APIs",
    description: "I structure backend services with granular permission classes in Django REST Framework, cleanly isolating customer, cashier, instructor, and admin boundaries across unified API endpoints.",
    icon: "users"
  },
  {
    title: "Automated Testing & Regressions Prevention",
    description: "Before shipping any deployment, stability is verified with automated test suites across Django APITestCase and Vitest/Pytest to guarantee 100% pass rates across critical authentication, billing, and balance calculations.",
    icon: "check-circle"
  },
  {
    title: "State-Driven, Responsive Frontends",
    description: "I architect React 19 SPAs with strict TypeScript interfaces and predictable state management, avoiding spaghetti code and ensuring fast rendering on mobile devices with low-end hardware.",
    icon: "layout"
  }
];

export const TECH_STACK = {
  backend: [
    { name: "Python", highlight: "Primary Language" },
    { name: "Django", highlight: "Core Framework" },
    { name: "Django REST Framework", highlight: "API Architecture" },
    { name: "Flask", highlight: "Lightweight Services" }
  ],
  frontend: [
    { name: "React 19", highlight: "Component SPAs" },
    { name: "TypeScript", highlight: "Type Safety" },
    { name: "JavaScript (ES6+)", highlight: "DOM & Async" },
    { name: "HTML5 & CSS3", highlight: "Semantic Structure" },
    { name: "Tailwind CSS", highlight: "Utility Styling" },
    { name: "Vite", highlight: "Fast Build Tool" }
  ],
  database: [
    { name: "PostgreSQL", highlight: "Production Relational DB" },
    { name: "SQLite", highlight: "Dev & Lightweight Storage" }
  ],
  engineering: [
    { name: "REST API Design", highlight: "CRUD & Pagination" },
    { name: "JWT & 2FA Security", highlight: "httpOnly & TOTP" },
    { name: "Role-Based Access (RBAC)", highlight: "Granular Permissions" },
    { name: "Git & GitHub", highlight: "Version Control" },
    { name: "Pytest & Vitest", highlight: "Automated Testing" },
    { name: "Docker", highlight: "Containerization" },
    { name: "Render & Vercel", highlight: "Cloud Deployment" }
  ]
};

export const EXPERIENCE_DATA = [
  {
    role: "Full Stack Developer Intern",
    company: "Innoovatum Engineering & Technology LLP",
    location: "Remote / Vijayapura",
    period: "Jan 2026 – May 2026",
    credentialVerified: true,
    certificateTitle: "AI-Integrated Python-Django Full-Stack Development",
    summary: "Completed industrial internship developing AI-integrated web applications, optimizing backend API latency, and deploying full-stack systems with automated tests.",
    achievements: [
      "Built and deployed robust Django REST Framework APIs with secure JWT authentication and role-based permissions.",
      "Optimized ORM queries and database indices, reducing endpoint query response latency from 800ms to ~200ms on core routes.",
      "Configured full-text search indexes on database tables, cutting search retrieval latency down to 0.3s.",
      "Collaborated in agile sprint cycles using git feature branches, peer code reviews, and writing pytest test suites to prevent regression bugs."
    ],
    tech: ["Python", "Django", "DRF", "PostgreSQL", "React", "Pytest", "Git"]
  }
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Kumudben Darbar College, Rani Channamma University, Belagavi",
  period: "Completed June 2026",
  gpa: "8.5 / 10.0",
  certifications: [
    { 
      title: "Microsoft Copilot for Security", 
      issuer: "Microsoft via Coursera", 
      year: "Jul 2025", 
      verifyUrl: "https://coursera.org/verify/YD42Y93U5L6V",
      code: "YD42Y93U5L6V" 
    },
    { 
      title: "AI-Integrated Python-Django Full-Stack", 
      issuer: "Innoovatum Engineering & Technology", 
      year: "May 2026", 
      verifyUrl: null,
      code: "Internship Completion" 
    },
    { 
      title: "Developing Interpersonal Skills", 
      issuer: "IBM via Coursera", 
      year: "Oct 2025", 
      verifyUrl: "https://coursera.org/verify/Z3KJALTAMU7H",
      code: "Z3KJALTAMU7H" 
    },
    { 
      title: "Data Analyst 101", 
      issuer: "Simplilearn SkillUP", 
      year: "Jul 2025", 
      verifyUrl: null,
      code: "8615099" 
    }
  ]
};

export const CERTIFICATIONS = [
  {
    id: "innoovatum-internship",
    title: "AI-Integrated Python-Django Full-Stack Development",
    credentialType: "Industrial Internship",
    issuer: "Innoovatum Engineering & Technology LLP",
    issuerShort: "Innoovatum",
    issuerOrg: "Engineering & Technology LLP, Vijayapura",
    issueDate: "Jan 2026 – May 2026",
    completedDate: "May 10, 2026",
    signatories: "Shaukat Kotwal (CEO) & Abdul Raheem Sutar (CTO)",
    sealText: "Innoovatum Engineering and Technology LLP VIJAYAPUR 586101",
    verificationUrl: null,
    credentialId: "INNO-2026-FSD",
    hasCode: true,
    category: "fullstack",
    accentColor: "#3b82f6",
    issuerLogoType: "innoovatum",
    image: "/assets/certificates/innoovatum_python_django_internship.jpg",
    description: "Successfully completed industrial internship in AI-Integrated Python-Django Full-Stack Development. Focused on engineering high-throughput REST APIs, database indexing, and full-stack software architecture.",
    skills: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Full-Stack Architecture", "TDD & Pytest", "ORM Optimization"],
    highlights: [
      "Hands-on AI-integrated backend microservices & REST APIs",
      "Cut database query response latency from 800ms to ~200ms",
      "Signed by CEO Shaukat Kotwal & CTO Abdul Raheem Sutar"
    ]
  },
  {
    id: "microsoft-copilot-security",
    title: "Microsoft Copilot for Security",
    credentialType: "Professional Course Certificate",
    issuer: "Microsoft via Coursera",
    issuerShort: "Microsoft",
    issuerOrg: "Microsoft Authorized Curriculum",
    issueDate: "July 9, 2025",
    completedDate: "July 9, 2025",
    signatories: "Marni Baker Stein (Chief Content Officer, Coursera)",
    sealText: "Coursera Course Certificate · Education for Everyone",
    verificationUrl: "https://coursera.org/verify/YD42Y93U5L6V",
    credentialId: "YD42Y93U5L6V",
    hasCode: true,
    category: "ai",
    accentColor: "#0284c7",
    issuerLogoType: "microsoft",
    image: "/assets/certificates/microsoft_copilot_security.jpg",
    description: "Online non-credit course authorized by Microsoft and offered through Coursera. Explores generative AI security architecture, natural language threat querying, prompt-driven incident response, and SOC workflow automation.",
    skills: ["Microsoft Copilot", "Generative AI Security", "Threat Intelligence", "Incident Response", "Cloud Security Posture"],
    highlights: [
      "Authorized and validated directly by Microsoft",
      "Instant cryptographic verification on Coursera",
      "Credential ID: YD42Y93U5L6V"
    ]
  },
  {
    id: "ibm-interpersonal-skills",
    title: "Developing Interpersonal Skills",
    credentialType: "Professional Course Certificate",
    issuer: "IBM via Coursera",
    issuerShort: "IBM",
    issuerOrg: "IBM Skills Network",
    issueDate: "October 1, 2025",
    completedDate: "October 1, 2025",
    signatories: "Rav Ahuja (Global Program Director, IBM Skills Network)",
    sealText: "Coursera Course Certificate · Education for Everyone",
    verificationUrl: "https://coursera.org/verify/Z3KJALTAMU7H",
    credentialId: "Z3KJALTAMU7H",
    hasCode: true,
    category: "professional",
    accentColor: "#0f62fe",
    issuerLogoType: "ibm",
    image: "/assets/certificates/ibm_interpersonal_skills.jpg",
    description: "Authorized by IBM and offered through Coursera. Develops essential workplace competencies including cross-functional engineering collaboration, active listening, technical conflict resolution, and agile team communication.",
    skills: ["Cross-Functional Collaboration", "Technical Communication", "Active Listening", "Agile Team Dynamics", "Conflict Resolution"],
    highlights: [
      "Authorized by IBM Skills Network",
      "Direct Coursera verification: Z3KJALTAMU7H",
      "Signed by Global Program Director Rav Ahuja"
    ]
  },
  {
    id: "simplilearn-data-analyst",
    title: "Data Analyst 101",
    credentialType: "Course Completion Certificate",
    issuer: "Simplilearn SkillUP",
    issuerShort: "Simplilearn",
    issuerOrg: "Simplilearn Solutions",
    issueDate: "July 12, 2025",
    completedDate: "July 12, 2025",
    signatories: "Krishna Kumar (CEO, Simplilearn)",
    sealText: "Simplilearn SkillUP Certificate of Completion",
    verificationUrl: null,
    credentialId: "8615099",
    hasCode: true,
    category: "data",
    accentColor: "#f59e0b",
    issuerLogoType: "simplilearn",
    image: "/assets/certificates/simplilearn_data_analyst_101.jpg",
    description: "Online course demonstrating initiative and practical mastery of foundational data analytics concepts, structured SQL queries, data wrangling pipelines, and analytical metric reporting.",
    skills: ["Data Analytics", "SQL Queries", "Data Wrangling", "Exploratory Data Analysis", "Business Intelligence"],
    highlights: [
      "Official certificate code: 8615099",
      "Signed by Simplilearn CEO Krishna Kumar",
      "Validates core SQL and analytical reasoning skills"
    ]
  }
];

export const GITHUB_REPOS = [
  {
    name: "HisabPoint",
    url: "https://github.com/Mouiezuddin/HisabPoint",
    description: "Digital Bahi Khata & Cloud Ledger with ACID transaction guarantees and 2FA lockout.",
    tech: "React 19 · TypeScript · DRF · PostgreSQL",
    stars: "Active"
  },
  {
    name: "Stock_management-",
    url: "https://github.com/Mouiezuddin/Stock_management-",
    description: "Battery, lighting, and solar equipment stock management ERP with warranty tracking.",
    tech: "Django 5 · React 19 · Vite · Tailwind",
    stars: "Active"
  },
  {
    name: "Mouiezuddin_portfolio",
    url: "https://github.com/Mouiezuddin/Mouiezuddin_portfolio",
    description: "Production portfolio built with modern React, semantic styling, and zero bloat.",
    tech: "React 19 · Vite · CSS3",
    stars: "Live"
  },
  {
    name: "Blog_platform",
    url: "https://github.com/Mouiezuddin/Blog_platform",
    description: "Developer blogging platform deployed on Render with rich content taxonomies.",
    tech: "Django · PostgreSQL · Bootstrap",
    stars: "Live"
  }
];
