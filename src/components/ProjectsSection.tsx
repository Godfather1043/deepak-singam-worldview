import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2, TrendingUp, Database, BarChart } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Stock Portfolio Optimizer",
    description: "Advanced Excel model for portfolio optimization using Modern Portfolio Theory",
    longDescription: "Built a comprehensive Excel-based portfolio optimization tool that implements Modern Portfolio Theory to maximize returns while minimizing risk. Features include correlation analysis, efficient frontier calculation, and risk metrics.",
    technologies: ["Excel", "VBA", "Financial Modeling", "Statistics"],
    category: "Financial Modeling",
    image: "📊",
    featured: true
  },
  {
    id: "2", 
    title: "Trading Dashboard",
    description: "Real-time Python dashboard for tracking market data and trade performance",
    longDescription: "Developed a comprehensive trading dashboard using Python that connects to market APIs for real-time data, tracks portfolio performance, and provides advanced analytics with custom indicators and risk metrics.",
    technologies: ["Python", "Pandas", "Plotly", "APIs"],
    category: "Data Analysis",
    image: "📈",
    featured: true
  },
  {
    id: "3",
    title: "Options Pricing Model",
    description: "Black-Scholes options pricing calculator with Greeks analysis",
    longDescription: "Created an advanced options pricing model implementing Black-Scholes formula with comprehensive Greeks calculation, implied volatility analysis, and Monte Carlo simulations for exotic options.",
    technologies: ["Python", "NumPy", "SciPy", "Finance"],
    category: "Financial Modeling",
    image: "⚡",
    featured: false
  },
  {
    id: "4",
    title: "Market Sentiment Analyzer",
    description: "NLP-based tool for analyzing market sentiment from news and social media",
    longDescription: "Built a sentiment analysis tool that scrapes financial news and social media to gauge market sentiment. Uses NLP techniques to classify sentiment and correlate with market movements.",
    technologies: ["Python", "NLP", "Machine Learning", "APIs"],
    category: "Data Analysis",
    image: "🧠",
    featured: false
  },
  {
    id: "5",
    title: "Risk Management System",
    description: "Comprehensive risk assessment framework for trading strategies",
    longDescription: "Developed a complete risk management system that calculates VaR, stress tests portfolios, and provides real-time risk monitoring with automated alerts and position sizing recommendations.",
    technologies: ["Excel", "Python", "Risk Management", "Statistics"],
    category: "Risk Management",
    image: "🛡️",
    featured: true
  }
];

const ProjectsSection = () => {
  const featuredProjects = mockProjects.filter(project => project.featured);
  const categories = ["All", ...Array.from(new Set(mockProjects.map(project => project.category)))];

  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Financial Modeling":
        return <TrendingUp className="h-5 w-5" />;
      case "Data Analysis":
        return <BarChart className="h-5 w-5" />;
      case "Risk Management":
        return <Database className="h-5 w-5" />;
      default:
        return <Code2 className="h-5 w-5" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Projects & Models
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative financial models, trading tools, and data analysis projects that drive investment decisions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{project.image}</div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="gradient" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    {project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">All Projects</h3>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 hover:text-primary"
              >
                {category !== "All" && getIconForCategory(category)}
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mockProjects.map((project) => (
              <Card 
                key={project.id}
                className="group bg-gradient-card border-0 shadow-card hover:shadow-accent transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{project.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <Badge variant="outline">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {project.longDescription}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="gradient">
                          <ExternalLink className="h-3 w-3 mr-2" />
                          View
                        </Button>
                        {project.githubUrl && (
                          <Button size="sm" variant="outline">
                            <Github className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;