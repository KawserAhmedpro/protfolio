# Kawser Ahmed Ratul — Personal Digital Portfolio

A bespoke, interactive digital workspace and portfolio for **Kawser Ahmed Ratul (Ratul)**, Computer Science and Engineering undergraduate at **Mymensingh Engineering College (MEC)**, Bangladesh.

Inspired by high-density digital spaces, modern minimalism, and interactive personal archives, featuring a distinctive original visual identity, custom dark aesthetic, responsive telemetry HUD, and real interactive systems.

---

## ⚡ Key Highlights & Systems

- **Atmospheric Entrance & Telemetry HUD**:
  - Live local date & time in Dhaka, Bangladesh (`Asia/Dhaka`, UTC+6) ticking in real time.
  - Geographic coordinates: `24.7471° N, 90.4203° E // MYMENSINGH, BANGLADESH`.
  - Self-contained Web Audio API synthesizer for tactile clicks, micro-ticks, terminal chimes, with instant toggle and memory.
  - Custom precision cursor with magnetic tracking and action states.
- **Interactive Architecture Core**:
  - Visual model showing the flow of Ratul's engineering universe:
    `[HTTP Client] ➔ [ASP.NET Core Web API] ➔ [EF Core & LINQ] ➔ [PostgreSQL] ➔ [AI & Research Lab]`.
  - Clickable nodes with technical context and deep-dive links.
- **Integrated ASP.NET Core API Simulator & Workbench**:
  - Test simulated endpoints (`GET /api/v1/health`, `GET /api/v1/projects/summary`, `GET /api/v1/research/papers?tag=ml`, `POST /api/v1/contact/dispatch`).
  - View real simulated JSON responses, measured latency (8ms–24ms), HTTP status codes, and actual C# controller source code.
- **Interactive In-Browser CLI Terminal (`T` or `~`)**:
  - Functional terminal running commands: `help`, `whoami`, `projects`, `skills`, `curl <endpoint>`, `research`, `status`, `contact`, `clear`.
- **Global Command Palette (`⌘K` / `Ctrl+K`)**:
  - Instant fuzzy search across sections, projects, quick email copy, sound toggle, and CV inspection.
- **Interactive Project Case Studies**:
  - **Dining Management System**: Full-stack web app with Firebase Authentication, daily ON/OFF/DOUBLE meal tracking, market grocery ledger, dynamic meal rate formula, and public information portal. Includes an interactive live meal-rate calculator on the card.
    - [Live Web App](https://kawserahmedpro.github.io/meal_management_system/login)
    - [LinkedIn Showcase Post](https://www.linkedin.com/posts/kawserahmedratulpro_introducing-my-project-dining-management-activity-7530198268576862208-j5w6)
  - **ResearchMate**: Academic literature management and paper workspace with split-view PDF reader preview.
    - [Live Web App](https://kawserahmedpro.github.io/ReasearchMate/)
  - **ASP.NET Core Web API Practice**: Layered architecture, EF Core migrations, PostgreSQL integration, and JWT auth.
- **Academic & Engineering Journey Chronicle**:
  - Chronological milestones from MEC CSE admission to systems engineering and machine learning exploration.
- **Curiosity & Research Archive**:
  - Digital lab notebook dissecting Transformer self-attention, RAG vector spaces, and database storage engines (B-Trees vs. LSM).
- **Curriculum Vitae / Resume Modal**:
  - Instant in-browser view, one-click print/PDF, and markdown copy.
- **Centralized Configuration**:
  - All personal info, projects, skills, and links are configured in `src/data/portfolioData.ts`.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS + Custom Architectural CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React + Bespoke SVGs
- **Audio**: Web Audio API (zero external asset requests)
- **Bundler**: Vite 6

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📝 Updating Personal Information

To update your bio, social links, projects, skills, or research notes, simply edit:
```
src/data/portfolioData.ts
```
All components automatically consume from this centralized configuration file.

---

Architected with passion for **Kawser Ahmed Ratul**.
