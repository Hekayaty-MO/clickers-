export default function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About <span className="gradient-text">Clickers</span></h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Clickers Agency stands at the intersection of technology and creativity, pioneering digital solutions that transform how people learn, create, and share stories. Based in Egypt, we're building the future of digital experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our mission is to democratize storytelling, revolutionize education, and create technology that empowers human creativity. We believe in the power of innovation to bridge cultures and connect minds across the globe.
            </p>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Meet Our <span className="gradient-text">Founders</span></h3>
              
              {/* Founder 1 */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
                    alt="Mohammed - Co-Founder & CEO"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">Mohammed</h4>
                    <p className="text-muted-foreground">Co-Founder & CEO</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "At Clickers, we don't just build software—we craft experiences that inspire, educate, and connect people across the digital landscape."
                </p>
              </div>

              {/* Founder 2 */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
                    alt="Ahmed - Co-Founder & CTO"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">Ahmed</h4>
                    <p className="text-muted-foreground">Co-Founder & CTO</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Innovation happens when creative vision meets technical excellence. Together, we're building the future of digital storytelling and education."
                </p>
              </div>
            </div>
          </div>
          
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Clickers Agency team workspace"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
