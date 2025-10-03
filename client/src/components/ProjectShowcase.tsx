import { useState, useEffect } from "react";
import { Feather, Brain, GraduationCap, ExternalLink } from "lucide-react";
import hekayatyImage from "@/assets/ChatGPT Image 15 مايو 2025، 12_33_28 ص.png";
import learnovaImage from "@/assets/d35015ab-3f84-498e-8bbe-9d844e8d146a.png";
import kidemyImage from "@/assets/ChatGPT Image 23 سبتمبر 2025، 06_49_08 م.png";

export default function ProjectShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = 3;

  const projects = [
    {
      icon: Feather,
      title: "Hekayaty",
      description: "Revolutionary storytelling platform empowering writers with AI-assisted tools, collaborative editing, and seamless publishing workflows for creative storytellers.",
      tags: ["Storytelling", "AI-Powered", "Publishing"],
      image: hekayatyImage,
      link: "https://hekayaty-platforms-flax.vercel.app/"
    },
    {
      icon: Brain,
      title: "Learnova",
      description: "Next-generation education platform featuring adaptive learning, real-time analytics, and personalized curriculum for optimal knowledge retention and student engagement.",
      tags: ["EdTech", "Adaptive Learning", "Analytics"],
      image: learnovaImage,
      link: "https://learnova-paltform.vercel.app/"
    },
    {
      icon: GraduationCap,
      title: "Kidemy",
      description: "Interactive educational website designed for teachers and students to explore and explain science concepts through engaging digital experiences and collaborative learning tools.",
      tags: ["Science Education", "Interactive", "Teacher Tools"],
      image: kidemyImage,
      link: "https://kidemy-platform.vercel.app/"
    }
  ];

  const updateCarousel = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Innovation Showcase</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the cutting-edge projects that define our expertise in storytelling, education, and technology.
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / slides)}%)` }}
          >
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className="w-full flex-shrink-0 p-4 md:w-1/2 lg:w-1/3">
                  <div className="bg-card rounded-xl p-8 h-full border border-border card-hover">
                    <img 
                      src={project.image}
                      alt={`${project.title} platform`}
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    
                    <div className="flex items-center mb-4">
                      <IconComponent className="text-primary text-2xl mr-3 h-6 w-6" />
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                    >
                      Visit Project <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: slides }).map((_, index) => (
              <button
                key={index}
                onClick={() => updateCarousel(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted'
                }`}
                data-testid={`carousel-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
