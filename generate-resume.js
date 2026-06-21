const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  
  // A4 size: 595.27 x 841.89
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
  const colorLightGrey = rgb(226/255, 232/255, 240/255); // #e2e8f0
  
  let y = height - 45; // Start near the top margin
  const marginX = 45;
  const contentWidth = width - (marginX * 2); // 505.28
  
  // Helper functions
  function drawText(text, options = {}) {
    const {
      x = marginX,
      fontSize = 9.5,
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
    y -= 15;
    
    // Draw section title
    drawText(title.toUpperCase(), { fontSize: 11, font: fontBold, color: colorBlack });
    
    // Draw thin line under section title
    y -= 4;
    page.drawLine({
      start: { x: marginX, y: y },
      end: { x: width - marginX, y: y },
      thickness: 1,
      color: colorGold
    });
    y -= 12;
  }
  
  function drawBullet(text, indent = 15) {
    page.drawCircle({
      x: marginX + indent - 6,
      y: y + 3,
      size: 2,
      color: colorGold
    });
    
    // Multi-line wrap helper
    const words = text.split(' ');
    let line = '';
    const bulletContentWidth = contentWidth - indent;
    
    for (let i = 0; i < words.length; i++) {
      const testLine = line + (line === '' ? '' : ' ') + words[i];
      const testWidth = fontRegular.widthOfTextAtSize(testLine, 9);
      if (testWidth > bulletContentWidth && i > 0) {
        drawText(line, { x: marginX + indent, fontSize: 9 });
        y -= 12;
        line = words[i];
      } else {
        line = testLine;
      }
    }
    drawText(line, { x: marginX + indent, fontSize: 9 });
    y -= 12;
  }

  // --- HEADER SECTION ---
  // Name
  drawText("MOUIEZUDDIN KILLEDAR", { fontSize: 22, font: fontBold, color: colorBlack, align: 'center' });
  y -= 16;
  
  // Title
  drawText("Software Engineer // Full Stack Python Developer", { fontSize: 11, font: fontBold, color: colorGold, align: 'center' });
  y -= 16;
  
  // Contact Details
  const contactLine1 = "Email: killedarmouiezuddin@gmail.com  |  Phone: +91 8867555660  |  Location: Bijapur, Karnataka, India";
  drawText(contactLine1, { fontSize: 8.5, color: colorDarkGrey, align: 'center' });
  y -= 12;
  
  const contactLine2 = "GitHub: github.com/Mouiezuddin  |  Portfolio: mouiezuddin.github.io/Portfolio";
  drawText(contactLine2, { fontSize: 8.5, color: colorDarkGrey, align: 'center' });
  y -= 10;
  
  // --- PROFILE SUMMARY ---
  drawSectionHeader("Professional Summary");
  const summaryText = 
    "Full Stack Python Developer with internship experience designing and deploying 8+ production-grade web " +
    "applications. Proven capabilities in architecting scalable backends via Django REST Framework, building rich state-driven " +
    "frontends using React JS, and conducting database optimization reducing API response latency by 75%. " +
    "Experienced in robust role-based access controls, security auditing, and test-driven agile software development cycles.";
  
  // Wrap summary text
  const summaryWords = summaryText.split(' ');
  let currentLine = '';
  for (let i = 0; i < summaryWords.length; i++) {
    const testLine = currentLine + (currentLine === '' ? '' : ' ') + summaryWords[i];
    const testWidth = fontRegular.widthOfTextAtSize(testLine, 9.5);
    if (testWidth > contentWidth && i > 0) {
      drawText(currentLine, { fontSize: 9.5, color: colorDarkGrey });
      y -= 13;
      currentLine = summaryWords[i];
    } else {
      currentLine = testLine;
    }
  }
  drawText(currentLine, { fontSize: 9.5, color: colorDarkGrey });
  y -= 12;
  
  // --- TECHNICAL SKILLS ---
  drawSectionHeader("Technical Competencies");
  
  drawText("Backend Systems:", { fontSize: 9.5, font: fontBold, color: colorBlack });
  drawText("Python, Django, Flask, Django REST Framework (DRF), PostgreSQL, SQLite, JWT Auth, RBAC", { x: marginX + 110, fontSize: 9.5, color: colorDarkGrey });
  y -= 14;
  
  drawText("Frontend & Web:", { fontSize: 9.5, font: fontBold, color: colorBlack });
  drawText("React JS, JavaScript (ES6+), HTML5, CSS3, Bootstrap 5, Responsive Web Design", { x: marginX + 110, fontSize: 9.5, color: colorDarkGrey });
  y -= 14;
  
  drawText("DevOps & Testing:", { fontSize: 9.5, font: fontBold, color: colorBlack });
  drawText("Docker, Git & GitHub, GitHub Actions, Render Cloud, Postman Client, Pytest (TDD)", { x: marginX + 110, fontSize: 9.5, color: colorDarkGrey });
  y -= 14;
  
  // --- WORK EXPERIENCE ---
  drawSectionHeader("Professional Experience");
  
  // Company & Position
  drawText("Full Stack Developer Intern", { fontSize: 10, font: fontBold });
  drawText("02/2024 – 04/2024", { fontSize: 9, font: fontBold, align: 'right' });
  y -= 12;
  drawText("Innoovatum (Remote)", { fontSize: 9.5, font: fontOblique, color: colorDarkGrey });
  y -= 12;
  
  // Bullets
  drawBullet("Designed and deployed 8 production-grade applications serving 2000+ combined monthly active users.");
  drawBullet("Built robust DRF APIs with secure JWT authentication and granular role-based authorization (RBAC) rules.");
  drawBullet("Optimized ORM lookups, indices, and raw SQL queries, decreasing API endpoint response latency by 75% (800ms to 200ms).");
  drawBullet("Configured full-text search indexes on database layers, reducing data retrieval latency down to 0.3 seconds.");
  drawBullet("Collaborated in agile sprint cycles using git branches, code reviews, CI pipelines, and writing pytest test suites.");
  
  // --- PROJECTS ---
  drawSectionHeader("Featured Production Projects");
  
  // Project 1
  drawText("Library Management System", { fontSize: 10, font: fontBold });
  drawText("Django, SQLite, Bootstrap 5, Render", { fontSize: 9, font: fontOblique, color: colorDarkGrey, align: 'right' });
  y -= 12;
  drawBullet("Replaced manual spreadsheet workflows, supporting 50+ concurrent users with multi-role RBAC. Built full CRUD operations and full-text search, reducing search latency to 0.3s. Deployed live on Render.");
  y -= 2;
  
  // Project 2
  drawText("Restaurant Ordering & Backend System", { fontSize: 10, font: fontBold });
  drawText("Django, PostgreSQL, React JS, REST API", { fontSize: 9, font: fontOblique, color: colorDarkGrey, align: 'right' });
  y -= 12;
  drawBullet("E-commerce application with menu catalogs, inventory tracking, secure order placement, and integration of payment routing. Supports 3 custom user roles and handles up to 500+ concurrent order pipelines.");
  y -= 2;
  
  // Project 3
  drawText("Developer's Tale Blog Platform", { fontSize: 10, font: fontBold });
  drawText("Flask, SQLite, Session Security, Blueprints", { fontSize: 9, font: fontOblique, color: colorDarkGrey, align: 'right' });
  y -= 12;
  drawBullet("A personal finance and blogging tracking engine structured with modular blueprints. Implemented session validation security, secure posting CRUD pipelines, and dynamic category analytics.");
  
  // --- EDUCATION & CERTIFICATIONS ---
  drawSectionHeader("Education & Certifications");
  
  // Education
  drawText("Bachelor of Computer Applications (BCA)", { fontSize: 10, font: fontBold });
  drawText("Completed 06/2026", { fontSize: 9.5, font: fontBold, align: 'right' });
  y -= 12;
  drawText("Kumudben Darbar College, Rani Channamma University, Belagavi  |  GPA: 8.5 / 10.0", { fontSize: 9.5, color: colorDarkGrey });
  y -= 16;
  
  // Certifications
  drawText("Professional Certifications:", { fontSize: 9.5, font: fontBold });
  y -= 12;
  
  page.drawCircle({ x: marginX + 10, y: y + 3, size: 1.5, color: colorGold });
  drawText("Generative AI for Everyone (Coursera, 2025)", { x: marginX + 20, fontSize: 9, color: colorDarkGrey });
  drawText("Microsoft Copilot for Security (Microsoft, 2025)", { x: marginX + 260, fontSize: 9, color: colorDarkGrey });
  y -= 12;
  
  page.drawCircle({ x: marginX + 10, y: y + 3, size: 1.5, color: colorGold });
  drawText("Data Analyst 101 Certificate (Verification Code: 8615099)", { x: marginX + 20, fontSize: 9, color: colorDarkGrey });
  
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
