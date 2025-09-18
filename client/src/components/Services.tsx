import { Code, GraduationCap, BookOpen, Settings, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web & Mobile Development",
      description: "Full-stack development services creating responsive web applications and native mobile apps using cutting-edge technologies and best practices.",
      features: [
        "React & Next.js Applications",
        "Native iOS & Android Apps",
        "Progressive Web Apps"
      ]
    },
    {
      icon: GraduationCap,
      title: "Educational Platforms",
      description: "Custom learning management systems and educational technology solutions designed to enhance knowledge delivery and student engagement.",
      features: [
        "Learning Management Systems",
        "Interactive Course Platforms",
        "Educational Analytics"
      ]
    },
    {
      icon: BookOpen,
      title: "Storytelling & Publishing Tech",
      description: "Innovative publishing platforms and content creation tools that empower authors, publishers, and content creators to reach their audience.",
      features: [
        "Content Management Systems",
        "Publishing Workflows",
        "Creator Monetization Tools"
      ]
    },
    {
      icon: Settings,
      title: "Custom Tech Solutions",
      description: "Bespoke technology solutions tailored to your specific business needs, from enterprise software to innovative digital products.",
      features: [
        "Enterprise Software Development",
        "API Development & Integration",
        "Cloud Architecture & DevOps"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="gradient-text">Services</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to elevate your digital presence and drive innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-card p-8 rounded-xl border border-border card-hover fade-in">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="text-primary text-xl h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-primary mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
