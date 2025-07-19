import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  ArrowDown,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Zap,
  Github,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send,
  Check,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      technologies: ["JavaScript", "TypeScript", "C", "C++", "Python", "HTML", "CSS"],
    },
    {
      category: "MERN Stack",
      icon: <Server className="h-6 w-6" />,
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
    },
    {
      category: "Frontend Frameworks",
      icon: <Globe className="h-6 w-6" />,
      technologies: ["Tailwind CSS", "Daisy UI", "Material UI", "Bootstrap"],
    },
    {
      category: "Cybersecurity",
      icon: <Database className="h-6 w-6" />,
      technologies: ["Wireshark", "Nmap", "Burp Suite", "Aircrack-ng", "OWASP"],
    },
    {
      category: "Penetration Testing",
      icon: <Smartphone className="h-6 w-6" />,
      technologies: [
        "Recon-ng",
        "Maltego",
        "Red Team Tactics",
        "Backdooring",
        "Privilege Escalation",
      ],
    },
    {
      category: "Development Tools",
      icon: <Zap className="h-6 w-6" />,
      technologies: ["Git", "VS Code", "Chrome DevTools", "Postman", "Linux"],
    },
  ];

  const projects = [
    {
      title: "High School Admin Project",
      description:
        "Web-based school result management system with student data entry, mark sheet generation, and XLSX import/export, integrated with IndexedDB for offline support.",
      technologies: ["React", "Dixie.js", "IndexedDB", "TypeScript"],
      image: "/ghs-admin.png",
      github: "https://github.com/fardin072/ghs-admin.git",
      live: "https://guzia-high-school-admin.netlify.app/",
    },
    {
      title: "Task Management Application",
      description:
        "TaskCove is a simple yet powerful task management web application that allows users to add, update, remove, and mark tasks as done.",
      technologies: ["React", "LocalStorage", "Tailwind", "JavaScript"],
      image: "/task-cove.png",
      github: "https://github.com/fardin072/Task-Management-System---TaskCove.git",
      live: "https://task-cove.netlify.app/",
    },
    {
      title: "Huddle - [Single Page]",
      description:
        "Welcome to Huddle, a community-building platform designed to help you connect with your audience in meaningful ways. This repository contains the HTML and CSS code for the Huddle landing page.",
      technologies: ["React", "Tailwind"],
      image: "/huddle.png",
      github: "https://github.com/fardin072/huddle.git",
      live: "https://huddle-the-community.netlify.app/",
    },

  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-background to-accent/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-brand-100 text-brand-800 rounded-full text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-600">
                Omur Faruque
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A passionate{" "}
              <span className="text-foreground font-semibold">
                MERN Stack Developer
              </span>{" "}
              and{" "}
              <span className="text-foreground font-semibold">
                Cybersecurity Enthusiast
              </span>{" "}
              crafting secure, exceptional digital experiences with modern
              technologies and ethical hacking expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 text-lg border-2"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/fardin072"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/md-omurfaruque-talukder/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About Me
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate about creating innovative web solutions that make a
                difference
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-brand-600/20 rounded-2xl transform rotate-3"></div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fb3949e84736d4debbdc99c1105b1ff6a%2F099557e9933b474d8b5bef63e449ac0d?format=webp&width=800"
                    alt="MD. Omur Faruque Talukder"
                    className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a Computer Science & Engineering student at National
                  Institute of Textile Engineering and Research, passionate
                  about full-stack development and cybersecurity. Currently
                  working as a Frontend Developer at Uddhar, I bring a unique
                  blend of technical expertise and ethical hacking knowledge to
                  create secure, scalable web applications.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey combines academic excellence (GPA 5.00) with
                  hands-on experience in MERN stack development. I'm also deeply
                  interested in cybersecurity, holding certifications in ethical
                  hacking and continuously expanding my knowledge in penetration
                  testing and security assessments.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-lg border">
                    <div className="text-2xl font-bold text-primary">5.00</div>
                    <div className="text-sm text-muted-foreground">
                      Academic GPA
                    </div>
                  </div>
                  <div className="bg-card p-4 rounded-lg border">
                    <div className="text-2xl font-bold text-primary">4+</div>
                    <div className="text-sm text-muted-foreground">
                      Certifications
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a
                      href="https://cdn.builder.io/o/assets%2Fb3949e84736d4debbdc99c1105b1ff6a%2Ffc51961cd9e64a289b515945e2a7b23c?alt=media&token=707ac45d-72e0-4931-94ba-6c788860641e&apiKey=b3949e84736d4debbdc99c1105b1ff6a"
                      download="MD_Omur_Faruque_Talukder_CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Let's Work Together
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Education & Certifications
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Academic excellence and continuous learning in computer science
                and cybersecurity
              </p>
            </div>

            <div className="space-y-8">
              {/* Current Education */}
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Bachelor of Computer Science & Engineering
                      </h3>
                      <p className="text-primary font-medium">
                        National Institute of Textile Engineering and Research
                      </p>
                      <p className="text-muted-foreground">
                        Nayarhat | October 2024 - Present
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      Current
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Previous Education */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Higher Secondary Certificate
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      Government Shah Sultan College
                    </p>
                    <p className="text-muted-foreground mb-3">
                      Bogura | November 2020 – November 2022
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-800"
                    >
                      GPA 5.00
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Secondary School Certificate
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      Armed Police Battalion Public School & College
                    </p>
                    <p className="text-muted-foreground mb-3">
                      Bogura | January 2015 – February 2020
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-800"
                    >
                      GPA 5.00
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Certifications */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                  Professional Certifications
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-2">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-foreground">
                            Web Development Course
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Programming Hero
                          </p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          Certified
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-foreground">
                            Introduction to Cyber Security
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Cybersecurity Course
                          </p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          Certified
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-foreground">
                            Junior Penetration Tester
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Try Hack Me
                          </p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          Certified
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-foreground">
                            Red Teaming
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Try Hack Me
                          </p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">
                          Ongoing
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Professional Experience
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Building impactful web solutions and gaining valuable industry
                experience
              </p>
            </div>

            <Card className="border-2 border-primary/20 mb-10">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      Frontend Developer
                    </h3>
                    <p className="text-xl text-primary font-medium mb-2">
                      Uddhar
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Rajshahi | October 2024 - June 2025
                    </p>
                  </div>
                  <Badge className="bg-red-100 text-red-800 border-red-200">
                    Former Role
                  </Badge>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-foreground">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Building responsive UIs with React and TypeScript.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Creating pixel-perfect designs using Tailwind CSS.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Integrating APIs with backend teams for seamless data flow.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Optimizing performance for fast load times and cross-browser compatibility.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Applying security best practices for secure frontend implementations.
                    </li>
                  </ul>

                  <div className="mt-6">
                    <h4 className="text-lg font-medium text-foreground mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "TypeScript",
                        "HTML",
                        "CSS",
                        "Tailwind CSS",
                        "Material UI",
                        "Git",
                        "GitHub",
                        "VS Code",
                      ].map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      Frontend Developer
                    </h3>
                    <p className="text-xl text-primary font-medium mb-2">
                      ACS Bootcamp Project - Finmate
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Dhaka | December 2024 - Present
                    </p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    Current Role
                  </Badge>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-foreground">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Developing responsive and interactive user interfaces
                      using React and modern frontend technologies
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Implementing pixel-perfect designs with Tailwind CSS and
                      component libraries
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Collaborating with backend developers to integrate APIs
                      and ensure seamless data flow
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Optimizing application performance and ensuring
                      cross-browser compatibility
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Applying cybersecurity best practices to ensure secure
                      frontend implementations
                    </li>
                  </ul>

                  <div className="mt-6">
                    <h4 className="text-lg font-medium text-foreground mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "JavaScript",
                        "HTML",
                        "CSS",
                        "Tailwind CSS",
                        "Material UI",
                        "Git",
                        "VS Code",
                      ].map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Skills & Technologies
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A comprehensive toolkit for building modern web applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/20 transition-colors duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {skill.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A showcase of my recent work and technical expertise
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className="flex justify-center gap-4">
                          {/* GitHub Button */}
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition"
                          >
                            <FaGithub size={24} />
                          </a>
                          {/* Live Demo Button */}
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition"
                          >
                            <FaExternalLinkAlt size={24} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-justify mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Let's Work Together
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's discuss your project
                and create something amazing together.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">
                        omurfaruquetalukder9@gmail.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-muted-foreground">
                        +880 1781 452083
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        Location
                      </div>
                      <div className="text-muted-foreground">
                        Savar, Dhaka, Bangladesh
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-2">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={true}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                    >
                      {submitted ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Message Sent!
                        </>
                      ) : isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm">
              © 2025 MD. Omur Faruque Talukder. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://github.com/fardin072"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/md-omurfaruque-talukder/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
