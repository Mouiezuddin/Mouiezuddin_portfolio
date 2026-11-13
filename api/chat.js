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
- Role: Junior Full-Stack Python Developer / Software Engineer (Specializing in Python, Django, React.js, PostgreSQL)
- Education: Bachelor of Computer Applications (BCA) at Kumudben Darbar College of BCA, Rani Channamma University, Belagavi. Core academic coursework completed with an 8.5 / 10.0 GPA (Relational Databases, Data Structures, OOP, Web Technologies); currently completing final degree clearance examination while actively building and shipping software.
- Location: Bijapur / Vijayapur, Karnataka, India.
- Availability: Immediate (0 days notice period). Open to Full-time software engineering roles.
- Work Preferences: Open to Relocation to Bangalore (Bengaluru), Hyderabad, Pune, Hybrid, or Remote roles worldwide.
- Contact:
  - Phone & WhatsApp: +91 8867555660
  - Email: killedarmouiezuddin@gmail.com
  - GitHub: https://github.com/Mouiezuddin
  - Portfolio: https://mouiezuddin.runs-on.dev
  - LinkedIn: https://linkedin.com/in/mouiezuddin-killedar
  - Résumé: Available directly on the portfolio as a downloadable PDF.

CORE WORK EXPERIENCE:
1. Full-Stack Developer (Client Project) — Royal Enterprises (June 2026 – Present, Vijayapura)
   - Client Project: Royal Enterprises (B2B Battery & Solar Stock Management ERP; live at royalenterprise.netlify.app).
   - Designed end-to-end inventory tracking, automated stock in/out movement logs, and battery scrap core trade-in deduction logic.
   - Built digital WhatsApp receipts for customer warranty registration.
   - Deployed frontend on Netlify with responsive mobile and desktop layouts.

2. Full Stack Developer Intern at Innoovatum Engineering & Technology LLP (Feb 2024 – Apr 2024, Remote / Vijayapura)
   - Developed and tested backend REST APIs using Django REST Framework with secure token authentication and role-based permissions.
   - Database Optimization: Reduced PostgreSQL API query latency by using Django ORM select_related() and composite indexes.
   - Engineered responsive React.js frontend views and connected with backend endpoints via asynchronous fetch.
   - Practiced API testing in Postman and wrote unit test routines with Pytest.

FLAGSHIP PRODUCTION PROJECTS:
1. HisabPoint (Digital Customer Ledger & Khata for Local Shopkeepers):
   - Tech: React.js, Python, Django REST Framework, PostgreSQL, Vercel.
   - Architecture: Mobile-first ledger application featuring customer ledger management, paid/due tracking, and customer transaction records. Enforces Django atomic transactions (@transaction.atomic) to guarantee mathematical accuracy. Live: hisab-point.vercel.app | Repo: github.com/Mouiezuddin/HisabPoint
2. Royal Enterprises:
   - Tech: React.js, Python, Django, DRF, PostgreSQL, REST APIs.
   - Solved battery serial logging, distributor reconciliation, and scrap trade-in margin deductions for solar and battery dealership. Live: royalenterprise.netlify.app
3. Library Management System:
   - Live on Render. Multi-role RBAC (Admin, Librarian, Member), book search indexing, and automated overdue penalty calculations. Tech: Django, SQLite, Bootstrap, REST APIs.
4. Developer's Tale Blog Platform:
   - Live on Render. Technical blogging platform with rich-text publishing, category filtering, user commenting, and PostgreSQL on Render. Tech: Python, Django, PostgreSQL, Bootstrap.

TECHNICAL SKILLS:
- Languages: Python, JavaScript, HTML, CSS, SQL.
- Backend: Django, Django REST Framework, Flask.
- Frontend: React.js, Bootstrap.
- Database: PostgreSQL, MySQL, SQLite.
- Tools: Git, GitHub, Postman.
- Concepts: REST APIs, Authentication, Authorization (RBAC), CRUD, Responsive Design.

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
