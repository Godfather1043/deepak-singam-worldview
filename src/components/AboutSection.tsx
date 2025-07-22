import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BarChart3, Calculator, Brain, Target, Coffee } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "Excel & VBA", level: 95, icon: <Calculator className="h-4 w-4" /> },
    { name: "Python", level: 85, icon: <Brain className="h-4 w-4" /> },
    { name: "Financial Modeling", level: 90, icon: <TrendingUp className="h-4 w-4" /> },
    { name: "Data Analysis", level: 88, icon: <BarChart3 className="h-4 w-4" /> },
    { name: "Risk Management", level: 82, icon: <Target className="h-4 w-4" /> }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Started Trading Journey",
      description: "Began learning about markets and technical analysis during market volatility."
    },
    {
      year: "2021",
      title: "Developed First Models",
      description: "Created Excel-based portfolio tracking and risk assessment tools."
    },
    {
      year: "2022",
      title: "Advanced Analytics",
      description: "Learned Python for data analysis and automated trading strategies."
    },
    {
      year: "2023",
      title: "Consistent Profitability",
      description: "Achieved consistent returns through disciplined risk management."
    },
    {
      year: "2024",
      title: "Knowledge Sharing",
      description: "Started sharing insights and building this platform to help others."
    }
  ];

  const tools = [
    "Microsoft Excel", "Python", "Pandas", "NumPy", "Matplotlib", 
    "TradingView", "Bloomberg Terminal", "Yahoo Finance API", 
    "Alpha Vantage", "Jupyter Notebooks"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Deepak Singam
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate finance enthusiast on a mission to decode market patterns and build sustainable wealth through data-driven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My fascination with financial markets began during the 2020 market volatility. 
                What started as curiosity about why stock prices move the way they do evolved 
                into a deep passion for understanding market mechanics and building profitable strategies.
              </p>
              <p>
                Over the years, I've developed a systematic approach to trading that combines 
                technical analysis, fundamental research, and rigorous risk management. 
                My background in data analysis helps me identify patterns and opportunities 
                that others might miss.
              </p>
              <p>
                Beyond personal trading, I'm passionate about sharing knowledge and helping 
                others navigate the complex world of finance. This platform is my way of 
                giving back to the community that has taught me so much.
              </p>
            </div>

            {/* Fun Facts */}
            <Card className="mt-8 bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-accent" />
                  Quick Facts
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>☕ Drinks 4-5 cups of coffee while analyzing markets</li>
                  <li>📚 Reads 2-3 finance books per month</li>
                  <li>🎵 Listens to jazz music while coding models</li>
                  <li>🌅 Checks pre-market data every morning at 6 AM</li>
                  <li>🏃‍♂️ Runs 5K daily to clear the mind for better decisions</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-accent">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools & Technologies */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="bg-primary/10 text-primary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">My Journey Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>
            
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={event.year} className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-primary">
                    {event.year}
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-2 text-primary">{event.title}</h4>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <Card className="mt-16 bg-gradient-hero border-0 shadow-primary">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">My Trading Philosophy</h3>
            <blockquote className="text-lg text-white/90 italic leading-relaxed max-w-3xl mx-auto">
              "The market is a voting machine in the short run, but a weighing machine in the long run. 
              My job is to find the discrepancies between votes and weights, while never risking more 
              than I can afford to lose."
            </blockquote>
            <p className="text-white/70 mt-4">- Inspired by Benjamin Graham & Warren Buffett</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;