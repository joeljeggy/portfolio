export const portfolioData = {
  personal: {
    name: "Joel Jeggy",
    title: "Computer Science Engineer & AI Systems Developer",
    headline: "Building AI systems, embedded hardware, and intelligent automation.",
    bio: "Computer Science undergraduate specializing in persistent LLM memory architectures, IoT hardware systems, computer vision pipelines, and high-performance web applications.",
    status: "B.Tech CSE @ MACE Kothamangalam (2023–2027)",
    location: "Aluva, Kerala, India",
    email: "joeljeggy@gmail.com",
    phone: "+91 8075528254",
    github: "https://github.com/joeljeggy",
    leetcode: "https://leetcode.com/u/joeljeggy/",
    linkedin: "https://linkedin.com/in/joel-jeggy",
    twitter: "https://github.com/joeljeggy",
    resumeUrl: "/resume.pdf",
    showHostingBadge: false
  },

  codingStats: {
    github: {
      username: "joeljeggy",
      url: "https://github.com/joeljeggy",
      statsUrl: "https://github-readme-stats.vercel.app/api?username=joeljeggy&theme=dark&show_icons=true&hide_border=true&bg_color=0a0a0a&text_color=a1a1aa&title_color=ffffff&icon_color=ffffff",
      topLangsUrl: "https://github-readme-stats.vercel.app/api/top-langs/?username=joeljeggy&theme=dark&hide_border=true&bg_color=0a0a0a&text_color=a1a1aa&title_color=ffffff&layout=compact"
    },
    leetcode: {
      username: "joeljeggy",
      url: "https://leetcode.com/u/joeljeggy/",
      totalSolved: 26,
      easySolved: 9,
      mediumSolved: 15,
      hardSolved: 2,
      categories: [
        { name: "Array", count: 12, size: 48 },
        { name: "Hash Table", count: 9, size: 42 },
        { name: "DFS", count: 7, size: 38 },
        { name: "Tree", count: 6, size: 34 },
        { name: "String", count: 5, size: 32 },
        { name: "Dynamic Programming", count: 4, size: 28 },
        { name: "Two Pointers", count: 4, size: 28 },
        { name: "Matrix", count: 3, size: 24 },
        { name: "Bit Manipulation", count: 2, size: 22 }
      ]
    }
  },

  highlights: [
    { title: "Research Paper", desc: "Persistent Semantic Memory for Multi-Agent LLMs", icon: "FileText" },
    { title: "NASA Space Apps Mentor", desc: "Mentored competing student teams at MACE", icon: "Award" },
    { title: "Embedded Systems", desc: "ESP32, ESP8266, Arduino & Sensor Interfacing", icon: "Cpu" },
    { title: "LLMs & RAG", desc: "Knowledge Banks, Vector Search & Decay Engines", icon: "Brain" },
    { title: "Home Automation", desc: "Home Assistant, ESPHome & Cloudflare Tunnels", icon: "Home" },
    { title: "Computer Vision", desc: "Real-Time YOLO & Gemini Automated Video Alerts", icon: "Eye" }
  ],

  currentFocus: [
    "TempoRun Extension: Integrating real-time accelerometer step counting onto the ESP32 to automatically calibrate runner stride length."
  ],

  projects: [
    {
      id: "recall",
      title: "Recall",
      subtitle: "Persistent semantic memory layer for multi-agent LLM systems with knowledge & dialog banks.",
      category: "AI & ML",
      image: "/images/recall.png",
      featured: true,
      githubUrl: "https://github.com/joeljeggy/Recall-2.0",
      liveUrl: "https://recall.joeljeggy.dpdns.org/",
      problem: "Multi-agent LLM systems suffer from severe context window drift, exponential token cost bloat, and memory loss over long-running task executions.",
      solution: "Engineered a persistent memory layer organizing agent state into Knowledge, Dialogue, and Task banks powered by hybrid SentenceTransformer + BM25 vector search and Ebbinghaus memory decay algorithms.",
      architecture: `
+-------------------------------------------------------------------+
|                     Multi-Agent System Core                       |
+-------------------------------------------------------------------+
                                  |
                                  v
                +-----------------------------------+
                |     Hybrid Retrieval Pipeline     |
                |  (SentenceTransformers + BM25)    |
                +-----------------------------------+
                  /               |               \\
                 v                v                v
      +------------------+ +--------------+ +-----------------+
      |  Knowledge Bank  | | Dialogue Bank| |   Task Bank     |
      | (Facts & Schema) | | (Agent Chat) | | (Goal History)  |
      +------------------+ +--------------+ +-----------------+
                                  |
                                  v
                +-----------------------------------+
                |     Ebbinghaus Decay Engine       |
                |     R = e^(-t / S) Retention     |
                +-----------------------------------+
                                  |
                                  v
                +-----------------------------------+
                |   Flask SSE Real-time Dashboard   |
                +-----------------------------------+
`,
      tech: ["Python", "Flask", "NumPy", "Sentence Transformers", "BM25", "REST API", "SSE"],
      metrics: ["Outperformed hybrid RAG baselines", "Multi-agent memory layer", "Ebbinghaus decay engine"],
      decisions: [
        "Hybrid Vector + BM25 Search: Combining dense semantic embeddings with sparse keyword matching eliminated hallucinated context retrieval.",
        "Ebbinghaus Memory Decay: Applied mathematical decay R = e^(-t/S) to automatically prune low-relevance dialogue turns without manual truncation."
      ]
    },
    {
      id: "temporun",
      title: "TempoRun",
      subtitle: "ESP32 IoT treadmill workout synchronizer with real-time step counting for automatic stride length calibration.",
      category: "Embedded & IoT",
      image: "/images/tempo_run.png",
      featured: true,
      githubUrl: "https://github.com/joeljeggy/TempoRun",
      problem: "Treadmill workouts lack dynamic feedback matching workout intensity to runner pace and music rhythm without manual calibration.",
      solution: "Integrated an ESP32 microcontroller with accelerometer step-counting to automatically calibrate runner stride length, dynamically synchronizing treadmill motor speeds with Spotify track BPM.",
      architecture: `
+-----------------------+     REST API     +-----------------------+
|  Spotify Web API      | <-------------> |  Flask Python Backend |
|  (Track Audio Features)|                 |  (BPM & Stride Logic) |
+-----------------------+                 +-----------------------+
                                                      |
                                                   Wi-Fi / UDP
                                                      v
                                          +-----------------------+
                                          | ESP32 Microcontroller |
                                          | (Step Counter & PWM)  |
                                          +-----------------------+
                                                      |
                                                      v
                                          +-----------------------+
                                          |  Treadmill Stepper    |
                                          +-----------------------+
`,
      tech: ["C++", "Python", "Flask", "ESP32", "MPU6050 Accelerometer", "Spotify API"],
      metrics: ["Auto Stride Calibration", "Real-Time Step Counting", "Dynamic BPM Speed Matching"],
      decisions: [
        "Automatic Stride Length Calibration: Currently extending TempoRun with accelerometer step-counting to dynamically calculate stride length without manual user input.",
        "ESP32 Wi-Fi UDP Protocol: Selected lightweight UDP datagrams over HTTP polling to ensure sub-100ms treadmill motor response when track tempos change."
      ]
    },
    {
      id: "threat-detector",
      title: "Threat Detector",
      subtitle: "Real-time YOLO object detection with Gemini API footage analysis & Discord video alerts.",
      category: "Computer Vision & AI",
      image: "/images/threat_detector.jpg",
      featured: true,
      githubUrl: "https://github.com/joeljeggy/threat-detector",
      problem: "Standard security cameras trigger dozens of false positive motion alerts daily without intelligent threat contextualization.",
      solution: "Combined real-time YOLO human detection on local camera feeds with Gemini API video analysis, automatically compressing clips via ffmpeg and dispatching alert cards to Discord.",
      architecture: `
+----------------------+      OpenCV      +-----------------------+
|  RTSP Camera Stream  | -------------> | YOLO Detection Engine |
+----------------------+                  +-----------------------+
                                                      |
                                                 Human Event
                                                      v
+----------------------+      ffmpeg      +-----------------------+
| Discord Alert Channel| <------------- | Gemini Analysis &     |
| (Compressed Clip Card)|                 | Video Compression     |
+----------------------+                  +-----------------------+
`,
      tech: ["Python", "YOLO", "Gemini API", "ffmpeg", "Discord Webhooks", "OpenCV"],
      metrics: ["Sub-second human detection", "Zero false-alarm Discord alerts"],
      decisions: [
        "Two-Tiered Verification: YOLO performs instant low-compute filtering, invoking Gemini API only when humans are detected to save API token costs."
      ]
    },
    {
      id: "home-automation",
      title: "Home Automation",
      subtitle: "Centralized smart home controller running Home Assistant & encrypted remote access.",
      category: "Hardware & Cloud",
      image: "/images/home_automation.png",
      featured: true,
      githubUrl: "https://github.com/joeljeggy",
      problem: "Proprietary smart home devices require cloud lock-in and open port forwarding vulnerabilities for remote control.",
      solution: "Deployed a centralized Home Assistant and ESPHome infrastructure connected through a zero-trust Cloudflare Reverse Tunnel for encrypted remote management without exposing router ports.",
      architecture: `
+-----------------------+                 +-----------------------+
|  ESPHome / ESP32      | <-------------> | Home Assistant Core   |
|  Sensors & Relays     |    Local Wi-Fi  | (Automations Engine)  |
+-----------------------+                 +-----------------------+
                                                      |
                                             Cloudflare Tunnel (d)
                                                      v
                                          +-----------------------+
                                          | Encrypted Edge Gateway|
                                          | (Remote Mobile App)   |
                                          +-----------------------+
`,
      tech: ["Home Assistant", "ESPHome", "Cloudflare Reverse Tunnel", "YAML", "ESP32/ESP8266"],
      metrics: ["Encrypted Cloudflare Tunnel", "Zero port-forwarding exposure"],
      decisions: [
        "Cloudflare Tunneling: Replaced DDNS and open ports with Cloudflare Tunnel, securing remote access with TLS encryption and Access controls."
      ]
    }
  ],

  journey: [
    {
      year: "2021 — 2022",
      title: "Electronics & Embedded Hardware",
      desc: "Started building micro-controller systems with Arduino, ESP8266, and C++, building local sensor nodes and automated relays."
    },
    {
      year: "2023",
      title: "Computer Science Engineering @ MACE",
      desc: "Enrolled in B.Tech CSE at Mar Athanasius College of Engineering, Kothamangalam. Focused on core data structures, algorithms, and Python backend engineering."
    },
    {
      year: "2024",
      title: "AI, Computer Vision & Home Assistant",
      desc: "Architected real-time YOLO detection pipelines, Gemini video summarization, and deployed encrypted Home Assistant automation setups."
    },
    {
      year: "2025 — Present",
      title: "Multi-Agent LLMs & Persistent Memory",
      desc: "Engineered Recall (persistent semantic memory for multi-agent LLMs with knowledge/dialog banks and Ebbinghaus decay algorithms). Mentored teams at NASA Space Apps Challenge."
    }
  ],

  skills: {
    programming: ["Python", "C++", "C", "JavaScript", "YAML"],
    ai: ["LLMs", "RAG", "Embeddings", "Vector Search", "YOLO", "Gemini API", "Sentence Transformers", "BM25"],
    backend: ["Flask", "REST APIs", "SSE Streaming", "MongoDB", "Node.js"],
    embedded: ["ESP32", "ESP8266", "Arduino", "ESPHome", "Home Assistant", "Raspberry Pi"],
    tools: ["Git", "Docker", "Linux", "Cloudflare Tunnels", "VS Code", "Vite"]
  },

  experience: [
    {
      period: "2023 — 2027",
      role: "B.Tech in Computer Science & Engineering",
      institution: "Mar Athanasius College of Engineering, Kothamangalam",
      details: "Current CGPA: 7.84/10 (up to 6th semester). Specializing in AI memory architectures, computer vision, and embedded systems."
    },
    {
      period: "October 2025",
      role: "Technical Mentor",
      institution: "NASA Space Apps Challenge (MACE Kothamangalam)",
      details: "Mentored competing student teams for the international NASA Space Apps Challenge hackathon."
    }
  ],

  terminalCommands: {
    help: `Available commands:\n  help        - Display list of commands\n  bio         - View short biography\n  skills      - List technical skills & tech stack\n  projects    - View featured engineering projects\n  contact     - View contact details & social links\n  education   - View degree & academic details\n  clear       - Clear terminal screen`,
    bio: `Joel Jeggy\nComputer Science Engineer & AI Systems Developer\nB.Tech CSE @ MACE Kothamangalam (2023–2027)\nFocus: AI Persistent Memory, Computer Vision, Embedded IoT, High-Performance Web`,
    skills: `Programming: Python, C++, C, JavaScript, YAML\nAI / ML: LLMs, RAG, Embeddings, Vector Search, YOLO, Gemini API\nBackend & Hardware: Flask, MongoDB, Node.js, ESP32, ESP8266, Home Assistant, Docker`,
    projects: `Featured Projects:\n1. Recall - Persistent Semantic Memory for Multi-Agent LLMs\n2. Real-Time Threat Detector - YOLOv8 Computer Vision Pipeline\n3. Cloudflare-Tunneled Home Assistant Automation Gateway`,
    contact: `Email: joeljeggy@gmail.com\nGitHub: https://github.com/joeljeggy\nLinkedIn: https://linkedin.com/in/joel-jeggy\nLeetCode: https://leetcode.com/u/joeljeggy/`,
    education: `B.Tech in Computer Science & Engineering (2023–2027)\nMar Athanasius College of Engineering, Kothamangalam\nCurrent CGPA: 7.84/10`
  }
};
