/**
 * Portfolio Data Model — Mouiezuddin Killedar
 * Verified technical information, honest academic standing, and production-tested projects.
 */

export const PERSONAL_INFO = {
  name: "Mouiezuddin Killedar",
  role: "Junior Full-Stack Python Developer",
  headline: "Full-Stack Python Developer building practical web applications, scalable APIs, and intuitive digital experiences.",
  shortBio: "I design and build reliable, database-backed web applications and business systems. Rather than collecting frameworks, I focus on building practical software that solves real operational problems—from customer credit ledgers to dealership inventory portals.",
  location: "Bijapur, Karnataka, India",
  email: "killedarmouiezuddin@gmail.com",
  phone: "+91 8867555660",
  whatsapp: "918867555660",
  github: "https://github.com/Mouiezuddin",
  linkedin: "https://linkedin.com/in/mouiezuddin-killedar",
  resumePath: "/mouiezuddin_resume.pdf",
  status: "Available for Full-Time Software Engineering Roles",
  gpa: "8.5 / 10.0",
  degree: "Bachelor of Computer Applications (BCA)",
  college: "Kumudben Darbar College, Rani Channamma University, Belagavi"
};

export const FEATURED_PROJECTS = [
  {
    id: "hisabpoint",
    number: "01",
    title: "HisabPoint",
    subtitle: "Digital Customer Ledger & Khata for Local Shopkeepers",
    category: "FinTech & Ledger Management",
    badge: "Live Production",
    badgeType: "production",
    image: "/assets/hisabpoint_preview.png",
    hasRealImage: true,
    oneLiner: "A mobile-friendly digital ledger designed for local retail merchants to record customer transactions, monitor unpaid balances, and reduce bookkeeping mistakes.",
    problem: "Local retail shopkeepers and kirana store owners traditionally rely on handwritten paper notebooks (bahi khata) to record daily customer credits and partial repayments. Manual notebooks frequently suffer from lost pages, calculation disputes, and zero audit history.",
    solution: "A digital customer ledger application that simplifies transaction recording for non-technical merchants while enforcing database-level atomicity on every transaction entry.",
    myContribution: "Architected the complete full-stack application: engineered the React.js frontend interface with high-contrast ledger ergonomics, designed the PostgreSQL schema, and built Django REST Framework APIs with atomic database transactions.",
    keyFeatures: [
      "Customer ledger management with fast name and phone lookup",
      "Real-time tracking of paid, due, and net outstanding balances",
      "Detailed customer transaction history with timestamps and notes",
      "Atomic credit/debit transaction logging preventing partial record updates",
      "Fast checkout lookups with composite database indexing on customer records"
    ],
    tech: ["React.js", "Python", "Django", "Django REST Framework", "PostgreSQL", "JavaScript", "HTML/CSS"],
    links: {
      live: "https://hisab-point.vercel.app/",
      github: "https://github.com/Mouiezuddin/HisabPoint"
    },
    caseStudy: {
      overview: "HisabPoint is a production-deployed digital accounting ledger created to solve the real friction small retail merchants face when recording customer credit (udhar). Designed with mobile-first ergonomics and clear debit/credit balance summaries, it provides shopkeepers with instant mathematical clarity.",
      problemDetail: "Paper ledgers tear, fade, and allow human calculation errors when customers make staggered repayments. When a shopkeeper has 100+ active credit customers, reconciling daily totals takes hours.",
      userFlow: [
        "Shopkeeper logs into the ledger dashboard with secure authentication.",
        "Dashboard displays total outstanding customer credit and a quick-search customer list.",
        "Shopkeeper searches for a customer by name or phone number.",
        "Logs a credit purchase (amount given) or repayment (amount received) with a description.",
        "Database executes atomic update, recalculating the customer's outstanding balance immediately."
      ],
      technicalImplementation: [
        { label: "Frontend Architecture", detail: "Built with React.js using modular state management, debounced search inputs, and responsive card layouts designed for quick counter entry." },
        { label: "Backend API", detail: "Django REST Framework endpoints handling customer CRUD, transaction logs, and aggregated balance calculations." },
        { label: "Database Integrity", detail: "PostgreSQL relational database with atomic transaction blocks ensuring credit decrements and debit increments commit as one unit or roll back." },
        { label: "Query Optimization", detail: "Composite indexing on (customer_id, created_at) to ensure fast ledger retrieval even as history entries grow." }
      ],
      decisions: [
        "Enforced atomic transaction blocks in Django to eliminate partial updates or balance drift.",
        "Kept the UI layout focused on high-contrast numerals and clear green (paid) vs red (due) indicators so shopkeepers can read amounts under bright sunlight.",
        "Used client-side input validation paired with strict DRF serializer validation for defense-in-depth."
      ],
      challenges: "Ensuring non-technical store owners can operate the software in seconds during rapid customer checkouts. Resolved by minimizing required input steps and adding immediate balance updates without full page reloads."
    }
  },
  {
    id: "royal-enterprises",
    number: "02",
    title: "Royal Enterprises",
    subtitle: "Stock Management & Business Portal for Battery & Solar Systems",
    category: "B2B Stock Management & Sales",
    badge: "Live Client Portal",
    badgeType: "production",
    image: "/assets/royal_enterprises.jpg",
    hasRealImage: true,
    oneLiner: "A business portal and stock management system built for a regional dealership handling batteries, inverters, solar equipment, and EV charging solutions.",
    problem: "Battery and solar equipment dealerships deal with multi-brand inventory (Okaya, Exide, Microtek), warranty periods, and a unique commercial challenge: calculating scrap trade-in allowances for old lead-acid batteries during new purchases.",
    solution: "A centralized web platform that presents product catalogs for solar, battery, and inverter lines, tracks stock inward/outward movements, logs customer purchases, and calculates old battery scrap discounts directly on invoices.",
    myContribution: "Designed the product database, built responsive React.js UI views for inventory management and customer inquiries, implemented REST APIs with Django, and deployed the portal to Netlify.",
    keyFeatures: [
      "Product catalog for solar panels, inverters, batteries, lighting, and EV chargers",
      "Stock inventory tracking with inward distributor logs and outward sales",
      "Automated battery scrap core trade-in deduction logic on billing records",
      "Customer inquiry routing and WhatsApp digital invoice dispatch",
      "Role-based authentication separating administrative and sales staff actions"
    ],
    tech: ["React.js", "Python", "Django", "Django REST Framework", "PostgreSQL", "REST APIs", "Tailwind CSS"],
    links: {
      live: "https://royalenterprise.netlify.app/",
      github: "https://github.com/Mouiezuddin/Stock_management-"
    },
    caseStudy: {
      overview: "Royal Enterprises is an active commercial web platform developed for a multi-brand battery, solar luminaire, and inverter dealership. It modernized the business from paper registers and loose billing receipts to an accessible, cloud-backed stock portal.",
      problemDetail: "Lead-acid battery sales heavily involve core exchange (where a customer returns an old dead battery for scrap credit). Manually calculating scrap deductions, matching warranty serials, and tracking reorder thresholds on paper created constant inventory mismatch.",
      userFlow: [
        "Dealer or customer browses categorized solar, battery, inverter, or EV charging products.",
        "Cashier selects the purchased product model from the active inventory catalog.",
        "Inputs customer details and applies old battery trade-in weight/scrap discount if applicable.",
        "System creates the sale record, decrements stock count, and generates a digital receipt summary.",
        "Dealer can share invoice details directly to customer via WhatsApp."
      ],
      technicalImplementation: [
        { label: "Frontend Portal", detail: "React.js single-page application with responsive product grids, category filtering, and modal order summaries." },
        { label: "Backend API", detail: "Django REST Framework micro-endpoints providing CRUD operations for inventory items, categories, and sales logs." },
        { label: "Database Layer", detail: "Relational PostgreSQL database tracking products, battery AH capacities, sales transactions, and distributor inward shipments." },
        { label: "Deployment", detail: "Frontend hosted with continuous deployment on Netlify; backend API deployed on cloud infrastructure." }
      ],
      decisions: [
        "Modeled old battery scrap discount as a dedicated line item in transaction records to preserve clean accounting margins.",
        "Implemented real-time stock status badges (In Stock, Low Stock, Reorder Required) based on quantity thresholds."
      ],
      challenges: "Managing complex product taxonomy across different equipment types (solar modules vs tubular inverter batteries vs EV chargers). Solved by creating clean relational category hierarchies with normalized attribute tables."
    }
  },
  {
    id: "library-management",
    number: "03",
    title: "Library Management System",
    subtitle: "Multi-Role Academic Catalog & Book Circulation Platform",
    category: "Academic & Enterprise Management",
    badge: "Live on Render",
    badgeType: "production",
    image: "/assets/architecture_concept.png",
    hasRealImage: true,
    oneLiner: "A multi-role book catalog and circulation tracking system featuring role-based access control, book issuance calendars, and fast catalog search.",
    problem: "Academic departments and libraries require organized book tracking, member records, and overdue penalty calculations. Using manual register logs leads to misplaced books and untracked returns.",
    solution: "Engineered a Django-powered web portal with three distinct user roles (Admin, Librarian, Student/Member) that manages book acquisitions, automated issuance durations, and catalog availability.",
    myContribution: "Built the entire application from schema design to deployment: configured Django models with relational integrity, created role-based access permissions, wrote unit tests, and deployed to Render.",
    keyFeatures: [
      "Role-Based Access Control (RBAC) separating administrative, staff, and member views",
      "Full catalog CRUD with instant title, author, and ISBN search indexing",
      "Automated issue duration tracking and overdue fine calculation engine",
      "Member borrowing history and active loan status dashboard",
      "RESTful endpoint integration for catalog data consumption"
    ],
    tech: ["Python", "Django", "SQLite", "Bootstrap", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    links: {
      live: "https://librarymanagementsystem-0cty.onrender.com",
      github: "https://github.com/Mouiezuddin"
    },
    caseStudy: {
      overview: "A production-grade library circulation system engineered with Django to streamline catalog management, member borrowing privileges, and book availability in institutional settings.",
      problemDetail: "Tracking hundreds of physical volumes, issue dates, return deadlines, and overdue fines manually in physical ledgers results in lost assets and delayed returns.",
      userFlow: [
        "Librarian logs into the staff portal and scans or searches book title/ISBN.",
        "Selects registered member and issues book with automated due date generation.",
        "Students log in to browse available titles, check current loans, and review due dates.",
        "System calculates fine increments automatically when books are returned past due."
      ],
      technicalImplementation: [
        { label: "Backend Core", detail: "Django web framework utilizing Django ORM for complex queries and foreign key relationships between books, members, and transactions." },
        { label: "Security & Permissions", detail: "Django authentication with custom user groups and decorator-enforced role permissions." },
        { label: "Search Optimization", detail: "Database query filtering with indexed search fields for sub-second catalog lookups." },
        { label: "Frontend", detail: "Clean, responsive Bootstrap 5 interface accessible across desktop workstations and mobile browsers." }
      ],
      decisions: [
        "Employed Django's built-in User model with one-to-one profile extensions for role classification.",
        "Used database transaction checks to guarantee that book availability count cannot drop below zero."
      ],
      challenges: "Preventing race conditions where multiple students try to issue the last available copy of a textbook. Solved by wrapping issuance operations in database validation checks before decrementing stock."
    }
  },
  {
    id: "developers-tale",
    number: "04",
    title: "Developer's Tale Blog Platform",
    subtitle: "Technical Blogging & Article Publishing Engine",
    category: "Content & Web Publishing",
    badge: "Live on Render",
    badgeType: "production",
    image: "/assets/coding_concept.png",
    hasRealImage: true,
    oneLiner: "A technical publication platform supporting rich-text article drafting, category taxonomies, author profiles, and interactive reader discussions.",
    problem: "Developers and students benefit from having a structured, distraction-free publishing space for engineering notes, code walkthroughs, and tutorials with clean category navigation.",
    solution: "Engineered a content publishing web application with Django and PostgreSQL, featuring secure user authentication, tag-based article filtering, and responsive article layouts.",
    myContribution: "Developed the full backend architecture, database schema, search queries, user comment moderation, and deployed the live application to Render with a PostgreSQL database.",
    keyFeatures: [
      "Rich-text article creation and editing pipeline with draft/published states",
      "Taxonomy engine with category filtering and tag-based discovery",
      "User authentication, profile management, and reader commenting system",
      "PostgreSQL relational database with foreign key cascades and indexes",
      "Responsive, accessible reading interface styled with modern CSS and Bootstrap"
    ],
    tech: ["Python", "Django", "PostgreSQL", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
    links: {
      live: "https://developers-tale.onrender.com",
      github: "https://github.com/Mouiezuddin/Blog_platform"
    },
    caseStudy: {
      overview: "Developer's Tale is a full-featured web publishing platform built with Django and deployed live on Render with managed PostgreSQL. It demonstrates clean relational architecture, content moderation, and responsive readability.",
      problemDetail: "Generic content platforms often suffer from slow page weight, bloated tracking scripts, and awkward code snippet formatting. Developer's Tale was designed to prioritize fast loading and technical clarity.",
      userFlow: [
        "Author registers and authenticates to access the content creation dashboard.",
        "Drafts technical posts with categorized tags and markdown formatting.",
        "Published articles appear instantly on the chronological frontpage feed.",
        "Readers can filter by topic, search keywords, and leave moderated comments."
      ],
      technicalImplementation: [
        { label: "Backend Framework", detail: "Django with class-based views (CBVs) for clean, maintainable CRUD operations." },
        { label: "Database", detail: "Production PostgreSQL database on Render with indexed slug fields and relationship constraints." },
        { label: "Security", detail: "CSRF protection on all forms, password hashing using PBKDF2, and sanitized HTML input." }
      ],
      decisions: [
        "Used URL slug fields with database indexing for clean, SEO-friendly article permalinks.",
        "Structured category relationships via Many-to-Many models with prefetch_related optimization to avoid N+1 query overhead."
      ],
      challenges: "Maintaining fast database read times on article feeds as comment counts increase. Resolved by optimizing querysets with select_related on author and category fields."
    }
  }
];

export const MORE_PROJECTS = [
  {
    title: "Calorie & Nutrition Tracker",
    description: "Dietary health application tracking daily caloric intake, meal macronutrient breakdowns, and historical nutrition logs with zero-latency lookups.",
    tech: ["Python", "Django", "SQLite", "JavaScript", "REST"],
    status: "Active Repo",
    github: "https://github.com/Mouiezuddin/Calories_Counter"
  },
  {
    title: "SpendWise Expense Tracker",
    description: "Personal expense management platform structured around modular Flask blueprints with session-secured CRUD, category tagging, and budget breakdowns.",
    tech: ["Python", "Flask", "SQLite", "JavaScript", "CSS3"],
    status: "Active Repo",
    github: "https://github.com/Mouiezuddin/Expense_tracker"
  },
  {
    title: "MedRemind Medication Assistant",
    description: "Patient medication reminder system with dosage interval triggers, secure profiles, and clean DOM-driven interfaces.",
    tech: ["Python", "Flask", "REST APIs", "JavaScript", "HTML5"],
    status: "Active Repo",
    github: "https://github.com/Mouiezuddin/Medicine_remainder"
  },
  {
    title: "Retail POS Billing System",
    description: "Point-of-sale billing dashboard for small retail shops featuring barcode input listener, instant thermal receipt formatting, and local inventory sync.",
    tech: ["React.js", "Django REST Framework", "Vite", "SQLite"],
    status: "Active Repo",
    github: "https://github.com/Mouiezuddin"
  }
];

/**
 * TECHNICAL SKILLS — Exact 6 categories requested:
 * 1. Languages: Python, JavaScript, HTML, CSS, SQL.
 * 2. Backend: Django, Django REST Framework, Flask.
 * 3. Frontend: React.js, Bootstrap.
 * 4. Database: PostgreSQL, MySQL, SQLite.
 * 5. Tools: Git, GitHub, Postman.
 * 6. Concepts: REST APIs, Authentication, Authorization, CRUD, Responsive Design.
 */
export const TECHNICAL_SKILLS = [
  {
    category: "Languages",
    description: "Core programming and query languages used daily across projects",
    skills: [
      { name: "Python", highlight: "Primary Language", note: "Object-oriented programming, scripting, data handling, and backend services" },
      { name: "JavaScript", highlight: "Frontend Logic", note: "ES6+, asynchronous fetch, DOM manipulation, and reactive UI state" },
      { name: "HTML", highlight: "Semantic Markup", note: "Accessible structure, semantic elements, and SEO markup" },
      { name: "CSS", highlight: "Responsive Styling", note: "Flexbox, Grid, CSS custom properties, and fluid typography" },
      { name: "SQL", highlight: "Relational Queries", note: "Complex joins, indexing, transactions, and schema normalization" }
    ]
  },
  {
    category: "Backend",
    description: "Server-side frameworks for building production web services",
    skills: [
      { name: "Django", highlight: "Primary Framework", note: "ORM modeling, middleware, admin interface, and templating" },
      { name: "Django REST Framework", highlight: "API Architecture", note: "Serializers, ViewSets, token authentication, and pagination" },
      { name: "Flask", highlight: "Lightweight Services", note: "Microservices, modular Blueprints, and custom route handlers" }
    ]
  },
  {
    category: "Frontend",
    description: "Modern component libraries and responsive UI toolkits",
    skills: [
      { name: "React.js", highlight: "Component SPAs", note: "Hooks (useState, useEffect, useRef), component lifecycle, and state flow" },
      { name: "Bootstrap", highlight: "Responsive Grid", note: "Mobile-first layouts, utility classes, and accessible UI widgets" }
    ]
  },
  {
    category: "Database",
    description: "Relational database engines with ACID compliance",
    skills: [
      { name: "PostgreSQL", highlight: "Production Relational DB", note: "Complex constraints, composite indexes, and ACID transactions" },
      { name: "MySQL", highlight: "Enterprise RDBMS", note: "Relational schemas, foreign keys, and query optimization" },
      { name: "SQLite", highlight: "Development & Testing", note: "Lightweight database storage for local testing and prototyping" }
    ]
  },
  {
    category: "Tools",
    description: "Industry-standard developer tooling and API testing",
    skills: [
      { name: "Git", highlight: "Version Control", note: "Branching workflows, atomic commits, rebasing, and merge resolution" },
      { name: "GitHub", highlight: "Collaboration & CI", note: "Repository management, pull requests, issue tracking, and actions" },
      { name: "Postman", highlight: "API Testing", note: "Endpoint validation, header inspection, authorization testing, and mocks" }
    ]
  },
  {
    category: "Concepts",
    description: "Software engineering principles and architectural patterns",
    skills: [
      { name: "REST APIs", highlight: "API Design", note: "HTTP verbs, status codes, payload structuring, and pagination" },
      { name: "Authentication", highlight: "Identity Verification", note: "Session-based cookies, JWT tokens, and password hashing" },
      { name: "Authorization", highlight: "Access Control", note: "Role-Based Access Control (RBAC) and permission decorators" },
      { name: "CRUD", highlight: "Data Lifecycle", note: "Robust Create, Read, Update, Delete workflows across models" },
      { name: "Responsive Design", highlight: "Multi-Device UX", note: "Fluid viewport adaptation for mobile, tablet, and desktop" }
    ]
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Full Stack Developer Intern",
    company: "Innoovatum Engineering & Technology LLP",
    location: "Vijayapura / Remote",
    period: "Feb 2024 – Apr 2024",
    credentialVerified: true,
    certificateTitle: "AI-Integrated Python-Django Full-Stack Development",
    certificateImage: "/assets/certificates/innoovatum_python_django_internship.jpg",
    summary: "Completed industrial internship developing web applications with Python, Django, and React, focusing on REST API construction, database query performance, and full-stack integration.",
    responsibilities: [
      "Engineered backend RESTful APIs with Django REST Framework, implementing secure token authentication and role-based permissions.",
      "Optimized relational database queries using Django ORM select_related() and composite indexes, cutting endpoint latency on high-frequency routes.",
      "Built responsive, mobile-first frontend views using React.js and integrated them with backend endpoints via asynchronous HTTP requests.",
      "Conducted automated API testing in Postman and wrote unit test routines using Pytest to ensure data contract integrity.",
      "Collaborated in a Git feature-branch workflow with peer code reviews and clean commit conventions."
    ],
    tech: ["Python", "Django", "Django REST Framework", "PostgreSQL", "React.js", "Postman", "Git"]
  },
  {
    role: "Full-Stack Developer (Client Project)",
    company: "Royal Enterprises",
    location: "Vijayapura, Karnataka",
    period: "June 2026 – Present",
    credentialVerified: true,
    certificateTitle: "Commercial Web Platform Delivery",
    summary: "Architected and delivered a commercial stock management portal and business website for a regional dealership specializing in solar products, inverters, batteries, and EV charging solutions.",
    responsibilities: [
      "Designed and developed a customer-facing product catalog displaying technical specifications for solar modules, inverters, and automotive/tubular batteries.",
      "Implemented a stock tracking module that logs inward supplier shipments and outward sales to eliminate manual register discrepancies.",
      "Engineered an automated scrap trade-in calculation feature that applies lead-acid battery exchange credits directly during checkout.",
      "Created 1-click WhatsApp invoice generation, allowing sales staff to send instant digital receipts to customer phones.",
      "Deployed frontend to Netlify with responsive UI testing across mobile and desktop devices."
    ],
    tech: ["React.js", "Python", "Django", "PostgreSQL", "REST APIs", "Tailwind CSS", "Netlify"]
  }
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Kumudben Darbar College of BCA, Rani Channamma University, Belagavi",
  period: "Coursework Completed (2023 – 2026)",
  gpa: "8.5 / 10.0 (Cumulative GPA across completed semesters)",
  statusNote: "Academic coursework and core computer science curriculum completed with strong academic standing (8.5/10.0 GPA). Completing final degree examination / backlog clearance while actively engineering production software.",
  coreCoursework: [
    "Database Management Systems (RDBMS & SQL)",
    "Object-Oriented Programming (Python, C++, Java)",
    "Data Structures & Algorithms",
    "Web Application Development & Software Engineering",
    "Computer Networks & Operating Systems"
  ],
  secondary: {
    title: "Pre-University Course (PUC), Science",
    institution: "Darbar Pre-University College, Vijayapura",
    subjects: "Physics, Chemistry, Mathematics, Biology (PCMB)"
  }
};

export const CERTIFICATIONS = [
  {
    id: "innoovatum-internship",
    title: "AI-Integrated Python-Django Full-Stack Development",
    credentialType: "Industrial Internship Certificate",
    issuer: "Innoovatum Engineering & Technology LLP",
    issuerShort: "Innoovatum",
    issuerOrg: "Engineering & Technology LLP, Vijayapura",
    issueDate: "2024",
    verificationUrl: null,
    credentialId: "INNO-FSD",
    hasCode: true,
    category: "fullstack",
    accentColor: "#38bdf8",
    issuerLogoType: "innoovatum",
    image: "/assets/certificates/innoovatum_python_django_internship.jpg",
    description: "Industrial internship in AI-Integrated Python-Django Full-Stack Development. Validated hands-on development of REST APIs, database schema design, query latency optimization, and full-stack software architecture.",
    skills: ["Python", "Django", "Django REST Framework", "PostgreSQL", "React.js", "Git", "REST APIs"],
    highlights: [
      "Hands-on full-stack development with Django and React.js",
      "Optimized database query response times on core API endpoints",
      "Signed by Innoovatum leadership team"
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
    verificationUrl: "https://coursera.org/verify/YD42Y93U5L6V",
    credentialId: "YD42Y93U5L6V",
    hasCode: true,
    category: "ai",
    accentColor: "#0284c7",
    issuerLogoType: "microsoft",
    image: "/assets/certificates/microsoft_copilot_security.jpg",
    description: "Course authorized by Microsoft through Coursera. Explores generative AI security architecture, prompt-driven incident analysis, threat intelligence querying, and security workflow assistance.",
    skills: ["AI Security Architecture", "Prompt Engineering", "Threat Intelligence", "Incident Analysis"],
    highlights: [
      "Authorized and validated directly by Microsoft",
      "Cryptographically verified on Coursera",
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
    verificationUrl: "https://coursera.org/verify/Z3KJALTAMU7H",
    credentialId: "Z3KJALTAMU7H",
    hasCode: true,
    category: "professional",
    accentColor: "#0f62fe",
    issuerLogoType: "ibm",
    image: "/assets/certificates/ibm_interpersonal_skills.jpg",
    description: "Authorized by IBM and offered through Coursera. Develops essential workplace competencies including engineering collaboration, active listening, technical communication, and agile team dynamics.",
    skills: ["Technical Communication", "Active Listening", "Agile Team Dynamics", "Collaboration"],
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
    verificationUrl: null,
    credentialId: "8615099",
    hasCode: true,
    category: "data",
    accentColor: "#f59e0b",
    issuerLogoType: "simplilearn",
    image: "/assets/certificates/simplilearn_data_analyst_101.jpg",
    description: "Practical course covering foundational data analytics principles, structured SQL queries, relational filtering, and data aggregation.",
    skills: ["SQL Queries", "Data Aggregation", "Relational Filtering", "Data Analysis"],
    highlights: [
      "Official certificate code: 8615099",
      "Validates core SQL query design and analytical reasoning"
    ]
  }
];

export const GITHUB_REPOS = [
  {
    name: "HisabPoint",
    url: "https://github.com/Mouiezuddin/HisabPoint",
    description: "Digital Customer Ledger & Khata application built with React, Django REST Framework, and PostgreSQL.",
    tech: "React.js · Python · DRF · PostgreSQL",
    badge: "Production"
  },
  {
    name: "Stock_management-",
    url: "https://github.com/Mouiezuddin/Stock_management-",
    description: "Stock management & billing portal for battery, inverter, and solar equipment dealership.",
    tech: "React.js · Django · PostgreSQL · REST",
    badge: "Production"
  },
  {
    name: "Blog_platform",
    url: "https://github.com/Mouiezuddin/Blog_platform",
    description: "Developer blogging platform deployed on Render with rich content taxonomies and PostgreSQL.",
    tech: "Python · Django · PostgreSQL · Bootstrap",
    badge: "Live"
  },
  {
    name: "Calories_Counter",
    url: "https://github.com/Mouiezuddin/Calories_Counter",
    description: "Dietary nutrition and calorie tracker built with Django, SQLite, and vanilla JavaScript.",
    tech: "Python · Django · SQLite · JavaScript",
    badge: "Active"
  }
];

export const ENGINEERING_PRINCIPLES = [
  {
    title: "Relational Schema Design & ACID Atomicity",
    description: "In business software like HisabPoint and Royal Enterprises, financial numbers cannot tolerate partial writes or drift. I use relational constraints, foreign keys, and atomic database transaction blocks (@transaction.atomic) so balance updates either succeed together or roll back completely.",
    icon: "database"
  },
  {
    title: "Database Query Optimization & Indexing",
    description: "Slow queries ruin counter checkout experiences. I profile SQL execution, eliminate N+1 query loops via select_related() and prefetch_related(), and apply composite indexes on frequently filtered columns to achieve snappy response times.",
    icon: "bolt"
  },
  {
    title: "Defensive Authentication & Access Control",
    description: "Security is built into the architecture. I implement Role-Based Access Control (RBAC), password hashing, rate limiting, and session/JWT tokens to protect administrative actions from unauthorized access.",
    icon: "lock"
  },
  {
    title: "Clean RESTful API Contracts",
    description: "I structure backend services with predictable HTTP verbs, appropriate status codes, granular DRF serializers, and clear error responses so frontends and third-party tools can consume endpoints reliably.",
    icon: "api"
  },
  {
    title: "State-Driven Component Architecture",
    description: "On the frontend, I organize React.js code into modular, reusable components with predictable state flow, eliminating spaghetti code and keeping the application fast and responsive across mobile and desktop viewports.",
    icon: "layout"
  },
  {
    title: "Pragmatic Problem-Solving Focus",
    description: "Rather than adding unnecessary dependencies or building over-engineered abstractions, I focus on shipping software that meets the real operational needs of users and clients.",
    icon: "check"
  }
];
