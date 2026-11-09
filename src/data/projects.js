// ═══════════════════════════════════════════════════════════════════
// PROJECTS DATA — Petros Sisay Gelan Portfolio
// Updated with TemariHub, Lehulu, Revola, PetroFlow, Guided Planner
// ═══════════════════════════════════════════════════════════════════

export const projects = [
  {
    id: 'amen-plus',
    title: 'AMEN+ (አሜን+) — Apostolic Media Streaming Platform',
    tagline: 'Focused, distraction-reduced Christian media streaming platform with YouTube Data API v3 proxy & focus-trapped playback.',
    description:
      'A dedicated Christian media streaming platform created for አሜን - AMEN (@amenapostolicmedia), an official media ministry of the Apostolic Church of Ethiopia, delivering focused online streaming and media discovery for sermons, apostolic teachings, and worship.',
    longDescription:
      'AMEN+ provides a dedicated, distraction-reduced streaming environment directly connected to the channel\'s 110-video uploads catalogue. Built with React 18, Vite, and an Express.js backend reverse proxy on Render, the system isolates Google Cloud API keys server-side, enforces exact-origin CORS whitelisting, sanitizes error responses, and provides accessible video playback using privacy-enhanced YouTube embeds.',
    problem:
      'Streaming faith-based media directly on public platforms frequently exposes viewers to distracting commercial interruptions, unrelated algorithmic recommendations, and user tracking, while querying YouTube APIs directly from client-side JavaScript risks exposing private API keys.',
    solution:
      'Architected a full-stack web application with an Express.js proxy on Render that loads API credentials exclusively via environment variables, validates requests, redacts tokens from error messages, and streams video via youtube-nocookie.com inside an accessible focus-trapped modal dialog.',
    features: [
      'Dynamic YouTube Data API v3 synchronization (27,000 subscribers, 110 uploads, 2.6M+ channel views)',
      'Featured Hero spotlight highlighting the latest media release with high-resolution thumbnail backdrops',
      'Progressive pagination loading 20 releases initially and 10 on demand with Set-based deduplication',
      'Privacy-enhanced theater playback via youtube-nocookie.com with zero pre-play cookie storage',
      'Implemented dialog focus management (initial focus entry, Tab/Shift+Tab trapping, Escape dismissal, focus restoration)',
      'Strict server proxy security with exact-origin CORS filtering and regex-based token redaction',
      'Custom Ethiopian Apostolic design identity (Deep Emerald Green & Champagne Gold) with Noto Sans Ethiopic typography',
      'Comprehensive SEO metadata with Open Graph, Twitter Cards, robots.txt, sitemap, and dedicated 1200×630 sharing banner',
    ],
    architecture:
      'Decoupled multi-cloud architecture: React 18 SPA hosted on Vercel Edge CDN dispatches REST queries to an Express.js proxy on Render. The server validates origins against CORS whitelists, injects server-side YOUTUBE_API_KEY credentials to fetch channels and playlistItems from Google Cloud, strips sensitive parameters on exceptions, and serves sanitized payloads to the client.',
    security:
      'Zero frontend API key exposure, strict exact-origin CORS enforcement (disallowing wildcards), regex error sanitization (key=[REDACTED]), youtube-nocookie.com privacy-enhanced embeds, and secure rel="noopener noreferrer" external links.',
    tech: ['React 18', 'Vite', 'Node.js', 'Express', 'YouTube Data API v3', 'REST API', 'Vercel', 'Render'],
    category: ['fullstack', 'frontend', 'personal'],
    liveUrl: 'https://amen-plus.vercel.app',
    featured: true,
    image: '/projects/amen-plus/desktop_homepage.png',
    screenshots: [
      {
        url: '/projects/amen-plus/desktop_homepage.png',
        caption: 'Desktop Homepage & Hero Spotlight — Channel statistics and latest media release spotlight',
        label: 'Hero Spotlight',
      },
      {
        url: '/projects/amen-plus/desktop_video_grid.png',
        caption: 'Video Browsing Section — 16:9 media cards feed with progressive pagination and Set-based deduplication',
        label: 'Media Feed',
      },
      {
        url: '/projects/amen-plus/desktop_player_modal.png',
        caption: 'Theater Video Player Modal — youtube-nocookie.com embed with focus trapping and keyboard navigation',
        label: 'Player Modal',
      },
      {
        url: '/projects/amen-plus/desktop_about_section.png',
        caption: 'Ministry About & Community — Apostolic Church history, feature highlights, and interactive Telegram badge',
        label: 'Ministry Info',
      },
      {
        url: '/projects/amen-plus/mobile_homepage.png',
        caption: 'Mobile Homepage Viewport — Responsive layout with tailored Amharic typography (390 × 844 px)',
        label: 'Mobile View',
      },
      {
        url: '/projects/amen-plus/mobile_navigation.png',
        caption: 'Mobile Slide-down Navigation — Accessible hamburger navigation drawer with ARIA controls',
        label: 'Mobile Menu',
      },
    ],
    color: '#D6B45C',
  },
  {
    id: 'code-together',
    title: 'CodeTogether — Real-Time Collaborative Workspace',
    tagline: 'Live multi-user code editing with WebRTC video/voice calling & ZIP export.',
    description:
      'A real-time collaborative coding workspace enabling developers to pair program in the browser with synchronized concurrent code editing, syntax highlighting, sub-millisecond Socket.IO sync, and peer-to-peer WebRTC video/audio communication.',
    longDescription:
      'CodeTogether eliminates the friction of remote pair programming and technical interviews. Developers can create instant collaborative rooms, manage multi-file projects across tabs, view remote live cursors and selections in real time, conduct crystal-clear WebRTC video and voice calls directly alongside the code, and export the complete project snapshot to a ZIP file.',
    problem: 'Remote pair programming and student coding collaborations require juggling multiple disjoint apps (calling software, local editors, git branches), creating friction and sync delays.',
    solution: 'Engineered a unified real-time browser workspace with React, Vite, Node.js, Express, Socket.IO, and WebRTC delivering synchronized editing, instant rooms, voice/video calls, and one-click ZIP export.',
    features: [
      'Sub-millisecond real-time collaborative code editor powered by Socket.IO',
      'Integrated peer-to-peer WebRTC video and audio calls inside the editor workspace',
      'Multi-file tab management and syntax highlighting across multiple languages',
      'Multi-user cursor awareness with remote presence tags',
      'One-click project export to standard ZIP archive for immediate local testing',
    ],
    tech: ['React', 'Vite', 'Node.js', 'Express', 'Socket.IO', 'WebRTC', 'Tailwind CSS'],
    category: ['fullstack', 'frontend', 'personal'],
    liveUrl: 'https://code-together-weld.vercel.app',
    featured: true,
    image: '/projects/code-together.jpg',
    color: '#06b6d4',
  },
  {
    id: 'temari-hub',
    title: 'TemariHub (ተማሪሀብ) — STEM Opportunity Platform',
    tagline: 'Full-stack career discovery & 7-stage application tracking platform for Ethiopian STEM students.',
    description:
      'A full-stack opportunity discovery and application tracking web platform crafted specifically for Ethiopian university students in STEM disciplines, featuring real-time search, bilingual UI, and administrative moderation.',
    longDescription:
      'TemariHub bridges the information gap for ambitious Ethiopian STEM students seeking verified internships, entry-level engineering roles, fellowships, and scholarships. It includes student profiles, bookmarks, 7-stage application tracking with private notes, deadline telemetry, community reporting, and administrative moderation queues.',
    problem: 'Ethiopian university students struggle with fragmented Telegram channels and unverified job postings, lacking a single verified platform with application tracking.',
    solution: 'Engineered a full-stack platform with React 19, TypeScript, Express, and MongoDB, backed by 125+ automated tests, CSRF security, and Amharic/English bilingual support.',
    features: [
      '7-stage Kanban application tracking pipeline with personal notes',
      'Dynamic English & Amharic bilingual UI with persistent locale switcher',
      'Faceted search across STEM disciplines, education levels, and cities',
      'Admin moderation queue, community reporting, and append-only audit trail',
      '125+ automated integration and security test suites',
    ],
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB Atlas', 'Bilingual (Amharic)', 'Vitest'],
    category: ['fullstack', 'frontend', 'personal'],
    liveUrl: 'https://temari-hub.vercel.app',
    featured: true,
    image: '/projects/temari-hub.png',
    color: '#38bdf8',
  },
  {
    id: 'lehulu',
    title: 'Lehulu (ለሁሉ) — Ethiopian Services Marketplace',
    tagline: 'Digital trust-first marketplace connecting households with verified local service professionals.',
    description:
      'A production-grade digital services marketplace tailored for Ethiopian cities (Adama, Bishoftu, Addis Ababa), connecting customers with verified electricians, plumbers, carpenters, and IT specialists.',
    longDescription:
      'Lehulu transforms informal word-of-mouth service hiring in Ethiopia into a verified, transparent marketplace. Features include geospatial municipal boundary mapping, provider vetting, dispute arbitration, transparent estimate calculations, and end-to-end booking lifecycles.',
    problem: 'Informal service hiring in Ethiopia faces opaque pricing, safety concerns, unverified credentials, and lack of accountability.',
    solution: 'Architected a 3-role marketplace (Customer, Provider, Admin) with location-based matching, transparent estimates, and verifiable credential reviews.',
    features: [
      'Geospatial service boundary matching across Adama, Bishoftu, and Addis Ababa',
      'Three-role portal architecture: Customers, Providers, and Admins',
      'Transparent pricing estimation engine and booking status tracking',
      'Dispute management and community-verified credential reviews',
    ],
    tech: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB Atlas', 'Geospatial'],
    category: ['fullstack', 'frontend', 'personal'],
    liveUrl: 'https://lehulu-two.vercel.app',
    featured: true,
    image: '/projects/lehulu.jpg',
    color: '#f59e0b',
  },
  {
    id: 'adama-materials',
    title: 'Revola — Circular Materials Marketplace',
    tagline: 'Full-Stack circular marketplace for reclaimed construction supplies & logistics in Adama.',
    description:
      'A full-stack managed circular marketplace engineered with TypeScript, React 19, and Express to streamline the discovery, trade, and logistics of reclaimed construction materials.',
    longDescription:
      'Revola is designed to solve procurement logistics and promote circular-economy reuse around Adama/ASTU. It features Leaflet depot mapping powered by MongoDB 2dsphere indexing, Chapa ETB payment processing, automated CBE bank receipt verification, role-isolated portals (Buyer, Seller, Staff), and a Flutter companion mobile app.',
    problem: 'Local builders and contractors lacked a centralized digital directory to locate, inspect, and order salvaged building supplies and recycled materials.',
    solution: 'Engineered a high-performance TypeScript and React web application integrated with geospatial mapping, online payment gateways, and a Flutter mobile client.',
    features: [
      'Interactive geospatial depot mapping powered by Leaflet & MongoDB 2dsphere',
      'Ethiopian payment gateway integration with Chapa API & CBE transfer verification',
      'Role-based access control with JWT authentication and Google OAuth 2.0',
      'Companion cross-platform mobile client built with Flutter & Riverpod',
      'Python Telegram bot service for buyer receipt processing and admin notifications',
    ],
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB Atlas', 'Leaflet', 'Chapa API'],
    category: ['fullstack', 'frontend', 'personal'],
    liveUrl: 'https://adama-materials-e-commerce.vercel.app',
    featured: true,
    image: '/projects/adama-materials.webp',
    color: '#2563eb',
  },
  {
    id: 'flutter-todo-pro',
    title: 'PetroFlow — Mobile Productivity Suite',
    tagline: 'Cross-platform Flutter mobile app for Android & iOS — Task management, Kanban & Pomodoro.',
    description:
      'PetroFlow is a production-grade Flutter mobile application (Android & iOS) built with Clean Architecture. It delivers intelligent task management, a 3-column Kanban board, built-in Pomodoro focus timer with streaks, visual analytics, and offline-first resilience — the mobile companion to the MERN Todo Pro ecosystem.',
    longDescription:
      'Built on Flutter 3.41 + Dart and structured around Clean Architecture, PetroFlow is the native mobile client of the unified PetroFlow / MERN Todo Pro cross-platform productivity ecosystem. It uses Riverpod 2.6 for state management and Material 3 design tokens for beautiful adaptive theming on both OLED dark mode and bright daytime screens.',
    problem: 'Needed a native mobile experience that mirrors the full MERN web app with offline support, smooth animations, and platform-native feel on both Android and iOS.',
    solution: 'Built a Flutter cross-platform app with Clean Architecture layers, Riverpod state management, fl_chart analytics, and local SQLite caching for offline-first operation.',
    features: [
      'Multi-Level Priority Matrix: Urgent 🔴, High 🟠, Medium 🟡, Low 🟢 with visual hierarchy',
      '3-Column Kanban Board (To Do / In Progress / Completed) with one-tap stage transitions',
      'Built-in Pomodoro Timer: 25-min work, 5-min & 15-min breaks with task linking & auto-complete',
      'Nested Subtask Checklists with live percentage progress rings',
      '7-Day Velocity Chart (fl_chart), daily target goal ring & streak tracker 🔥',
      'Adaptive Dark & Light Material 3 themes optimized for OLED screens',
      'Offline-first: instant access to cached tasks, stats & settings via local storage',
      'Bulk batch operations: complete, delete, or re-prioritize multiple tasks at once',
    ],
    tech: ['Flutter', 'Dart', 'Riverpod', 'Material 3', 'fl_chart', 'Clean Architecture'],
    category: ['mobile', 'fullstack', 'personal'],
    liveUrl: null,
    featured: true,
    image: '/projects/flutter-todo-pro.webp',
    color: '#06b6d4',
  },
  {
    id: 'app-revola',
    title: 'Revola Mobile — Flutter Cross-Platform Marketplace Client',
    tagline: 'Native Flutter (Android, iOS & Web) client for circular construction materials trade in Adama.',
    description:
      'The companion cross-platform mobile application for Revola engineered with Flutter 3.29, Dart, and Riverpod 2.6, delivering an on-the-go native experience for builders, material depots, and sellers across Adama, Ethiopia.',
    longDescription:
      'Revola Mobile brings circular procurement directly to mobile viewports with feature-first modular architecture and Riverpod 2.6 state management. It features interactive OpenStreetMap depot navigation (flutter_map) locating 30+ verified regional supply yards, in-app Chapa ETB payment gateway integration with callback interception, CBE bank transfer receipt photo upload, live milestone order tracking (Placed → Confirmed → Hub Dispatch → Delivered), and encrypted JWT token storage via FlutterSecureStorage.',
    problem:
      'Site engineers and local contractors frequently operate on active construction jobs without laptops, needing a lightweight, native mobile interface to locate salvaged supplies, inspect depots, and order materials on-site.',
    solution:
      'Engineered a high-performance Flutter mobile application with offline-resilient local storage, OpenStreetMap geospatial visualizer, in-app mobile checkout, and real-time milestone progress tracking.',
    features: [
      'Interactive Adama Marketplace Map powered by OpenStreetMap & flutter_map with 30+ verified supply yards',
      'In-app Chapa Ethiopian Payment Gateway webview integration with cryptographic callback interception',
      'Live order tracking pipeline with sequential milestone progress bars and photo-supported dispute filing',
      'Seller listing manager with multi-image gallery upload and condition grading (Metals, Wood, Masonry)',
      'Native Google Sign-In and email/password authentication with persistent FlutterSecureStorage encryption',
      'Adaptive Dark, Light, and System Theme modes with persistent local preferences',
    ],
    tech: ['Flutter 3.29', 'Dart', 'Riverpod', 'Dio', 'flutter_map', 'OpenStreetMap', 'Chapa API', 'Secure Storage'],
    category: ['mobile', 'fullstack', 'personal'],
    liveUrl: null,
    featured: true,
    image: '/projects/adama-materials.webp',
    color: '#02569B',
  },
  {
    id: 'guided-annual-planner',
    title: 'Guided Annual Planner & Growth Sanctuary',
    tagline: 'Paper-inspired annual planning & mindfulness Progressive Web App (PWA).',
    description:
      'A modern full-stack PWA inspired by physical Ethiopian guided journals, designed to eliminate blank-page paralysis and transform compounding habits into long-term personal growth.',
    longDescription:
      'Guided Annual Planner combines personal development philosophy with modern web engineering. Built as a TypeScript monorepo with 197 passing Vitest tests, offline PWA caching, and containerized backend hosting. It structures life planning across annual horizons, monthly intentions, 7-day execution spreads, and evening reflections.',
    problem: 'Users face blank-page paralysis with traditional habit trackers and lose long-term focus without structured horizons.',
    solution: 'Engineered a structured, paper-like multi-horizon interface that guides reflection and compounds micro-habits into long-term growth.',
    features: [
      '197 automated unit and integration tests passing with Vitest',
      'Multi-horizon tracking: Annual horizons, monthly intentions, and 7-day spreads',
      'Offline-ready Progressive Web App (PWA) with service worker caching',
      'Production deployment on Vercel (Frontend) and Render (Backend API)',
    ],
    tech: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Vitest', 'PWA', 'Tailwind CSS'],
    category: ['fullstack', 'frontend', 'personal'],
    liveUrl: 'https://guided-annual-planner.vercel.app',
    featured: true,
    image: '/projects/guided-annual-planner.png',
    color: '#ec4899',
  },
  {
    id: 'student-registration',
    title: 'Bule Hora Elementary School Management System (Grades 1–8)',
    tagline: 'Modern Ethiopian school operations & student registration platform with Amharic bilingual UI on Render.',
    description:
      'An enterprise-grade Java web application engineered for Bule Hora Elementary School (Grades 1–8) featuring multi-year student progression, strict RBAC, automated continuous assessment calculation, and bilingual support.',
    longDescription:
      'The Bule Hora Elementary School Information Management System is an enterprise-grade digital school operations platform engineered for primary education in Ethiopia. Built with Java 17, Jakarta EE 10, embedded Tomcat 10.1, and cloud MySQL on Aiven, it eliminates paper-based historical record loss, enforces strict teacher subject-access boundaries, and automates report card rankings with full English and Amharic localization.',
    problem:
      'Traditional paper records and basic spreadsheets in primary schools frequently lose historical grades upon promotion, allow unauthorized mark adjustments outside assigned subjects, and alienate non-English fluent parents and staff.',
    solution:
      'Architected a production Dockerized Java web application deployed on Render with SSL-encrypted cloud MySQL, enforcing strict RBAC where teachers only access assigned classes, archiving multi-year academic progression, and offering persistent Amharic localization.',
    features: [
      'Multi-year student enrollment preservation across Grades 1 through 8',
      'Strict Role-Based Access Control (RBAC) isolating Admin, Teacher, and Student portals',
      'Dynamic English & Amharic bilingual UI with persistent locale switcher',
      'Automated continuous assessment aggregation (quizzes, midterms, finals) and rank computation',
      'Centralized credential provisioning with admin-managed accounts and password resets',
      'Production deployment on Render Web Services (Dockerized Java 17) & Aiven Cloud MySQL',
      '7 automated test suites with 100% passing unit & integration validations',
    ],
    tech: ['Java 17', 'Jakarta EE 10', 'MySQL 8', 'Embedded Tomcat', 'Docker', 'Render', 'Bootstrap 5.3', 'Amharic Bilingual'],
    category: ['java', 'academic', 'fullstack'],
    liveUrl: 'https://bule-hora-elementary-school.onrender.com',
    featured: true,
    image: '/projects/student-registration.webp',
    color: '#22c55e',
  },
  {
    id: 'engilab',
    title: 'EngiLab — Academic Laboratory Management Platform',
    tagline: 'Laboratory resource orchestration and engineering experiment learning system for ASTU.',
    description:
      'An academic engineering laboratory management and learning platform designed for the ASTU interdisciplinary engineering context, structuring lab equipment allocation, safety compliance, and virtual procedure tracking.',
    longDescription:
      'EngiLab addresses physical resource bottlenecks across ASTU engineering faculties (Electrical, Mechanical, Chemical, and Civil). It models specialized hardware inventory (FPGA kits, oscilloscopes, reagent logs), schedules lab slot reservations to eliminate department collisions, audits student safety certifications, and delivers interactive pre-lab procedural modules.',
    problem:
      'ASTU interdisciplinary engineering departments face equipment scheduling collisions, paper-based safety logs, and manual inventory tracking that slow student laboratory throughput.',
    solution:
      'Architecting an academic management platform with role-isolated faculty/student portals, reservation conflict resolution engines, and normalized relational databases for inventory tracking.',
    features: [
      'Role-isolated portals for Academic Faculty, Engineering Students, and Lab Custodians',
      'Laboratory slot reservation engine with automated conflict resolution',
      'Hardware asset tracking for oscilloscopes, FPGA kits, and precision tooling',
      'Pre-lab safety compliance verification and prerequisite checklist gates',
      'Interactive procedural experiment guides with structured report submissions',
    ],
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Relational Modeling'],
    category: ['academic', 'fullstack'],
    liveUrl: null,
    featured: true,
    image: '/projects/engilab.webp',
    color: '#60a5fa',
  },
  {
    id: 'ace-meklit',
    title: 'ACE Meklit Business Website',
    tagline: 'Polished, responsive corporate site for ACE Meklit with custom layout.',
    description:
      'A fully responsive business website built for ACE Meklit using clean semantic HTML, CSS layout techniques, and smooth scroll interactions. Delivered as a real freelance project.',
    longDescription:
      'ACE Meklit is a business website built from scratch with focus on layout hierarchy, visual appeal, and device responsiveness. It showcases company services, organized navigation, and cross-browser performance without heavy framework dependencies.',
    problem: 'The business needed a crisp, professional digital presence that displays services clearly across mobile and desktop devices.',
    solution: 'Designed and engineered a custom mobile-first website utilizing clean HTML5 structure, CSS Grid/Flexbox layout, and JavaScript interactive elements.',
    features: [
      'Mobile-first responsive design for all screen sizes',
      'Clean navigation hierarchy and smooth scrolling',
      'Structured service presentation cards',
      'Cross-browser optimization and fast load times',
      'Accessible semantic HTML architecture',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: ['frontend', 'personal'],
    liveUrl: 'https://ace-meklit.vercel.app',
    featured: false,
    image: '/projects/ace-meklit.webp',
    color: '#3b82f6',
  },
  {
    id: 'pomodoro-timer',
    title: 'Pomodoro Focus Timer — Productivity Web App',
    tagline: 'Sleek glassmorphic focus timer with custom session tracking & audio alerts deployed on Vercel.',
    description:
      'A modern, beautifully designed Pomodoro Timer web application built with HTML5, modern CSS3 glassmorphism, and Vanilla JavaScript to boost deep work sessions.',
    longDescription:
      'Engineered to eliminate focus fatigue and track productivity metrics across study and engineering workflows. Built with zero runtime frameworks, it delivers 25-minute focus intervals, automatic 5-minute and 15-minute break scheduling, session counting, localStorage persistence across browser restarts, and customizable interval configurations.',
    problem: 'Developers and students face workflow distractions and lack a clean, lightweight browser-based focus timer that persists stats without heavy account requirements.',
    solution: 'Created a responsive web app with glassmorphism visual styling, customizable durations, audio chime notifications via Web Audio API, and persistent localStorage session tracking.',
    features: [
      '25-minute classic Pomodoro focus countdown with large high-contrast display',
      'Automatic short break (5-min) and long break (15-min) scheduling',
      'Persistent stats tracking completed sessions and total focus hours via localStorage',
      'Audio chime notification alerts upon timer completion',
      'Custom glassmorphism modal dialogs for settings configuration and stats reset',
      'Production deployment on Vercel Edge CDN',
    ],
    tech: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Glassmorphism', 'Web Audio API', 'Vercel'],
    category: ['frontend', 'personal'],
    liveUrl: 'https://promodoro-timer1.vercel.app',
    featured: false,
    image: '/projects/mern-todo-pro.webp',
    color: '#ef4444',
  },
  {
    id: 'portfolio-v1',
    title: 'Personal Portfolio (v1)',
    tagline: 'First personal portfolio website — where the developer journey began.',
    description:
      'My original developer portfolio featuring custom dark styling, CSS animations, and project showcase cards built entirely with vanilla HTML, CSS, and JavaScript.',
    longDescription:
      'The initial milestone in my developer journey. Building this site established foundational concepts in responsive layouts, document structure, and basic script interaction.',
    problem: 'Establishing an initial online presence to present early projects.',
    solution: 'Created a multi-section dark themed portfolio site with vanilla web technologies.',
    features: [
      'Custom dark aesthetic design',
      'Smooth section navigation',
      'Responsive project card grid',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    category: ['frontend', 'personal'],
    liveUrl: 'https://responsive-portfolio-psi-five.vercel.app',
    featured: false,
    image: '/projects/portfolio-v1.webp',
    color: '#06b6d4',
  },
];

export const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'mobile', label: '📱 Mobile' },
  { id: 'java', label: 'Java & Systems' },
  { id: 'academic', label: 'Academic & In-Dev' },
  { id: 'frontend', label: 'Frontend UI' },
];
