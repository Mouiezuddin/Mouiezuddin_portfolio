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
  
  // Design colors: professional slate & subtle gold/blue accent
  const colorAccent = rgb(30/255, 64/255, 175/255); // #1e40af
  const colorBlack = rgb(15/255, 23/255, 42/255);  // #0f172a
  const colorDarkGrey = rgb(51/255, 65/255, 85/255); // #334155
  const colorMuted = rgb(100/255, 116/255, 139/255); // #64748b
  const colorRule = rgb(203/255, 213/255, 225/255); // #cbd5e1
  
  let y = height - 36; // Start near top
  const marginX = 36;
  const contentWidth = width - (marginX * 2);
  
  function drawText(text, options = {}) {
    const {
      x = marginX,
      fontSize = 8.5,
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
    y -= 10;
    drawText(title.toUpperCase(), { fontSize: 9.5, font: fontBold, color: colorAccent });
    y -= 3;
    page.drawLine({
      start: { x: marginX, y: y },
      end: { x: width - marginX, y: y },
      thickness: 0.75,
      color: colorRule
    });
    y -= 8;
  }
  
  function drawBullet(text, indent = 10) {
    page.drawCircle({
      x: marginX + indent - 4,
      y: y + 2.5,
      size: 1.5,
      color: colorAccent
    });
    
    const words = text.split(' ');
    let line = '';
    const bulletContentWidth = contentWidth - indent;
    
    for (let i = 0; i < words.length; i++) {
      const testLine = line + (line === '' ? '' : ' ') + words[i];
      const testWidth = fontRegular.widthOfTextAtSize(testLine, 8);
      if (testWidth > bulletContentWidth && i > 0) {
        drawText(line, { x: marginX + indent, fontSize: 8, color: colorDarkGrey });
        y -= 9.5;
        line = words[i];
      } else {
        line = testLine;
      }
    }
    drawText(line, { x: marginX + indent, fontSize: 8, color: colorDarkGrey });
    y -= 9.5;
  }

  // --- HEADER SECTION ---
  drawText("MOUIEZUDDIN KILLEDAR", { fontSize: 18, font: fontBold, color: colorBlack, align: 'center' });
  y -= 12;
  
  drawText("Junior Full-Stack Python Developer  |  Python · Django · DRF · React.js · PostgreSQL", { fontSize: 9, font: fontBold, color: colorAccent, align: 'center' });
  y -= 10;
  
  const contactLine1 = "Bijapur, Karnataka, India  |  +91 8867555660  |  killedarmouiezuddin@gmail.com";
  drawText(contactLine1, { fontSize: 8, color: colorDarkGrey, align: 'center' });
  y -= 9;
  
  const contactLine2 = "Portfolio: mouiezuddin.runs-on.dev  |  GitHub: github.com/Mouiezuddin  |  LinkedIn: linkedin.com/in/mouiezuddin-killedar";
  drawText(contactLine2, { fontSize: 8, color: colorDarkGrey, align: 'center' });
  y -= 4;
  
  // --- CAREER OBJECTIVE ---
  drawSectionHeader("Professional Summary");
  const summaryText = 
    "Junior Full-Stack Python Developer with hands-on internship and commercial project experience engineering database-backed web applications, scalable REST APIs, and responsive React.js interfaces. Proficient in Python, Django, Django REST Framework, Flask, React.js, PostgreSQL, and MySQL. Passionate about database integrity, clean RESTful architecture, and building practical tools that solve real business problems.";
  
  const summaryWords = summaryText.split(' ');
  let curLine = '';
  for (let i = 0; i < summaryWords.length; i++) {
    const testLine = curLine + (curLine === '' ? '' : ' ') + summaryWords[i];
    const testWidth = fontRegular.widthOfTextAtSize(testLine, 8);
    if (testWidth > contentWidth && i > 0) {
      drawText(curLine, { fontSize: 8, color: colorDarkGrey });
      y -= 9.5;
      curLine = summaryWords[i];
    } else {
      curLine = testLine;
    }
  }
  drawText(curLine, { fontSize: 8, color: colorDarkGrey });
  y -= 4;
  
  // --- TECHNICAL SKILLS ---
  drawSectionHeader("Technical Skills");
  
  const skillsData = [
    { label: "Languages:", list: "Python, JavaScript (ES6+), HTML, CSS, SQL" },
    { label: "Backend:", list: "Django, Django REST Framework (DRF), Flask" },
    { label: "Frontend:", list: "React.js, Bootstrap, Modern Responsive Design" },
    { label: "Databases:", list: "PostgreSQL, MySQL, SQLite" },
    { label: "Tools:", list: "Git, GitHub, Postman, Vite" },
    { label: "Concepts:", list: "REST APIs, Authentication, Authorization (RBAC), CRUD Lifecycle, Relational Schema Design" }
  ];

  skillsData.forEach(s => {
    drawText(s.label, { fontSize: 8, font: fontBold, color: colorBlack });
    drawText(s.list, { x: marginX + 80, fontSize: 8, color: colorDarkGrey });
    y -= 10;
  });
  y -= 2;

  // --- WORK EXPERIENCE ---
  drawSectionHeader("Experience");
  
  // Role 1: Innoovatum
  drawText("Full Stack Developer Intern", { fontSize: 8.5, font: fontBold });
  drawText("Feb 2024 – Apr 2024", { fontSize: 8, font: fontBold, align: 'right' });
  y -= 9.5;
  drawText("Innoovatum Engineering & Technology LLP  |  Vijayapura / Remote", { fontSize: 8, font: fontOblique, color: colorMuted });
  y -= 9.5;
  drawBullet("Built and tested backend RESTful APIs using Django REST Framework with secure token authentication and role-based permissions.");
  drawBullet("Optimized PostgreSQL queries via Django ORM select_related() and composite indexes, slashing query latency on high-frequency routes.");
  drawBullet("Developed responsive frontend views with React.js, connecting them with backend services via asynchronous HTTP client requests.");
  drawBullet("Practiced automated API testing in Postman and wrote unit test routines using Pytest to maintain data contract stability.");
  y -= 3;

  // Role 2: Royal Enterprises
  drawText("Full-Stack Developer (Client Project)", { fontSize: 8.5, font: fontBold });
  drawText("June 2026 – Present", { fontSize: 8, font: fontBold, align: 'right' });
  y -= 9.5;
  drawText("Royal Enterprises (Solar, Inverter & Battery Dealership)  |  Vijayapura, Karnataka", { fontSize: 8, font: fontOblique, color: colorMuted });
  y -= 9.5;
  drawBullet("Architected commercial web platform and stock management portal for regional battery, inverter, and solar equipment dealership; live at royalenterprise.netlify.app.");
  drawBullet("Engineered real-time stock movement tracking for inward distributor shipments and outward counter sales to eliminate manual register discrepancies.");
  drawBullet("Built automated scrap battery core trade-in calculation feature, applying old lead-acid battery exchange credits directly during checkout.");
  drawBullet("Created 1-click WhatsApp invoice generation, allowing sales staff to send instant digital receipts to customer mobile phones.");
  y -= 3;

  // --- PROJECTS ---
  drawSectionHeader("Featured Projects");
  
  // Project 1 - HisabPoint
  drawText("HisabPoint — Digital Customer Ledger & Khata", { fontSize: 8.5, font: fontBold });
  drawText("React.js, Django, DRF, PostgreSQL, Vercel", { fontSize: 7.5, font: fontOblique, color: colorMuted, align: 'right' });
  y -= 9.5;
  drawBullet("Engineered a mobile-first digital accounting ledger for retail merchants. Features customer ledger management, paid and due tracking, and customer transaction records. Enforced Django atomic transaction blocks (@transaction.atomic) to guarantee ACID compliance and eliminate balance drift. Live: hisab-point.vercel.app | Repo: github.com/Mouiezuddin/HisabPoint");
  y -= 2;

  // Project 2 - Library Management System
  drawText("Library Management System", { fontSize: 8.5, font: fontBold });
  drawText("Python, Django, SQLite, Bootstrap, Render", { fontSize: 7.5, font: fontOblique, color: colorMuted, align: 'right' });
  y -= 9.5;
  drawBullet("Multi-role book catalog and issuance portal with role-based access control (Admin, Librarian, Member), book search indexing, and automated overdue penalty calculations. Deployed live on Render: librarymanagementsystem-0cty.onrender.com.");
  y -= 2;

  // Project 3 - Developer's Tale Blog Platform
  drawText("Developer's Tale — Technical Blog Platform", { fontSize: 8.5, font: fontBold });
  drawText("Python, Django, PostgreSQL, Bootstrap, Render", { fontSize: 7.5, font: fontOblique, color: colorMuted, align: 'right' });
  y -= 9.5;
  drawBullet("Engineered technical blogging platform with rich-text publishing, category filtering, user commenting, and relational PostgreSQL database deployed live on Render: developers-tale.onrender.com.");
  y -= 3;

  // --- EDUCATION ---
  drawSectionHeader("Education");
  
  drawText("Bachelor of Computer Applications (BCA)", { fontSize: 8.5, font: fontBold });
  drawText("Coursework Completed (2023 – 2026)", { fontSize: 8, font: fontBold, align: 'right' });
  y -= 9.5;
  drawText("Kumudben Darbar College of BCA, Rani Channamma University, Belagavi  |  Cumulative GPA: 8.5 / 10.0", { fontSize: 8, color: colorDarkGrey });
  y -= 9;
  drawText("Status: Core curriculum completed with 8.5 GPA; completing final degree clearance examination.", { fontSize: 7.5, font: fontOblique, color: colorMuted });
  y -= 9.5;

  drawText("Pre-University Course (PUC), Science (PCMB)", { fontSize: 8, font: fontBold });
  drawText("Darbar Pre-University College, Vijayapura", { fontSize: 7.5, color: colorMuted, align: 'right' });
  y -= 4;

  // --- CERTIFICATIONS ---
  drawSectionHeader("Certifications");
  
  drawBullet("Microsoft Copilot for Security — Microsoft via Coursera (Credential ID: YD42Y93U5L6V)");
  drawBullet("AI-Integrated Python-Django Full-Stack Development — Innoovatum Engineering & Technology LLP");
  drawBullet("Developing Interpersonal Skills — IBM via Coursera (Credential ID: Z3KJALTAMU7H)");
  drawBullet("Data Analyst 101 — Simplilearn SkillUP (Certificate Code: 8615099)");
  
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
