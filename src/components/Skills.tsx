import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Kotlin", "C#", "Python", "HTML5", "CSS3"]
  },
  {
    title: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS", "Bootstrap", "GSAP", "Responsive Design", "Component-Based Architecture"]
  },
  {
    title: "Android",
    skills: ["Kotlin", "Jetpack Compose", "Material Design 3", "Android SDK", "Android API 26+", "REST API Integration"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "ASP.NET Core", "REST APIs", "JWT Authentication", "Middleware", "Nodemailer"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Mongoose", "Firebase Firestore", "Firebase Authentication", "SQL Server", "PostgreSQL"]
  },
  {
    title: "Cloud / Infrastructure",
    skills: ["Firebase Hosting", "Netlify", "Railway", "Render", "Docker", "Redis", "Environment Configuration"]
  },
  {
    title: "Engineering",
    skills: ["System Design", "HLD", "LLD", "Authentication", "RBAC", "API Integration", "Real-Time Systems", "Agile", "Scrum", "Problem Solving"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Google Stitch", "Power BI", "Microsoft Excel", "Postman"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border-subtle bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-mono text-[10px] text-accent-primary tracking-[0.3em] uppercase block">
            02 / Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-border-subtle pb-4"
            >
              <h3 className="font-mono text-[11px] text-accent-primary uppercase mb-3">
                {category.title}
              </h3>
              <p className="text-[13px] text-text-primary/80 leading-relaxed">
                {category.skills.join(', ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
