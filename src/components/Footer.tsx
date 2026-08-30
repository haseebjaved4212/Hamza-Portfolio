import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border-subtle bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex space-x-6 text-[10px] font-mono uppercase tracking-[0.2em] text-text-secondary/80">
          <a href="https://www.linkedin.com/in/malik-hamza-8a4999405?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors">LinkedIn</a>
          <a href="https://github.com/Malikhamza566" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors">GitHub</a>
          <a href="mailto:malikhamza678330@gmail.com" className="hover:text-accent-primary transition-colors">Email</a>
        </div>

        <p className="text-[10px] font-mono text-text-secondary/60 uppercase tracking-widest">
          © 2026 Malik Hamza • Built with React & Curiosity
        </p>
      </div>
    </footer>
  );
}
