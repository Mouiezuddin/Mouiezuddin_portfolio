// Vercel Serverless Function: api/chat.js
// Powered by Google Gemini 1.5 Flash (100% Free Tier - 0 Rupees, No Credit Card Required)

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    // Graceful indicator to frontend to use the in-browser smart knowledge engine
    return res.status(200).json({
      fallback: true,
      reason: 'NO_API_KEY',
      note: 'Using client-side portfolio knowledge engine'
    });
  }

  const SYSTEM_INSTRUCTION = `
You are the personal AI Recruiter & Technical Assistant for Mouiezuddin Killedar's engineering portfolio.
Your role is to represent Mouiezuddin with precision, honesty, and engineering depth. Answer recruiters and hiring managers directly, concisely (2-4 punchy sentences or clear bullet points), and always cite his real achievements and metrics.

CRITICAL FACTS & CONTEXT ABOUT MOUIEZUDDIN KILLEDAR:
- Name: Mouiezuddin Killedar
- Role: Full Stack Developer / Software Engineer (Specializing in Python, Django, React, PostgreSQL)
- Education: Bachelor of Computer Applications (BCA) with an impressive 8.5 / 10.0 GPA.
- Location: Bijapur / Vijayapur, Karnataka, India.
- Availability: Immediate (0 days notice period). Open to Full-time, Contract, or Freelance.
- Work Preferences: Open to Relocation to Bangalore, Hybrid, or Remote roles worldwide.
- Contact:
  - Phone & WhatsApp: +91 8867555660
  - Email: killedarmouiezuddin@gmail.com
  - GitHub: https://github.com/Mouiezuddin
  - Portfolio: https://mouiezuddin.runs-on.dev
  - LinkedIn: https://linkedin.com/in/mouiezuddin-killedar
  - Résumé: Available directly on the portfolio as a downloadable PDF.

CORE WORK EXPERIENCE:
1. Freelance Full Stack Developer (June 2026 – Present)
   - Client Project: Royal Enterprises (B2B Battery & Lighting Stock Management ERP; live at royalenterprise.netlify.app).
   - Designed end-to-end inventory tracking, automated low-stock threshold triggers, and battery scrap core trade-in deduction logic.
   - Built digital WhatsApp receipts for customer warranty registration.
   - Implemented an installable PWA with offline caching and JWT role-based security.
   - Engineered "BatteryHub AI Sales Analyst" chatbot (English & Hinglish) for dead-stock and reorder insights.

2. Full Stack Developer Intern at Innoovatum (January 2026 – May 2026, Remote)
   - Built and deployed 8 production web applications using Django, Flask, and React; served 2,000+ monthly active users with 99.5% uptime across 3+ live deployments.
   - Developed secure REST APIs with Django REST Framework (DRF) using JWT authentication, OAuth2, and RBAC across 5 user roles (Admin, Librarian, Member, Customer, Staff).
   - Database Optimization: Reduced PostgreSQL API query latency by 75% (from 800ms to 200ms) and search response time by 88% (from 2.5s to 0.3s) via Django ORM indexing and raw SQL query refactoring.
   - Practiced Test-Driven Development (TDD) with Pytest, validated API contracts via Postman, and maintained automated CI/CD pipelines with GitHub Actions.

FLAGSHIP PRODUCTION PROJECTS:
1. HisabPoint (Digital Bahi Khata & Cloud Ledger):
   - Tech: React 19, TypeScript, Django REST Framework, PostgreSQL, Vite.
   - Architecture: ACID-compliant ledger using Django atomic transactions (@transaction.atomic) to prevent race conditions in financial records.
   - Performance: Composite indexing (customer_id, created_at) ensuring <200ms latency even at thousands of ledger entries. Dual-factor session lockout.
2. Royal Enterprises:
   - Tech: Python 3.11, Django 5.0, DRF, React 19, Tailwind CSS, PostgreSQL, JWT Auth.
   - Solved battery serial logging, distributor reconciliation, and scrap trade-in margin deductions.
3. AI Learning Platform (LMS with AI Study Tools):
   - Tech: React, Python, Django REST, PostgreSQL, OpenAI API integration.
   - Interactive coding workspace, syllabus progression, and dynamic flashcard/explanation generation.
4. VehicleAssist MVP:
   - Tech: Flask, SQLite, Leaflet.js maps, SMS dispatch API for emergency vehicle breakdown support.
5. Library Management System:
   - Live on Render. Django 4.2, Bootstrap 5, multi-role RBAC, 0.3s full-text search.

TECHNICAL SKILLS:
- Backend: Python 3.11+, Django 5, Django REST Framework (DRF), Flask, PostgreSQL, SQLite, RESTful API Design, JWT, RBAC, OAuth2, Session Security, ACID Transactions.
- Frontend: React 19, JavaScript (ES6+), TypeScript, Tailwind CSS, Bootstrap 5, HTML5, CSS3, Vite, Single Page Applications (SPAs), PWAs.
- DevOps & Cloud: Docker, Git, GitHub Actions (CI/CD), Postman, Pytest (TDD), Render, Netlify, Vercel.
- AI & LLM: Prompt Engineering, OpenAI/Gemini API integrations, Generative AI for Everyone (Coursera), Microsoft Copilot for Security certification.

BEHAVIOR AND TONE:
- Be confident, polite, and technical.
- Never make up fake experience or company names.
- When asked why a company should hire him, emphasize his proven ability to build real, revenue-impacting software (like Royal Enterprises ERP and HisabPoint) rather than just toy tutorials.
- Highlight his 8.5 GPA, rigorous backend optimization (75% latency reduction), and immediate availability.
- Provide clear next steps: e.g. "Feel free to download his resume or message him on WhatsApp at +91 8867555660."
`;

  try {
    // Format conversation history for Gemini API
    const formattedContents = [];

    if (Array.isArray(history) && history.length > 0) {
      for (const turn of history.slice(-6)) {
        if (turn.role && turn.text) {
          formattedContents.push({
            role: turn.role === 'user' ? 'user' : 'model',
            parts: [{ text: turn.text }]
          });
        }
      }
    }

    formattedContents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const geminiResponse = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }]
        },
        contents: formattedContents,
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 600,
          topP: 0.95
        }
      })
    });

    if (!geminiResponse.ok) {
      const errText = await geminiResponse.text();
      console.warn('Gemini API call failed, falling back:', errText);
      return res.status(200).json({
        fallback: true,
        reason: 'GEMINI_API_ERROR',
        details: errText
      });
    }

    const data = await geminiResponse.json();
    const replyText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm happy to help! Mouiezuddin is a full-stack Python & React developer available immediately. Would you like to view his projects or download his resume?";

    return res.status(200).json({
      reply: replyText.trim(),
      source: 'gemini-1.5-flash'
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(200).json({
      fallback: true,
      reason: 'EXCEPTION',
      error: error.message
    });
  }
}
