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
  Github,
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
    "Analytics & Visualisation": {
      icon: <BarChart3 className="w-5 h-5" />,
      items: ["Microsoft Power BI", "Excel", "Python", "Microsoft Azure"],
    },
    Programming: {
      icon: <Code className="w-5 h-5" />,
      items: ["SQL", "Python (Pandas, NumPy, Matplotlib)", "R (Shiny)"],
    },
    "Databases & Cloud Data Platforms": {
      icon: <Database className="w-5 h-5" />,
      items: [
        "Microsoft SQL Server",
        "MySQL",
        "AWS (Redshift, Athena, S3, QuickSight, Grafana)",
      ],
    },
    "AI & Machine Learning": {
      icon: <Brain className="w-5 h-5" />,
      items: [
        "Machine Learning",
        "Predictive Modelling",
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
        "Designed and developed interactive data visualizations, analytical dashboards, and performance reports leveraging advanced BI platforms.",
        "Partnered with cross-functional stakeholders to capture business intelligence requirements and translate them into scalable data solutions.",
        "Engineered and optimised semantic data models, ensuring efficient query performance through advanced calculation logic (DAX/MDX) and model tuning.",
        "Orchestrated data integration pipelines, consolidating heterogeneous sources (relational databases, cloud storage, enterprise applications, and collaboration platforms) into a unified reporting ecosystem.",
        "Directed the end-to-end BI/analytics project lifecycle, encompassing requirements engineering, data modelling, ETL/ELT workflows, dashboard development, performance optimisation, and production deployment.",
        "Implemented data validation and quality assurance frameworks, ensuring accuracy, consistency, and reliability of business-critical KPIs.",
        "Utilised parameterisation, dynamic measures, and advanced filtering techniques to enable self-service analytics and enhance user interactivity.",
        "Applied performance tuning strategies, including query folding, model optimisation, and incremental refresh techniques to improve dashboard load times and scalability.",
        "Integrated automation and scheduling mechanisms to streamline report refresh cycles and reduce manual intervention.",
        "Collaborated with IT and data engineering teams to establish data lineage, metadata documentation, and standardized reporting conventions for long-term maintainability.",
        "Architected and maintained cloud-based BI and data analytics solutions, leveraging services such as AWS to enable scalable, high-performance reporting environments.",
        "Expert in Power BI toolset, including DAX, Power Query, Power BI Desktop, and Power BI Service",
        "Published and maintained Power BI reports with scheduled refresh and row-level security (RLS)",
      ],
    },
    {
      title: "BI & Data Analyst",
      company: "Alankrita Ltd.",
      location: "London",
      period: "Sept. 2022 – Nov. 2024",
      highlights: [
        "Designed and developed interactive dashboards and reports using Microsoft Power BI to support data-driven decision-making.",
        "Collaborated with cross-functional teams to gather BI requirements and deliver customised, scalable reporting solutions.",
        "Built robust data models in Power BI Desktop, optimising DAX queries for improved performance and maintainability.",
        "Integrated diverse data sources (SQL Server, Excel, Azure, SharePoint) into a centralised reporting layer, enabling a single source of truth.",
        "Led the end-to-end BI project lifecycle, including requirements gathering, data modelling, dashboard development, performance tuning, and deployment.",
        "Implemented data validation and quality checks, ensuring accuracy, consistency, and reliability of critical business metrics.",
        "Applied advanced Power BI features such as bookmarks, drill-through actions, dynamic measures, and parameterisation to enhance user experience and interactivity.",
        "Automated data refresh schedules and optimised gateway configurations to ensure real-time and reliable data delivery.",
        "Collaborated with data engineering and IT teams to document data lineage, establish metadata standards, and implement best practices for long-term maintainability.",
        "Supported performance optimisation efforts, including query folding, model tuning, and incremental refresh techniques to improve dashboard load times and scalability.",
        "Trained and supported business users in self-service analytics, enabling teams to explore data independently and reduce reliance on IT.",
        "Contributed to the adoption of BI governance frameworks, ensuring standardised reporting conventions and alignment with organisational data strategy.",
      ],
    },
    {
      title: "Data Analyst",
      company: "Springhead Data Ltd.",
      location: "Exeter",
      period: "April 2021 – May 2021",
      highlights: [
        "Conducted comprehensive analysis of R package dynamics, assessing trends in popularity, stability, and community adoption to inform strategic decisions.",
        "Demonstrated proficiency in predictive modelling using the caret and glmnet libraries, applying regularisation techniques and cross-validation for model optimisation.",
        "Performed exploratory data analysis (EDA) to identify key patterns, outliers, and feature relationships, supporting data preparation and hypothesis generation.",
        "Documented analysis workflows and findings in reproducible R scripts and Markdown reports, ensuring transparency and ease of knowledge transfer.",
      ],
    },
    {
      title: "BD Analyst",
      company: "S&M International",
      location: "Pune",
      period: "April 2018 – Sept. 2020",
      highlights: [
        "Led requirements gathering sessions with business users and stakeholders",
        "Designed and optimised semantic data models within Power BI following industry best practices",
        "Developed dynamic dashboards delivering actionable intelligence across Finance, Sales, and Operations",
        "Optimised Power BI performance by refining data models and tuning DAX expressions",
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
                Volunteer
              </a>
              <a
                href="#education"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Education
              </a>
              <a
                href="#awards"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Awards
              </a>
              <a
                href="#blog"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Blogs
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
                I specialise in bridging the gap between complex data and
                strategic business decisions. My expertise lies in creating
                sophisticated Power BI solutions, optimising SQL databases, and
                developing Python-based analytics that scale with business
                growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every dashboard I build tells a story that matters, helping
                organisations across multiple industries make data-driven
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
              Showcasing advanced BI solutions and data visualisations that
              transform complex datasets into actionable business insights
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Project 1: Visit Analytics Dashboard */}
            <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-sm overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Project Image */}
                <div className="relative group lg:col-span-3">
                  {/* Mac Window Frame */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg shadow-2xl">
                    {/* Window Title Bar */}
                    <div className="bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 px-3 py-2 border-b border-slate-300 dark:border-slate-600">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
                        </div>
                        <div className="text-xs font-medium text-slate-600 dark:text-slate-300 absolute left-1/2 transform -translate-x-1/2">
                          Power BI Service - Visit Analytics
                        </div>
                        <div className="w-12"></div>
                      </div>
                    </div>

                    {/* Browser Navigation Bar */}
                    <div className="bg-slate-50 dark:bg-slate-800 px-3 py-1.5 border-b border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                            <svg
                              className="w-2.5 h-2.5 text-slate-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 bg-white dark:bg-slate-700 rounded px-2 py-0.5 text-xs text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600 truncate">
                          app.powerbi.com/visit-analytics
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="relative h-[calc(100%-5rem)] overflow-hidden">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5d62d0bc8e4241838cbad68abffc672a%2Ff9405dcdc5a745958012fe062754e319?format=webp&width=800"
                        alt="Visit Analytics Dashboard - Trend Analysis"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Live Dashboard Indicator */}
                    <div className="absolute top-16 right-3 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                      Live
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <Badge
                        variant="secondary"
                        className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                      >
                        Visit Analytics
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      Visit Trend Dashboard
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      Comprehensive BI solution for analysing website visit
                      patterns with real-time data visualisation, interactive
                      filtering, and advanced trend analysis.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                        <span className="text-muted-foreground">
                          Weekly & Daily Trend Analysis
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                        <span className="text-muted-foreground">
                          Interactive Visualisations
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                        <span className="text-muted-foreground">
                          Real-time Data Integration
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge
                        variant="outline"
                        className="text-xs bg-blue-500/10 border-blue-500/30 text-blue-400"
                      >
                        Power BI
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs bg-green-500/10 border-green-500/30 text-green-400"
                      >
                        DAX
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs bg-purple-500/10 border-purple-500/30 text-purple-400"
                      >
                        SQL Server
                      </Badge>
                    </div>
                  </div>

                  {/* GitHub Repository Button */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open(
                          "https://github.com/kRamekar/Hourly_Occupancy",
                          "_blank",
                        )
                      }
                      className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 w-full"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Clone and run locally to explore the full dashboard
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Project 2: Master Sales Dashboard */}
            <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-sm overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Project Image */}
                <div className="relative group lg:col-span-3">
                  {/* Mac Window Frame */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg shadow-2xl">
                    {/* Window Title Bar */}
                    <div className="bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 px-3 py-2 border-b border-slate-300 dark:border-slate-600">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
                        </div>
                        <div className="text-xs font-medium text-slate-600 dark:text-slate-300 absolute left-1/2 transform -translate-x-1/2">
                          Master Sales Dashboard
                        </div>
                        <div className="w-12"></div>
                      </div>
                    </div>

                    {/* Browser Navigation Bar */}
                    <div className="bg-slate-50 dark:bg-slate-800 px-3 py-1.5 border-b border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                            <svg
                              className="w-2.5 h-2.5 text-slate-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 bg-white dark:bg-slate-700 rounded px-2 py-0.5 text-xs text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600 truncate">
                          app.powerbi.com/master-sales
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="relative h-[calc(100%-5rem)] overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-20 h-20 mx-auto mb-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                            <BarChart3 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <h4 className="text-xl font-semibold text-emerald-700 dark:text-emerald-300 mb-3">
                            Master Sales Analytics
                          </h4>
                          <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-4">
                            Revenue • Trends • Performance • Profit Margins
                          </p>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
                                $2.4M
                              </div>
                              <div className="text-xs text-emerald-600 dark:text-emerald-400">
                                Total Revenue
                              </div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
                                1,274
                              </div>
                              <div className="text-xs text-emerald-600 dark:text-emerald-400">
                                Units Sold
                              </div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
                                15%
                              </div>
                              <div className="text-xs text-emerald-600 dark:text-emerald-400">
                                Growth
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Live Dashboard Indicator */}
                    <div className="absolute top-16 right-3 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                      Live
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <Badge
                        variant="secondary"
                        className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                      >
                        Sales Analytics
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      Master Sales Dashboard
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      Interactive dashboard analysing sales performance across
                      multiple dimensions including total revenue, units sold,
                      sales trends, and regional customer segmentation.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-emerald-400"></div>
                        <span className="text-muted-foreground">
                          Revenue & Profit Analysis
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-emerald-400"></div>
                        <span className="text-muted-foreground">
                          Product Performance Tracking
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-emerald-400"></div>
                        <span className="text-muted-foreground">
                          Regional Segmentation
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge
                        variant="outline"
                        className="text-xs bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      >
                        Power BI
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs bg-blue-500/10 border-blue-500/30 text-blue-400"
                      >
                        DAX
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs bg-purple-500/10 border-purple-500/30 text-purple-400"
                      >
                        Excel
                      </Badge>
                    </div>
                  </div>

                  {/* GitHub Repository Button */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open(
                          "https://github.com/kRamekar/MasterSales",
                          "_blank",
                        )
                      }
                      className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 w-full"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Download and customise with your sales data
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Project 3: Growth Dashboard */}
            <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-sm overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Project Image */}
                <div className="relative group lg:col-span-3">
                  {/* Mac Window Frame */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg shadow-2xl">
                    {/* Window Title Bar */}
                    <div className="bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 px-3 py-2 border-b border-slate-300 dark:border-slate-600">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
                        </div>
                        <div className="text-xs font-medium text-slate-600 dark:text-slate-300 absolute left-1/2 transform -translate-x-1/2">
                          Growth Analytics Dashboard
                        </div>
                        <div className="w-12"></div>
                      </div>
                    </div>

                    {/* Browser Navigation Bar */}
                    <div className="bg-slate-50 dark:bg-slate-800 px-3 py-1.5 border-b border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                            <svg
                              className="w-2.5 h-2.5 text-slate-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 bg-white dark:bg-slate-700 rounded px-2 py-0.5 text-xs text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600 truncate">
                          app.powerbi.com/growth-dashboard
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="relative h-[calc(100%-5rem)] overflow-hidden">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5d62d0bc8e4241838cbad68abffc672a%2Fc0b91a8bef994fd091e3b03e297ef5c9?format=webp&width=800"
                        alt="Growth Dashboard with KPIs and Analytics"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Live Dashboard Indicator */}
                    <div className="absolute top-16 right-3 bg-violet-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                      Live
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                      <Badge
                        variant="secondary"
                        className="bg-violet-500/20 text-violet-400 border-violet-500/30"
                      >
                        Growth Analytics
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      Growth Dashboard
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      Comprehensive growth tracking dashboard monitoring KPIs,
                      customer acquisition, business expansion metrics, and
                      period-over-period performance comparisons.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-violet-400"></div>
                        <span className="text-muted-foreground">
                          Customer Acquisition Tracking
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-violet-400"></div>
                        <span className="text-muted-foreground">
                          Revenue Growth Analysis
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-violet-400"></div>
                        <span className="text-muted-foreground">
                          Target vs Actual Performance
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      <Badge
                        variant="outline"
                        className="text-xs bg-violet-500/10 border-violet-500/30 text-violet-400"
                      >
                        Power BI
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs bg-blue-500/10 border-blue-500/30 text-blue-400"
                      >
                        DAX
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs bg-orange-500/10 border-orange-500/30 text-orange-400"
                      >
                        SQL
                      </Badge>
                    </div>
                  </div>

                  {/* GitHub Repository Button */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open(
                          "https://github.com/kRamekar/GrowthDashboard",
                          "_blank",
                        )
                      }
                      className="border-violet-400/50 text-violet-400 hover:bg-violet-400/10 w-full"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Customise for your growth metrics and KPIs
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more detailed walkthroughs of these projects?
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                (window.location.href =
                  "mailto:kramekar1@gmail.com?subject=Project%20Portfolio%20Discussion")
              }
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
            >
              <Mail className="mr-2 h-4 w-4" />
              Let's Discuss My Projects
            </Button>
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

      {/* Awards Section */}
      <section
        id="awards"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-muted/30 to-amber-900/10"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Awards</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
            Recognition for outstanding achievements in intrapreneurial thinking
            and innovation, demonstrating commitment to entrepreneurial
            excellence and practical business problem-solving.
          </p>
          <div className="space-y-8 max-w-4xl">
            <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <Badge
                    variant="secondary"
                    className="bg-amber-500/20 text-amber-400 border-amber-500/30"
                  >
                    Intrapreneurial Training
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold">
                  SETsquared IKEEP – Intrapreneurial Training Award
                </CardTitle>
                <CardDescription className="text-base font-medium text-amber-400">
                  Issued by: Badge Nation | Organised by: SETsquared Partnership
                  & University of Exeter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I completed the IKEEP Intrapreneurial Training Programme, an
                  immersive series of workshops focused on developing
                  entrepreneurial skills for driving innovation within
                  organisations. Through over 8 hours of interactive sessions, I
                  gained practical knowledge in:
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Intrapreneurship & Innovation Thinking
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Business Model Design & Value Creation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Structured Problem Solving
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Team Collaboration & Digital Communication
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The training helped me build a strong foundation in how to
                  approach complex business challenges with an entrepreneurial
                  mindset, preparing me to contribute effectively in fast-paced,
                  innovation-driven environments.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      "https://www.credly.com/badges/9e1f6d58-6ce5-4387-8b13-4023e229e778?source=linked_in_profile",
                      "_blank",
                    )
                  }
                  className="border-amber-400/50 text-amber-400 hover:bg-amber-400/10"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                  >
                    Project Placement
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold">
                  SETsquared IKEEP – Intrapreneurial Project Placement Award
                </CardTitle>
                <CardDescription className="text-base font-medium text-emerald-400">
                  Issued by: Badge Nation | Organised by: SETsquared Partnership
                  & University of Exeter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Following the training, I completed a 70-hour intrapreneurial
                  project placement, applying my learning to a live business
                  challenge provided by a real organisation. As part of a
                  cross-disciplinary team, I:
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Delivered practical solutions using innovation and
                      consulting tools
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Strengthened skills in systems thinking, collaboration,
                      and professional communication
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0"></div>
                    <span className="text-muted-foreground">
                      Gained real-world experience in solving business problems
                      under deadlines
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This placement allowed me to bridge the gap between theory and
                  practice and demonstrated how intrapreneurial thinking can
                  bring value within an existing organisation.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      "https://www.credly.com/badges/23328e45-f847-4c7f-be4c-f37d1041c607?source",
                      "_blank",
                    )
                  }
                  className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Blog</h2>
          <div className="space-y-8 max-w-4xl">
            <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-400 border-blue-500/30"
                  >
                    Tech Blog
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold">Tech Phlow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tech Phlow is my blog where I share technical insights,
                  thoughts, and learnings in the world of technology. The name
                  blends "Tech" (technology) with "Phlow", inspired by Mihaly
                  Csikszentmihalyi's concept of{" "}
                  <span className="font-medium text-foreground italic">
                    flow
                  </span>
                  , the state of deep focus and creativity.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  It's where I explore the tools, ideas, and trends shaping the
                  tech world, all written to spark thought and stay in flow.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open("https://techphlow.medium.com/", "_blank")
                  }
                  className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <Badge
                    variant="secondary"
                    className="bg-orange-500/20 text-orange-400 border-orange-500/30"
                  >
                    AWS Blog
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold">kAWStubh</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  kAWStubh is my blog focused on AWS technologies. I share
                  insights from tech talks, user group meetups, and personal
                  explorations in the AWS ecosystem. It's a space where cloud
                  knowledge and community learning come together.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open("https://medium.com/@kAWStubh", "_blank")
                    }
                    className="border-orange-400/50 text-orange-400 hover:bg-orange-400/10"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open(
                        "https://www.meetup.com/awsuguk/events/",
                        "_blank",
                      )
                    }
                    className="border-orange-400/50 text-orange-400 hover:bg-orange-400/10"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                </div>
              </CardContent>
            </Card>
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
