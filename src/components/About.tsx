import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-mono text-[10px] text-accent-primary tracking-[0.3em] uppercase block">
            01 / About
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-4xl md:text-5xl lg:text-[48px] font-semibold tracking-tighter leading-[0.95] text-balance">
              I build across the stack — from interfaces users touch to systems that power them.
            </h3>
            
            <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 border border-border-subtle text-xs font-mono text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              Based in Karachi, Pakistan
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex flex-col gap-8 text-sm text-text-secondary leading-relaxed bg-surface p-6 border-l-2 border-accent-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I am a Full-Stack Developer and Computer Science graduate who thrives at the intersection of product design and backend architecture. I work across full-stack web development, Android applications, and cloud-oriented services.
            </p>
            
            <div>
              <h4 className="text-text-primary font-medium mb-4">My engineering interests include:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <li className="flex items-center gap-2">
                  <span className="text-accent-primary">▹</span> Cloud Computing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-primary">▹</span> Distributed Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-primary">▹</span> Runtime Orchestration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-primary">▹</span> Backend Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-primary">▹</span> Developer Tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-primary">▹</span> AI Engineering
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
