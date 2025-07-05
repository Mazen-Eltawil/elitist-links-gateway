import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Collecting Vintage Rolex Watches",
      excerpt: "Discover the timeless appeal and investment potential of vintage Rolex timepieces, from the iconic Submariner to the legendary Daytona.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop&crop=center",
      date: "March 15, 2024",
      category: "Collecting"
    },
    {
      id: 2,
      title: "Patek Philippe: Understanding Complications",
      excerpt: "Explore the intricate world of Patek Philippe complications and what makes these extraordinary timepieces worth their premium pricing.",
      image: "https://images.unsplash.com/photo-1509048191080-d2323c69f359?w=600&h=400&fit=crop&crop=center",
      date: "March 12, 2024",
      category: "Education"
    },
    {
      id: 3,
      title: "Audemars Piguet Royal Oak: A Design Revolution",
      excerpt: "The story behind Gerald Genta's revolutionary design that transformed the luxury watch industry and created an enduring icon.",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=400&fit=crop&crop=center",
      date: "March 10, 2024",
      category: "History"
    },
    {
      id: 4,
      title: "Richard Mille: Innovation in Modern Horology",
      excerpt: "How Richard Mille revolutionized watchmaking with cutting-edge materials and avant-garde design philosophy.",
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=400&fit=crop&crop=center",
      date: "March 8, 2024",
      category: "Innovation"
    },
    {
      id: 5,
      title: "Investment Guide: Watches That Hold Their Value",
      excerpt: "A comprehensive guide to luxury watches that not only tell time but also serve as excellent long-term investments.",
      image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=600&h=400&fit=crop&crop=center",
      date: "March 5, 2024",
      category: "Investment"
    },
    {
      id: 6,
      title: "The Future of Luxury Watchmaking",
      excerpt: "Examining how traditional Swiss manufacturers are adapting to modern challenges while preserving centuries-old craftsmanship.",
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=400&fit=crop&crop=center",
      date: "March 3, 2024",
      category: "Trends"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="font-kepler text-5xl md:text-6xl font-bold text-charcoal-grey">
              Watch Insights
            </h1>
            <p className="text-xl text-charcoal-grey/80 leading-relaxed max-w-3xl mx-auto">
              Explore the fascinating world of luxury timepieces through our curated articles on collecting, history, and horological craftsmanship.
            </p>
          </div>

          {/* Featured Article */}
          <div className="bg-champagne-gold/10 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto relative overflow-hidden">
                <img 
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 space-y-4 flex flex-col justify-center">
                <div className="inline-block">
                  <span className="bg-light-goldenrod text-charcoal-grey px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <h2 className="font-kepler text-3xl font-bold text-charcoal-grey">
                  {blogPosts[0].title}
                </h2>
                <p className="text-charcoal-grey/80 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-charcoal-grey/60">
                  <span>{blogPosts[0].date}</span>
                  <span className="bg-champagne-gold/20 text-champagne-gold px-2 py-1 rounded">
                    {blogPosts[0].category}
                  </span>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-light-goldenrod hover:text-light-goldenrod/80 font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8 animate-on-scroll">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-card rounded-lg overflow-hidden border hover-lift">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover image-lazy-load smooth-transition hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-charcoal-grey/60">{post.date}</span>
                    <span className="bg-champagne-gold/20 text-champagne-gold px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-kepler text-xl font-bold text-charcoal-grey hover:text-light-goldenrod smooth-transition">
                    <a href="#">{post.title}</a>
                  </h2>
                  <p className="text-charcoal-grey/80 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-light-goldenrod hover:text-light-goldenrod/80 font-medium text-sm smooth-transition"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-charcoal-grey rounded-lg p-8 text-center space-y-6">
            <h2 className="font-kepler text-3xl font-bold text-white-gold">
              Stay Updated
            </h2>
            <p className="text-white-gold/80 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on luxury watches, market trends, and exclusive collecting opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white-gold/10 border border-champagne-gold text-white-gold placeholder:text-white-gold/60 focus:outline-none focus:border-light-goldenrod"
              />
              <button className="px-6 py-3 bg-light-goldenrod text-charcoal-grey rounded-lg font-kepler uppercase tracking-wider hover:bg-light-goldenrod/90 smooth-transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;