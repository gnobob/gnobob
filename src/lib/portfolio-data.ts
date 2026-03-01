// ============================================================
// PORTFOLIO DATA — Dominador C. Lillo Jr. | AutoBIT
// Last updated: 2025
// ============================================================

export const PERSONAL = {
  name: "Domz Lillo",
  title: "Founder & CEO · AutoBIT",
  email: "autobitofficial.ph@gmail.com",
  location: "Surigao del Norte, Philippines",
  linkedin: "https://www.linkedin.com/in/auto-bit-b4650a366/",
  github: "https://github.com/gnobob",
  cvLink: "#",
  university: "Surigao del Norte State University",
  graduationYear: "2020",
};

export const HERO = {
  badge: "Open for Consulting & Development Projects",
  headline: ["Robotics systems.", "AI-powered safety.", "Patent pending."],
  subheadline:
    "Founder & CEO of AutoBIT — building GRIDSONAR and MineSafe AI, decentralized fault detection and mining safety platforms powered by edge AI, mesh networking, and blockchain. 11+ years turning complex engineering into real-world results.",
  stats: [
    { number: "11+", label: "Years Experience" },
    { number: "2", label: "Patents Pending" },
    { number: "15+", label: "Projects Built" },
    { number: "🏆 x2", label: "Champion 2025" },
  ],
};

export const MARQUEE_ITEMS = [
  "GRIDSONAR · Patent Pending · Grid Fault Detection",
  "MineSafe AI · Mining Safety Engine",
  "Axonis Blockchain Protocol · Decentralized Data",
  "ESP32 · LoRa · Mesh Networking",
  "Computer Vision · OpenCV · Edge AI",
  "ROS2 · Robot Operating System",
  "Android Development · IoT · Embedded Systems",
  "Unity3D · 3D Digital Twin Visualization",
  "Python · C++ · C# · Embedded C",
  "PCB Design · Sensor Fusion · MQTT",
];

// EXPERTISE — icons must only be: Cpu | Zap | Eye | Workflow | Boxes | Network
export const EXPERTISE = [
  {
    icon: "Network" as const,
    title: "Decentralized IoT Infrastructure",
    description:
      "Mesh-connected sensor networks operating peer-to-peer without continuous internet. Self-healing topologies using ESP-NOW and LoRa. Blockchain-verified data integrity via Axonis protocol with DID authentication at the edge.",
    tags: ["ESP32", "LoRa", "Mesh P2P", "Axonis Blockchain"],
  },
  {
    icon: "Eye" as const,
    title: "AI & Computer Vision",
    description:
      "Edge AI deployment for anomaly detection, fault scoring, and real-time object recognition. CNN-based disease detection, thermal imaging for rescue robots, and ML model integration on constrained hardware.",
    tags: ["OpenCV", "CNN", "TensorFlow Lite", "YOLO"],
  },
  {
    icon: "Cpu" as const,
    title: "Robotics & Embedded Systems",
    description:
      "ROS2-based robot systems, autonomous navigation, and multi-robot coordination. Firmware development for microcontrollers including ESP32, STM32, and ARM Cortex. Competition-proven robotics consulting with national and regional championships.",
    tags: ["ROS2", "ESP32", "STM32", "ARM Cortex"],
  },
  {
    icon: "Zap" as const,
    title: "Smart Energy & Grid Systems",
    description:
      "Intelligent power monitoring with AI-driven fault prediction. Submeter node design with voltage, current, frequency, and THD sensing. Real-time 3D Digital Twin visualization built in Unity3D and TouchDesigner.",
    tags: ["Power Monitoring", "Unity3D", "Smart Contracts", "Fault Detection"],
  },
  {
    icon: "Workflow" as const,
    title: "Android & Software Development",
    description:
      "Full-stack Android applications with online/offline hybrid support. POS systems with Bluetooth thermal printing, barcode scanning, face detection attendance, and e-learning platforms with multimedia submissions.",
    tags: ["Android", "C#", "Firebase", "Offline-First"],
  },
  {
    icon: "Boxes" as const,
    title: "Safety & Environmental Systems",
    description:
      "AI-powered safety engines for high-risk environments including mining and industrial sites. Environmental monitoring with gas sensors, flood warning systems, and DOST-verified filtration solutions deployed in real communities.",
    tags: ["MineSafe AI", "Gas Sensors", "Safety ML", "DOST Verified"],
  },
];

export const FEATURED_PROJECT = {
  title: "GRIDSONAR",
  subtitle: "Mesh-Based Self-Healing Electrical Grid Fault Detection & AI 3D Visualization",
  category: "Deep Tech · Patent Pending · AutoBIT Flagship",
  description:
    "Decentralized modular electrical fault detection ecosystem composed of mesh-connected ESP32 sub-meter nodes operating via peer-to-peer architecture. Each pole node measures voltage, current, frequency, THD, and waveform deviations. Data is cryptographically authenticated via Axonis blockchain with DID per node. AI engine assigns fault risk scores and triggers smart contracts for automated response. Results rendered in real-time 3D Digital Twin (Unity3D + TouchDesigner) mapped to GPS coordinates. No SIM card or continuous internet required — replaces expensive SCADA systems for underserved communities.",
  tags: ["ESP32", "LoRa Mesh", "Axonis Blockchain", "AI Fault Detection", "Unity3D", "Smart Contracts"],
  badges: ["Patent Pending", "AutoBIT Flagship"],
};

