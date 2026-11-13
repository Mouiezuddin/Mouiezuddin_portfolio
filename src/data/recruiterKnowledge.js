// src/data/recruiterKnowledge.js
// High-precision client-side knowledge engine for Mouiezuddin Killedar's Recruiter Assistant.
// Verified answers with zero API dependency and zero cost.

export const RECRUITER_KNOWLEDGE = [
  {
    id: 'why_hire',
    patterns: [
      'why hire', 'why should we hire', 'why mouiezuddin', 'why you', 'what makes you different',
      'stand out', 'value proposition', 'what can you bring', 'fit for the role', 'strength', 'strengths'
    ],
    title: 'Why Hire Mouiezuddin?',
    reply: `Here are 3 compelling reasons to hire Mouiezuddin as a Junior Full-Stack Python Developer:

1. **Practical Production Software**: Rather than only building generic tutorial clones, Mouiezuddin has architected and delivered real platforms: **HisabPoint** (a live digital customer ledger for retail merchants with PostgreSQL atomic transactions) and **Royal Enterprises** (an active commercial stock management portal with scrap battery calculation).
2. **Solid Backend & Database Core**: Skilled in Python, Django, and Django REST Framework, with proven experience designing relational schemas, composite indexes, and atomic transaction locks (@transaction.atomic) that prevent data drift.
3. **Strong Academic Foundation & Work Ethic**: Achieved an **8.5 / 10.0 GPA** across completed BCA computer science coursework (DBMS, Data Structures, OOP, Networks) and is available for immediate joining.`,
    actions: [
      { type: 'case_study', target: 'hisabpoint', label: 'View HisabPoint Case Study' },
      { type: 'case_study', target: 'royal-enterprises', label: 'View Royal Enterprises ERP' },
      { type: 'resume', label: 'Download Résumé (PDF)' }
    ]
  },
  {
    id: 'hisabpoint',
    patterns: [
      'hisabpoint', 'hisab point', 'ledger', 'acid', 'transaction', 'bahi khata',
      'accounting', 'financial', 'atomic', 'shopkeeper'
    ],
    title: 'HisabPoint Digital Customer Ledger',
    reply: `**HisabPoint (Digital Customer Ledger for Retail Shopkeepers)**:
- **Core Purpose**: Replaces handwritten paper khatas for local merchants to eliminate calculation disputes and lost credit records.
- **Key Implemented Features**:
  • Customer ledger directory with quick phone and name lookups.
  • Real-time tracking of paid amounts, dues, and net balances.
  • Detailed customer credit and repayment transaction logs with timestamps.
  • Atomic credit/debit transaction logging via Django's \`@transaction.atomic\`.
- **Tech Stack**: React.js, Python, Django, Django REST Framework, PostgreSQL.
- **Live Demo**: hisab-point.vercel.app
- **GitHub**: github.com/Mouiezuddin/HisabPoint`,
    actions: [
      { type: 'case_study', target: 'hisabpoint', label: 'Open HisabPoint Case Study' },
      { type: 'external', url: 'https://hisab-point.vercel.app/', label: 'Visit Live Application ↗' }
    ]
  },
  {
    id: 'royal_enterprises',
    patterns: [
      'royal enterprise', 'royal enterprises', 'battery', 'inverter', 'scrap', 'solar',
      'erp', 'b2b', 'inventory system', 'stock', 'okaya'
    ],
    title: 'Royal Enterprises Stock Management Portal',
    reply: `**Royal Enterprises (Solar, Inverter & Battery Business Portal)**:
- **Client**: Regional dealership for solar modules, inverters, batteries, and EV charging solutions.
- **Problem Solved**: Replaced manual registers with a cloud portal that manages product catalogs, stock inward/outward flow, and scrap trade-ins.
- **Key Implemented Feature**: Automated old lead-acid battery scrap core allowance deduction directly during customer billing, plus 1-click WhatsApp invoice generation.
- **Tech Stack**: React.js, Python, Django, Django REST Framework, PostgreSQL, REST APIs.
- **Live Portal**: royalenterprise.netlify.app`,
    actions: [
      { type: 'case_study', target: 'royal-enterprises', label: 'Open Case Study Modal' },
      { type: 'external', url: 'https://royalenterprise.netlify.app/', label: 'Visit Live Portal ↗' }
    ]
  },
  {
    id: 'innoovatum_internship',
    patterns: [
      'internship', 'innoovatum', 'intern', 'work experience', 'previous work', 'experience',
      'tenure', 'professional experience'
    ],
    title: 'Innoovatum Internship Experience',
    reply: `**Full Stack Developer Intern at Innoovatum Engineering & Technology LLP**:
- **Duration**: Feb 2024 – Apr 2024 (Vijayapura / Remote).
- **Core Work**: Developed full-stack web applications using Python, Django, and React.js.
- **Backend**: Built RESTful APIs with Django REST Framework, implementing secure token authentication and role-based permissions.
- **Database**: Optimized relational database queries with Django ORM \`select_related()\` and composite indexing.
- **Testing & Tools**: Conducted API validation in Postman, wrote unit test routines with Pytest, and collaborated using Git feature branches.
- **Verified Credential**: Verified certificate signed by Innoovatum leadership team.`,
    actions: [
      { type: 'scroll', target: '#experience', label: 'View Experience Section' },
      { type: 'resume', label: 'Download Full Résumé' }
    ]
  },
  {
    id: 'education_gpa',
    patterns: [
      'education', 'degree', 'college', 'university', 'bca', 'gpa', 'marks', 'academic',
      'graduation', 'study', 'qualification', 'backlog'
    ],
    title: 'Education & Academic Record',
    reply: `**Academic Background**:
- **Degree**: Bachelor of Computer Applications (BCA)
- **Institution**: Kumudben Darbar College of BCA, Rani Channamma University, Belagavi
- **Academic Score**: Cumulative **8.5 / 10.0 GPA** across completed coursework.
- **Status**: Academic coursework and core computer science curriculum completed with strong academic standing; currently clearing final degree backlog examination while actively engineering production software.
- **Core Subjects**: Relational Database Management Systems (SQL), Object-Oriented Programming (Python, C++), Data Structures & Algorithms, Web Technologies, Computer Networks.
- **Pre-University**: PUC Science (PCMB) at Darbar Pre-University College, Vijayapura.`,
    actions: [
      { type: 'scroll', target: '#education', label: 'View Education Section' },
      { type: 'resume', label: 'Download Résumé' }
    ]
  },
  {
    id: 'skills_overview',
    patterns: [
      'skills', 'tech stack', 'technologies', 'tools', 'languages', 'backend', 'frontend',
      'database', 'what can you do', 'competencies'
    ],
    title: 'Curated Technical Skills',
    reply: `Mouiezuddin's technical skills organized across 6 core domains:
- **Languages**: Python, JavaScript, HTML, CSS, SQL
- **Backend**: Django, Django REST Framework, Flask
- **Frontend**: React.js, Bootstrap
- **Databases**: PostgreSQL, MySQL, SQLite
- **Tools**: Git, GitHub, Postman
- **Concepts**: REST APIs, Authentication, Authorization (RBAC), CRUD Lifecycle, Responsive Design`,
    actions: [
      { type: 'scroll', target: '#skills', label: 'Explore Skills Section' }
    ]
  },
  {
    id: 'certifications',
    patterns: [
      'certificate', 'certificates', 'certification', 'certifications', 'coursera', 'microsoft',
      'ibm', 'simplilearn', 'credentials', 'verified'
    ],
    title: 'Verified Technical Certifications',
    reply: `Mouiezuddin holds 4 verified technical credentials:
1. **AI-Integrated Python-Django Full-Stack Development** (Innoovatum Internship Certificate)
2. **Microsoft Copilot for Security** (Authorized by Microsoft via Coursera, ID: \`YD42Y93U5L6V\`)
3. **Developing Interpersonal Skills** (Authorized by IBM via Coursera, ID: \`Z3KJALTAMU7H\`)
4. **Data Analyst 101** (Simplilearn SkillUP, Code: \`8615099\`)`,
    actions: [
      { type: 'scroll', target: '#certifications', label: 'View Certifications Grid' },
      { type: 'external', url: 'https://coursera.org/verify/YD42Y93U5L6V', label: 'Verify Microsoft Credential ↗' }
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
    reply: `**Immediate Joining & Work Flexibility**:
- **Notice Period**: **0 Days (Available Immediately)**
- **Current Location**: Bijapur / Vijayapura, Karnataka, India
- **Relocation**: Fully open to relocate immediately to **Bangalore (Bengaluru)**, Hyderabad, Pune, Mumbai, or Delhi NCR.
- **Work Model**: Ready for **On-Site**, **Hybrid**, or **Remote** software engineering roles.`,
    actions: [
      { type: 'whatsapp', label: 'Discuss Joining on WhatsApp' },
      { type: 'email', label: 'Send Direct Email' }
    ]
  },
  {
    id: 'contact_info',
    patterns: [
      'contact', 'email', 'phone', 'number', 'whatsapp', 'reach', 'hire', 'get in touch',
      'talk', 'call', 'linkedin', 'github profile'
    ],
    title: 'Direct Contact Channels',
    reply: `You can reach Mouiezuddin directly via:
- 📱 **Phone & WhatsApp**: +91 8867555660
- ✉️ **Email**: killedarmouiezuddin@gmail.com
- 💼 **LinkedIn**: linkedin.com/in/mouiezuddin-killedar
- 🐙 **GitHub**: github.com/Mouiezuddin
- 📄 **Résumé**: Available for instant download on the site.`,
    actions: [
      { type: 'whatsapp', label: 'Chat on WhatsApp (+91 8867555660)' },
      { type: 'email', label: 'Email Mouiezuddin' },
      { type: 'resume', label: 'Download Résumé (PDF)' }
    ]
  },
  {
    id: 'greeting',
    patterns: ['hi', 'hello', 'hey', 'start', 'greetings', 'who are you', 'help'],
    title: 'Welcome to Mouiezuddin\'s Copilot',
    reply: `Hello! I am **Mouiezuddin's Technical Recruiter & Engineering Copilot**.

I can provide instant details on his verified projects (HisabPoint, Royal Enterprises), technical stack (Python, Django, React, PostgreSQL), internship experience, and availability. How can I help you today?`,
    actions: [
      { type: 'prompt', text: 'Why should we hire Mouiezuddin?', label: 'Why hire Mouiezuddin?' },
      { type: 'prompt', text: 'Tell me about HisabPoint', label: 'HisabPoint Ledger' },
      { type: 'prompt', text: 'What is your technical skill set?', label: 'Technical Skills' },
      { type: 'prompt', text: 'What is your notice period and location?', label: 'Notice & Location' }
    ]
  }
];

// Semantic scorer for knowledge retrieval
export function findBestKnowledgeMatch(query) {
  if (!query || typeof query !== 'string') return null;

  const normalized = query.toLowerCase().trim().replace(/[^\w\s]/g, ' ');
  const queryTokens = normalized.split(/\s+/).filter(Boolean);

  if (queryTokens.length === 0) return null;

  let bestMatch = null;
  let highestScore = 0;

  for (const item of RECRUITER_KNOWLEDGE) {
    let score = 0;

    for (const pattern of item.patterns) {
      if (normalized.includes(pattern)) {
        score += 15;
      }

      const patternTokens = pattern.split(/\s+/);
      const matchedTokens = patternTokens.filter(t => queryTokens.includes(t));
      if (matchedTokens.length > 0) {
        score += (matchedTokens.length / patternTokens.length) * 8;
      }
    }

    if (score > highestScore && score >= 5) {
      highestScore = score;
      bestMatch = item;
    }
  }

  return bestMatch;
}
