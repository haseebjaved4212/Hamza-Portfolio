import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "py-4 bg-bg-primary/80 backdrop-blur-md border-border-subtle"
          : "py-6 bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          Malik Hamza
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 font-mono text-[11px] tracking-wider uppercase text-text-secondary">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-border-subtle pl-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-border-subtle transition-colors text-text-secondary hover:text-text-primary"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-1.5 border border-accent-primary text-accent-primary text-[11px] font-mono tracking-wider uppercase hover:bg-accent-primary hover:text-bg-primary transition-colors"
            >
              Resume / CV <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 text-text-secondary"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-text-primary"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg-primary border-b border-border-subtle shadow-lg">
          <ul className="flex flex-col px-6 py-4 gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-text-secondary hover:text-text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-border-subtle">
              <a
                href="#contact"
                className="flex items-center gap-2 text-accent-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download Resume <ArrowUpRight size={16} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
