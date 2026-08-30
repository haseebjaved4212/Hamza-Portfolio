import { motion } from "motion/react";

const experiences = [
  {
    company: "Aakyas Agency",
    role: "Full Stack Developer Intern",
    period: "March 2026 – Present",
    highlights: [
      "React",
      "JavaScript",
      "Firebase",
      "REST APIs",
      "Firebase Firestore",
      "Authentication",
      "Protected Routes",
      "RBAC",
      "Agile development",
      "Code reviews"
    ],
    isTech: true,
  },
  {
    company: "Kent RING",
    role: "Customer Service Representative",
    period: "2023 – 2025",
    highlights: [],
    isTech: false,
  },
  {
    company: "Trinet",
    role: "Customer Service Representative",
    period: "January 2022 – December 2022",
    highlights: [],
    isTech: false,
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-mono text-[10px] text-accent-primary tracking-[0.3em] uppercase block">
            03 / Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl">
          <div className="flex flex-col border-l border-accent-primary/30 ml-3 md:ml-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-6 pb-12 last:pb-0 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 top-1.5 w-1.5 h-1.5 -translate-x-[3.5px] rounded-none transition-colors duration-300 ${exp.isTech ? 'bg-accent-primary' : 'bg-border-subtle'}`} />

                <div className="mb-3">
                  <h3 className="font-bold text-sm text-text-primary mb-0.5">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-accent-primary font-mono">{exp.company} • {exp.period}</p>
                </div>

                {exp.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.highlights.map((item, i) => (
                      <span key={i} className="font-mono text-[9px] text-text-secondary px-2 py-1 border border-border-subtle uppercase">
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
