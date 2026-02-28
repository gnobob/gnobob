// ============================================================
// PORTFOLIO DATA — Edit values here to update your portfolio
// ============================================================

export const PERSONAL = {
  name: "Domz Lillo",
  title: "Computer Engineer",
  email: "email@example.com", // [REPLACE]
  location: "Your City", // [REPLACE]
  linkedin: "#", // [REPLACE]
  github: "#", // [REPLACE]
  cvLink: "#", // [REPLACE]
  university: "Your University", // [REPLACE]
  graduationYear: "2024", // [REPLACE]
};

export const HERO = {
  badge: "Available for Projects",
  headline: ["Robotics systems.", "IoT infrastructure.", "Built at scale."],
  subheadline:
    "Computer engineer specializing in embedded systems, industrial automation, and edge AI deployment. From prototype to production-grade hardware.",
  stats: [
    { number: "5+", label: "Years Experience" },
    { number: "ROS2", label: "Robotics Framework" },
    { number: "PLC", label: "Industrial Control" },
    { number: "Edge AI", label: "On-Device ML" },
  ],
};

export const MARQUEE_ITEMS = [
  "ROS2 · Robot Operating System",
  "PLC Programming · Siemens · Allen-Bradley",
  "Embedded Linux · Raspberry Pi · Jetson",
  "Computer Vision · OpenCV · Edge AI",
  "Industrial IoT · MQTT · Modbus",
  "PCB Design · Electronics",
  "Python · C++ · Rust",
  "CAD · Fusion 360 · SolidWorks",
];

export const EXPERTISE = [
  {
    icon: "Cpu" as const,
    title: "Robotics & Automation",
    description:
      "ROS2-based robot systems, autonomous navigation, manipulation planning, and multi-robot coordination. Remote commissioning and debugging.",
    tags: ["ROS2", "Navigation", "Manipulation", "Gazebo"],
  },
  {
    icon: "Zap" as const,
    title: "Industrial IoT & PLC",
    description:
      "PLC programming for manufacturing control systems. SCADA integration, sensor networks, and real-time data pipelines to cloud platforms.",
    tags: ["Siemens TIA", "Modbus", "MQTT", "OPC-UA"],
  },
  {
    icon: "Eye" as const,
    title: "Computer Vision & AI",
    description:
      "Edge AI for quality inspection, object detection, and real-time video analytics. Model optimization for embedded deployment on Jetson and Coral.",
    tags: ["OpenCV", "TensorRT", "YOLO", "Edge TPU"],
  },
  {
    icon: "Workflow" as const,
    title: "Embedded Systems",
    description:
      "Firmware development for microcontrollers and single-board computers. Linux kernel configuration, real-time systems, and hardware interfacing.",
    tags: ["ARM Cortex", "STM32", "ESP32", "Linux RT"],
  },
  {
    icon: "Boxes" as const,
    title: "PCB Design & Electronics",
    description:
      "Circuit design, PCB layout, component selection, and prototype assembly. Experience with motor controllers, sensor boards, and power systems.",
    tags: ["KiCad", "Eagle", "SMD Assembly", "Power Electronics"],
  },
  {
    icon: "Network" as const,
    title: "System Integration",
    description:
      "Connecting industrial equipment to modern software stacks. APIs, databases, dashboards, and cloud infrastructure for operational visibility.",
    tags: ["REST APIs", "TimescaleDB", "Grafana", "AWS IoT"],
  },
];

export const FEATURED_PROJECT = {
  title: "EARLYNX",
  subtitle: "AI-Powered Breast Cancer Screening Device",
  category: "Medical Device · Patent Awarded",
  description:
    "Non-invasive diagnostic prototype using AI vision and sensor fusion to analyze saliva samples for early cancer detection. National competition winner. Patent granted.",
  tags: ["Embedded AI", "Medical Grade", "Patented", "Competition Winner"],
  badges: ["National Winner", "Patent Awarded"],
};

