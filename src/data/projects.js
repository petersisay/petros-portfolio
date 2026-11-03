// ═══════════════════════════════════════════════════════════════════
// PROJECTS DATA — Petros Sisay Gelan Portfolio
// Verified project showcases with genuine technical details and distinctions
// ═══════════════════════════════════════════════════════════════════

export const projects = [
  {
    id: 'revola',
    title: 'Revola — Circular Materials Marketplace',
    tagline: 'Location-aware circular marketplace for reclaimed construction supplies & logistics.',
    projectType: 'Independent Full-Stack Project',
    statusBadge: 'Deployed / Live',
    description:
      'A full-stack managed circular marketplace engineered with TypeScript, React 19, and Express to streamline the discovery, trade, and logistics of reclaimed construction materials in regional hubs.',
    longDescription:
      'Revola is designed to solve procurement logistics and promote circular-economy reuse around Adama and ASTU. It features Leaflet depot mapping powered by MongoDB 2dsphere indexing, Ethiopian digital payment integration via Chapa API, automated bank transfer receipt processing, role-isolated portals (Buyer, Seller, Admin), and a Flutter mobile companion client.',
    problem:
      'Local builders and contractors lacked a centralized, verified digital directory to locate, inspect, and order salvaged building supplies and recycled materials, leading to landfill waste and high procurement costs.',
    solution:
      'Engineered a high-performance web platform integrated with geospatial depot mapping, role-based workflows, automated invoice generation, and Chapa ETB payment processing.',
    contributions: [
      'Architected end-to-end RESTful API endpoints and MongoDB 2dsphere geospatial depot queries.',
      'Integrated Chapa payment gateway webhooks with cryptographic HMAC verification.',
      'Implemented role-based authentication with JWT and refresh token rotation.',
      'Engineered interactive Leaflet mapping components with radius filtering.',
    ],
    challenges:
      'Handling asynchronous payment webhook confirmations reliably and ensuring fast spatial queries over depot inventories without performance degradation.',
    features: [
      'Interactive geospatial depot mapping powered by Leaflet & MongoDB 2dsphere',
      'Ethiopian payment gateway integration with Chapa API & CBE transfer verification',
      'Role-based access control with JWT authentication and protected route guards',
      'Companion cross-platform mobile client built with Flutter & Riverpod',
      'Automated PDF invoice generation and order status telemetry',
    ],
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB Atlas', 'Leaflet', 'Chapa API'],
    category: ['fullstack', 'frontend'],
    liveUrl: 'https://adama-materials-e-commerce.vercel.app',
    githubUrl: 'https://github.com/petersisay/AdamaMaterials-E-commerce-',
    featured: true,
    image: '/projects/adama-materials.webp',
    color: '#2563EB',
  },
  {
    id: 'petroflow',
    title: 'PetroFlow — Unified Productivity Suite',
    tagline: 'Cross-platform task management ecosystem with Flutter mobile and MERN web clients.',
    projectType: 'Independent Engineering Project',
    statusBadge: 'Deployed / Open Source',
    description:
      'A unified productivity and engineering sprint ecosystem comprising a native Flutter mobile app for Android/iOS and a full-stack MERN web application with Kanban boards, Pomodoro focus tracking, and offline sync.',
    longDescription:
      'PetroFlow bridges desktop engineering sprint management with mobile on-the-go task execution. The mobile client is engineered with Flutter 3 and Riverpod following Clean Architecture principles with offline SQLite resilience. The web client delivers interactive Kanban drag-and-drop workflows, Pomodoro intervals with streak telemetry, and full REST API persistence.',
    problem:
      'Engineering students and developers struggle with fragmented task tools that fail to provide offline reliability on mobile while syncing with full desktop sprint boards.',
    solution:
      'Created a dual-client system: a responsive React web sprint board and a native Flutter mobile application with shared domain modeling, offline SQLite caching, and Material 3 adaptive theming.',
    contributions: [
      'Built complete Flutter mobile architecture with Riverpod state management and Clean Architecture layers.',
      'Designed MERN web backend with Express, MongoDB, and JWT authentication.',
      'Implemented custom Pomodoro interval timer with streak counter and audio alert triggers.',
      'Engineered 7-day velocity charts and productivity metric rings using fl_chart.',
    ],
    challenges:
      'Maintaining consistent task priority states and subtask completion percentages between the offline mobile cache and server database.',
    features: [
      'Multi-Level Priority Matrix (Urgent, High, Medium, Low) with visual hierarchy',
      '3-Column Kanban Board with stage transitions and task cards',
      'Built-in Pomodoro Focus Timer with task linking and streak counters',
      'Nested subtask checklists with dynamic progress percentage rings',
      'Adaptive Dark & Light Material 3 themes optimized for OLED screens',
      'Offline-first mobile resilience with local SQLite storage',
    ],
    tech: ['Flutter', 'Dart', 'Riverpod', 'React 19', 'Node.js', 'Express', 'MongoDB Atlas', 'Material 3'],
    category: ['mobile', 'fullstack'],
    liveUrl: 'https://mern-todo-pro.vercel.app',
    githubUrl: 'https://github.com/petersisay/flutter_todo_pro',
    featured: true,
    image: '/projects/flutter-todo-pro.webp',
    color: '#06B6D4',
  },
  {
    id: 'temari-hub',
    title: 'TemariHub — STEM Opportunities Platform',
    tagline: 'Full-stack career discovery & 7-stage application tracking platform for Ethiopian students.',
    projectType: 'Independent Full-Stack Project',
    statusBadge: 'Deployed / Live',
    description:
      'A verified opportunity discovery and application tracking web platform crafted for Ethiopian university students in STEM disciplines, featuring bilingual UI (Amharic/English), faceted search, and 125+ automated tests.',
    longDescription:
      'TemariHub bridges the critical information gap for Ethiopian STEM students seeking verified internships, entry-level engineering roles, fellowships, and scholarships. It includes student profiles, 7-stage application tracking with private notes, deadline telemetry, community reporting, and administrative moderation queues.',
    problem:
      'Ethiopian university students struggle with fragmented Telegram channels and unverified job postings, lacking a single verified platform with application lifecycle tracking.',
    solution:
      'Engineered a full-stack platform with React 19, TypeScript, Express, and MongoDB, backed by 125+ automated tests, CSRF security, and Amharic/English bilingual support.',
    contributions: [
      'Architected 7-stage Kanban application tracking pipeline with personal status notes.',
      'Built dynamic English and Amharic bilingual interface with persistent locale state.',
      'Authored 125+ automated integration and security test suites using Vitest.',
      'Implemented admin moderation queue and community reporting workflows.',
    ],
    challenges:
      'Ensuring bulletproof CSRF protection, secure cookie handling, and seamless bilingual string management across complex nested components.',
    features: [
      '7-stage Kanban application tracking pipeline with personal notes',
      'Dynamic English & Amharic bilingual UI with persistent locale switcher',
      'Faceted search across STEM disciplines, education levels, and cities',
      'Admin moderation queue, community reporting, and audit trail',
      '125+ automated integration and security test suites with Vitest',
    ],
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB Atlas', 'Bilingual (Amharic)', 'Vitest'],
    category: ['fullstack', 'frontend'],
    liveUrl: 'https://temari-hub.vercel.app',
    githubUrl: 'https://github.com/petersisay/TemariHub',
    featured: true,
    image: '/projects/temari-hub.png',
    color: '#3B82F6',
  },
  {
    id: 'lehulu',
    title: 'Lehulu — Local Services Marketplace',
    tagline: 'Trust-first digital marketplace connecting households with verified local service professionals.',
    projectType: 'Independent Full-Stack Project',
    statusBadge: 'Deployed / Live',
    description:
      'A production-grade digital services marketplace tailored for Ethiopian cities (Adama, Bishoftu, Addis Ababa), connecting customers with verified electricians, plumbers, carpenters, and technicians.',
    longDescription:
      'Lehulu transforms informal word-of-mouth service hiring in Ethiopia into a verified, transparent marketplace. Features include geospatial municipal boundary mapping, provider vetting, dispute arbitration, transparent estimate calculations, and end-to-end booking lifecycles.',
    problem:
      'Informal service hiring in Ethiopia faces opaque pricing, safety concerns, unverified credentials, and a total lack of accountability for domestic technical services.',
    solution:
      'Architected a 3-role marketplace (Customer, Provider, Admin) with location-based matching, transparent estimates, and verifiable credential reviews.',
    contributions: [
      'Engineered geospatial municipal boundary queries for service zone validation.',
      'Developed 3-role portal architecture with isolated permissions.',
      'Created estimate calculation engine for upfront transparent service costs.',
      'Built responsive interface with mobile-first booking flows.',
    ],
    challenges:
      'Handling low-connectivity scenarios for field technicians while preserving real-time booking updates and status tracking.',
    features: [
      'Geospatial service boundary matching across Adama, Bishoftu, and Addis Ababa',
      'Three-role portal architecture: Customers, Providers, and Admins',
      'Transparent pricing estimation engine and booking status tracking',
      'Dispute management and community-verified credential reviews',
    ],
    tech: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB Atlas', 'Geospatial'],
    category: ['fullstack', 'frontend'],
    liveUrl: 'https://lehulu-two.vercel.app',
    githubUrl: 'https://github.com/petersisay/lehulu',
    featured: true,
    image: '/projects/lehulu.jpg',
    color: '#F59E0B',
  },
  {
    id: 'code-together',
    title: 'CodeTogether — Collaborative Coding Workspace',
    tagline: 'Live multi-user code editing with WebRTC video/voice calling & ZIP export.',
    projectType: 'Independent Full-Stack Project',
    statusBadge: 'Open Source',
    description:
      'A real-time collaborative coding workspace enabling developers to pair program in the browser with synchronized concurrent editing, syntax highlighting, sub-millisecond Socket.IO sync, and peer-to-peer WebRTC video/audio communication.',
    longDescription:
      'CodeTogether eliminates the friction of remote pair programming and technical interviews. Developers can create instant collaborative rooms, manage multi-file projects across tabs, view remote live cursors and selections in real time, conduct crystal-clear WebRTC video and voice calls directly alongside the code, and export the complete project snapshot to a ZIP file.',
    problem:
      'Remote pair programming and student coding collaborations require juggling multiple disjoint apps (calling software, local editors, git branches), creating friction and sync delays.',
    solution:
      'Engineered a unified real-time browser workspace with React, Vite, Node.js, Express, Socket.IO, and WebRTC delivering synchronized editing, instant rooms, voice/video calls, and one-click ZIP export.',
    contributions: [
      'Implemented real-time synchronization engine using Socket.IO room architecture.',
      'Integrated peer-to-peer WebRTC signaling and media stream controllers.',
      'Built multi-file tab manager with language-specific syntax highlighting.',
      'Added client-side snapshot bundling to standard ZIP archives using JSZip.',
    ],
    challenges:
      'Handling concurrent edit collisions and maintaining reliable WebRTC peer connections through NAT traversal and dynamic room lifecycles.',
    features: [
      'Sub-millisecond real-time collaborative code editor powered by Socket.IO',
      'Integrated peer-to-peer WebRTC video and audio calls inside the workspace',
      'Multi-file tab management and syntax highlighting across multiple languages',
      'Multi-user cursor awareness with remote presence tags',
      'One-click project export to standard ZIP archive for immediate local testing',
    ],
    tech: ['React', 'Vite', 'Node.js', 'Express', 'Socket.IO', 'WebRTC', 'Tailwind CSS'],
    category: ['fullstack', 'frontend'],
    liveUrl: null,
    githubUrl: 'https://github.com/petersisay/CodeTogether',
    featured: true,
    image: '/projects/code-together.jpg',
    color: '#10B981',
  },
  {
    id: 'engilab',
    title: 'EngiLab — Academic Laboratory Management Platform',
    tagline: 'Laboratory resource orchestration and engineering experiment learning system for ASTU.',
    projectType: 'Academic Engineering Project',
    statusBadge: 'In Development',
    description:
      'An academic engineering laboratory management and learning platform designed for the ASTU interdisciplinary engineering context, structuring lab equipment allocation, safety compliance, and virtual procedure tracking.',
    longDescription:
      'EngiLab addresses physical resource bottlenecks across ASTU engineering faculties (Electrical, Mechanical, Chemical, and Civil). It models specialized hardware inventory (FPGA kits, oscilloscopes, reagent logs), schedules lab slot reservations to eliminate department collisions, audits student safety certifications, and delivers interactive pre-lab procedural modules.',
    problem:
      'ASTU interdisciplinary engineering departments face equipment scheduling collisions, paper-based safety logs, and manual inventory tracking that slow student laboratory throughput.',
    solution:
      'Architecting an academic management platform with role-isolated faculty/student portals, reservation conflict resolution engines, and normalized relational databases for inventory tracking.',
    contributions: [
      'Designed system architecture specifications and relational entity-relationship models for multi-department assets.',
      'Prototyped reservation conflict resolution algorithms to prevent concurrent hardware bookings.',
      'Modeled safety compliance auditing workflows and instructor approval chains.',
    ],
    challenges:
      'Designing flexible schema models that accommodate diverse equipment types across vastly different engineering disciplines (e.g., electronics kits vs. chemical materials).',
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
    githubUrl: 'https://github.com/petersisay/EngiLab',
    featured: true,
    image: '/projects/engilab.webp',
    color: '#60A5FA',
  },
  {
    id: 'student-registration',
    title: 'Student Registration System — Java EE Enterprise App',
    tagline: 'Robust academic management system engineered with Java EE, MVC, and MySQL.',
    projectType: 'Academic Coursework Project',
    statusBadge: 'Completed',
    description:
      'An enterprise-grade Java EE student registration and academic lifecycle management web application engineered with the Model-View-Controller (MVC) architectural pattern, Servlets, JSP, JDBC, and MySQL.',
    longDescription:
      'Developed to automate university registration and grading operations, this system features role-isolated portals for Academic Administrators, Instructors, and Students. Built with clean JDBC connection handling, transactional integrity, and normalized relational schema on MySQL.',
    problem:
      'Academic institutions need a secure, reliable portal to streamline student course registration, grades, and department administration without complex overhead.',
    solution:
      'Created an MVC web application utilizing Java Servlets, JSP, and JDBC connected to a normalized MySQL database deployed on Apache Tomcat.',
    contributions: [
      'Designed normalized 3NF MySQL database schema with foreign key constraints.',
      'Implemented clean MVC controllers using Java Servlets and JSP views.',
      'Built custom JDBC data access layer with prepared statements for SQL injection prevention.',
    ],
    challenges:
      'Ensuring transactional integrity during concurrent multi-course student registrations and preventing duplicate enrollment states.',
    features: [
      'Student enrollment, course catalog management, credit tracking, and section assignments',
      'Role-based security for Academic Administrators, Faculty, and Students',
      'Clean JDBC abstraction layer with transactional integrity and connection pooling',
      'Normalized relational MySQL schema with comprehensive validation and error handling',
    ],
    tech: ['Java', 'Java Servlets', 'JSP', 'JSTL', 'JDBC', 'MySQL', 'Apache Tomcat'],
    category: ['java', 'academic'],
    liveUrl: null,
    githubUrl: 'https://github.com/petersisay/StudentRegisterSystem',
    featured: false,
    image: '/projects/student-registration.webp',
    color: '#10B981',
  },
  {
    id: 'group-chat-app',
    title: 'Java Multi-Client Group Chat',
    tagline: 'Real-time multi-threaded Java desktop chat application over TCP sockets.',
    projectType: 'Academic / Independent Project',
    statusBadge: 'Completed',
    description:
      'A Java desktop application enabling real-time group chat among multiple concurrent client instances connected to a central TCP server with message broadcasting.',
    longDescription:
      'Built using core Java networking APIs and multithreading, this system implements a dedicated server thread pool to handle concurrent client sockets, broadcast messages in real-time, and manage connection states cleanly.',
    problem:
      'Required implementing reliable multi-client concurrent network communication in standard Java with graceful connection recovery.',
    solution:
      'Engineered a TCP socket server architecture managing multiple client handlers with thread safety and message broadcasting.',
    contributions: [
      'Engineered multithreaded socket server listening on configurable TCP ports.',
      'Built Java Swing desktop interface for user client instances.',
      'Implemented protocol packet framing for text message broadcasting.',
    ],
    challenges:
      'Preventing deadlocks when multiple clients disconnect abruptly and managing socket thread pools safely.',
    features: [
      'Multi-threaded server architecture with socket handlers',
      'Real-time message broadcasting to active clients',
      'Client connection/disconnection lifecycle management',
      'Java Swing desktop user interface',
      'Event-driven communication flow',
    ],
    tech: ['Java', 'Java Swing', 'TCP Sockets', 'Multithreading'],
    category: ['java', 'personal'],
    liveUrl: null,
    githubUrl: 'https://github.com/petersisay/GroupChatApp',
    featured: false,
    image: '/projects/group-chat-app.webp',
    color: '#F59E0B',
  },
  {
    id: 'ace-meklit',
    title: 'ACE Meklit Business Website',
    tagline: 'Polished, responsive corporate site for ACE Meklit with custom layout.',
    projectType: 'Freelance Client Project',
    statusBadge: 'Deployed / Live',
    description:
      'A fully responsive business website built for ACE Meklit using clean semantic HTML, CSS layout techniques, and smooth scroll interactions. Delivered as a real freelance project.',
    longDescription:
      'ACE Meklit is a business website built from scratch with focus on layout hierarchy, visual appeal, and device responsiveness. It showcases company services, organized navigation, and cross-browser performance without heavy framework dependencies.',
    problem:
      'The business needed a crisp, professional digital presence that displays services clearly across mobile and desktop devices.',
    solution:
      'Designed and engineered a custom mobile-first website utilizing clean HTML5 structure, CSS Grid/Flexbox layout, and JavaScript interactive elements.',
    contributions: [
      'Delivered mobile-first responsive design matching brand specifications.',
      'Optimized image assets and critical render paths for fast loading in regional network environments.',
    ],
    challenges:
      'Optimizing asset delivery and CSS bundle size for users on mobile devices with variable network speeds.',
    features: [
      'Mobile-first responsive design for all screen sizes',
      'Clean navigation hierarchy and smooth scrolling',
      'Structured service presentation cards',
      'Cross-browser optimization and fast load times',
      'Accessible semantic HTML architecture',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: ['frontend', 'personal'],
    liveUrl: 'https://ace-meklit.netlify.app/',
    githubUrl: 'https://github.com/petersisay/ACE-Meklit',
    featured: false,
    image: '/projects/ace-meklit.webp',
    color: '#3B82F6',
  },
  {
    id: 'apple-website',
    title: 'Apple Marketing Page Replica',
    tagline: "Pixel-accurate frontend replication of Apple's product showcase.",
    projectType: 'Frontend Study Project',
    statusBadge: 'Deployed / Live',
    description:
      "A frontend clone of Apple's product page focusing on minimal design, precise typographic scale, and modern CSS layout mastery — a study in world-class UI precision.",
    longDescription:
      "Replicating Apple's design language provided an excellent opportunity to master fine-grained visual details, precise spacing rules, typography, and responsive container behavior across multiple breakpoints using modern CSS.",
    problem: 'Challenge to reproduce world-class UI design accuracy and typography rules without external libraries.',
    solution: 'Meticulously crafted the page using raw HTML5 and modern CSS flexbox/grid layout techniques.',
    contributions: [
      'Implemented pixel-precise typography scaling and container alignments.',
      'Constructed fluid CSS Grid and Flexbox responsive compositions.',
    ],
    challenges: 'Matching subtle typographic spacing and high-DPI asset scaling across diverse viewport widths.',
    features: [
      'Pixel-accurate typography and section spacing',
      'Responsive design handling high-DPI displays',
      'Subtle hover states and micro-interactions',
      'Clean semantic code organization',
    ],
    tech: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid'],
    category: ['frontend', 'personal'],
    liveUrl: 'https://melodic-hummingbird-fdca26.netlify.app/',
    githubUrl: 'https://github.com/petersisay/Apple-website',
    featured: false,
    image: '/projects/apple-website.webp',
    color: '#60A5FA',
  },
];

export const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'mobile', label: '📱 Mobile' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'java', label: 'Java' },
  { id: 'academic', label: 'Academic' },
];
