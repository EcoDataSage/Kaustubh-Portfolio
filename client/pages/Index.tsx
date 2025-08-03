import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Moon,
  Sun,
  Code,
  Database,
  BarChart3,
  Brain,
  Users,
  Zap,
  ExternalLink,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Index() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const skills = {
    "Analytics & Visualization": {
      icon: <BarChart3 className="w-5 h-5" />,
      items: ["Microsoft Power BI", "Excel", "Python", "Microsoft Azure"],
    },
    Programming: {
      icon: <Code className="w-5 h-5" />,
      items: ["SQL", "Python (Pandas, NumPy, Matplotlib)", "R (Shiny)"],
    },
    Databases: {
      icon: <Database className="w-5 h-5" />,
      items: ["Microsoft SQL Server", "MySQL"],
    },
    "AI & Machine Learning": {
      icon: <Brain className="w-5 h-5" />,
      items: [
        "Machine Learning",
        "Predictive Modeling",
        "Statistical Analysis",
        "Data Mining",
      ],
    },
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
        "Published and maintained Power BI reports with scheduled refresh and row-level security (RLS)",
      ],
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
        "Led end-to-end BI project lifecycle from requirement gathering to dashboard deployment",
      ],
    },
    {
      title: "Data Analyst",
      company: "Springhead Data Ltd.",
      location: "Exeter",
      period: "April 2021 – May 2021",
      highlights: [
        "Conducted comprehensive analysis of R Package Dynamics assessing popularity and stability",
        "Demonstrated proficiency in predictive modeling using caret and glmnet libraries",
        "Received SETsquared IKEEP Intrapreneurial Project Experience Award for innovative problem solving",
      ],
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
        "Ensured data governance and security compliance with access controls and role-level security",
      ],
    },
  ];

  const education = [
    {
      degree: "MSc. Business Analytics",
      institution: "University of Exeter",
      year: "2021",
    },
    {
      degree: "MBA Marketing",
      institution: "SP Pune University",
      year: "2018",
    },
  ];

  const handleDownloadResume = () => {
    window.open(
      "https://cdn.builder.io/api/v1/assets/5d62d0bc8e4241838cbad68abffc672a/kaustubh-ramekar-cv-09c360",
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-800/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-semibold text-xl">Kaustubh Ramekar</div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#voluntary"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Voluntary
              </a>
              <a
                href="#education"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Education
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-sky-400 to-indigo-600 p-0.5 mb-6 shadow-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5d62d0bc8e4241838cbad68abffc672a%2Fccc07439f6ee4bf3a6f0032541e0181e?format=webp&width=800"
                  alt="Kaustubh Ramekar"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
                Kaustubh
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A passionate BI & Data Analyst with{" "}
              <span className="font-semibold text-foreground">5+ years</span> of
              experience transforming complex data into actionable business
              insights through Power BI, Python, and advanced analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>London</span>
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

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-sky-400/50 text-sky-400 hover:bg-sky-400/10"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight mb-8">About</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I specialize in bridging the gap between complex data and
                strategic business decisions. My expertise lies in creating
                sophisticated Power BI solutions, optimizing SQL databases, and
                developing Python-based analytics that scale with business
                growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every dashboard I build tells a story that matters, helping
                organizations across multiple industries make data-driven
                decisions that drive innovation and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">
                  Dashboards Created
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-muted/30 to-slate-800/10"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(
              ([category, { icon, items }], index) => {
                const colors = [
                  "text-sky-400",
                  "text-emerald-400",
                  "text-violet-400",
                  "text-orange-400",
                ];
                return (
                  <Card
                    key={category}
                    className="border-0 shadow-sm bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className={colors[index % colors.length]}>
                          {icon}
                        </div>
                        <CardTitle className="text-lg font-semibold">
                          {category}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {items.map((skill) => (
                          <div
                            key={skill}
                            className="text-sm text-muted-foreground"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-semibold">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base font-medium">
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
                      <li
                        key={idx}
                        className="text-muted-foreground flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
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

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-cyan-900/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Showcasing advanced BI solutions and data visualizations that transform complex datasets into actionable business insights
            </p>
          </div>

          <div className="space-y-12">
            {/* Featured Project */}
            <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-sm overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative group">
                  <div className="aspect-video lg:aspect-square relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F5d62d0bc8e4241838cbad68abffc672a%2Ff9405dcdc5a745958012fe062754e319?format=webp&width=800"
                      alt="Power BI Dashboard - Visit Trend Analysis with Interactive Charts"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  {/* Interactive overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse animation-delay-300"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse animation-delay-500"></div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                        Power BI Dashboard
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      Advanced Business Intelligence Dashboard
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      A comprehensive BI solution featuring real-time data visualization, interactive filtering, and advanced analytics.
                      Built with Power BI, this dashboard transforms complex business data into clear, actionable insights for
                      executive decision-making.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                        <span className="text-muted-foreground">Real-time Data Integration</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                        <span className="text-muted-foreground">Interactive Visualizations</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                        <span className="text-muted-foreground">Advanced DAX Calculations</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                        <span className="text-muted-foreground">Performance Optimization</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                        <span className="text-muted-foreground">Row-Level Security</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                        <span className="text-muted-foreground">Cross-Platform Integration</span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400">Power BI</Badge>
                      <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-400">DAX</Badge>
                      <Badge variant="outline" className="bg-purple-500/10 border-purple-500/30 text-purple-400">SQL Server</Badge>
                      <Badge variant="outline" className="bg-orange-500/10 border-orange-500/30 text-orange-400">Power Query</Badge>
                      <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/30 text-cyan-400">Azure</Badge>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="border-t border-border/50 pt-6">
                    <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Project Impact</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">85%</div>
                        <div className="text-xs text-muted-foreground">Faster Reporting</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">15+</div>
                        <div className="text-xs text-muted-foreground">Data Sources</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">24/7</div>
                        <div className="text-xs text-muted-foreground">Real-time Updates</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Additional Projects Teaser */}
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Want to see more of my BI and analytics work?
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = 'mailto:kramekar1@gmail.com?subject=Portfolio%20Discussion'}
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
              >
                <Mail className="mr-2 h-4 w-4" />
                Let's Discuss My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Voluntary Experience Section */}
      <section
        id="voluntary"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-l from-muted/30 to-purple-900/10"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Voluntary Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
            I actively contribute to the growth and inclusivity of the UK's
            digital technology sector through leadership roles in prominent
            community-driven initiatives, fostering technical knowledge exchange
            and diversity within the tech ecosystem.
          </p>
          <div className="space-y-8">
            <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  Assistant Organiser
                </CardTitle>
                <CardDescription className="text-base font-medium text-orange-400">
                  AWS User Group UK
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I help coordinate events aimed at sharing deep technical
                  insights, practical case studies, and real-world AWS
                  implementation stories. My role includes supporting speakers,
                  especially those from underrepresented backgrounds, curating
                  session content, and maintaining strong community engagement.
                  This work reflects my passion for improving cloud computing
                  literacy across all skill levels.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      "https://www.meetup.com/awsuguk/members/?op=leaders",
                      "_blank",
                    )
                  }
                  className="border-orange-400/50 text-orange-400 hover:bg-orange-400/10"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  Organiser
                </CardTitle>
                <CardDescription className="text-base font-medium text-emerald-400">
                  AI Signals Meetup
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I serve as the Organiser for AI Signals, a dynamic community
                    focused on applied AI. Formerly known as AIDLE, the group
                    has grown to over 3,500 members and regularly features
                    practitioners from industry, academia, and independent
                    projects.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm responsible for end to end event execution, from speaker
                    curation to hosting, ensuring each session delivers
                    meaningful insights and encourages interdisciplinary
                    collaboration. This initiative represents a personal
                    commitment to driving transparent, applied AI innovation in
                    the UK.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open(
                        "https://www.meetup.com/ai-signals-community/members/?op=leaders",
                        "_blank",
                      )
                    }
                    className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {education.map((edu, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {edu.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-sm">
                    {edu.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-muted/30 to-indigo-900/10"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to transform your data into powerful insights? Let's connect
            and explore how we can drive your business forward together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={20} />
              <span>kramekar1@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone size={20} />
              <span>07572644863</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() =>
                (window.location.href = "mailto:kramekar1@gmail.com")
              }
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadResume}
              className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-2">
            Currently on skilled worker visa - Visa sponsorship required
          </p>
          <p>&copy; 2024 Kaustubh Ramekar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
