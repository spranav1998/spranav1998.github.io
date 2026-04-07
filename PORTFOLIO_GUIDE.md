# Portfolio Website Build Guide — Pranav Sankar

> **Goal:** Build and deploy a modern, AI-themed static portfolio website on GitHub Pages at `spranav1998.github.io`

---

## 1. Overview & Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| **Markup** | HTML5 | No build step, instant GitHub Pages deployment |
| **Styling** | Tailwind CSS (CDN) | Utility-first, fast to iterate, modern look |
| **Interactions** | Vanilla JS | Typing effects, particle background, scroll animations |
| **Icons** | Lucide Icons (CDN) | Clean, consistent SVG icon set |
| **Fonts** | Inter + JetBrains Mono (Google Fonts) | Clean sans-serif + monospace for code/AI vibe |
| **Hosting** | GitHub Pages | Free, custom domain support, HTTPS |
| **Contact Form** | Formspree or Web3Forms | Free tier, no backend needed |

---

## 2. Design Direction

### Theme: **"AI Engineer — Dark & Intelligent"**

- **Primary Background:** `#0a0a0f` (near-black with a hint of blue)
- **Secondary Background:** `#111827` (dark charcoal for cards)
- **Accent Color:** `#3b82f6` → `#60a5fa` (electric blue gradient — signals AI/tech)
- **Secondary Accent:** `#8b5cf6` (purple, for hover states and highlights)
- **Text Primary:** `#f1f5f9` (off-white)
- **Text Secondary:** `#94a3b8` (muted slate)
- **Card Borders:** `rgba(59, 130, 246, 0.15)` (subtle blue glow)

### Visual Effects (AI-themed)
- **Particle/neural-network background** in the hero section (using particles.js or tsParticles)
- **Typing effect** for rotating titles in the hero ("AI/ML Engineer", "LLM Builder", "Cloud Architect")
- **Scroll-triggered fade-in animations** for sections
- **Glowing card borders** on hover (blue glow effect)
- **Code-style monospace** accents for skill tags
- **Gradient text** for headings

---

## 3. Site Structure & Sections

### File Structure
```
spranav1998.github.io/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css          # Custom styles beyond Tailwind
│   ├── js/
│   │   ├── main.js             # Scroll animations, typing effect, nav
│   │   └── particles-config.js # Particle background config
│   ├── img/
│   │   ├── pranav-photo.jpg    # Circular cropped headshot
│   │   ├── og-image.png        # Social sharing preview (1200×630)
│   │   └── projects/           # Project screenshots/thumbnails
│   │       ├── cloudnotes.png
│   │       ├── candidatehub.png
│   │       ├── compelion.png
│   │       ├── quizentia.png
│   │       ├── agents.png
│   │       ├── nova.png
│   │       └── spark.png
│   └── files/
│       └── Pranav_Sankar_Resume.pdf  # Downloadable resume
├── blog.html                   # Blog listing page (Phase 2)
├── CNAME                       # If using custom domain (optional)
└── README.md
```

---

### Section-by-Section Blueprint

### 3.1 Navigation Bar (Sticky)
- **Left:** Name/Logo — "PS" monogram or "Pranav Sankar" in JetBrains Mono
- **Right:** Links → About | Experience | Projects | Skills | Blog | Contact
- **Behavior:** Transparent on top, solid dark on scroll. Mobile hamburger menu.
- **CTA Button:** "Download Resume" (small pill button, accent color)

---

### 3.2 Hero Section
**Layout:** Full viewport height, centered content, particle background

```
[Circular photo — ~150px, subtle blue ring border]

Hi, I'm Pranav Sankar

[Typing animation cycling through:]
  → AI/ML Engineer
  → LLM & RAG Systems Builder
  → Cloud Infrastructure Architect
  → 0→1 Product Builder

[One-liner tagline:]
"Building end-to-end AI systems — from prototype to production."

[Two buttons:]
  [ View My Work ↓ ]  (outline)    [ Get In Touch → ]  (filled accent)
```

**Photo treatment:** Crop the passport photo into a circle. Remove the teal background (CSS `object-fit: cover` + `border-radius: 50%` + a 3px accent-colored ring). Alternatively, use CSS clip-path.

---

### 3.3 About Me
**Layout:** Two columns — text left, stats/highlights right

