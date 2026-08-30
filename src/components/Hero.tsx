import { useEffect, useRef } from "react";
import { ArrowRight, Download } from "lucide-react";
import gsap from "gsap";
import { motion } from "motion/react";

export default function Hero() {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!diagramRef.current) return;
    const elements = diagramRef.current.querySelectorAll(".diagram-node");
    
    gsap.fromTo(
      elements,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    // Subtle continuous floating
    gsap.to(elements, {
      y: "-=10",
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: {
        each: 0.2,
        from: "random",
      },
      delay: 1.5,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-accent-primary uppercase mb-6">
              FULL-STACK DEVELOPER • ANDROID • CLOUD • SYSTEMS
            </p>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tighter leading-[0.95] mb-8 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            Building software that connects interfaces, systems, and infrastructure.
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-text-secondary max-w-xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            Full-Stack Developer and Computer Science graduate focused on building modern web applications, Android experiences, backend services, and system-oriented software.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-accent-primary text-bg-primary font-semibold text-sm hover:bg-accent-secondary transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border-subtle font-semibold text-sm hover:border-accent-primary transition-colors flex items-center gap-2"
              >
                Let's Talk <ArrowRight size={16} />
              </a>
            </div>
            
            <a
              href="#contact"
              className="text-text-secondary hover:text-accent-primary transition-colors flex items-center gap-2 font-semibold text-sm mt-4 sm:mt-0 hidden"
            >
              Let's Work Together <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Visual Graphic */}
        <div className="relative h-[400px] lg:h-[600px] hidden md:flex items-center justify-center" ref={diagramRef}>
          <div className="absolute inset-0 bg-gradient-to-tr from-bg-primary via-transparent to-transparent z-10 pointer-events-none" />
          
          <div className="relative w-full max-w-md aspect-square border border-border-subtle rounded-full flex items-center justify-center opacity-20">
            <div className="w-[70%] h-[70%] border border-border-subtle rounded-full" />
            <div className="w-[40%] h-[40%] border border-border-subtle rounded-full" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            {/* Core Node */}
            <div className="diagram-node absolute flex items-center justify-center w-24 h-24 bg-surface border border-border-subtle rounded-2xl shadow-xl z-20">
              <span className="font-mono text-sm font-bold text-accent-primary">System</span>
            </div>

            {/* Orbiting Nodes */}
            <div className="diagram-node absolute top-[15%] left-[20%] px-4 py-2 bg-surface border border-border-subtle rounded-full text-xs font-mono">React</div>
            <div className="diagram-node absolute top-[25%] right-[15%] px-4 py-2 bg-surface border border-border-subtle rounded-full text-xs font-mono">Node.js</div>
            <div className="diagram-node absolute bottom-[30%] left-[10%] px-4 py-2 bg-surface border border-border-subtle rounded-full text-xs font-mono">Android</div>
            <div className="diagram-node absolute bottom-[15%] right-[25%] px-4 py-2 bg-surface border border-border-subtle rounded-full text-xs font-mono">Docker</div>
            <div className="diagram-node absolute top-[50%] right-[5%] px-4 py-2 bg-surface border border-border-subtle rounded-full text-xs font-mono">Redis</div>
            <div className="diagram-node absolute top-[50%] left-[5%] px-4 py-2 bg-surface border border-border-subtle rounded-full text-xs font-mono">Cloud</div>
            <div className="diagram-node absolute bottom-[40%] right-[10%] px-4 py-2 bg-surface border border-border-subtle rounded-full text-xs font-mono">REST APIs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
