import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    num: "01",
    name: "Cloud OS",
    category: "Android / Cloud Computing / Runtime Orchestration",
    tech: "Kotlin, Jetpack Compose, Material Design 3, Node.js, REST APIs, JWT, Redis, Docker",
    desc: "An Android client for a cloud-oriented operating environment focused on remote runtime management and interaction between Android interfaces and backend infrastructure.",
    challenge: "Managing runtime state machine, session lifecycle, and authentication across distributed nodes.",
    visual: "CREATING → STARTING → RUNNING → STOPPING → TERMINATED",
    links: { live: "#", github: "#" },
  },
  {
    num: "02",
    name: "AirPods Clone Control",
    category: "Android / Bluetooth / Hardware",
    tech: "Android, Kotlin, Jetpack Compose, Bluetooth, Material Design",
    desc: "A Bluetooth-focused Android application inspired by wireless-earbud control interfaces.",
    challenge: "Handling raw Bluetooth APIs and connection states for hardware-oriented workflows.",
    visual: "BLUETOOTH DEVICE ARCHITECTURE",
    links: { live: null, github: "#" },
  },
  {
    num: "03",
    name: "OneKonnect",
    category: "Full-Stack / Job Management",
    tech: "React, Node.js, Express.js, MongoDB, JWT, REST APIs",
    desc: "A multi-role platform for managing jobs, internships, applicants, and organizational workflows.",
    challenge: "Implementing role-based dashboards (Admin, Manager, Supervisor, Intern) and protected routes.",
    visual: "ROLE-BASED WORKFLOW ARCHITECTURE",
    links: { live: "#", github: "#" },
  },
  {
    num: "04",
    name: "Readlog",
    category: "Full-Stack / Data Visualization",
    tech: "React, Vite, Firebase, Firestore, Recharts",
    desc: "A full-stack reading tracker for managing books, tracking reading progress, and visualizing reading habits.",
    challenge: "Building a responsive data visualization dashboard.",
    visual: "DATA DASHBOARD PREVIEW",
    links: { live: "#", github: "#" },
  },
  {
    num: "05",
    name: "Notes App",
    category: "Full-Stack CRUD",
    tech: "React, Firebase, Firestore",
    desc: "A minimal notes application with secure per-user data isolation.",
    challenge: "Real-time synchronization and secure authentication.",
    visual: "SECURE CRUD SYSTEM",
    links: { live: "#", github: "#" },
  },
  {
    num: "06",
    name: "Personal Portfolio",
    category: "Frontend / Creative Development",
    tech: "React, Bootstrap, GSAP",
    desc: "A creative portfolio focused on responsive design and sophisticated animation systems.",
    challenge: "Building 16 GSAP animation systems including scroll-triggered reveals and parallax.",
    visual: "ANIMATION SYSTEM PREVIEW",
    links: { live: "#", github: "#" },
  },
  {
    num: "07",
    name: "Weather Forecasting",
    category: "Frontend / API Integration",
    tech: "HTML, CSS, JavaScript, REST API",
    desc: "A web application that integrates real-time weather data via REST APIs.",
    challenge: "Handling async data fetching and cross-device responsive UI.",
    visual: "REAL-TIME API DASHBOARD",
    links: { live: "#", github: "#" },
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border-subtle bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-mono text-[10px] text-accent-primary tracking-[0.3em] uppercase block">
            04 / Selected Work
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, index) => (
            <ProjectItem key={project.num} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="group grid lg:grid-cols-12 gap-10 items-start cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Area */}
      <div className={`lg:col-span-7 h-[350px] md:h-[450px] w-full bg-surface border border-transparent group-hover:border-accent-primary/30 rounded-none overflow-hidden relative flex flex-col items-center justify-center p-8 transition-colors duration-300 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
        {/* Subtle noise texture or grid could go here */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center text-center max-w-md gap-6"
          animate={{ y: isHovered ? -5 : 0, scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="px-6 py-3 border border-border-subtle rounded-none bg-bg-primary/50 shadow-sm font-mono text-[10px] md:text-[11px] font-bold tracking-widest text-text-primary uppercase">
            {project.visual}
          </div>
          {project.num === "01" && (
            <div className="flex gap-2 items-center text-accent-primary font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              Runtime Active
            </div>
          )}
        </motion.div>
      </div>

      {/* Content Area */}
      <div className={`lg:col-span-5 flex flex-col bg-surface p-6 md:p-8 h-full border border-transparent group-hover:border-accent-primary/30 transition-colors duration-300 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
        <div className="flex justify-between items-start mb-4">
          <span className="font-mono text-[12px] text-accent-primary">
            {project.num}
          </span>
          <span className="text-[10px] uppercase bg-accent-primary/10 px-2 py-0.5 text-accent-primary font-mono tracking-wider">
            {project.category.split(' / ')[0]}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-3 uppercase tracking-tight">
          {project.name}
        </h3>

        <p className="text-xs md:text-sm text-text-secondary/80 mb-6 leading-relaxed line-clamp-3">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.split(', ').slice(0, 4).map((t: string) => (
            <span key={t} className="font-mono text-[9px] text-text-secondary px-2 py-1 border border-border-subtle uppercase">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-auto">
          {project.links.live ? (
            <a href={project.links.live} className="flex items-center gap-2 px-6 py-2 bg-text-primary text-bg-primary text-xs font-semibold hover:bg-text-secondary transition-colors group/btn">
              View Project 
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          ) : (
            <button disabled className="flex items-center gap-2 px-6 py-2 bg-border-subtle text-text-secondary text-xs font-semibold cursor-not-allowed opacity-70">
              Internal Project
            </button>
          )}
          
          <a href={project.links.github} className="flex items-center gap-2 px-6 py-2 border border-border-subtle text-text-primary text-xs font-semibold hover:border-text-primary transition-colors">
            <Github size={14} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
