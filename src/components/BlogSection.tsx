import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  image: string;
}

const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Psychology of Risk Management in Trading",
    excerpt: "Understanding how emotions affect trading decisions and implementing systematic approaches to manage risk effectively.",
    content: "Full article content...",
    date: "2024-02-15",
    readTime: "8 min read",
    category: "Risk Management",
    featured: true,
    image: "🧠"
  },
  {
    id: "2",
    title: "Building Your First Portfolio: A Data-Driven Approach",
    excerpt: "Step-by-step guide to constructing a diversified portfolio using quantitative analysis and modern portfolio theory.",
    content: "Full article content...",
    date: "2024-02-10",
    readTime: "12 min read",
    category: "Portfolio Management",
    featured: true,
    image: "📊"
  },
  {
    id: "3",
    title: "Market Volatility: Friend or Foe?",
    excerpt: "Exploring how market volatility creates opportunities for disciplined traders and long-term investors.",
    content: "Full article content...",
    date: "2024-02-05",
    readTime: "6 min read",
    category: "Market Analysis",
    featured: false,
    image: "📈"
  },
  {
    id: "4",
    title: "The Power of Compound Interest in Wealth Building",
    excerpt: "Mathematical analysis of how compound interest can transform your financial future with practical examples and calculations.",
    content: "Full article content...",
    date: "2024-01-28",
    readTime: "10 min read",
    category: "Personal Finance",
    featured: false,
    image: "💰"
  },
  {
    id: "5",
    title: "Technical Analysis vs Fundamental Analysis: Which is Better?",
    excerpt: "Comparing the effectiveness of different analysis methods and how to combine them for better investment decisions.",
    content: "Full article content...",
    date: "2024-01-20",
    readTime: "15 min read",
    category: "Market Analysis",
    featured: true,
    image: "⚖️"
  }
];

const BlogSection = () => {
  const featuredPosts = mockPosts.filter(post => post.featured);
  const recentPosts = mockPosts.slice(0, 6);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Insights & Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dives into market trends, trading strategies, and financial wisdom gained through experience.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">Featured Articles</h3>
            <Button variant="outline">
              <BookOpen className="h-4 w-4 mr-2" />
              View All Posts
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post) => (
              <Card 
                key={post.id}
                className="group bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{post.image}</div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <Button variant="gradient" className="w-full group">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Recent Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Card 
                key={post.id}
                className="group bg-gradient-card border-0 shadow-card hover:shadow-accent transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-2xl flex-shrink-0">{post.image}</div>
                    <div className="flex-1">
                      <Badge variant="outline" className="text-xs mb-2">
                        {post.category}
                      </Badge>
                      <h4 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <Button size="sm" variant="ghost" className="w-full hover:bg-primary/10 hover:text-primary">
                    Read More
                    <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary border-0 shadow-primary max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Market Insights
              </h3>
              <p className="text-white/90 mb-6">
                Get weekly analysis, trading tips, and market insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 bg-white/10 text-white placeholder:text-white/70 backdrop-blur-sm"
                />
                <Button variant="accent" size="lg">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;