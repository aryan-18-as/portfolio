import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss how data can drive your business forward
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a 
                      href="mailto:aryansaxena154@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      aryansaxena154@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a 
                      href="tel:+916263843353"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 6263843353
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">41 Tagore Nagar University Road</p>
                    <p className="text-muted-foreground">Gwalior, India</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
                
                <div className="space-y-3">
                  <Button 
                    asChild
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <a href="https://linkedin.com/in/aryan-saxena-615318309" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-3 h-5 w-5" />
                      LinkedIn Profile
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </a>
                  </Button>

                  <Button 
                    asChild
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <a href="https://github.com/aryan-18-as" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-3 h-5 w-5" />
                      GitHub Profile
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </a>
                  </Button>

                  <Button 
                    asChild
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <a href="https://unique-llama-0b5d75.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-3 h-5 w-5" />
                      Portfolio Website
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </a>
                  </Button>

                  <Button 
                    asChild
                    className="w-full justify-start gradient-hero text-white hover:opacity-90"
                  >
                    <a href="mailto:aryansaxena154@gmail.com">
                      <Mail className="mr-3 h-5 w-5" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