**Left column (narrative):**
> AI/ML Engineer with 3.5+ years of experience building end-to-end AI systems — from LLM pipelines and RAG architectures to scalable cloud deployments. I've taken multiple AI products from 0→1, owned full-stack delivery, and served as the technical bridge between business needs and production systems.
>
> Currently at Codersarts, I design AI-powered platforms, mentor engineering teams, and work directly with 20+ clients to turn ideas into deployed products.
>
> My background is unique — an M.Tech in Digital Manufacturing from SASTRA University pivoted into AI/ML, combining engineering rigor with cutting-edge AI. I thrive at the intersection of research and production.

**Right column (stat cards — 2×2 grid):**
| Metric | Value |
|--------|-------|
| Years Experience | 3.5+ |
| AI Products Shipped | 7+ |
| Clients Served | 20+ |
| pSEO Pages Generated | 1000+ |

---

### 3.4 Skills / Tech Stack
**Layout:** Grouped categories with pill-shaped tags, subtle hover glow

**Categories & Items:**

| Category | Skills |
|----------|--------|
| **Languages & Frameworks** | Python, Django, FastAPI, REST APIs |
| **AI / ML** | LLMs, LangChain, Machine Learning, NLP, TensorFlow, PyTorch, Computer Vision |
| **RAG & Vector DBs** | FAISS, Weaviate, Qdrant, Embeddings, Semantic Search |
| **Cloud & Infra** | AWS (ECS, EC2, S3, ALB, CloudFront), Docker, Microservices |
| **Data** | PostgreSQL, SQL, Data Pipelines |
| **Product & Delivery** | Product Ownership, Client Delivery, Mentoring, pSEO |

**Visual treatment:** Each skill is a pill/chip with monospace font. On hover, the pill glows with the accent color. Group headers are in gradient text.

---

### 3.5 Work Experience
**Layout:** Vertical timeline with glowing dots and connecting line

#### Position 1:
```
🔵 Machine Learning Engineer | Codersarts
   Apr 2023 – Present | Full-time

   • Designed and deployed multiple AI systems using LLMs, RAG pipelines, 
     and vector databases (FAISS, Weaviate)
   • Built CloudNotes.ai end-to-end — audio → structured reports — 
     including backend, LLM workflows, and AWS deployment
   • Architected scalable systems on AWS (ECS, EC2, ALB, CloudFront) 
     supporting concurrent users and dynamic scaling
   • Primary technical contact for 20+ clients — requirement gathering, 
     demos, and delivery
   • Built agentic automation systems and chatbot platforms
   • Implemented pSEO engine generating 1000+ pages with AI content
   • Mentored junior engineers; led product discussions bridging 
     business and technical execution
```

#### Position 2:
```
🔵 Machine Learning Engineer Intern | Codersarts
   Oct 2022 – Mar 2023

   • Developed ML and CV models using TensorFlow and PyTorch
   • Built NLP pipelines — sentiment analysis and classification
   • Contributed to research prototypes in vision and deep learning
```

**Visual:** Left-aligned timeline with a vertical blue line. Each role gets a glowing dot. Dates on the left side, details on the right. Expand/collapse for mobile.

---

### 3.6 Projects Showcase
**Layout:** Responsive grid of project cards (3 columns desktop, 1 mobile)

Each card:
```
┌──────────────────────────────────┐
│  [Screenshot/Thumbnail]          │
│                                  │
│  Project Name                    │
│  One-line description            │
│                                  │
│  [Tag] [Tag] [Tag]              │
│                                  │
│  [ Live Demo ↗ ]  [ Details → ] │
└──────────────────────────────────┘
```

#### Project Data:

| # | Project | Description | Tags | URL |
|---|---------|-------------|------|-----|
| 1 | **CloudNotes.ai** | AI meeting intelligence — converts audio into structured reports using LLM pipelines | LLM, RAG, AWS, FastAPI | cloudnotes.ai |
| 2 | **Candidate Hub** | Semantic resume-JD matching with embeddings and AI-based scoring | Embeddings, NLP, Vector DB | candidate.codersarts.dev |
| 3 | **Agents (CaaS)** | Chatbot-as-a-Service platform with agentic workflows for business automation | LangChain, Agents, Chatbot | agents.codersarts.dev |
| 4 | **Compelion** | Enterprise innovation platform — built backend and AI workflows | Django, LLM, Enterprise | compelion.com |
| 5 | **Nova** | AI-powered component of the Compelion ecosystem | AI, Cloud, Microservices | nova.compelion.com |
| 6 | **Spark** | Part of Compelion suite — AI-driven insights | AI, Analytics | spark.compelion.com |
| 7 | **Quizentia** | AI quiz generation platform — product owner and deployment lead | AI, Product, AWS | quizentia.com |

