import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Fade in animation on scroll
    function handleScrollAnimations() {
      const elements = document.querySelectorAll('.fade-in');
      const windowHeight = window.innerHeight;

      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    }

    // Initialize scroll animations
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('load', handleScrollAnimations);
    
    // Initial check
    handleScrollAnimations();

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      window.removeEventListener('load', handleScrollAnimations);
    };
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <ProjectShowcase />
      <About />
      <Projects />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
