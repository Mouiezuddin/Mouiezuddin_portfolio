// src/data/recruiterKnowledge.js
// High-precision client-side knowledge engine for Mouiezuddin Killedar's Recruiter Assistant.
// Guarantees exact, instant answers with zero API calls and zero cost.

export const RECRUITER_KNOWLEDGE = [
  {
    id: 'why_hire',
    patterns: [
      'why hire', 'why should we hire', 'why mouiezuddin', 'why you', 'what makes you different',
      'stand out', 'value proposition', 'what can you bring', 'fit for the role', 'strength', 'strengths'
    ],
    title: 'Why Hire Mouiezuddin?',
    reply: `Here are the top 3 reasons to hire Mouiezuddin:

1. **Proven Production Track Record**: Unlike developers who only build clone tutorials, Mouiezuddin has architected and delivered real business platforms—including **Royal Enterprises ERP** (active client deployment with battery scrap calculation) and **HisabPoint** (ACID-compliant cloud ledger).
2. **Hardcore Backend Engineering**: At **Innoovatum**, he reduced PostgreSQL API latency by **75% (800ms → 200ms)** and search latency by **88% (2.5s → 0.3s)** using Django ORM indexing and query refactoring.
3. **High Academic & Delivery Rigor**: Graduated BCA with an exceptional **8.5 / 10.0 GPA**, practices Test-Driven Development (TDD with Pytest), and is available for immediate joining.`,
    actions: [
      { type: 'case_study', target: 'royal-enterprises', label: 'View Royal Enterprises ERP' },
      { type: 'resume', label: 'Download Résumé (PDF)' },
      { type: 'whatsapp', label: 'Message on WhatsApp' }
    ]
  },
  {
    id: 'royal_enterprises',
    patterns: [
      'royal enterprise', 'royal enterprises', 'battery', 'inverter', 'scrap', 'okaya',
      'erp', 'b2b', 'inventory system', 'batteryhub', 'warranty'
    ],
    title: 'Royal Enterprises Client Project',
    reply: `**Royal Enterprises (Battery & Lighting Stock Management System)**:
- **Role**: Freelance Full-Stack Developer (Delivered June 2026 – Present).
- **Client**: Regional multi-brand distributor & Okaya battery dealership.
- **The Problem Solved**: Replaced brittle paper registers with an automated web ERP handling battery serial number tracking, warranty logging, and manufacturer distributor reconciliation.
- **Key Engineering Feat**: Engineered a dedicated **scrap core trade-in calculation** module that automatically deducts old lead-acid battery value during POS checkout.
- **Tech Stack**: Python 3.11, Django 5.0, DRF, React 19, Tailwind CSS, PostgreSQL, JWT Auth, and WhatsApp digital receipt integration.
- **Live Deployment**: royalenterprise.netlify.app`,
    actions: [
      { type: 'case_study', target: 'royal-enterprises', label: 'Open Case Study Modal' },
      { type: 'external', url: 'https://royalenterprise.netlify.app', label: 'Visit Live Client Site' }
    ]
  },
  {
    id: 'innoovatum_internship',
    patterns: [
      'internship', 'innoovatum', 'intern', 'work experience', 'previous work', 'experience',
      'tenure', 'professional experience'
    ],
    title: 'Innoovatum Internship Experience',
    reply: `**Full Stack Developer Intern at Innoovatum** (Remote, Jan 2026 – May 2026):
- Built and shipped **8 production-grade web applications** using Django, Flask, and React.
- Served **2,000+ monthly active users** across 3+ live deployments with **99.5% uptime**.
- **Backend & Security**: Built REST APIs with Django REST Framework (DRF) featuring JWT tokens, OAuth2, and Role-Based Access Control (RBAC) across 5 distinct user roles.
- **Query Optimization**: Cut API response latency by **75% (800ms down to 200ms)** and search times from 2.5s down to 0.3s via database composite indexing and ORM query optimization.
- **Engineering Practices**: Wrote automated test suites using Pytest (TDD), collaborated via Git/GitHub PR reviews, and automated deployments with GitHub Actions.`,
    actions: [
      { type: 'scroll', target: '#experience', label: 'View Experience Section' },
      { type: 'resume', label: 'Download Full Résumé' }
    ]
  },
  {
    id: 'certifications',
    patterns: [
      'certificate', 'certificates', 'certification', 'certifications', 'coursera', 'microsoft',
      'ibm', 'simplilearn', 'credentials', 'certified', 'licence', 'licenses', 'accreditation'
    ],
    title: 'Verified Industry Certifications',
    reply: `Mouiezuddin holds **4 verified industry credentials & technical certifications**:

1. **AI-Integrated Python-Django Full-Stack Development** (Innoovatum Engineering & Technology LLP)
   - Industrial internship validating full-stack microservices, ORM query optimization (800ms → 200ms), and automated testing.
   - Signed by CEO Shaukat Kotwal & CTO Abdul Raheem Sutar.

2. **Microsoft Copilot for Security** (Authorized by Microsoft via Coursera)
   - Generative AI security architecture, threat analysis, incident response, and cloud SecOps automation.
   - Verified Credential ID: \`YD42Y93U5L6V\`.

3. **Developing Interpersonal Skills** (Authorized by IBM via Coursera)
   - Cross-functional engineering communication, active listening, stakeholder management, and agile team dynamics.
   - Verified Credential ID: \`Z3KJALTAMU7H\`.

4. **Data Analyst 101** (Simplilearn SkillUP)
   - Practical data analytics, SQL queries, exploratory data analysis, and metrics reporting.
   - Certificate Code: \`8615099\`.`,
    actions: [
      { type: 'scroll', target: '#certifications', label: 'View Certifications & Badges' },
      { type: 'external', url: 'https://coursera.org/verify/YD42Y93U5L6V', label: 'Verify Microsoft Credential ↗' },
      { type: 'resume', label: 'Download Résumé' }
    ]
  },
  {
    id: 'hisabpoint',
    patterns: [
      'hisabpoint', 'hisab point', 'ledger', 'acid', 'transaction', 'bahi khata',
      'accounting', 'financial', 'atomic'
    ],
    title: 'HisabPoint Cloud Ledger Architecture',
    reply: `**HisabPoint (Digital Bahi Khata & Cloud Ledger)**:
- **Core Engineering**: Architected an **ACID-compliant double-entry ledger** using Django atomic transactions (\`@transaction.atomic\`) to guarantee zero race conditions and eliminate balance discrepancy errors.
- **High-Performance Querying**: Used composite indexes on \`(customer_id, created_at)\` to achieve **sub-200ms query latency** under high transaction volumes.
- **Security**: Built brute-force lockout, encrypted customer PII, and multi-role cashier access.
- **Stack**: React 19, TypeScript, Django REST Framework, PostgreSQL, Vite.`,
    actions: [
      { type: 'case_study', target: 'hisabpoint', label: 'Open HisabPoint Case Study' }
    ]
  },
  {
    id: 'skills_backend',
    patterns: [
      'python', 'django', 'flask', 'drf', 'django rest framework', 'backend', 'api',
      'rest api', 'apis', 'orm', 'sql', 'database', 'databases'
    ],
    title: 'Backend Engineering Stack',
    reply: `Mouiezuddin's primary backend specialization is **Python & Django Ecosystem**:
- **Languages & Frameworks**: Python 3.11+, Django 5.0, Django REST Framework (DRF), Flask.
- **Database Architecture**: PostgreSQL, SQLite, schema normalization, ACID compliance, composite indexing, query profiling with Django Debug Toolbar.
- **API Security**: JWT stateless auth with refresh rotation, RBAC, OAuth2, CORS, CSRF, and rate-limiting.
- **Real-World Wins**: Cut API latency by 75% at Innoovatum, built multi-tenant transaction systems for Royal Enterprises and HisabPoint.`,
    actions: [
      { type: 'scroll', target: '#engineering', label: 'Explore Backend Architecture' },
      { type: 'github', label: 'View GitHub Repositories' }
    ]
  },
  {
    id: 'skills_frontend',
    patterns: [
      'react', 'frontend', 'javascript', 'typescript', 'tailwind', 'css', 'ui', 'html',
      'vite', 'web development', 'single page application', 'spa'
    ],
    title: 'Frontend Engineering Stack',
    reply: `Mouiezuddin builds modern, high-performance web frontends:
- **Core**: React 19, TypeScript, Modern JavaScript (ES6+), HTML5, CSS3.
- **Styling**: Tailwind CSS, Semantic Vanilla CSS design systems, Bootstrap 5.
- **Performance**: Vite 8 bundler, code-splitting, lazy loading, and PWA (Progressive Web Apps) with offline service workers.
- **UX Focus**: Clean typography (Inter & JetBrains Mono), accessible UI components, zero fluff, and instant rendering.`,
    actions: [
      { type: 'scroll', target: '#stack', label: 'Inspect Full Tech Stack' }
    ]
  },
  {
    id: 'devops_cloud',
    patterns: [
      'devops', 'docker', 'ci/cd', 'cicd', 'github actions', 'render', 'vercel',
      'netlify', 'deployment', 'testing', 'pytest', 'tdd', 'git'
    ],
    title: 'DevOps & Quality Assurance',
    reply: `Mouiezuddin treats software delivery with production discipline:
- **Containers & Version Control**: Docker, Git, feature-branch workflows, semantic commit conventions.
- **CI/CD Pipelines**: Automated test & build verification using GitHub Actions.
- **Testing**: Test-Driven Development (TDD) using **Pytest** for backend APIs and Postman for REST contract testing.
- **Hosting**: Deployed and maintained production applications on **Vercel**, **Render**, and **Netlify**.`,
    actions: [
      { type: 'scroll', target: '#proof', label: 'View Verified GitHub Proof' }
    ]
  },
  {
    id: 'education_gpa',
    patterns: [
      'education', 'degree', 'college', 'university', 'bca', 'gpa', 'marks', 'academic',
      'graduation', 'study', 'qualification'
    ],
    title: 'Education & Academics',
    reply: `**Education Background**:
- **Degree**: Bachelor of Computer Applications (BCA)
- **Academic Score**: Outstanding **8.5 / 10.0 GPA**
- **Core Subjects**: Data Structures & Algorithms, Object-Oriented Programming (Python, C++, Java), Database Management Systems (RDBMS/SQL), Computer Networks, and Software Engineering.
- **Certifications**:
  - *Generative AI for Everyone* (Coursera / DeepLearning.AI, 2025)
  - *Microsoft Copilot for Security* (Microsoft, 2025)
  - *Data Analyst 101* (Cert: 8615099)`,
    actions: [
      { type: 'resume', label: 'Download Résumé' }
    ]
  },
  {
    id: 'availability_location',
    patterns: [
      'notice period', 'availability', 'when can you join', 'immediate', 'start date',
      'location', 'bangalore', 'bengaluru', 'bijapur', 'vijayapur', 'relocate',
      'relocation', 'remote', 'hybrid', 'on-site', 'onsite'
    ],
    title: 'Availability & Location Preferences',
    reply: `**Immediate Joining & High Flexibility**:
- **Notice Period**: **0 Days (Available Immediately)**.
- **Current Location**: Bijapur / Vijayapur, Karnataka, India.
- **Relocation**: Fully open to relocate immediately to **Bangalore (Bengaluru)**, Hyderabad, Pune, Mumbai, or Delhi NCR.
- **Work Model**: Ready for **On-Site**, **Hybrid**, or **Remote** roles worldwide.`,
    actions: [
      { type: 'whatsapp', label: 'Discuss Joining on WhatsApp' },
      { type: 'email', label: 'Send Interview Invitation' }
    ]
  },
  {
    id: 'salary_compensation',
    patterns: [
      'salary', 'ctc', 'expected ctc', 'compensation', 'budget', 'rate', 'hourly',
      'cost', 'pricing', 'charge'
    ],
    title: 'Compensation & Expectations',
    reply: `Mouiezuddin's primary priority is joining a collaborative engineering team where he can build scalable systems and solve challenging problems:
- **Full-time roles**: Open to competitive industry standards for Full-Stack / Backend Engineer roles.
- **Freelance / Contract**: Flexible pricing based on milestones (fixed-scope) or monthly deliverables.
- He is happy to discuss figures directly based on your team's budget and requirements!`,
    actions: [
      { type: 'whatsapp', label: 'Talk Numbers on WhatsApp' },
      { type: 'email', label: 'Email Mouiezuddin' }
    ]
  },
  {
    id: 'contact_info',
    patterns: [
      'contact', 'email', 'phone', 'number', 'whatsapp', 'reach', 'hire', 'get in touch',
      'talk', 'call', 'linkedin', 'github profile'
    ],
    title: 'Direct Contact Details',
    reply: `You can reach Mouiezuddin directly via:
- 📱 **Phone & WhatsApp**: +91 8867555660
- ✉️ **Email**: killedarmouiezuddin@gmail.com
- 💼 **LinkedIn**: linkedin.com/in/mouiezuddin-killedar
- 🐙 **GitHub**: github.com/Mouiezuddin
- 📄 **Résumé**: Available for instant download right on this page.`,
    actions: [
      { type: 'whatsapp', label: 'Chat on WhatsApp (+91 8867555660)' },
      { type: 'email', label: 'Send Direct Email' },
      { type: 'resume', label: 'Download Résumé (PDF)' }
    ]
  },
  {
    id: 'projects_overview',
    patterns: [
      'project', 'projects', 'portfolio', 'apps', 'work sample', 'what did you build',
      'portfolio projects', 'showcase'
    ],
    title: 'Featured Production Projects',
    reply: `Mouiezuddin has engineered 8+ production web applications. The top highlights:
1. **Royal Enterprises**: B2B ERP with battery core exchange calculation & WhatsApp invoices (live at royalenterprise.netlify.app).
2. **HisabPoint**: ACID-compliant digital ledger with <200ms transaction lookups and PostgreSQL atomic locks.
3. **AI Learning Platform**: EdTech LMS with dynamic AI flashcard & code evaluation tools.
4. **Library Management System**: Full-text book catalog on Render with 0.3s search time and 3-tier RBAC.
5. **Developer's Tale**: Markdown blogging system with PostgreSQL and 99%+ uptime on Render.`,
    actions: [
      { type: 'scroll', target: '#work', label: 'Browse Selected Works' },
      { type: 'case_study', target: 'royal-enterprises', label: 'Royal Enterprises Case Study' }
    ]
  },
  {
    id: 'dsa_problem_solving',
    patterns: [
      'dsa', 'data structures', 'algorithms', 'problem solving', 'leetcode', 'optimization',
      'clean code', 'scale', 'scaling'
    ],
    title: 'Problem Solving & Engineering Approach',
    reply: `Mouiezuddin approaches problem solving with a system-first engineering mindset:
- **Algorithmic Efficiency**: Mindful of time & space complexity ($O(1)$ and $O(\log n)$ indexing over $O(n)$ full table scans).
- **Database Normalization & Indexing**: Refactors slow SQL queries and implements composite indexes to slash latency.
- **Defensive Design**: Uses database-level constraints (foreign keys, atomic locks) instead of relying solely on frontend validation.
- **Readable & Testable**: Writes modular services with automated test coverage (Pytest).`,
    actions: [
      { type: 'scroll', target: '#engineering', label: 'Review Engineering Principles' }
    ]
  },
  {
    id: 'github_contributions',
    patterns: [
      'github', 'contributions', 'commits', 'heatmap', 'activity', 'code frequency',
      'repositories', 'repos', 'git profile', 'how active', 'open source'
    ],
    title: 'Verified GitHub Cadence & Contributions',
    reply: `Mouiezuddin maintains a consistent, verified development cadence on GitHub:
- **165+ Contributions in the last year** across production business tools, ACID financial engines, and backend APIs.
- **8+ Active Repositories** showcasing Python/Django architectures, React 19 frontends, and automated Pytest test suites.
- **Production Standard**: Uses descriptive atomic commits, feature branching, and TDD practices rather than one-off tutorial clones.
- You can inspect his real commit history, test suites, and pull requests directly.`,
    actions: [
      { type: 'scroll', target: '#github-proof', label: 'View 165+ Heatmap & Repos' },
      { type: 'github', label: 'Visit GitHub (@Mouiezuddin) ↗' }
    ]
  },
  {
    id: 'greeting',
    patterns: ['hi', 'hello', 'hey', 'start', 'greetings', 'who are you', 'help'],
    title: 'Welcome to Mouiezuddin\'s Copilot',
    reply: `Hello! I am **Mouiezuddin's Technical Recruiter & Client Assistant**.

I have full access to his verified resume, engineering case studies, and code metrics. Ask me anything, or tap an option below:`,
    actions: [
      { type: 'prompt', text: 'Why should we hire Mouiezuddin?', label: 'Why hire Mouiezuddin?' },
      { type: 'prompt', text: 'Tell me about the Royal Enterprises ERP project', label: 'Royal Enterprises ERP' },
      { type: 'prompt', text: 'What is your backend tech stack?', label: 'Backend Stack' },
      { type: 'prompt', text: 'What is your notice period and location?', label: 'Notice & Location' }
    ]
  }
];

