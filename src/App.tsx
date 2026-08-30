/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  // GSAP or Lenis for smooth scrolling could go here, 
  // but CSS scroll-behavior: smooth handles it nicely for simple anchors.
  
  useEffect(() => {
    // Initial theme setup
    const isDark = document.documentElement.classList.contains("dark");
    if (!isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Interests />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