**Interaction:** Cards have a subtle lift + blue glow on hover. Clicking "Details" could open a modal or scroll to an expanded section with more info.

> **Action needed:** Capture screenshots of each live project (1280×720 or 16:9 ratio) for card thumbnails.

---

### 3.7 Education & Certifications
**Layout:** Two sub-sections stacked

#### Education (card layout):
```
┌─────────────────────────────────────────────────┐
│  🎓 M.Tech — Digital Manufacturing              │
│     SASTRA University, Thanjavur                 │
│     Oct 2020 – Aug 2022 | CGPA: 8.76            │
│                                                  │
│     Major: Multi-modal Human-Robot Collaboration │
│            using Vision, Speech & Wearable Sensor│
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  🎓 B.Tech — Mechanical Engineering             │
│     SRM Institute of Science and Technology      │
│     Jun 2015 – May 2019 | CGPA: 6.96            │
│                                                  │
│     Project: 3D Printing of Sensors on Paper     │
└─────────────────────────────────────────────────┘
```

#### Certifications (horizontal scrollable pills or compact list):
- MLOps Specialization (GCP) — Coursera, DeepLearning.AI
- IBM Full Stack Software Developer — Coursera
- Cloud Application Development Foundation — Coursera
- Containers with Docker, Kubernetes & OpenShift — Coursera
- Application Dev with SQL, Databases & Django — Coursera
- Microservices and Serverless App Development — Coursera
- Cloud Apps with Node.js and React — Coursera

---

### 3.8 Blog / Articles
**Layout:** Grid of 2-3 featured post cards + "View All" link

```
┌────────────────────────────┐
│  [Optional cover image]    │
│  Blog Post Title           │
│  Brief excerpt (2 lines)   │
│  📅 Date   ⏱ 5 min read    │
│  [ Read on Medium ↗ ]      │
└────────────────────────────┘
```

**Implementation plan:**
- Phase 1: Show 2-3 manually curated featured posts as cards (linking to Medium/Dev.to)
- Phase 2 (optional): Create a `blog.html` with a listing page, linking to external articles
- Content ideas for first posts:
  1. "Building RAG Pipelines at Scale: Lessons from Production"
  2. "From Mechanical Engineering to AI/ML — My Career Pivot"
  3. "How I Built CloudNotes.ai End-to-End"

> **Action needed:** Write and publish 2-3 blog posts on Medium or Dev.to, then link them here.

---

### 3.9 Contact Section
**Layout:** Split — form on left, info on right

**Contact Form (via Formspree/Web3Forms):**
- Fields: Name, Email, Reason for Contact (dropdown: Hiring, Freelance Project, Collaboration, Other), Message
- Submit button with loading state
- Success/error toast notification

**Right side:**
- Email display (obfuscated in HTML to avoid spam, revealed via JS)
- LinkedIn icon + link
- GitHub icon + link → github.com/spranav1998
- Location: India 🇮🇳
- Status badge: "Open to opportunities" (green dot)

> **Action needed:** Create a Formspree or Web3Forms account and get the form endpoint URL. Set up email where you want to receive messages.

---

### 3.10 Footer
- "Built with ☕ and Python by Pranav Sankar"
- Social links row (GitHub, LinkedIn, Email)
- "© 2026 Pranav Sankar. All rights reserved."
- Small "Back to top ↑" arrow

---

## 4. Interactive Features & Animations

| Feature | Implementation | Library |
|---------|---------------|---------|
| Neural-network particle background | Canvas animation in hero | tsParticles (CDN) — use "links" preset for connected dots |
| Typing effect | Cycle through titles in hero | Typed.js (CDN) or custom JS |
| Scroll fade-in | Elements animate in as user scrolls | Intersection Observer API (no library needed) |
| Smooth scrolling | Anchor links scroll smoothly | CSS `scroll-behavior: smooth` |
| Glowing card hover | Blue box-shadow on hover | CSS transitions |
| Active nav highlight | Highlight current section in nav | Intersection Observer |
| Dark/light toggle | Optional — add if desired | CSS variables + JS toggle |
| Counter animation | Stats count up when in viewport | Custom JS with requestAnimationFrame |

