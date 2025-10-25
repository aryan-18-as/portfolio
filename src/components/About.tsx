import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about transforming data into strategic business insights
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-10 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a passionate and detail-oriented Data Analyst skilled in transforming raw data into 
              actionable insights that help businesses make informed decisions. With a solid foundation 
              in SQL, Power BI, Excel, and Python, I bring a strong analytical mindset, problem-solving 
              ability, and a genuine curiosity for data.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've contributed to group and solo projects where I extracted insights from diverse datasets 
              such as HR analytics, sales data, survey responses, and finance reports. Through these, 
              I've built dashboards that track key business metrics and highlight trends using storytelling 
              with data. I am confident in adapting quickly, working collaboratively, and contributing to 
              data-driven environments.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex p-4 rounded-full gradient-accent mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Goal-Oriented</h3>
              <p className="text-muted-foreground">
                Focused on delivering measurable business impact through data
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex p-4 rounded-full gradient-accent mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Results-Driven</h3>
              <p className="text-muted-foreground">
                Track record of improving efficiency and driving insights
              </p>
            </Card>

            <Card className="p-6 text-center shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="inline-flex p-4 rounded-full gradient-accent mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Collaborative</h3>
              <p className="text-muted-foreground">
                Strong team player with cross-functional communication skills
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
