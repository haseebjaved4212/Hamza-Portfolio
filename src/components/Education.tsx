import { motion } from "motion/react";

const education = [
  {
    school: "Sir Syed University of Engineering & Technology",
    degree: "Bachelor of Computer Science",
    period: "2021 – 2025",
    location: "Karachi, Pakistan",
  },
  {
    school: "F.G. College Karachi",
    degree: "Pre-Engineering",
    period: "2020 – 2021",
    location: "",
  },
  {
    school: "F.G. Public School Cantt",
    degree: "Matriculation — Computer Science",
    period: "2018 – 2019",
    location: "",
  }
];

const certifications = [
  {
    title: "Governor Sindh IT Initiative",
    subtitle: "1-Year Programme",
    desc: "Focus: Meta AI, Generative AI, Web3 development, blockchain fundamentals, modern full-stack technologies.",
    isOngoing: false,
  },
  {
    title: "NAVTCC / NAVTEC",
    subtitle: "Application Development Programme",
    desc: "Three-month hands-on programme covering software development fundamentals, programming concepts, project workflows, and industry practices.",
    isOngoing: false,
  },
  {
    title: "Currently Developing",
    subtitle: ".NET Full-Stack Development",
    desc: "C#, ASP.NET Core, MVC, middleware, REST APIs, SQL Server and React integration.",
    isOngoing: true,
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-border-subtle bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24">
        
        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-mono text-[10px] text-accent-primary tracking-[0.3em] uppercase block">
              06 / Education
            </h2>
          </motion.div>

          <div className="flex flex-col gap-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h3 className="text-lg font-bold text-text-primary">{item.school}</h3>
                  <span className="font-mono text-xs text-accent-primary">{item.period}</span>
                </div>
                <div className="flex items-center justify-between text-text-secondary text-sm">
                  <p>{item.degree}</p>
                  {item.location && <p className="font-mono text-xs hidden sm:block">{item.location}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Development */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-mono text-[10px] text-accent-primary tracking-[0.3em] uppercase block">
              07 / Certifications & Dev
            </h2>
          </motion.div>

          <div className="flex flex-col gap-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-4 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-text-primary">{cert.title}</h3>
                    {cert.isOngoing && (
                      <span className="px-1.5 py-0.5 rounded-none text-[9px] font-mono font-bold bg-accent-primary/10 text-accent-primary border border-accent-primary/20 uppercase tracking-wider">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-xs text-accent-primary">{cert.subtitle}</p>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {cert.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