export const SECONDARY_PROJECTS = [
  {
    icon: "Factory" as const,
    title: "Industrial Robot Cell",
    description:
      "Automated pick-and-place system with vision-guided grasping. Deployed in electronics manufacturing facility.",
    tag: "Production Deployed",
    tech: ["ROS2", "MoveIt", "Intel RealSense"],
  },
  {
    icon: "Gauge" as const,
    title: "PLC-to-Cloud Pipeline",
    description:
      "Real-time data bridge from factory floor PLCs to cloud dashboard. 10+ machines monitored, alerts, and analytics.",
    tag: "Live System",
    tech: ["Siemens S7", "MQTT", "InfluxDB"],
  },
  {
    icon: "Rocket" as const,
    title: "Autonomous Rover Prototype",
    description:
      "GPS-based navigation and obstacle avoidance for agricultural application. Competition entry, fully functional.",
    tag: "Prototype",
    tech: ["Jetson Nano", "LiDAR", "ROS2 Nav2"],
  },
];

export const TECH_STACK = [
  { category: "Robotics", icon: "Bot" as const, items: ["ROS2 Humble/Iron", "MoveIt 2", "Nav2", "Gazebo", "RViz", "rclpy/rclcpp"] },
  { category: "Industrial Control", icon: "Settings" as const, items: ["Siemens TIA Portal", "Allen-Bradley Studio 5000", "Modbus RTU/TCP", "OPC-UA", "SCADA"] },
  { category: "Embedded & Edge", icon: "Cpu" as const, items: ["Jetson Nano/Orin", "Raspberry Pi", "ESP32/STM32", "Embedded Linux", "RTOS", "Buildroot/Yocto"] },
  { category: "AI & Vision", icon: "Eye" as const, items: ["OpenCV", "TensorFlow Lite", "TensorRT", "YOLO", "MediaPipe", "Edge TPU"] },
  { category: "Languages", icon: "Code" as const, items: ["Python", "C++", "Rust", "Bash", "Ladder Logic", "Structured Text"] },
  { category: "Cloud & Backend", icon: "Cloud" as const, items: ["AWS IoT Core", "Azure IoT Hub", "Docker", "PostgreSQL", "InfluxDB", "Grafana"] },
  { category: "CAD & Design", icon: "Box" as const, items: ["Fusion 360", "SolidWorks", "KiCad", "FreeCAD", "3D Printing"] },
  { category: "Communication", icon: "Radio" as const, items: ["MQTT", "ZeroMQ", "DDS", "CAN Bus", "I2C/SPI", "Serial/UART"] },
];

export const PROCESS_STEPS = [
  { number: "01", title: "Requirements & Constraints", description: "Hardware specs, environmental conditions, budget, and timeline. Clear documentation before design begins." },
  { number: "02", title: "Design & Simulation", description: "CAD modeling, circuit design, and virtual testing. ROS2 Gazebo simulation for robotics. SPICE for electronics." },
  { number: "03", title: "Prototype & Iteration", description: "Build first version. Test, measure, debug. Iterate on design based on real-world performance data." },
  { number: "04", title: "Deployment & Documentation", description: "Final build, commissioning, and handoff. Full technical documentation, schematics, and code repositories." },
];

export const EDUCATION = {
  degree: "Bachelor of Science in Computer Engineering",
  institution: PERSONAL.university,
  year: PERSONAL.graduationYear,
  coursework: "Digital Systems, Embedded Systems, Control Systems, Robotics",
};

export const ACHIEVEMENTS = [
  { title: "National Innovation Competition Winner", description: "EARLYNX AI diagnostic device — recognized for technical innovation and impact potential.", year: "2024" },
  { title: "Patent Awarded", description: "AI-based medical diagnostic system — patent granted for novel approach to non-invasive screening.", year: "2024" },
];

export const NAV_ITEMS = [
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#technical_stack" },
  { label: "Process", href: "#process" },
  { label: "Background", href: "#experience" },
];
