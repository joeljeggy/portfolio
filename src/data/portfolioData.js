export const portfolioData = {
  personal: {
    name: "Joel Jeggy",
    title: "Computer Science Engineer & AI Systems Developer",
    bio: "Computer Science undergraduate specializing in persistent LLM memory architectures, IoT hardware systems, computer vision, and high-performance web applications.",
    status: "B.Tech CSE @ MACE Kothamangalam (2023–2027)",
    location: "Aluva, Kerala, India",
    email: "joeljeggy@gmail.com",
    phone: "+91 8075528254",
    github: "https://github.com/joeljeggy",
    linkedin: "https://linkedin.com/in/joel-jeggy",
    twitter: "https://github.com/joeljeggy",
    resumeUrl: "#resume",
    showHostingBadge: false,
    hostingBadgeText: "Cloudflare Pages"
  },
  stats: [
    { label: "B.Tech CGPA", value: "7.84" },
    { label: "Graduation", value: "2027" },
    { label: "Core Projects", value: "4+" },
    { label: "NASA Mentor", value: "2025" }
  ],
  skillCategories: [
    {
      name: "Programming Languages",
      skills: ["Python", "C++", "C", "JavaScript", "YAML"]
    },
    {
      name: "Web & Database Stack",
      skills: ["React", "Flask", "HTML5", "CSS3", "MongoDB", "REST APIs", "SSE Stream"]
    },
    {
      name: "AI, Hardware & IoT",
      skills: ["Gemini API", "YOLO", "SentenceTransformers", "ESP32/8266", "Arduino", "Raspberry Pi", "Home Assistant", "Cloudflare Tunnels"]
    }
  ],
  projects: [
    {
      id: "recall",
      title: "Recall 2.0",
      subtitle: "Persistent semantic memory layer for multi-agent LLM systems with knowledge & dialog banks.",
      category: "AI & ML",
      image: "/images/recall.jpg",
      featured: true,
      description: "Built a persistent semantic memory layer using knowledge, dialog, and task banks with hybrid SentenceTransformer cosine similarity and BM25 retrieval. Features Ebbinghaus-based memory decay, intent filtering, and a Flask SSE dashboard.",
      tech: ["Python", "Flask", "NumPy", "Sentence Transformers", "BM25", "REST API", "SSE"],
      metrics: ["Outperformed hybrid RAG baselines", "Multi-agent dialog & knowledge banks", "Ebbinghaus memory decay engine"],
      liveUrl: "https://github.com/joeljeggy/Recall-2.0",
      githubUrl: "https://github.com/joeljeggy/Recall-2.0"
    },
    {
      id: "threat-detector",
      title: "Threat Detector",
      subtitle: "Real-time YOLO object detection with Gemini API footage analysis & Discord video alerts.",
      category: "AI & ML",
      image: "/images/threat_detector.jpg",
      featured: true,
      description: "Automated video surveillance pipeline using YOLO for real-time human detection, analyzed recorded event clips with Gemini API, and dispatched compressed video alerts to Discord via webhooks.",
      tech: ["Python", "YOLO", "Gemini API", "ffmpeg", "Discord Webhooks", "OpenCV"],
      metrics: ["Sub-second human detection", "AI-summarized Discord video alerts"],
      liveUrl: "https://github.com/joeljeggy/threat-detector",
      githubUrl: "https://github.com/joeljeggy/threat-detector"
    },
    {
      id: "temporun",
      title: "TempoRun",
      subtitle: "ESP32 IoT treadmill workout synchronizer matching Spotify music BPM to running speeds.",
      category: "Fullstack",
      image: "/images/cloud_devops.jpg",
      featured: true,
      description: "Hardware/software fitness system integrating an ESP32 microcontroller that synchronizes Spotify music to treadmill workouts, dynamically adjusting speed based on song BPM using Flask, Gemini API, and Spotify Web API.",
      tech: ["C++", "Python", "Flask", "Gemini API", "Spotify API", "ESP32"],
      metrics: ["Dynamic BPM treadmill adjustment", "Hardware + Spotify API bridge"],
      liveUrl: "https://github.com/joeljeggy/TempoRun",
      githubUrl: "https://github.com/joeljeggy/TempoRun"
    },
    {
      id: "home-automation",
      title: "Home Automation & Cloudflare Tunnel",
      subtitle: "Centralized smart home controller running Home Assistant & encrypted remote access.",
      category: "Cloud & DevOps",
      image: "/images/ecommerce_app.jpg",
      featured: true,
      description: "Centralized home automation infrastructure deployed using Home Assistant and ESPHome with secure Cloudflare Reverse Tunneling for encrypted, zero-trust remote access.",
      tech: ["Home Assistant", "ESPHome", "Cloudflare Reverse Tunnel", "YAML", "ESP32/ESP8266"],
      metrics: ["Encrypted Cloudflare Tunnel", "Multi-sensor ESPHome setup"],
      liveUrl: "https://github.com/joeljeggy",
      githubUrl: "https://github.com/joeljeggy"
    }
  ],
  experience: [
    {
      period: "2023 — 2027",
      role: "B.Tech in Computer Science & Engineering",
      company: "Mar Athanasius College of Engineering (Kothamangalam)",
      description: "Current CGPA: 7.84/10 (up to 6th semester). Focusing on AI systems, embedded microcontrollers, and web development.",
      skills: ["Data Structures", "Algorithms", "C++", "Python", "Web Engineering"]
    },
    {
      period: "October 2025",
      role: "Technical Mentor",
      company: "NASA Space Apps Challenge",
      description: "Mentored competing student teams for the NASA Space Apps Challenge hackathon hosted at MACE Kothamangalam.",
      skills: ["Mentorship", "Problem Solving", "AI & Space Tech"]
    }
  ],
  terminalCommands: {
    help: "Available commands: bio, skills, projects, contact, education, clear",
    bio: "Joel Jeggy — CSE Undergrad @ MACE Kothamangalam (2023-2027). AI & Embedded Systems Developer.",
    skills: "Python, C++, C, JavaScript, React, Flask, MongoDB, Gemini API, YOLO, ESP32, Home Assistant",
    projects: "1. Recall 2.0 | 2. Threat Detector | 3. TempoRun | 4. Home Automation",
    contact: "Email: joeljeggy@gmail.com | Phone: +91 8075528254 | GitHub: github.com/joeljeggy",
    education: "B.Tech CSE @ Mar Athanasius College of Engineering, Kothamangalam (2023–2027) | CGPA: 7.84"
  }
};
