import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo Section */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-accent to-secondary p-1 shadow-glow">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={profilePhoto} 
                    alt="Aryan Saxena - Data Analyst"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-accent/30 animate-pulse" style={{ animationDuration: "3s" }}></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-slide-up">
            <div className="space-y-2">
              <p className="text-accent text-lg font-semibold tracking-wide">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-white">
                Aryan Saxena
              </h1>
              <h2 className="text-2xl lg:text-3xl text-white/90 font-light">
                Data Analyst
              </h2>
            </div>

            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              Transforming raw data into actionable insights. Specialized in Python, SQL, and Power BI 
              with a passion for uncovering patterns that drive business decisions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button 
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              >
                <a href="#projects">
                  View Projects
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a 
                href="https://linkedin.com/in/aryan-saxena-615318309" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 backdrop-blur-sm"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/aryan-18-as" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 backdrop-blur-sm"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:aryansaxena154@gmail.com"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 backdrop-blur-sm"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
