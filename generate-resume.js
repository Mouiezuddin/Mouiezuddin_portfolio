const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  
  // A4 size: 595.28 x 841.89
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();
  
  // Load standard fonts
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  
  // Colors
  const colorGold = rgb(245/255, 166/255, 35/255); // #f5a623
  const colorBlack = rgb(15/255, 23/255, 42/255); // #0f172a
  const colorDarkGrey = rgb(71/255, 85/255, 105/255); // #475569
  
  let y = height - 40; // Start near the top margin
  const marginX = 40;
  const contentWidth = width - (marginX * 2); // 515.28
  
  // Helper functions
  function drawText(text, options = {}) {
    const {
      x = marginX,
      fontSize = 9,
      font = fontRegular,
      color = colorBlack,
      align = 'left'
    } = options;
    
    let targetX = x;
    if (align === 'center') {
      const textWidth = font.widthOfTextAtSize(text, fontSize);
      targetX = (width - textWidth) / 2;
    } else if (align === 'right') {
      const textWidth = font.widthOfTextAtSize(text, fontSize);
      targetX = width - marginX - textWidth;
    }
    
    page.drawText(text, {
      x: targetX,
      y: y,
      size: fontSize,
      font: font,
      color: color
    });
  }
  
  function drawSectionHeader(title) {
    y -= 12;
    drawText(title.toUpperCase(), { fontSize: 10.5, font: fontBold, color: colorBlack });
    y -= 4;
    page.drawLine({
      start: { x: marginX, y: y },
      end: { x: width - marginX, y: y },
      thickness: 1,
      color: colorGold
    });
    y -= 10;
  }
  
  function drawBullet(text, indent = 12) {
    page.drawCircle({
      x: marginX + indent - 5,
      y: y + 3,
      size: 1.8,
      color: colorGold
    });
    
    const words = text.split(' ');
    let line = '';
    const bulletContentWidth = contentWidth - indent;
    
    for (let i = 0; i < words.length; i++) {
      const testLine = line + (line === '' ? '' : ' ') + words[i];
      const testWidth = fontRegular.widthOfTextAtSize(testLine, 8.5);
      if (testWidth > bulletContentWidth && i > 0) {
        drawText(line, { x: marginX + indent, fontSize: 8.5 });
        y -= 11;
        line = words[i];
      } else {
        line = testLine;
      }
    }
    drawText(line, { x: marginX + indent, fontSize: 8.5 });
    y -= 11;
  }

  // --- HEADER SECTION ---
  drawText("MOUIEZUDDIN KILLEDAR", { fontSize: 20, font: fontBold, color: colorBlack, align: 'center' });
  y -= 14;
  
  drawText("Full Stack Python Developer | Django | Flask | React JS | REST API | AI Integration", { fontSize: 10, font: fontBold, color: colorGold, align: 'center' });
  y -= 14;
  
  const contactLine1 = "Bijapur, Karnataka  |  +91 8867555660  |  killedarmouiezuddin@gmail.com";
  drawText(contactLine1, { fontSize: 8.5, color: colorDarkGrey, align: 'center' });
  y -= 11;
  
  const contactLine2 = "GitHub: github.com/Mouiezuddin  |  Portfolio: mouiezuddin.runs-on.dev";
  drawText(contactLine2, { fontSize: 8.5, color: colorDarkGrey, align: 'center' });
  y -= 8;
  
  // --- CAREER OBJECTIVE ---
  drawSectionHeader("Career Objective");
  const summaryText = 
    "Motivated BCA graduate (GPA: 8.5/10.0) with hands-on internship and freelance experience building and deploying 8+ production-grade web applications. Skilled in Python, Django, Flask, React JS, PostgreSQL, JWT/RBAC authentication, and CI/CD pipelines. Eager to join a product company or MNC as a Software Engineer or Full Stack Developer and grow through real-world engineering challenges.";
  
  const summaryWords = summaryText.split(' ');
  let currentLine = '';
  for (let i = 0; i < summaryWords.length; i++) {
    const testLine = currentLine + (currentLine === '' ? '' : ' ') + summaryWords[i];
    const testWidth = fontRegular.widthOfTextAtSize(testLine, 8.5);
    if (testWidth > contentWidth && i > 0) {
      drawText(currentLine, { fontSize: 8.5, color: colorDarkGrey });
      y -= 11.5;
      currentLine = summaryWords[i];
    } else {
      currentLine = testLine;
    }
  }
  drawText(currentLine, { fontSize: 8.5, color: colorDarkGrey });
  y -= 8;
  
  // --- TECHNICAL SKILLS ---
  drawSectionHeader("Technical Skills");
  
  drawText("Backend Systems:", { fontSize: 9.5, font: fontBold, color: colorBlack });
  drawText("Python, Django, Flask, Django REST Framework (DRF), PostgreSQL, SQLite, JWT Auth, RBAC", { x: marginX + 110, fontSize: 9.5, color: colorDarkGrey });
  y -= 14;
  
  drawText("Frontend & Web:", { fontSize: 9.5, font: fontBold, color: colorBlack });
  drawText("React 19, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap 5", { x: marginX + 110, fontSize: 9.5, color: colorDarkGrey });
  y -= 14;
  
  drawText("DevOps & Testing:", { fontSize: 9.5, font: fontBold, color: colorBlack });
  drawText("Docker, Git & GitHub, GitHub Actions, Render Cloud, Postman Client, Pytest (TDD), Vitest", { x: marginX + 110, fontSize: 9.5, color: colorDarkGrey });
  y -= 14;
  
  // --- WORK EXPERIENCE ---
  drawSectionHeader("Professional Experience");
  
  // Company & Position
  drawText("Full Stack Developer Intern", { fontSize: 10, font: fontBold });
  drawText("02/2024 – 04/2024", { fontSize: 9, font: fontBold, align: 'right' });
  y -= 12;
  drawText("Innoovatum (Remote)", { fontSize: 9.5, font: fontOblique, color: colorDarkGrey });
  y -= 12;
  
  drawText("Backend & Security:", { fontSize: 8.5, font: fontBold, color: colorBlack });
  drawText("Django 5.0, Flask, Django REST Framework (DRF), REST API Design, JWT, OAuth2, RBAC, CSRF", { x: marginX + 115, fontSize: 8.5, color: colorDarkGrey });
  y -= 12;

  drawText("Frontend & PWA:", { fontSize: 8.5, font: fontBold, color: colorBlack });
  drawText("React 19, Vite 6, Tailwind CSS, Bootstrap 5, PWA Workbox, Responsive Design", { x: marginX + 115, fontSize: 8.5, color: colorDarkGrey });
  y -= 12;

  drawText("AI & DevOps Tools:", { fontSize: 8.5, font: fontBold, color: colorBlack });
  drawText("scikit-learn, Generative AI, Git, GitHub, Docker, Postman, Pytest TDD, Render, Netlify, GitHub Actions", { x: marginX + 115, fontSize: 8.5, color: colorDarkGrey });
  y -= 8;
  
  // --- WORK & FREELANCE EXPERIENCE ---
  drawSectionHeader("Experience");
  
  // Experience 1: Freelance
  drawText("Freelance Full Stack Developer", { fontSize: 9.5, font: fontBold });
  drawText("June 2026 – Present", { fontSize: 8.5, font: fontBold, align: 'right' });
  y -= 11;
  drawText("Royal Enterprises (Client Project)", { fontSize: 8.5, font: fontOblique, color: colorDarkGrey });
  y -= 11;
  drawBullet("Delivered enterprise-grade inventory & sales portal for battery, inverter, solar, and lighting retail client; live at royalenterprise.netlify.app");
  drawBullet("Built real-time stock tracking with threshold alerts, audit-logged stock in/out, and WhatsApp digital receipts for customer purchases & warranties.");
  drawBullet("Engineered BatteryHub AI Sales Analyst chatbot (English & Hinglish) for sales, best-seller, dead-stock, and reorder insights.");
  drawBullet("Implemented Instagram-style installable PWA with offline support, plus JWT token rotation, RBAC (Admin/Staff), and brute-force lockout security.");
  y -= 4;

  // Experience 2: Internship
  drawText("Full Stack Developer Intern", { fontSize: 9.5, font: fontBold });
  drawText("January 2026 – May 2026", { fontSize: 8.5, font: fontBold, align: 'right' });
  y -= 11;
  drawText("Innoovatum (Remote)", { fontSize: 8.5, font: fontOblique, color: colorDarkGrey });
  y -= 11;
  drawBullet("Built and deployed 8 production-grade web applications using Django and Flask; served 2,000+ combined monthly active users with 99.5% uptime across 3+ live deployments.");
  drawBullet("Developed secure REST APIs with DRF using JWT authentication, OAuth2, and RBAC across 5 user roles (Admin, Librarian, Member, Customer, Staff).");
  drawBullet("Optimized PostgreSQL queries via Django ORM indexing and raw SQL refactoring — reduced API latency from 800ms to 200ms (75%) and search time from 2.5s to 0.3s (88%).");
  drawBullet("Practiced TDD with Pytest, validated APIs via Postman, and maintained CI/CD pipelines using GitHub Actions with feature-branch Git workflow and peer code reviews.");
  y -= 4;
  
  // --- PROJECTS ---
  drawSectionHeader("Featured Production Projects");
  
  // Project 1 - HisabPoint
  drawText("HisabPoint — Digital Bahi Khata & Cloud Ledger", { fontSize: 10, font: fontBold });
  drawText("React 19, TypeScript, Django REST, PostgreSQL, Vite", { fontSize: 8.5, font: fontOblique, color: colorDarkGrey, align: 'right' });
  y -= 12;
  drawBullet("Architected ACID-compliant cloud ledger for retail merchants using DRF & PostgreSQL atomic transactions. Optimized checkout query latency to <200ms via composite indexing. Dual-enforced 2FA fraud lockout security.");
  y -= 2;

  // Project 2 - Library Management System
  drawText("Library Management System", { fontSize: 10, font: fontBold });
  drawText("Django, SQLite, Bootstrap 5, Render", { fontSize: 8.5, font: fontOblique, color: colorDarkGrey, align: 'right' });
  y -= 12;
  drawBullet("Replaced manual spreadsheet workflows, supporting 50+ concurrent users with multi-role RBAC. Built full CRUD operations and full-text search, reducing search latency to 0.3s. Deployed live on Render.");
  y -= 2;
  
  // Project 3 - Restaurant Ordering System
  drawText("Restaurant Ordering & Backend System", { fontSize: 10, font: fontBold });
  drawText("Django, PostgreSQL, React JS, REST API", { fontSize: 8.5, font: fontOblique, color: colorDarkGrey, align: 'right' });
  y -= 12;
  drawBullet("E-commerce application with menu catalogs, inventory tracking, secure order placement, and integration of payment routing. Supports 3 custom user roles and handles up to 500+ concurrent order pipelines.");

  
  // --- CERTIFICATIONS ---
  drawSectionHeader("Certifications");
  
  drawBullet("Generative AI for Everyone – Coursera, 2025 (AI fundamentals, prompt engineering, AI integration)");
  drawBullet("Microsoft Copilot for Security – Microsoft, 2025 (AI-powered security, threat detection)");
  drawBullet("Data Analyst 101 – Certificate Code: 8615099 (SQL, Python, data analysis, visualization)");
  
  // Save PDF
  const pdfBytes = await pdfDoc.save();
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const outputPath = path.join(publicDir, 'mouiezuddin_resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Resume PDF generated successfully at: ${outputPath}`);
}

createResume().catch(err => {
  console.error("Error generating resume PDF:", err);
  process.exit(1);
});
