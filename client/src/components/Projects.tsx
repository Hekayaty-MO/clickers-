import { Feather, Brain, GraduationCap, ArrowRight } from "lucide-react";
import hekayatyImage from "@/assets/ChatGPT Image 15 مايو 2025، 12_33_28 ص.png";
import learnovaImage from "@/assets/d35015ab-3f84-498e-8bbe-9d844e8d146a.png";
import kidemyImage from "@/assets/ChatGPT Image 23 سبتمبر 2025، 06_49_08 م.png";

export default function Projects() {
  const projects = [
    {
      icon: Feather,
      title: "Hekayaty",
      description: "Revolutionary storytelling platform empowering writers with AI-assisted tools, collaborative editing, and seamless publishing workflows.",
      image: hekayatyImage,
      colors: ["bg-primary", "bg-green-500", "bg-blue-500"],
      link: "https://hekayaty-platforms-flax.vercel.app/"
    },
    {
      icon: Brain,
      title: "Learnova",
      description: "Next-generation education platform featuring adaptive learning, real-time analytics, and personalized curriculum for optimal knowledge retention.",
      image: learnovaImage,
      colors: ["bg-primary", "bg-orange-500", "bg-red-500"],
      link: "https://learnova-paltform.vercel.app/"
    },
    {
      icon: GraduationCap,
      title: "Kidemy",
      description: "Interactive educational website designed for teachers and students to explore and explain science concepts through engaging digital experiences and collaborative learning tools.",
      image: kidemyImage,
      colors: ["bg-primary", "bg-yellow-500", "bg-pink-500"],
      link: "https://kidemy-platform.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="gradient-text">Projects</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our portfolio of innovative solutions that are reshaping industries and empowering creators worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="bg-card rounded-xl overflow-hidden border border-border card-hover fade-in">
                <img 
                  src={project.image}
                  alt={`${project.title} platform interface`}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-primary text-xl mr-3 h-5 w-5" />
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {project.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className={`w-2 h-2 ${color} rounded-full`}></span>
                      ))}
                    </div>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium transition-colors duration-200 flex items-center gap-1"
                      data-testid={`button-learn-more-${project.title.toLowerCase()}`}
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
