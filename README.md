<h1 align="center">
  <br />
  🚀 Mouiezuddin Killedar — Developer Portfolio
  <br />
</h1>

<p align="center">
  <strong>A 3D interactive storytelling portfolio built with React, Three.js & Vite</strong>
</p>

<p align="center">
  <a href="https://github.com/Mouiezuddin/Mouiezuddin_portfolio">
    <img src="https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge" alt="Version" />
  </a>
  <a href="https://github.com/Mouiezuddin/Mouiezuddin_portfolio">
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
  </a>
  <a href="https://github.com/Mouiezuddin/Mouiezuddin_portfolio">
    <img src="https://img.shields.io/badge/Three.js-r184-black?style=for-the-badge&logo=three.js" alt="Three.js" />
  </a>
  <a href="https://github.com/Mouiezuddin/Mouiezuddin_portfolio">
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  </a>
  <img src="https://img.shields.io/badge/status-live-brightgreen?style=for-the-badge" alt="Status" />
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-sections">Sections</a> •
  <a href="#-contact">Contact</a>
</p>

---

## ✨ Features

- 🌐 **Immersive 3D Background** — Live Three.js WebGL canvas with an orbiting tech-keyword sphere and floating particles that respond to mouse movement
- 📖 **Story-driven Layout** — A chapter-based narrative structure (Prologue → Origin → Craft → Works → Journey → Epilogue) instead of the usual generic sections
- 🎨 **Multi-Theme Switcher** — Switch between curated colour themes (Amber, Cyan, Violet, etc.) with smooth CSS variable transitions
- 🖥️ **Interactive Terminal Console** — An in-browser CLI for quick developer-style interaction in the Contact section
- 📐 **Architecture Diagram** — A clickable interactive diagram showing the full-stack system design with technology nodes
- 🚀 **Scroll-reveal Animations** — Every story block animates in with `IntersectionObserver` as you scroll through the narrative
- 📄 **Auto-generated PDF Résumé** — `pdf-lib` powers a `generate-resume.js` script that builds a downloadable résumé on demand
- 📱 **Fully Responsive** — Mobile-first layouts with fluid grids and flex-based components
- ⚡ **Blazing Fast** — Powered by Vite 8 with tree-shaking and HMR for near-instant dev feedback

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **3D Rendering** | Three.js r184 |
| **Styling** | Vanilla CSS (design tokens via CSS variables) |
| **PDF Generation** | pdf-lib |
| **Deployment** | Vercel |
| **Version Control** | Git & GitHub |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ 
- npm v9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Mouiezuddin/Mouiezuddin_portfolio.git

# 2. Navigate into the project directory
cd Mouiezuddin_portfolio

# 3. Install dependencies
npm install
```

### Development

```bash
# Start the local dev server with HMR
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
# Build the production bundle
npm run build

# Preview the production build locally
npm run preview
```

### Generate Résumé

```bash
# Generates the PDF résumé into the /public directory
node generate-resume.js
```

---

## 📁 Project Structure

```
Mouiezuddin_portfolio/
├── public/                     # Static assets served at root
│   ├── assets/
│   │   └── hero_bg.png         # Hero background image
│   └── mouiezuddin_resume.pdf  # Downloadable résumé
├── src/
│   ├── components/
│   │   ├── ThreeCanvas.jsx     # 3D WebGL background (Three.js)
│   │   ├── TerminalConsole.jsx # Interactive CLI terminal widget
│   │   ├── ContactForm.jsx     # Email contact form
│   │   ├── ArchitectureDiagram.jsx # Clickable system architecture diagram
│   │   ├── Skills.jsx          # Skill tags & categories
│   │   ├── DashboardSandbox.jsx# Interactive dashboard demo
│   │   └── ThemeSwitcher.jsx   # Multi-theme colour system
│   ├── App.jsx                 # Root component — full page layout & chapters
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles & CSS design tokens
├── generate-resume.js          # Node script — PDF résumé generator
├── avatar.jpg                  # Profile photo
├── vite.config.js              # Vite configuration
├── package.json
└── README.md
```

---

## 📚 Sections

| Chapter | ID | Description |
|---|---|---|
| **Prologue** | `#prologue` | Hero section — name, title, tagline, and call-to-action |
| **Chapter 01 — Origin** | `#origin` | About me, stats (8+ apps, 75% latency cut, 2000+ users) |
| **Chapter 02 — The Craft** | `#craft` | Skills breakdown: Backend, Frontend, DevOps + live architecture diagram |
| **Chapter 03 — The Works** | `#works` | 6 real production projects with live links and GitHub repos |
| **Chapter 04 — The Journey** | `#journey` | Work experience (Innoovatum internship), Education (BCA 8.5 GPA), Certifications |
| **Epilogue** | `#connect` | Interactive terminal + contact form |

---

## 🎨 Themes

The theme switcher supports multiple hand-curated palettes. All colours are driven by CSS custom properties, making theme switching instant and smooth:

- 🟠 **Amber** *(default)* — Warm gold & sky blue
- 🔵 **Cyan** — Electric teal & indigo
- 🟣 **Violet** — Purple haze & rose
- *(More themes available via the theme switcher panel)*

---

## 📦 Featured Projects

| # | Project | Stack | Status |
|---|---|---|---|
| 01 | [Library Management System](https://librarymanagementsystem-0cty.onrender.com) | Django 4.2, SQLite, Bootstrap 5 | 🟢 Live |
| 02 | Restaurant & Ordering Platform | Django, PostgreSQL, React, REST API | 🔵 Backend |
| 03 | [Developer's Tale Blog](https://developers-tale.onrender.com) | Django, PostgreSQL, Bootstrap 5 | 🟢 Live |
| 04 | [Calorie Tracker](https://github.com/Mouiezuddin/Calories_Counter) | Django ORM, SQLite, JavaScript | 🛠️ Dev |
| 05 | [SpendWise Expenses](https://github.com/Mouiezuddin/Expense_tracker) | Flask, Blueprints, SQLite | 🛠️ Dev |
| 06 | [MedRemind System](https://github.com/Mouiezuddin/Medicine_remainder) | Flask, REST API, JavaScript | 🛠️ Dev |

---

## 📬 Contact

| Platform | Link |
|---|---|
| **GitHub** | [@Mouiezuddin](https://github.com/Mouiezuddin) |
| **LinkedIn** | [mouiezuddin-killedar](https://linkedin.com/in/mouiezuddin-killedar) |
| **Email** | [killedarmouiezuddin@gmail.com](mailto:killedarmouiezuddin@gmail.com) |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <strong>Mouiezuddin Killedar</strong> · © 2026 · All Systems Operational
</p>
