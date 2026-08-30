import { useState } from "react";
import {
  Copy,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion } from "motion/react";
import cvUrl from "../../assets/Hamza-Cv.pdf";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "malikhamza678330@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-border-subtle overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tighter leading-[0.95] mb-8">
            Have an idea worth building?
          </h2>

          <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto mb-16 leading-relaxed text-balance">
            Whether it's a product, platform, system, or experiment — let's turn
            the idea into something real.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={handleCopy}
            className="flex items-center gap-3 px-8 py-3 bg-accent-primary text-bg-primary font-semibold text-sm hover:bg-accent-secondary transition-colors w-full sm:w-auto justify-center"
          >
            {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
            {copied ? "Email Copied!" : "Copy Email"}
          </button>

          <a
            href={cvUrl}
            download
            className="flex items-center gap-3 px-8 py-3 border border-border-subtle font-semibold text-sm hover:border-accent-primary transition-colors w-full sm:w-auto justify-center"
          >
            <Download size={20} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href={`mailto:${email}`}
            className="p-3 border border-border-subtle hover:bg-surface hover:border-accent-primary transition-all text-text-secondary hover:text-accent-primary"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/malik-hamza-8a4999405?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border-subtle hover:bg-surface hover:border-accent-primary transition-all text-text-secondary hover:text-accent-primary"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Malikhamza566"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border-subtle hover:bg-surface hover:border-accent-primary transition-all text-text-secondary hover:text-accent-primary"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
