export type Project = {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  problem: string;
  solution: string;
  features: string[];
  engineering: string;
};

export const profile = {
  name: "Suraj Kumar Gupta",
  shortName: "Suraj Gupta",
  role: "Full-Stack Developer · AI & LLM Engineer · Machine Learning Enthusiast",
  intro: "I’m a Computer Science engineering student focused on building production-oriented full-stack applications and AI-powered systems. I enjoy working across product interfaces, backend architecture, retrieval systems, and practical machine learning.",
  email: "surajgupta7070031833@gmail.com",
  location: "India · Remote Friendly",
  links: {
    github: "https://github.com/Surajgupta001",
    linkedin: "https://www.linkedin.com/in/suraj-gupta-15634028a/",
    leetcode: "https://leetcode.com/u/neZEZlegAW/",
  },
};

export const stats = [
  { value: 15, suffix: "+", label: "Projects" },
  { value: 500, suffix: "+", label: "DSA Problems" },
  { value: 8, suffix: "+", label: "AI/ML Models" },
  { value: 5, suffix: "+", label: "LLM Applications" },
  { value: 30, suffix: "+", label: "GitHub Repositories" },
];

export const projects: Project[] = [
  {
    name: "GoCart",
    category: "Full-Stack E-Commerce",
    description: "A modern multi-vendor marketplace with buyer, seller, and admin workflows, secure payments, AI-assisted product creation, and a scalable PostgreSQL backend.",
    technologies: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Prisma", "PostgreSQL", "Stripe", "Clerk", "ImageKit", "OpenAI SDK"],
    github: "https://github.com/Surajgupta001/NEXT-JS-PROJECTS/tree/main/gocart",
    live: "https://gocart-drab.vercel.app/",
    problem: "Multi-vendor commerce requires distinct user workflows, trustworthy payments, and reliable inventory data without fragmenting the experience.",
    solution: "A unified marketplace architecture that separates buyer, seller, and admin responsibilities while sharing a scalable data layer.",
    features: ["Buyer, seller, and admin workflows", "Secure payment flow", "AI-assisted product creation", "Media management"],
    engineering: "Designing role-aware workflows and keeping product, order, payment, and media state consistent across the application.",
  },
  {
    name: "J.A.R.V.I.S. OS v4.0",
    category: "AI Assistant",
    description: "An autonomous voice-enabled AI assistant combining LLMs, RAG, web search, voice synthesis, and desktop automation.",
    technologies: ["Python", "LangChain", "Groq", "FAISS", "Sentence Transformers", "Streamlit", "Edge-TTS"],
    github: "https://github.com/Surajgupta001/JARVIS",
    problem: "Useful assistants need context, current information, voice interaction, and action-taking capabilities rather than a single chat interface.",
    solution: "An orchestrated assistant that combines retrieval, search, speech, and desktop tools behind a unified interaction flow.",
    features: ["Voice input and synthesis", "Retrieval-augmented answers", "Web search", "Desktop automation"],
    engineering: "Coordinating multiple AI and system tools while maintaining useful context and responsive interaction.",
  },
  {
    name: "Storage Hub",
    category: "Cloud Platform",
    description: "A modern cloud storage platform for uploading, organizing, searching, sharing, and analyzing files.",
    technologies: ["Next.js", "React", "TypeScript", "Appwrite", "Tailwind CSS", "shadcn/ui", "Zod", "Recharts"],
    github: "https://github.com/Surajgupta001/NEXT-JS-PROJECTS/tree/main/storage-hub",
    live: "https://storage-hub-navy.vercel.app/",
    problem: "File-heavy workflows become difficult when upload, organization, discovery, sharing, and usage insight live in separate tools.",
    solution: "A focused cloud workspace that brings the core file lifecycle into one responsive interface.",
    features: ["File uploads and organization", "Search and filtering", "Sharing workflows", "Storage analytics"],
    engineering: "Handling file metadata, validation, storage operations, responsive search, and clear visualization of usage data.",
  },
  {
    name: "RAG Chatbot",
    category: "LLM / RAG",
    description: "An end-to-end document intelligence system that lets users upload documents and interact with them through Retrieval-Augmented Generation.",
    technologies: ["Python", "FastAPI", "Streamlit", "LangChain", "Groq", "FAISS", "Hugging Face", "Sentence Transformers", "Docker"],
    github: "https://github.com/Surajgupta001/rag-chatbot",
    live: "https://rag-chatbot-njoo.onrender.com/",
    problem: "General-purpose language models cannot reliably answer questions grounded in private, user-provided documents.",
    solution: "A document ingestion and retrieval pipeline that grounds generated answers in relevant source content.",
    features: ["Document upload and processing", "Semantic retrieval", "Grounded conversations", "Containerized deployment"],
    engineering: "Balancing chunking, embeddings, vector retrieval, context construction, and generation quality in one pipeline.",
  },
  {
    name: "HYBRID-RAG",
    category: "AI / RAG Systems",
    description: "An advanced retrieval system combining vector search, knowledge graphs, and LLM-powered query routing.",
    technologies: ["Python", "Gemini", "ChromaDB", "NetworkX", "Knowledge Graphs", "RAG"],
    github: "https://github.com/Surajgupta001/HYBRID-RAG",
    problem: "Vector similarity alone can miss explicit relationships and multi-hop context in complex knowledge queries.",
    solution: "A hybrid retrieval approach that combines semantic similarity with graph relationships and query-aware routing.",
    features: ["Vector search", "Knowledge graph retrieval", "LLM query routing", "Hybrid context assembly"],
    engineering: "Combining heterogeneous retrieval signals into relevant, coherent context without unnecessary complexity.",
  },
  {
    name: "AI Resume Builder",
    category: "Full-Stack AI",
    description: "An AI-powered platform for creating, enhancing, managing, and publishing professional resumes.",
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Tailwind CSS", "Gemini API", "ImageKit"],
    github: "https://github.com/Surajgupta001/MERN-STACK-PROJECT/tree/main/AI%20Resume%20Builder",
    live: "https://mern-stack-project-1-sxrm.onrender.com",
    problem: "Creating a polished resume requires both structured content management and careful, role-specific writing.",
    solution: "A full-stack editor that pairs reusable resume data with AI-assisted content improvement and publishing.",
    features: ["Resume creation and management", "AI writing assistance", "Media handling", "Publishable output"],
    engineering: "Synchronizing editable structured content, AI suggestions, user state, and published presentation.",
  },
  {
    name: "ML Pipeline with CI/CD",
    category: "Machine Learning & MLOps",
    description: "An end-to-end machine learning pipeline with automated training, Dockerization, CI/CD, and AWS deployment.",
    technologies: ["Python", "Scikit-Learn", "Docker", "GitHub Actions", "AWS EC2", "Amazon ECR", "Flask", "Pandas", "NumPy"],
    github: "https://github.com/Surajgupta001/ML-Project-CICD",
    problem: "A model is not production-ready when training, packaging, testing, and deployment are manual and disconnected.",
    solution: "An automated path from data preparation and model training to containerized cloud deployment.",
    features: ["Automated training pipeline", "Docker packaging", "CI/CD workflow", "AWS deployment"],
    engineering: "Making the machine-learning lifecycle repeatable across local development, continuous integration, and deployment.",
  },
];

