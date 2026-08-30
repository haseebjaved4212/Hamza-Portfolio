import { useEffect, useRef } from "react";
import gsap from "gsap";

const interests = [
  "Cloud Computing",
  "Distributed Systems",
  "System Design",
  "Android Development",
  "AI Engineering",
  "Backend Architecture",
  "Developer Tools",
  "Runtime Orchestration",
  "Full-Stack Engineering"
];

export default function Interests() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const track = marqueeRef.current.querySelector('.marquee-track');
    if (!track) return;

    // We clone the track content to make it seamless
    const content = track.innerHTML;
    track.innerHTML = content + content;

    const items = track.querySelectorAll('.marquee-item');
    
    // Calculate total width
    let totalWidth = 0;
    items.forEach(item => {
      totalWidth += (item as HTMLElement).offsetWidth;
    });
    
    // Divide by 2 because we duplicated the content
    totalWidth = totalWidth / 2;

    gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-24 md:py-32 border-t border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <h2 className="font-mono text-[10px] text-accent-primary tracking-[0.3em] uppercase block">
          05 / What I'm Exploring
        </h2>
      </div>

      <div className="relative w-full flex items-center overflow-hidden h-32 md:h-48" ref={marqueeRef}>
        {/* Gradients for smooth edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />
        
        <div className="marquee-track flex whitespace-nowrap items-center">
          {interests.map((interest, index) => (
            <div key={index} className="marquee-item inline-flex items-center mx-8">
              <span className="text-3xl md:text-5xl lg:text-[64px] font-semibold text-transparent uppercase tracking-tighter" style={{ WebkitTextStroke: "1px var(--color-border-subtle)" }}>
                {interest}
              </span>
              <span className="mx-8 text-accent-primary opacity-50">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
