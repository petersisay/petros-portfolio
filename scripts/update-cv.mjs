import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const profileJpg = path.resolve(__dirname, '../public/profile.jpg');
const profileBase64 = fs.readFileSync(profileJpg).toString('base64');
const dataUri = `data:image/jpeg;base64,${profileBase64}`;

const cvHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Petros Sisay Gelan — CV & Resume</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    @page {
      size: A4 portrait;
      margin: 0;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #0b1120;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
      padding: 1.5rem 1rem;
      color: #1e293b;
      -webkit-font-smoothing: antialiased;
    }

    .cv-wrapper {
      display: flex;
      width: 794px;
      height: 1122px;
      max-height: 1122px;
      background: #ffffff;
      box-shadow: 0 20px 50px rgba(0,0,0,0.35);
      position: relative;
      overflow: hidden;
      page-break-after: avoid;
      page-break-inside: avoid;
    }

    /* ── LEFT SIDEBAR ── */
    .sidebar {
      width: 250px;
      height: 100%;
      background: linear-gradient(180deg, #090d16 0%, #0f172a 100%);
      color: #f8fafc;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.25rem 1.15rem;
      flex-shrink: 0;
      border-right: 1px solid rgba(255,255,255,0.06);
    }

    .photo-wrap {
      width: 86px;
      height: 86px;
      border-radius: 50%;
      border: 3px solid #3b82f6;
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
      overflow: hidden;
      margin-bottom: 0.55rem;
      background: #1e293b;
      flex-shrink: 0;
    }

    .photo-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      display: block;
    }

    .sidebar-name {
      font-size: 1.15rem;
      font-weight: 800;
      color: #ffffff;
      text-align: center;
      margin-bottom: 0.12rem;
      letter-spacing: -0.02em;
      line-height: 1.2;
    }

    .sidebar-title {
      font-size: 0.67rem;
      color: #60a5fa;
      font-weight: 600;
      text-align: center;
      margin-bottom: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .sidebar-section {
      width: 100%;
      margin-bottom: 0.75rem;
    }

    .sidebar-section:last-child {
      margin-bottom: 0;
    }

    .sidebar-section-title {
      font-size: 0.66rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #ffffff;
      border-bottom: 1.5px solid #3b82f6;
      padding-bottom: 0.18rem;
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.68rem;
      color: #94a3b8;
      margin-bottom: 0.28rem;
      line-height: 1.25;
    }

    .contact-item .icon {
      font-size: 0.7rem;
      color: #60a5fa;
      flex-shrink: 0;
      width: 13px;
      text-align: center;
    }

    .contact-item a {
      color: #cbd5e1;
      text-decoration: none;
      word-break: break-all;
    }

    .skill-group-title {
      font-size: 0.62rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #60a5fa;
      font-weight: 700;
      margin-top: 0.25rem;
      margin-bottom: 0.15rem;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.2rem;
      margin-bottom: 0.2rem;
    }

    .skill-badge {
      font-size: 0.62rem;
      background: rgba(59, 130, 246, 0.12);
      color: #e2e8f0;
      padding: 0.1rem 0.35rem;
      border-radius: 4px;
      border: 1px solid rgba(59, 130, 246, 0.25);
      font-weight: 500;
      line-height: 1.2;
    }

    .lang-item {
      display: flex;
      justify-content: space-between;
      font-size: 0.68rem;
      color: #cbd5e1;
      margin-bottom: 0.18rem;
      padding-left: 0.15rem;
    }

    .lang-item span {
      font-weight: 600;
      color: #60a5fa;
      font-size: 0.64rem;
    }

    .interest-item {
      font-size: 0.68rem;
      color: #94a3b8;
      margin-bottom: 0.2rem;
      padding-left: 0.55rem;
      position: relative;
    }

    .interest-item::before {
      content: '▪';
      position: absolute;
      left: 0;
      color: #3b82f6;
      font-size: 0.6rem;
    }

    /* ── RIGHT MAIN CONTENT ── */
    .main-content {
      flex: 1;
      height: 100%;
      padding: 1.25rem 1.55rem;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .main-section {
      margin-bottom: 0.55rem;
    }

    .main-section:last-child {
      margin-bottom: 0;
    }

    .main-section-title {
      font-size: 0.78rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #0f172a;
      border-bottom: 1.5px solid #2563eb;
      padding-bottom: 0.18rem;
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .profile-text {
      font-size: 0.73rem;
      color: #334155;
      line-height: 1.45;
      text-align: justify;
    }

    .profile-text strong {
      color: #0f172a;
    }

    .exp-item {
      margin-bottom: 0.4rem;
    }

    .exp-item:last-child {
      margin-bottom: 0;
    }

    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 0.04rem;
    }

    .exp-title {
      font-size: 0.77rem;
      font-weight: 700;
      color: #0f172a;
    }

    .exp-date {
      font-size: 0.65rem;
      color: #64748b;
      font-weight: 600;
      white-space: nowrap;
    }

    .exp-company {
      font-size: 0.67rem;
      color: #2563eb;
      font-weight: 600;
      margin-bottom: 0.14rem;
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }

    .exp-company span.badge {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1d4ed8;
      font-size: 0.59rem;
      padding: 0.03rem 0.28rem;
      border-radius: 3px;
      font-weight: 600;
    }

    .exp-company span.badge-grade {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #15803d;
      font-size: 0.59rem;
      padding: 0.03rem 0.28rem;
      border-radius: 3px;
      font-weight: 700;
    }

    .exp-bullets {
      padding-left: 0.95rem;
    }

    .exp-bullets li {
      font-size: 0.7rem;
      color: #334155;
      margin-bottom: 0.08rem;
      line-height: 1.32;
    }

    .edu-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.18rem;
    }

    .edu-left {
      flex: 1;
    }

    .edu-title {
      font-size: 0.76rem;
      font-weight: 700;
      color: #0f172a;
    }

    .edu-institution {
      font-size: 0.68rem;
      color: #475569;
      font-style: italic;
    }

    .edu-date {
      font-size: 0.66rem;
      color: #64748b;
      font-weight: 600;
      white-space: nowrap;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.2rem;
      font-size: 0.68rem;
      background: #f8fafc;
      padding: 0.38rem 0.6rem;
      border-radius: 5px;
      border: 1px solid #e2e8f0;
      line-height: 1.35;
    }

    .tech-grid-row strong {
      color: #0f172a;
      font-weight: 700;
      min-width: 95px;
      display: inline-block;
    }

    .tech-grid-row span {
      color: #475569;
    }

    .print-btn {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: #ffffff;
      border: none;
      padding: 0.7rem 1.3rem;
      border-radius: 8px;
      font-size: 0.82rem;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(37, 99, 235, 0.4);
      z-index: 100;
      font-family: 'Inter', sans-serif;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: 0.45rem;
    }

    .print-btn:hover {
      background: linear-gradient(135deg, #1d4ed8, #1e40af);
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(37, 99, 235, 0.5);
    }

    @media print {
      body {
        background: none;
        padding: 0;
        margin: 0;
      }
      .cv-wrapper {
        box-shadow: none;
        width: 100%;
        height: 100%;
        border-radius: 0;
      }
      .print-btn {
        display: none !important;
      }
    }
  </style>
</head>
<body>

<button class="print-btn" onclick="window.print()">
  <span>⬇</span> Download / Print PDF
</button>

<div class="cv-wrapper">
  <!-- LEFT SIDEBAR -->
  <aside class="sidebar">
    <div class="photo-wrap">
      <img
        src="${dataUri}"
        alt="Petros Sisay Gelan"
      />
    </div>

    <h1 class="sidebar-name">Petros Sisay Gelan</h1>
    <p class="sidebar-title">Senior Software Engineering Student</p>

    <!-- CONTACT -->
    <div class="sidebar-section">
      <h2 class="sidebar-section-title">Contact</h2>
      <div class="contact-item">
        <span class="icon">✉</span>
        <a href="mailto:petrossisay1646@gmail.com">petrossisay1646@gmail.com</a>
      </div>
      <div class="contact-item">
        <span class="icon">⌂</span>
        <span>Adama, Ethiopia</span>
      </div>
      <div class="contact-item">
        <span class="icon">⌘</span>
        <a href="https://github.com/petersisay" target="_blank">github.com/petersisay</a>
      </div>
      <div class="contact-item">
        <span class="icon">in</span>
        <a href="https://linkedin.com/in/petros-sisay-gelan" target="_blank">linkedin.com/in/petros-sisay-gelan</a>
      </div>
      <div class="contact-item">
        <span class="icon">✈</span>
        <span>@Petros_sisay (Telegram)</span>
      </div>
      <div class="contact-item">
        <span class="icon">🌐</span>
        <a href="https://petros-portfolio-one.vercel.app" target="_blank">petros-portfolio-one.vercel.app</a>
      </div>
    </div>

    <!-- SKILLS -->
    <div class="sidebar-section">
      <h2 class="sidebar-section-title">Technical Skills</h2>
      
      <div class="skill-group-title">Languages & Core</div>
      <div class="skill-tags">
        <span class="skill-badge">TypeScript</span>
        <span class="skill-badge">JavaScript</span>
        <span class="skill-badge">Dart</span>
        <span class="skill-badge">Java (OOP)</span>
        <span class="skill-badge">SQL</span>
      </div>

      <div class="skill-group-title">Web & Mobile</div>
      <div class="skill-tags">
        <span class="skill-badge">React.js</span>
        <span class="skill-badge">Flutter 3</span>
        <span class="skill-badge">Riverpod</span>
        <span class="skill-badge">Vite</span>
        <span class="skill-badge">Tailwind CSS</span>
      </div>

      <div class="skill-group-title">Backend & Database</div>
      <div class="skill-tags">
        <span class="skill-badge">Node.js</span>
        <span class="skill-badge">Express 5</span>
        <span class="skill-badge">MongoDB Atlas</span>
        <span class="skill-badge">MySQL</span>
        <span class="skill-badge">REST APIs</span>
      </div>

      <div class="skill-group-title">Testing & DevOps</div>
      <div class="skill-tags">
        <span class="skill-badge">Vitest</span>
        <span class="skill-badge">Git & GitHub</span>
        <span class="skill-badge">Vercel</span>
        <span class="skill-badge">Render</span>
      </div>
    </div>

    <!-- LANGUAGES -->
    <div class="sidebar-section">
      <h2 class="sidebar-section-title">Languages</h2>
      <div class="lang-item">Amharic <span>Native</span></div>
      <div class="lang-item">English <span>Proficient</span></div>
      <div class="lang-item">Afaan Oromo <span>Proficient</span></div>
    </div>

    <!-- FOCUS AREAS -->
    <div class="sidebar-section">
      <h2 class="sidebar-section-title">Focus Areas</h2>
      <div class="interest-item">Full-Stack Web Systems</div>
      <div class="interest-item">Cross-Platform Mobile Apps</div>
      <div class="interest-item">Test-Driven Development</div>
      <div class="interest-item">Cloud & Geospatial APIs</div>
    </div>
  </aside>

  <!-- RIGHT MAIN CONTENT -->
  <main class="main-content">

    <!-- PROFILE -->
    <section class="main-section">
      <h2 class="main-section-title">Profile</h2>
      <p class="profile-text">
        <strong>Senior Software Engineering student (4th Year)</strong> at Adama Science and Technology University (ASTU) with proven industrial internship experience at <strong>AIG-Tech Enterprise (Evaluated with Grade A+)</strong>. Specialized in production-ready full-stack web platforms, cross-platform mobile systems (Flutter), and distributed backend architectures. Experienced across <strong>TypeScript, React, Flutter, Node.js, Express 5, MongoDB Atlas, and Socket.IO</strong>, with strong emphasis on automated testing (Vitest), modular architecture, and responsive UX.
      </p>
    </section>

    <!-- EDUCATION -->
    <section class="main-section">
      <h2 class="main-section-title">Education</h2>
      <div class="edu-item">
        <div class="edu-left">
          <div class="edu-title">B.Sc. in Software Engineering (Senior / 4th Year)</div>
          <div class="edu-institution">Adama Science and Technology University (ASTU) · Adama, Ethiopia</div>
        </div>
        <div class="edu-date">2023 – Present (Exp. 2027)</div>
      </div>
      <div class="edu-item">
        <div class="edu-left">
          <div class="edu-title">Ethiopian University Entrance Certificate</div>
          <div class="edu-institution">National Examination Board · Ethiopia</div>
        </div>
        <div class="edu-date">2022</div>
      </div>
    </section>

    <!-- EXPERIENCE & PROJECTS -->
    <section class="main-section">
      <h2 class="main-section-title">Experience & Engineering Projects</h2>

      <div class="exp-item">
        <div class="exp-header">
          <div class="exp-title">Full Stack Web Development Intern — AIG-Tech Enterprise</div>
          <div class="exp-date">Aug – Sep 2026</div>
        </div>
        <div class="exp-company">
          <span>Adama Investment Group (AIG) · Innovation & Development</span>
          <span class="badge-grade">Grade A+</span>
          <span class="badge">Enterprise</span>
        </div>
        <ul class="exp-bullets">
          <li>Architected backend REST APIs, MongoDB 2dsphere geospatial indexing, OSRM road distance routing, and municipal geofencing.</li>
          <li>Engineered real-time Socket.IO courier tracking with throttled database persistence, and verified Chapa/Telebirr payment webhooks (HMAC-SHA256).</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-header">
          <div class="exp-title">TemariHub — STEM Academic & Opportunity Engine</div>
          <div class="exp-date">2026</div>
        </div>
        <div class="exp-company">
          <span>React · Vite · Node.js · Express · MongoDB Atlas · Vitest</span>
          <span class="badge">125+ Tests</span>
        </div>
        <ul class="exp-bullets">
          <li>Architected a centralized STEM opportunity platform for Ethiopian students with categorized listings, real-time deadline indexing, and search.</li>
          <li>Engineered automated test suites using Vitest spanning 125+ unit and integration tests with strict CI validation and sub-second execution.</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-header">
          <div class="exp-title">Lehulu — Local Services & Artisan Marketplace</div>
          <div class="exp-date">2025 – 2026</div>
        </div>
        <div class="exp-company">
          <span>Flutter 3 · Dart · Riverpod · Node.js · Express · MongoDB Atlas</span>
          <span class="badge">Mobile & Web</span>
        </div>
        <ul class="exp-bullets">
          <li>Built a cross-platform mobile marketplace connecting households with verified local service technicians and artisans.</li>
          <li>Integrated geospatial service discovery, quote negotiation workflows, and reactive state management powered by Riverpod.</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-header">
          <div class="exp-title">Revola — Next-Gen Music Streaming Experience</div>
          <div class="exp-date">2025</div>
        </div>
        <div class="exp-company">
          <span>React · TypeScript · Tailwind CSS · Web Audio API</span>
          <span class="badge">Featured UI</span>
        </div>
        <ul class="exp-bullets">
          <li>Engineered a high-performance audio streaming client with real-time waveform visualizers, dynamic playlists, and zero-latency playback.</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-header">
          <div class="exp-title">Java Multi-Client Group Chat Application</div>
          <div class="exp-date">2024</div>
        </div>
        <div class="exp-company">
          <span>Java Core · TCP Sockets · Multithreading · Java Swing GUI</span>
          <span class="badge">Desktop System</span>
        </div>
        <ul class="exp-bullets">
          <li>Built a concurrent multithreaded TCP socket server handling multiple simultaneous client sessions with broadcast messaging.</li>
        </ul>
      </div>
    </section>

    <!-- TECHNICAL PROFICIENCY SUMMARY -->
    <section class="main-section">
      <h2 class="main-section-title">Core Competencies</h2>
      <div class="tech-grid">
        <div class="tech-grid-row">
          <strong>Frontend & Mobile:</strong>
          <span>React, Vite, TypeScript, Flutter 3, Dart, Riverpod, Tailwind CSS, Responsive Web Architecture</span>
        </div>
        <div class="tech-grid-row">
          <strong>Backend & APIs:</strong>
          <span>Node.js, Express 5, RESTful API Design, Socket.IO / WebSockets, OSRM Routing, Geofencing</span>
        </div>
        <div class="tech-grid-row">
          <strong>Databases & Cloud:</strong>
          <span>MongoDB Atlas, 2dsphere Geospatial Indexing, Mongoose, MySQL, Vercel, Render</span>
        </div>
        <div class="tech-grid-row">
          <strong>Quality & Tools:</strong>
          <span>Vitest, Test-Driven Development (TDD), Git, GitHub, HMAC-SHA256 Webhook Security, Agile Sprints</span>
        </div>
      </div>
    </section>

  </main>
</div>

</body>
</html>
`;

fs.writeFileSync(path.resolve(__dirname, '../public/cv.html'), cvHtmlContent, 'utf-8');
console.log('✓ Updated public/cv.html with upgraded CV & Resume');

async function renderPdf() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(cvHtmlContent, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const pdfPath = path.resolve(__dirname, '../public/cv.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
  });

  console.log(`✓ Rendered high quality printable PDF: ${pdfPath}`);
  await browser.close();
}

renderPdf();
