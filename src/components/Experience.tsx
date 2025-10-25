import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Uncompromised",
    period: "Aug 2025 - Present",
    highlights: [
      "Consolidated financial and operational data from Tally, Koops, and Odoo into centralized SQL databases, improving reporting accuracy by 35%",
      "Automated 15+ dashboards and Excel reports using Power BI and Python, saving 40+ hours/month",
      "Led a cross-functional data migration project, standardizing workflows and mentoring 3 interns",
      "Built predictive financial models to forecast KPIs, accelerating strategic planning cycles by 20%"
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "JK Tyre",
    period: "Jun 2025 - Aug 2025",
    highlights: [
      "Analyzed 50K+ transactional records using SQL and Python (Pandas, NumPy), driving a 12% increase in regional sales",
      "Automated 10+ KPI reports and visual dashboards, reducing report generation time by 60%",
      "Designed Power BI dashboards for 5 regional managers to monitor KPIs and improve operational efficiency"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 gradient-accent bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hands-on experience in data analytics, business intelligence, and automation
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 lg:p-8 shadow-card hover:shadow-glow transition-all duration-300 border-l-4 border-l-primary animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-xl text-primary font-semibold">{exp.company}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-sm px-4 py-1 self-start">
                  {exp.period}
                </Badge>
              </div>

              <ul className="space-y-3 ml-12">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-accent mt-1.5">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
