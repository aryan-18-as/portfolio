import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation and continuous learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Education */}
          <Card className="p-6 lg:p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">B.Tech in Data Science</h3>
                    <p className="text-lg text-primary font-semibold">ITM University, Gwalior</p>
                  </div>
                  <Badge variant="secondary" className="text-sm px-4 py-1 self-start">
                    2022 - Present
                  </Badge>
                </div>
                <div className="mb-3">
                  <Badge className="bg-accent/20 text-accent hover:bg-accent/30">
                    GPA: 8.4 / 10
                  </Badge>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▸</span>
                    <span>Completed 30+ credits in Machine Learning, Data Analytics, and Database Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▸</span>
                    <span>Developed a full-stack Expense Tracker website to visualize spending patterns and optimize budgets</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-6 lg:p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                <Award className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">Professional Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Google Data Analytics Professional Certificate",
                    "Career Essentials in Data Analysis by Microsoft and LinkedIn",
                    "Learning Data Analytics: 1 Foundations",
                    "Learning Data Analytics Part 2: Extending and Applying Core Knowledge",
                    "Tata Group - Data Visualisation Job Simulation",
                    "PwC Switzerland - Power BI Job Simulation",
                    "AICTE-Google AI/ML Virtual Internship",
                    "SQL for Data Analytics - Udemy",
                    "HackerRank Python (Intermediate)",
                    "HackerRank SQL (Advanced)"
                  ].map((cert, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <span className="text-secondary mt-0.5">✓</span>
                      <span className="text-sm text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
