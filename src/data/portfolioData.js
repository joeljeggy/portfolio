export const portfolioData = {
  personal: {
    name: "Joel J.",
    title: "Senior Full-Stack Architect & AI Systems Engineer",
    bio: "Passionate engineer building high-scalability web applications, intelligent AI integrations, and cloud infrastructure with exceptional UI/UX standards.",
    status: "Available for high-impact roles & consulting",
    location: "Global / Remote",
    email: "joel@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    resumeUrl: "#resume",
    showHostingBadge: false,
    hostingBadgeText: "Cloudflare Pages"
  },
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Projects Completed", value: "40+" },
    { label: "GitHub Stars", value: "1.2k+" },
    { label: "Production Uptime", value: "99.99%" }
  ],
  skillCategories: [
    {
      name: "Frontend Architecture",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js / WebGL", "Vite", "Redux Toolkit"]
    },
    {
      name: "Backend & Systems",
      skills: ["Node.js", "Python", "Go", "GraphQL", "REST APIs", "PostgreSQL", "Redis", "Kafka"]
    },
    {
      name: "Cloud & AI Infrastructure",
      skills: ["Cloudflare Workers", "Docker", "Kubernetes", "AWS", "LangChain / LLMs", "PyTorch", "CI/CD Pipelines"]
    }
  ],
  projects: [
    {
      id: "ai-dashboard",
      title: "OmniAI Insights Platform",
      subtitle: "Real-time AI telemetry & analytics engine with live vector query visualizer.",
      category: "AI & ML",
      image: "/images/ai_dashboard.jpg",
      featured: true,
      description: "A enterprise-grade AI monitoring system providing real-time model telemetry, token usage tracking, and interactive vector search visualization.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "Pinecone", "Cloudflare Workers"],
      metrics: ["Reduced latency by 45%", "Handles 10M+ daily events", "99.9% Uptime"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: "cloud-devops",
      title: "NexusCloud Infrastructure Monitor",
      subtitle: "Multi-cloud Kubernetes cluster observability and incident management hub.",
      category: "Cloud & DevOps",
      image: "/images/cloud_devops.jpg",
      featured: true,
      description: "High-performance dashboard for monitoring distributed cloud microservices with sub-second alert dispatch and interactive node maps.",
      tech: ["Next.js", "Go", "Docker", "Prometheus", "Grafana", "Tailwind CSS"],
      metrics: ["Instant alerting under 200ms", "Monitors 500+ microservices"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: "ecommerce-app",
      title: "Aura Luxury Commerce Platform",
      subtitle: "Next-gen headless e-commerce store with 3D product previews and instant checkout.",
      category: "Fullstack",
      image: "/images/ecommerce_app.jpg",
      featured: true,
      description: "Ultra-fast headless commerce platform featuring dynamic dark glassmorphism UI, real-time inventory sync, and localized checkout.",
      tech: ["React", "Vite", "Stripe API", "GraphQL", "Tailwind CSS", "Node.js"],
      metrics: ["Lighthouse score 99/100", "2.8x conversion increase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ],
  experience: [
    {
      period: "2024 — Present",
      role: "Lead Full-Stack & AI Architect",
      company: "Apex Tech Labs",
      description: "Architecting cloud-native web applications and deploying fine-tuned generative AI pipelines for enterprise clients.",
      skills: ["React", "Python", "Cloudflare Pages", "LLM Integration"]
    },
    {
      period: "2022 — 2024",
      role: "Senior Frontend Engineer",
      company: "Vanguard Digital",
      description: "Led frontend modernization across 5 core SaaS products, introducing dark mode design systems and performance optimizations.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"]
    },
    {
      period: "2020 — 2022",
      role: "Full-Stack Software Developer",
      company: "CloudScale Systems",
      description: "Built microservices APIs, continuous deployment pipelines, and real-time dashboard analytics.",
      skills: ["Node.js", "Docker", "PostgreSQL", "Redis"]
    }
  ],
  terminalCommands: {
    help: "Available commands: bio, skills, projects, contact, experience, clear",
    bio: "Joel J. — Senior Architect building high-performance web apps & AI systems.",
    skills: "React, Next.js, Node.js, Python, TypeScript, Tailwind CSS, Cloudflare Workers, Docker, LLMs",
    projects: "1. OmniAI Insights Platform | 2. NexusCloud Infrastructure Monitor | 3. Aura Luxury Commerce Platform",
    contact: "Email: joel@example.com | GitHub: github.com | LinkedIn: linkedin.com",
    experience: "Lead Architect @ Apex Tech Labs (2024-Present) | Senior Engineer @ Vanguard (2022-2024)"
  }
};
