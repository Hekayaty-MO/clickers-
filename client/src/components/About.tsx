import aboutImage from "@/assets/DALL·E 2025-03-08 04.06.10 - A sleek and modern 3D logo for 'Clickers,' a digital agency. The design should be visually appealing, professional, and easy to remember. Use a clean,.webp";
import { Zap, Code, Cpu, Radio } from "lucide-react";
import mohamedImg from "@/assets/WhatsApp Image 2025-10-03 at 8.44.09 PM.jpeg";
import ahmedImg from "@/assets/WhatsApp Image 2025-09-18 at 6.55.09 PM (1).jpeg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About <span className="gradient-text">Clickers</span></h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Clickers Agency stands at the intersection of technology and creativity, pioneering digital solutions that transform how people learn, create, and share stories. Based in Egypt, we're building the future of digital experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our mission is to democratize storytelling, revolutionize education, and create technology that empowers human creativity. We believe in the power of innovation to bridge cultures and connect minds across the globe.
            </p>
            
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-8">Meet Our <span className="gradient-text">Team</span></h3>
              
              {/* Founder 1 - Mohamed Nasser */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-4 sm:p-6 md:p-8 rounded-2xl border border-blue-200/50 dark:border-blue-800/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                </div>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={mohamedImg}
                      alt="Mohamed Nasser - Founder & CEO"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-lg ring-4 ring-blue-100 dark:ring-blue-900/50"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Mohamed Nasser
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1 text-sm sm:text-base">Founder & CEO</p>
                      <p className="text-xs sm:text-sm text-blue-500/80 dark:text-blue-400/80">Mechatronics Engineer</p>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      "Passionate about engineering excellence and cutting-edge technology, Mohamed combines his mechatronics expertise with visionary leadership to drive innovative projects that shape the future of digital experiences."
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        Engineering
                      </span>
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium">
                        Technology
                      </span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        Innovation
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder 2 - Ahmed Hassan */}
              <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 sm:p-6 md:p-8 rounded-2xl border border-purple-200/50 dark:border-purple-800/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Radio className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
                </div>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={ahmedImg}
                      alt="Ahmed Hassan - Co-Founder & CTO"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-lg ring-4 ring-purple-100 dark:ring-purple-900/50"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Code className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Ahmed Hassan
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold mb-1 text-sm sm:text-base">Co-Founder & CTO</p>
                      <p className="text-xs sm:text-sm text-purple-500/80 dark:text-purple-400/80">Electrical & Communication Engineer</p>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      "With deep expertise in electrical and communication systems, Ahmed architects robust technical solutions that power our digital platforms and ensure seamless connectivity across all our innovative projects."
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                        Systems Architecture
                      </span>
                      <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">
                        Communication
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                        Technical Leadership
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fade-in">
            <img 
              src={aboutImage}
              alt="Clickers Agency team workspace"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
