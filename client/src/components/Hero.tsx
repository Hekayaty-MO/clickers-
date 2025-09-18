import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleWorkWithUs = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center fade-in">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4">
              <span className="gradient-text">Clickers</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-light text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            We build <span className="gradient-text font-semibold">stories</span>, 
            <span className="gradient-text font-semibold"> education</span>, 
            and <span className="gradient-text font-semibold"> technology</span> 
            for the future.
          </h2>
          
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            An innovative Egyptian engineering and technology agency crafting the next generation of digital experiences.
          </p>
          
          <button 
            onClick={handleWorkWithUs}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            data-testid="button-work-with-us"
          >
            Work With Us
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  );
}
