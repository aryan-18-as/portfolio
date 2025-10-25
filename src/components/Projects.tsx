import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Expense Tracking Web App",
    description: "Full-stack expense tracker with automated analytics, enabling 20% optimization in personal and team budgets",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    github: "https://github.com/aryan-18-as/Expense-Tracking-Live",
    link: null
  },
  {
    title: "Dashboard Mood Booster",
    description: "Interactive dashboard combining data visualization with dynamic mood-boosting content. Integrated APIs for jokes, quotes, and trivia",
    tech: ["Power BI", "APIs", "Data Visualization"],
    github: null,
    link: "https://www.linkedin.com/posts/aryan-saxena-615318309_dataanalytics-dashboarddesign-machinelearning-activity-7360953049084846081-cMIR"
  },
  {
    title: "Gender Bias Analysis",
    description: "Analyzed 10 years of HR data using Python and Power BI, identified 22% gender pay gap and recommended equity improvements",
    tech: ["Python", "Power BI", "Statistical Analysis"],
    github: "https://github.com/aryan-18-as/gender_bias",
    link: null
  },
  {
    title: "IPL 2025 Dream Squad",
    description: "Optimal team selection under $1M budget using constraint optimization. Streamlit dashboard viewed by 1,000+ users",
    tech: ["Python", "Streamlit", "Optimization"],
    github: "https://github.com/aryan-18-as/ipl-2025-best-squad",
    link: null
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world data analytics projects showcasing technical skills and business impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 shadow-card hover:shadow-glow transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <Button 
                      asChild
                      variant="outline"
                      size="sm"
                      className="group/btn"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.link && (
                    <Button 
                      asChild
                      variant="outline"
                      size="sm"
                      className="group/btn"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        View
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