export const skillGroups = [
  { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Responsive UI Design", "shadcn/ui", "Framer Motion"] },
  { name: "Backend", skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Authentication & Authorization", "WebSockets", "Server Actions", "RBAC"] },
  { name: "Databases", skills: ["MongoDB", "PostgreSQL", "SQL", "Prisma", "Mongoose", "Neon PostgreSQL", "Supabase", "Convex", "Redis", "FAISS", "ChromaDB"] },
  { name: "AI & LLM", skills: ["LangChain", "LangGraph", "RAG", "Hybrid RAG", "Knowledge Graph RAG", "Prompt Engineering", "Vector Embeddings", "Semantic Search", "AI Agents", "Tool Calling"] },
  { name: "Machine Learning", skills: ["Scikit-Learn", "TensorFlow", "Data Preprocessing", "Feature Engineering", "Model Training", "Model Evaluation", "MLOps"] },
  { name: "Cloud & DevOps", skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Vercel", "Appwrite", "ImageKit", "Clerk", "Stripe"] },
  { name: "Programming", skills: ["JavaScript", "TypeScript", "Python", "C++", "SQL"] },
  { name: "CS Fundamentals", skills: ["Data Structures & Algorithms", "Problem Solving", "OOP", "System Design", "Database Design", "Operating Systems", "Computer Networks"] },
];

export const journey = [
  { year: "2021", title: "Started Programming Journey", description: "C++, programming fundamentals, OOP, problem solving." },
  { year: "2021–22", title: "Data Structures & Algorithms", description: "Solved 500+ DSA problems." },
  { year: "2022", title: "Web Development Foundations", description: "HTML, CSS, JavaScript and responsive interfaces." },
  { year: "2022–23", title: "MERN Stack Development", description: "React, Node.js, Express and MongoDB." },
  { year: "2023", title: "Backend & Cloud Development", description: "REST APIs, authentication, databases, Redis and deployment." },
  { year: "2023–24", title: "Machine Learning Exploration", description: "Python, ML, data preprocessing, training and evaluation." },
  { year: "2024", title: "LLMs & RAG Systems", description: "LLMs, embeddings, vector databases, LangChain and RAG." },
  { year: "2024–Present", title: "Building Full-Stack AI Applications", description: "AI applications, RAG systems, AI assistants, MLOps and system design.", current: true },
];

export const focusAreas = ["Full-Stack Engineering", "AI Engineering", "LLM Applications", "RAG Systems", "System Design", "MLOps"];
export const coreStack = ["Next.js / React", "TypeScript", "Node.js / Express", "Python", "PostgreSQL / MongoDB", "LangChain / LangGraph", "Docker / CI/CD"];