// SECONDARY_PROJECTS — icons must only be: Factory | Gauge | Rocket
export const SECONDARY_PROJECTS = [
  {
    icon: "Factory" as const,
    title: "MineSafe AI",
    description:
      "AI-powered safety intelligence engine for high-risk mining environments. ML-driven predictive hazard detection, real-time machine vision monitoring, and automated threshold-based safety alerts. Engine product under AutoBIT's Safety & Truth Platform.",
    tag: "Patent Pending",
    tech: ["ML Safety Engine", "Machine Vision", "Edge AI", "AutoBIT Platform"],
  },
  {
    icon: "Rocket" as const,
    title: "EARLYNX — AI Cancer Screening",
    description:
      "Non-invasive AI diagnostic prototype using sensor fusion to analyze saliva samples for early cancer detection. Model consultant and developer. Student team achieved CHAMPION at 2025 regional innovation competition.",
    tag: "🏆 Champion 2025",
    tech: ["Embedded AI", "Sensor Fusion", "Medical Grade", "CNN Model"],
  },
  {
    icon: "Gauge" as const,
    title: "AIR FILTRATION — Piggery IoT",
    description:
      "Smart air quality filtration device for piggery environments using Arduino Uno, MQ137 gas sensor, I2C LCD, and fan control with activated charcoal filter. Verified by DOST. CHAMPION in Innovation category 2025.",
    tag: "🏆 Champion 2025",
    tech: ["Arduino Uno", "MQ137", "I2C LCD", "DOST Verified"],
  },
];

// TECH_STACK — icons must only be: Bot | Settings | Cpu | Eye | Code | Cloud | Box | Radio
export const TECH_STACK = [
  {
    category: "AutoBIT Core",
    icon: "Bot" as const,
    items: ["GRIDSONAR", "MineSafe AI", "Axonis Protocol", "Safety & Truth Platform", "3D Digital Twin"],
  },
  {
    category: "Embedded & Edge",
    icon: "Cpu" as const,
    items: ["ESP32 / ESP8266", "STM32", "Arduino", "Raspberry Pi", "ARM Cortex", "LoRa / ESP-NOW"],
  },
  {
    category: "AI & Vision",
    icon: "Eye" as const,
    items: ["OpenCV", "CNN / YOLO", "TensorFlow Lite", "Thermal Imaging", "MediaPipe", "Matlab"],
  },
  {
    category: "Blockchain & Protocols",
    icon: "Radio" as const,
    items: ["Axonis Protocol", "DID Authentication", "Smart Contracts", "MQTT", "Firebase", "Modbus"],
  },
  {
    category: "Robotics & Control",
    icon: "Settings" as const,
    items: ["ROS2", "Autonomous Navigation", "Sensor Fusion", "Thermal ML", "MoveIt", "Gazebo"],
  },
  {
    category: "Languages",
    icon: "Code" as const,
    items: ["Python", "C++ / C / C#", "Embedded C", "Android Java/Kotlin", "Unity3D C#", "Bash"],
  },
  {
    category: "Cloud & Backend",
    icon: "Cloud" as const,
    items: ["Firebase", "PostgreSQL / Neon", "REST APIs", "Docker", "AWS IoT", "InfluxDB"],
  },
  {
    category: "Hardware & Design",
    icon: "Box" as const,
    items: ["PCB Design", "KiCad", "Sensor Integration", "Power Electronics", "Circuit Design", "3D Printing"],
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Problem Discovery",
    description:
      "Understand the real-world constraints — environment, budget, hardware requirements, and risk factors. Every AutoBIT project starts with deep problem analysis before a single line of code is written.",
  },
  {
    number: "02",
    title: "Design & Simulation",
    description:
      "Circuit design, firmware architecture, and AI model planning. ROS2 Gazebo simulation for robotics. SPICE for electronics. 3D mockups for visualization interfaces like GRIDSONAR's Digital Twin.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Prototype first version, deploy to real environment, measure performance. Iterate fast. All AutoBIT products are tested under real conditions — not just lab benches.",
  },
  {
    number: "04",
    title: "Deploy & Document",
    description:
      "Production deployment with full technical documentation, schematics, and code repositories. Ongoing support and monitoring. Built to run without us watching it.",
  },
];

export const EDUCATION = {
  degree: "Bachelor of Science in Computer Engineering",
  institution: PERSONAL.university,
  year: PERSONAL.graduationYear,
  coursework: "Digital Systems, Embedded Systems, Control Systems, Robotics, Computer Vision",
};

export const ACHIEVEMENTS = [
  {
    title: "🏆 EARLYNX — Regional Innovation Champion",
    description:
      "AI breast cancer screening device won CHAMPION at regional competition (2025). Served as model consultant and AI developer for the student team.",
    year: "2025",
  },
  {
    title: "🏆 AIR FILTRATION — Innovation Category Champion",
    description:
      "Smart piggery air filtration system using Arduino, MQ137, and activated charcoal filter. Won CHAMPION in Innovation category. Verified by DOST.",
    year: "2025",
  },
  {
    title: "GRIDSONAR — Patent Pending",
    description:
      "Patent application filed for GRIDSONAR: Mesh-Based Self-Healing Electrical Grid Fault Detection and AI 3D Visualization System.",
    year: "2025",
  },
  {
    title: "MineSafe AI — Patent Pending",
    description:
      "Patent application filed for MineSafe AI mining safety engine under AutoBIT's Safety & Truth Platform.",
    year: "2025",
  },
  {
    title: "Robotics Regional Championship + National Qualification",
    description:
      "Led team to 2019 Robotics Regional Championship with national qualification. Also won regional Desktop Publishing title.",
    year: "2019",
  },
  {
    title: "ITECHSOFTWARE — Top-5 Tech Business",
    description:
      "Ranked Top-5 tech service business in Surigao del Norte based on Google Rating. Served clients across hardware, software, and embedded systems.",
    year: "2020–2024",
  },
];

export const NAV_ITEMS = [
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#technical_stack" },
  { label: "Process", href: "#process" },
  { label: "Background", href: "#experience" },
];
