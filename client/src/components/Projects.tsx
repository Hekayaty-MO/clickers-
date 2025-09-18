import { Feather, Brain, Wand2, ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      icon: Feather,
      title: "Hekayaty",
      description: "Revolutionary storytelling platform empowering writers with AI-assisted tools, collaborative editing, and seamless publishing workflows.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      colors: ["bg-primary", "bg-green-500", "bg-blue-500"]
    },
    {
      icon: Brain,
      title: "Learnova",
      description: "Next-generation education platform featuring adaptive learning, real-time analytics, and personalized curriculum for optimal knowledge retention.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      colors: ["bg-primary", "bg-orange-500", "bg-red-500"]
    },
    {
      icon: Wand2,
      title: "TaleCraft",
      description: "Professional comic and story editor with advanced design tools, team collaboration features, and integrated publishing solutions.",
      image: "https://images.unsplash.com/photo-1562329265-95a6d7a83440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      colors: ["bg-primary", "bg-yellow-500", "bg-pink-500"]
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
                    <button className="text-primary hover:text-primary/80 font-medium" data-testid={`button-learn-more-${project.title.toLowerCase()}`}>
                      Learn More <ArrowRight className="inline ml-1 h-4 w-4" />
                    </button>
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
