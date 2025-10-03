import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroBackground from "@/assets/DALL·E 2025-03-08 04.06.10 - A sleek and modern 3D logo for 'Clickers,' a digital agency. The design should be visually appealing, professional, and easy to remember. Use a clean,.webp";

export default function Hero() {
  const handleWorkWithUs = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-slate-900">
      {/* Background Image with Enhanced Styling */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      ></div>
      
      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-purple-900/90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center fade-in">
          {/* Enhanced Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-white/90">Digital Innovation Agency</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Clickers
              </span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          {/* Enhanced Subtitle */}
          <h2 className="text-3xl md:text-5xl font-light text-white mb-8 max-w-5xl mx-auto leading-tight">
            We craft <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">digital stories</span>, 
            <br className="hidden md:block" />
            build <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">educational platforms</span>, 
            <br className="hidden md:block" />
            and create <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">cutting-edge technology</span>
          </h2>
          
          {/* Enhanced Description */}
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            An innovative Egyptian engineering and technology agency crafting the next generation of digital experiences 
            that inspire, educate, and transform the future.
          </p>
          
          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleWorkWithUs}
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-2"
              data-testid="button-work-with-us"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
          </div>
          
          {/* Stats or Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-white/70">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-white/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