// Helper: Semantic scorer for query matching
export function findBestKnowledgeMatch(query) {
  if (!query || typeof query !== 'string') return null;

  const normalized = query.toLowerCase().trim().replace(/[^\w\s]/g, ' ');
  const queryTokens = normalized.split(/\s+/).filter(Boolean);

  let bestMatch = null;
  let highestScore = 0;

  for (const item of RECRUITER_KNOWLEDGE) {
    let score = 0;

    for (const pattern of item.patterns) {
      const patternNorm = pattern.toLowerCase();
      // Exact substring match
      if (normalized.includes(patternNorm)) {
        score += 15 + patternNorm.length;
      }

      // Token overlap
      const patternTokens = patternNorm.split(/\s+/);
      const matchingTokens = patternTokens.filter(t => queryTokens.includes(t));
      if (matchingTokens.length > 0) {
        score += matchingTokens.length * 6;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  // Threshold to avoid false positives
  if (highestScore >= 6) {
    return bestMatch;
  }

  // Fallback response with helpful prompts
  return {
    id: 'default_fallback',
    title: 'Mouiezuddin Killedar — Profile Search',
    reply: `I want to make sure you get the exact details you need! Mouiezuddin is a **Full-Stack Developer (Python, Django, React, PostgreSQL)** with an **8.5 GPA** and production client experience.

Here are the most common things recruiters and clients ask:`,
    actions: [
      { type: 'prompt', text: 'Why should we hire Mouiezuddin?', label: 'Why hire him?' },
      { type: 'prompt', text: 'Tell me about Royal Enterprises project', label: 'Royal Enterprises Project' },
      { type: 'prompt', text: 'What is your full tech stack?', label: 'Tech Stack & Skills' },
      { type: 'resume', label: 'Download Résumé (PDF)' },
      { type: 'whatsapp', label: 'Contact on WhatsApp' }
    ]
  };
}
