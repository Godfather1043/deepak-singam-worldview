import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Get in touch via email",
      value: "deepak.singam@email.com",
      action: "mailto:deepak.singam@email.com",
      color: "text-primary"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      description: "Connect professionally",
      value: "linkedin.com/in/deepaksingam",
      action: "https://linkedin.com/in/deepaksingam",
      color: "text-accent"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      description: "Check out my code",
      value: "github.com/deepaksingam",
      action: "https://github.com/deepaksingam",
      color: "text-muted-foreground"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about trading strategies, want to discuss market opportunities, or just want to connect? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <MessageCircle className="h-6 w-6 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your trading goals, questions, or how I can help..."
                    className="bg-background/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="gradient" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss trading strategies, market analysis, or potential collaborations. 
                Whether you're a beginner looking for guidance or an experienced trader wanting to share insights, 
                feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <Card 
                  key={method.title}
                  className="group bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(method.action, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full bg-primary/10 ${method.color} group-hover:scale-110 transition-transform`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-1">
                          {method.description}
                        </p>
                        <p className="text-primary font-medium">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Availability */}
            <Card className="bg-gradient-accent border-0 shadow-accent">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-white" />
                  <h4 className="font-semibold text-lg text-white">Availability</h4>
                </div>
                <div className="text-white/90 space-y-2">
                  <p><strong>Response Time:</strong> Usually within 24 hours</p>
                  <p><strong>Best Time to Connect:</strong> Weekdays 9 AM - 6 PM EST</p>
                  <p><strong>Location:</strong> Eastern Time Zone</p>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-primary border-0 shadow-primary">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-xl text-white mb-3">
                  Ready to Start Trading?
                </h4>
                <p className="text-white/90 mb-4">
                  Get my free trading checklist and risk management template.
                </p>
                <Button variant="accent" size="lg">
                  Download Free Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;