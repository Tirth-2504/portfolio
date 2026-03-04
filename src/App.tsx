import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Download, 
  ArrowUpRight,
  Terminal,
  Database,
  Cloud,
  Code2,
  Cpu
} from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBadge } from "./components/SkillBadge";

export default function App() {
  const projects = [
    {
      title: "EcoTrack AI",
      category: "Sustainability / AI",
      description: "A data-heavy platform that uses Gemini API to analyze corporate environmental reports and generate compliance scores. Features real-time carbon footprint visualization.",
      tech: ["Python", "FastAPI", "Gemini API", "D3.js", "PostgreSQL"],
      github: "#",
      process: {
        problem: "Mid-sized companies struggle to track and report their carbon footprint accurately to meet new 2026 environmental compliance laws, often relying on manual, error-prone spreadsheet data entry.",
        technologies: "Python, FastAPI (for high-performance async endpoints), Gemini API (for parsing unstructured PDF reports), PostgreSQL (for relational data integrity), and D3.js (for visualization).",
        features: [
          "Automated PDF report parsing via LLM",
          "Real-time carbon footprint dashboard",
          "Automated compliance score generation"
        ],
        challenges: "The Gemini API occasionally returned inconsistently formatted JSON when parsing highly complex, multi-column PDF tables from different corporate reporting standards.",
        solutions: "Implemented strict JSON schema validation using Pydantic. Added a retry mechanism with exponential backoff and refined system prompts to strictly enforce the output structure.",
        lessons: "LLMs are powerful but non-deterministic. Always build robust error handling and validation layers when integrating AI into traditional, strict data pipelines."
      }
    },
    {
      title: "Azure Sentinel Flow",
      category: "Cloud / DevOps",
      description: "Event-driven supply chain monitoring system built on Azure Functions. Uses Service Bus for message orchestration and provides a real-time dashboard for logistics tracking.",
      tech: [".NET 8", "C#", "Azure Functions", "Service Bus", "React"],
      github: "#",
      process: {
        problem: "Supply chain managers lacked real-time visibility into logistics events, causing delays in identifying bottlenecks.",
        technologies: ".NET 8, Azure Functions, Azure Service Bus, React, SignalR",
        features: [
          "Event-driven architecture",
          "Real-time logistics dashboard",
          "Automated alert routing"
        ],
        challenges: "Ensuring messages were processed in order and handling dead-letter queues effectively during high-traffic spikes.",
        solutions: "Implemented Azure Service Bus sessions to guarantee FIFO ordering and created a robust dead-letter queue monitoring system.",
        lessons: "Designing for failure is critical in distributed systems. Always assume components will fail and build resilient retry mechanisms."
      }
    },
    {
      title: "SecureID Manager",
      category: "Security / Compliance",
      description: "A decentralized identity management system focused on GDPR compliance. Implements zero-knowledge proofs for user verification without data exposure.",
      tech: ["TypeScript", "Node.js", "Cryptography", "SQLite", "Express"],
      github: "#"
    },
    {
      title: "AutoAudit Pro",
      category: "FinTech / Compliance",
      description: "Automated auditing tool for financial transactions. Uses machine learning to detect anomalies and flags potential compliance violations in real-time.",
      tech: ["Java", "Spring Boot", "TensorFlow", "SQL Server", "Docker"],
      github: "#"
    },
    {
      title: "EdgeSense IoT",
      category: "IoT / Data",
      description: "Dashboard for monitoring industrial IoT sensors at the edge. Optimized for low-latency data visualization and predictive maintenance alerts.",
      tech: ["Go", "MQTT", "InfluxDB", "React", "WebSockets"],
      github: "#"
    },
    {
      title: "EduPath Generator",
      category: "EdTech / AI",
      description: "Personalized learning path generator that adapts to student performance. Uses LLMs to curate resources and create custom study plans.",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Supabase"],
      github: "#"
    }
  ];

  const skills = [
    { name: "C# / .NET", level: "Advanced" },
    { name: "Java", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "JavaScript / TS", level: "Advanced" },
    { name: "SQL / T-SQL", level: "Advanced" },
    { name: "Azure", level: "Learning" },
    { name: "React", level: "Intermediate" },
    { name: "REST APIs", level: "Advanced" },
    { name: "Git / GitHub", level: "Advanced" },
    { name: "Linux", level: "Intermediate" }
  ];

  return (
    <div className="min-h-screen grid-bg">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif italic text-xl font-bold">TP.</div>
          <div className="hidden md:flex gap-8 text-[11px] font-mono uppercase tracking-widest">
            <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
            <a href="#projects" className="hover:opacity-50 transition-opacity">Projects</a>
            <a href="#skills" className="hover:opacity-50 transition-opacity">Skills</a>
            <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-serif italic text-sm opacity-50 mb-4 uppercase tracking-[0.3em]"
              >
                Software Development Student
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-8"
              >
                TIRTH<br />PATEL
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl max-w-md opacity-80 leading-relaxed font-medium"
              >
                Building robust backend services and data-heavy applications with a focus on compliance and environmental impact.
              </motion.p>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-mono opacity-60">
                  <MapPin size={14} /> Red Deer, AB, Canada
                </div>
                <div className="flex items-center gap-2 text-xs font-mono opacity-60">
                  <Mail size={14} /> tirth7411@gmail.com
                </div>
                <div className="flex items-center gap-2 text-xs font-mono opacity-60">
                  <Phone size={14} /> (587) 377-6738
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com" className="p-3 border border-line hover:bg-ink hover:text-bg transition-all"><Github size={20} /></a>
                <a href="https://linkedin.com" className="p-3 border border-line hover:bg-ink hover:text-bg transition-all"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="mb-32">
          <div className="flex justify-between items-end mb-12 border-b border-line pb-6">
            <h2 className="text-4xl font-bold tracking-tight">SELECTED PROJECTS</h2>
            <div className="font-serif italic opacity-50 text-sm">2024 — 2026</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {projects.map((project: any, idx) => (
              <ProjectCard 
                key={idx} 
                title={project.title}
                category={project.category}
                description={project.description}
                tech={project.tech}
                github={project.github}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
                process={project.process}
              />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold tracking-tight mb-6">TECHNICAL STACK</h2>
              <p className="opacity-60 leading-relaxed mb-8">
                Specializing in the .NET ecosystem with a strong foundation in distributed systems and cloud architecture.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border border-line bg-white/30">
                  <Code2 className="opacity-40" />
                  <span className="text-sm font-bold">Backend First Architecture</span>
                </div>
                <div className="flex items-center gap-4 p-4 border border-line bg-white/30">
                  <Database className="opacity-40" />
                  <span className="text-sm font-bold">Relational Data Modeling</span>
                </div>
                <div className="flex items-center gap-4 p-4 border border-line bg-white/30">
                  <Cloud className="opacity-40" />
                  <span className="text-sm font-bold">Azure Cloud Solutions</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, idx) => (
                <SkillBadge key={idx} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Terminal size={24} /> EDUCATION
            </h2>
            <div className="border-l-2 border-ink pl-6 py-2">
              <div className="text-xl font-bold">Diploma in Software Development</div>
              <div className="font-serif italic opacity-60">Red Deer Polytechnic, Canada</div>
              <div className="mt-4 text-sm opacity-70 leading-relaxed">
                Focus on Object-Oriented Programming, Data Structures, Software Engineering, and Distributed Systems.
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Cpu size={24} /> BACKGROUND
            </h2>
            <div className="border-l-2 border-line pl-6 py-2">
              <div className="text-xl font-bold">Kitchen Helper</div>
              <div className="font-serif italic opacity-60">Firehouse Subs | 2024 — 2025</div>
              <div className="mt-4 text-sm opacity-70 leading-relaxed">
                Developed strong reliability, attention to detail, and team collaboration skills in high-pressure environments.
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="pt-20 border-t border-line">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-sm font-mono opacity-50 uppercase tracking-widest mb-2">Available for opportunities</div>
              <h2 className="text-4xl font-bold tracking-tighter">LET'S BUILD SOMETHING.</h2>
            </div>
            <a 
              href="mailto:tirth7411@gmail.com" 
              className="group flex items-center gap-4 bg-ink text-bg px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              GET IN TOUCH <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
          <div className="mt-20 flex justify-between items-center text-[10px] font-mono opacity-40 uppercase tracking-widest">
            <div>© 2026 TIRTH PATEL</div>
            <div>BUILT WITH PRECISION</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
