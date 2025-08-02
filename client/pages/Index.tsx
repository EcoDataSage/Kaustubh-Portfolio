import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Download, Moon, Sun, ExternalLink, Code, Database, BarChart3, Brain } from "lucide-react";
import { useState, useEffect } from "react";

export default function Index() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = {
    "Analytical & Visualization": {
      icon: <BarChart3 className="w-6 h-6" />,
      items: ["Microsoft Power BI", "Excel", "Python", "Microsoft Azure"]
    },
    "Programming Languages": {
      icon: <Code className="w-6 h-6" />,
      items: ["SQL", "Python (Pandas, NumPy, Matplotlib)", "R (Shiny)"]
    },
    "Databases": {
      icon: <Database className="w-6 h-6" />,
      items: ["Microsoft SQL Server", "MySQL"]
    },
    "AI & Analytics": {
      icon: <Brain className="w-6 h-6" />,
      items: ["Machine Learning", "Predictive Modeling", "Statistical Analysis", "Data Mining"]
    }
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
    window.open("https://cdn.builder.io/api/v1/assets/5d62d0bc8e4241838cbad68abffc672a/kaustubh-ramekar-cv-09c360", "_blank");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Kaustubh Ramekar
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-foreground hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="text-foreground hover:text-blue-400 transition-colors">Skills</a>
              <a href="#experience" className="text-foreground hover:text-blue-400 transition-colors">Experience</a>
              <a href="#education" className="text-foreground hover:text-blue-400 transition-colors">Education</a>
              <a href="#contact" className="text-foreground hover:text-blue-400 transition-colors">Contact</a>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="hover:bg-purple-500/20"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white mb-6 shadow-2xl shadow-purple-500/25">
                KR
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Kaustubh Ramekar
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl text-blue-400 mb-6 font-semibold">
              BI & Data Analyst
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Transforming complex data into actionable insights with <span className="text-blue-400 font-semibold">5+ years</span> of 
              hands-on experience in Power BI development, Python analytics, and cutting-edge visualization solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-blue-400" />
                <span>London (ready to relocate)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-purple-400" />
                <span>07572644863</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-pink-400" />
                <span>kramekar1@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleDownloadResume} 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                <Download className="mr-2" size={16} />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400"
              >
                <Mail className="mr-2" size={16} />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate BI & Data Analyst who transforms complex datasets into compelling stories that drive business decisions. 
                With expertise spanning multiple industries, I bridge the gap between raw data and strategic insights.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My specialty lies in creating sophisticated Power BI solutions, optimizing SQL databases, and developing Python-based 
                analytics that scale with business growth. Every dashboard I build tells a story that matters.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">Power BI Expert</Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-500/30">SQL Professional</Badge>
                <Badge variant="secondary" className="bg-pink-500/20 text-pink-400 border-pink-500/30">Python Developer</Badge>
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">R Shiny</Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">Data Visualization</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 text-center backdrop-blur-sm border border-purple-500/20 shadow-2xl">
                <div className="grid grid-cols-1 gap-6">
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">5+</div>
                    <div className="text-muted-foreground">Years of Experience</div>
                  </div>
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">100+</div>
                    <div className="text-muted-foreground">Dashboards Created</div>
                  </div>
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-yellow-500 bg-clip-text text-transparent mb-2">15+</div>
                    <div className="text-muted-foreground">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, { icon, items }]) => (
              <Card key={category} className="h-full group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/10">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                      {icon}
                    </div>
                    <CardTitle className="text-lg group-hover:text-purple-300 transition-colors">{category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs bg-purple-500/10 border-purple-500/30 text-purple-300 hover:bg-purple-500/20 transition-colors">
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
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-pink-400 to-yellow-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative group hover:scale-[1.02] transition-all duration-300 bg-card/50 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl group-hover:text-blue-400 transition-colors">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-400">
                        {exp.company} • {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="w-fit bg-blue-500/20 text-blue-400 border-blue-500/30">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-3 group-hover:text-foreground transition-colors">
                        <span className="text-blue-400 mt-2 text-lg">▸</span>
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
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="text-center group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-yellow-500/20 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-500/10">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-yellow-400 transition-colors">{edu.degree}</CardTitle>
                  <CardDescription className="text-lg text-yellow-400">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-lg px-6 py-3 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                    {edu.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Ready to transform your data into powerful insights? Let's connect and explore how we can drive your business forward together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3 text-muted-foreground group hover:text-blue-400 transition-colors">
              <Mail size={24} className="text-blue-400" />
              <span className="text-lg">kramekar1@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground group hover:text-purple-400 transition-colors">
              <Phone size={24} className="text-purple-400" />
              <span className="text-lg">07572644863</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.location.href = 'mailto:kramekar1@gmail.com'}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
            >
              <Mail className="mr-2" size={16} />
              Send Email
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleDownloadResume}
              className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400"
            >
              <Download className="mr-2" size={16} />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Kaustubh Ramekar
            </span>
          </div>
          <p className="text-muted-foreground mb-2">&copy; 2024 Kaustubh Ramekar. All rights reserved.</p>
          <p className="text-sm text-purple-400">
            Currently on skilled worker visa - Visa sponsorship required
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
