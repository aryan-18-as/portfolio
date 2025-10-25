import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst",
    company: "Uncompromised",
    period: "Aug 2025 - Present",
    location: "Udaipur, Rajasthan, India",
    highlights: [
      "Collected, cleaned, and transformed large structured and unstructured datasets to ensure high-quality inputs for analysis",
      "Conducted exploratory and statistical analysis to uncover key trends, patterns, and anomalies in business performance",
      "Designed and automated interactive dashboards and reports in Excel and Power BI, improving data accessibility for stakeholders",
      "Applied data analytics to support financial planning and decision-making, enabling more accurate forecasting",
      "Partnered with cross-functional teams to address ad-hoc data requests and streamline reporting workflows"
    ]
  },
  {
    title: "Data Analyst",
    company: "JK Tyre & Industries Ltd.",
    period: "Jun 2025 - Aug 2025",
    location: "Banmore, Madhya Pradesh, India",
    highlights: [
      "Analyzed large datasets to extract insights and identify patterns",
      "Created interactive dashboards using Excel and Power BI for real-time monitoring",
      "Supported decision-making processes to improve operational efficiency across departments"
    ]
  },
  {
    title: "Campus Ambassador",
    company: "IIT Roorkee",
    period: "Jan 2025 - Feb 2025",
    location: "India",
    highlights: [
      "Promoted e-summit awareness at ITM University",
      "Engaged with students to drive participation in technical events"
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "Mentorness",
    period: "Sep 2024 - Oct 2024",
    location: "Ahmedabad, Gujarat, India",
    highlights: [
      "Worked on data analysis projects predicting important features",
      "Conducted exploratory data analysis to identify key trends"
    ]
  },
  {
    title: "Machine Learning Intern",
    company: "Mentorness",
    period: "Jul 2024 - Aug 2024",
    location: "India",
    highlights: [
      "Developed and implemented machine learning models",
      "Applied predictive modeling techniques to real-world datasets"
    ]
  },
  {
    title: "Brand Executive",
    company: "TEACHNOOK",
    period: "Aug 2024 - Sep 2024",
    location: "Bengaluru, Karnataka, India",
    highlights: [
      "Managed brand presence and marketing initiatives",
      "Collaborated with cross-functional teams to drive engagement"
    ]
  },
  {
    title: "Data Science Intern",
    company: "YBI Foundation",
    period: "May 2024 - Jul 2024",
    location: "India",
    highlights: [
      "Worked on data science projects applying statistical methods",
      "Contributed to data-driven decision making processes"
    ]
  },
  {
    title: "Human Resources Assistant",
    company: "ILP Overseas",
    period: "Sep 2023 - Nov 2023",
    location: "India",
    highlights: [
      "Supported HR operations and recruitment processes",
      "Managed candidate data and assisted in onboarding workflows"
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
                    {exp.location && (
                      <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                    )}
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
