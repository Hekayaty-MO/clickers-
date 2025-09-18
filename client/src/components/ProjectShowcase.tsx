import { useState, useEffect } from "react";
import { BookOpen, GraduationCap, Palette } from "lucide-react";

export default function ProjectShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = 3;

  const projects = [
    {
      icon: BookOpen,
      title: "Hekayaty",
      description: "A revolutionary storytelling and publishing platform that empowers creators to craft, share, and monetize their stories with cutting-edge tools and AI assistance.",
      tags: ["Publishing", "AI-Powered", "Creator Tools"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      icon: GraduationCap,
      title: "Learnova",
      description: "Next-generation education platform combining interactive learning, personalized curricula, and advanced analytics to transform how knowledge is acquired and retained.",
      tags: ["EdTech", "Interactive", "Analytics"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      icon: Palette,
      title: "TaleCraft",
      description: "Professional comic and story editor featuring intuitive design tools, collaborative features, and seamless publishing workflows for digital storytellers and comic creators.",
      tags: ["Comic Editor", "Creative Suite", "Collaborative"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
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
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
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
