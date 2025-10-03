import { Sparkles } from "lucide-react";

export default function OurStory() {
  const story = `In a world full of ideas and challenges,\nfew stories begin with true friendship.\nThis isn’t just a company’s beginning — it’s a story of passion, persistence, and belief.\n\nIt all started with Mohamed Hassan and Ahmed Hassan — two childhood friends who shared the same dream and determination.\nDuring their second year at the Faculty of Engineering, one simple moment changed everything.\n\nMohamed said:\n"We want to start our own business, but we don’t have the idea yet."\n\nThe next day, he came back — filled with energy — and said:\n"Let’s call it Robotybe."\n\nAhmed smiled and answered with words that began the journey:\n"I’m with you every step of the way."\n\nAnd that’s how Clickers was born — not just a name, but a promise.\nA promise to create something real, meaningful, and worth trusting.\n\nThe road wasn’t easy. They faced challenges, failures, and endless nights of work.\nBut every obstacle made them stronger. Every setback turned into a step forward.\n\nFrom that spirit came their first project — Hekayaty, followed by Learnova, and more to come.\n\nToday, Clickers stands as a symbol of friendship, will, and creativity.\nA journey built by two dreamers you can always rely on. 🤝✨`;

  return (
    <section id="story" className="py-20 bg-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-primary" />
            Our <span className="gradient-text">Story</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The journey that forged Clickers agency.
          </p>
        </div>

        <article className="prose prose-sm sm:prose-base lg:prose-lg mx-auto text-muted-foreground whitespace-pre-line max-w-none px-4">
          {story}
        </article>
      </div>
    </section>
  );
}
