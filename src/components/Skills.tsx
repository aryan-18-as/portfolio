import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, LineChart, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "SQL", "MySQL", "C++"]
  },
  {
    title: "Data Tools",
    icon: LineChart,
    skills: ["Power BI", "Tableau", "Excel", "Looker Studio", "Google Analytics", "Tally", "Odoo", "Koops"]
  },
  {
    title: "Libraries & Frameworks",
    icon: Database,
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Streamlit"]
  },
  {
    title: "Core Concepts",
    icon: Wrench,
    skills: ["Data Modeling", "EDA", "ETL", "KPI Tracking", "Forecasting", "A/B Testing", "Clustering", "Dashboard Development"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive toolkit for end-to-end data analytics and visualization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg gradient-accent">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline"
                      className="text-sm py-1 hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