---

## 5. SEO & Meta Tags

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pranav Sankar — AI/ML Engineer | Portfolio</title>
  <meta name="description" content="AI/ML Engineer with 3.5+ years building LLM systems, RAG pipelines, and cloud-native AI products. View my work and get in touch.">
  <meta name="keywords" content="AI Engineer, ML Engineer, LLM, RAG, Python, AWS, Portfolio">
  <meta name="author" content="Pranav Sankar">

  <!-- Open Graph -->
  <meta property="og:title" content="Pranav Sankar — AI/ML Engineer">
  <meta property="og:description" content="Building end-to-end AI systems — from prototype to production.">
  <meta property="og:image" content="https://spranav1998.github.io/assets/img/og-image.png">
  <meta property="og:url" content="https://spranav1998.github.io">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Pranav Sankar — AI/ML Engineer">
  <meta name="twitter:description" content="Building end-to-end AI systems — from prototype to production.">
  <meta name="twitter:image" content="https://spranav1998.github.io/assets/img/og-image.png">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="assets/img/favicon.png">
</head>
```

---

## 6. Performance Checklist

- [ ] All images optimized (WebP format, compressed)
- [ ] Photo cropped and resized — max 400×400 for the avatar
- [ ] Lazy load images below the fold (`loading="lazy"`)
- [ ] Tailwind CSS via CDN (no build step)
- [ ] Minimal JS — defer/async all scripts
- [ ] Use system font stack as fallback
- [ ] Test Lighthouse score — target 90+ on all metrics

---

## 7. Deployment Steps

### Initial Setup
```bash
# 1. Create the repository
#    Go to github.com/new → name it: spranav1998.github.io
#    Set visibility: Public
#    Don't initialize with README (we'll push our own)

# 2. Clone and set up locally
git clone https://github.com/spranav1998/spranav1998.github.io.git
cd spranav1998.github.io

# 3. Build the site (we'll create all files in the workspace)
# Copy all built files into this directory

# 4. Push to GitHub
git add .
git commit -m "Initial portfolio site"
git push origin main

# 5. GitHub Pages will auto-deploy from the main branch
#    Site live at: https://spranav1998.github.io
```

### GitHub Pages Settings
1. Go to Repo → Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main` / `/ (root)`
4. Save — site will be live in ~1 minute

---

## 8. Content Action Items (Before Building)

| # | Task | Status |
|---|------|--------|
| 1 | Prepare a **professional photo** (or we'll CSS-crop the existing one) | ✅ Have photo |
| 2 | Capture **screenshots** of all 7 live projects (16:9 ratio) | ⬜ Needed |
| 3 | Write a **downloadable PDF resume** | ⬜ Needed |
| 4 | Write **2-3 blog posts** on Medium/Dev.to | ⬜ Needed |
| 5 | Create **Formspree/Web3Forms** account for contact form | ⬜ Needed |
| 6 | Prepare an **OG image** (1200×630) for social sharing | ⬜ Will generate |
| 7 | Provide **LinkedIn profile URL** | ⬜ Needed |
| 8 | Provide **email** for contact section | ⬜ Needed |

---

## 9. Build Order (Phased)

### Phase 1 — Core (MVP to deploy)
1. ✅ Set up HTML skeleton with Tailwind CDN
2. ✅ Navigation bar (responsive)
3. ✅ Hero section with typing effect + particle background
4. ✅ About Me section
5. ✅ Skills grid
6. ✅ Experience timeline
7. ✅ Projects grid (placeholder screenshots OK)
8. ✅ Footer
9. ✅ Deploy to GitHub Pages

### Phase 2 — Polish
10. Education & Certifications section
11. Contact form (integrate Formspree)
12. Resume download button
13. Scroll animations
14. Counter animations for stats
15. SEO meta tags + OG image
16. Mobile responsiveness testing

### Phase 3 — Content
17. Add real project screenshots
18. Blog section with linked articles
19. Lighthouse optimization pass
20. Custom domain (optional)

---

## 10. Reference Inspiration

Look at these portfolios for inspiration (search for live examples):
- **brittanychiang.com** — Clean developer portfolio with dark theme
- **mattfarley.ca** — Minimal with strong typography
- **jacekjeznach.com** — Dark theme with animations
- **leerob.io** — Minimal tech portfolio

---

*This guide is the single source of truth for building the portfolio. Refer back to it during each phase of development.*
