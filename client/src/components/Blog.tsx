import { Calendar, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of AI in Creative Industries",
      excerpt: "Exploring how artificial intelligence is revolutionizing creative workflows and empowering artists, writers, and creators worldwide.",
      date: "Dec 15, 2023",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    },
    {
      title: "Digital Storytelling Revolution",
      excerpt: "How modern platforms are changing the way we create, share, and consume stories in the digital landscape.",
      date: "Dec 10, 2023",
      category: "Storytelling",
      image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    },
    {
      title: "Personalized Learning with Technology",
      excerpt: "The rise of adaptive learning systems and their impact on educational outcomes and student engagement.",
      date: "Dec 5, 2023",
      category: "Education",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest <span className="gradient-text">Insights</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with our thoughts on technology, storytelling, education, and entrepreneurship in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-card rounded-xl overflow-hidden border border-border card-hover fade-in">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                  <a href="#" data-testid={`blog-post-${index}`}>{post.title}</a>
                </h3>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <a href="#" className="text-primary font-medium hover:text-primary/80" data-testid={`blog-read-more-${index}`}>
                  Read More <ArrowRight className="inline ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors" data-testid="button-view-all-articles">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
