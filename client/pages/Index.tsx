import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Download, Linkedin, Github, ExternalLink } from "lucide-react";

export default function Index() {
  const skills = {
    "Analytical & Visualization Tools": ["Microsoft Power BI", "Excel", "Python", "Microsoft Azure"],
    "Programming Languages": ["SQL", "Python (Pandas, NumPy, Matplotlib)", "R (Shiny)"],
    "Databases": ["Microsoft SQL Server", "MySQL"],
    "Collaborative SaaS": ["Zoom", "Jira"]
  };

  const experiences = [
    {
      title: "BI & Test Analyst",
      company: "PineVox – Pioneers Global Services",
      location: "London",
      period: "Dec. 2024 – Present",
      highlights: [
        "Collaborated closely with clients to understand reporting requirements and business objectives",
        "Expert in Power BI toolset, including DAX, Power Query, Power BI Desktop, and Power BI Service",
        "Designed and implemented scalable data models using star/snowflake schemas",
        "Developed complex ETL workflows leveraging Power Query and integrated SQL Server",
        "Optimized DAX expressions and Power BI data models for performance and usability",
        "Published and maintained Power BI reports with scheduled refresh and row-level security (RLS)"
      ]
    },
    {
      title: "BI & Data Analyst",
      company: "Alankrita Ltd.",
      location: "London",
      period: "Sept. 2022 – Nov. 2024",
      highlights: [
        "Designed and developed interactive dashboards and reports using Microsoft Power BI",
        "Collaborated with cross-functional teams to gather BI requirements and deliver tailored solutions",
        "Built robust data models using Power BI Desktop, optimizing DAX queries",
        "Integrated diverse data sources (SQL Server, Excel, Azure, SharePoint) into unified reporting layer",
        "Implemented row-level security (RLS) and governance practices for secure data access",
        "Led end-to-end BI project lifecycle from requirement gathering to dashboard deployment"
      ]
    },
    {
      title: "Data Analyst",
      company: "Springhead Data Ltd.",
      location: "Exeter",
      period: "April 2021 – May 2021",
      highlights: [
        "Conducted comprehensive analysis of R Package Dynamics assessing popularity and stability",
        "Demonstrated proficiency in predictive modeling using caret and glmnet libraries",
        "Received SETsquared IKEEP Intrapreneurial Project Experience Award for innovative problem solving"
      ]
    },
    {
      title: "BD Analyst",
      company: "S&M International",
      location: "Pune",
      period: "April 2018 – Sept. 2020",
      highlights: [
        "Led requirements gathering sessions with business users and stakeholders",
        "Designed and optimized semantic data models within Power BI following industry best practices",
        "Developed dynamic dashboards delivering actionable intelligence across Finance, Sales, and Operations",
        "Optimized Power BI performance by refining data models and tuning DAX expressions",
        "Ensured data governance and security compliance with access controls and role-level security"
      ]
    }
  ];

  const education = [
    {
      degree: "MSc. Business Analytics",
      institution: "University of Exeter",
      year: "2021"
    },
    {
      degree: "MBA Marketing",
      institution: "SP Pune University",
      year: "2018"
    }
  ];

  const handleDownloadResume = () => {
    // In a real implementation, this would trigger a download of the resume PDF
    window.open("https://cdn.builder.io/api/v1/assets/5d62d0bc8e4241838cbad68abffc672a/kaustubh-ramekar-cv-09c360", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">
              Kaustubh Ramekar
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="text-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#education" className="text-foreground hover:text-primary transition-colors">Education</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Kaustubh Ramekar
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
              BI & Data Analyst
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Over 5 years of hands-on experience in Power BI development, developing and testing online analytical tools, 
              and writing high-quality code using SQL, Python, and R. Proficient in building interactive dashboards and 
              visualizations to present actionable insights to stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>London (ready to relocate)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <span>07572644863</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                <span>kramekar1@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleDownloadResume} size="lg">
                <Download className="mr-2" size={16} />
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2" size={16} />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a dedicated BI & Data Analyst with expertise in transforming complex data into actionable business insights. 
                My experience spans across various industries, helping organizations make data-driven decisions through 
                sophisticated analytics and visualization solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                I specialize in Power BI development, SQL database management, and Python programming, with a strong focus on 
                creating scalable data models and interactive dashboards that drive business growth and innovation.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Power BI Expert</Badge>
                <Badge variant="secondary">SQL Professional</Badge>
                <Badge variant="secondary">Python Developer</Badge>
                <Badge variant="secondary">R Shiny</Badge>
                <Badge variant="secondary">Data Visualization</Badge>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground mb-4">Years of Experience</div>
              <div className="text-2xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground mb-4">Dashboards Created</div>
              <div className="text-2xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company} • {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-lg">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {edu.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always interested in discussing new opportunities and exciting data projects. 
            Let's connect and explore how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={20} />
              <span className="text-lg">kramekar1@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone size={20} />
              <span className="text-lg">07572644863</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.location.href = 'mailto:kramekar1@gmail.com'}>
              <Mail className="mr-2" size={16} />
              Send Email
            </Button>
            <Button variant="outline" size="lg" onClick={handleDownloadResume}>
              <Download className="mr-2" size={16} />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Kaustubh Ramekar. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Currently on skilled worker visa - Visa sponsorship required
          </p>
        </div>
      </footer>
    </div>
  );
}
