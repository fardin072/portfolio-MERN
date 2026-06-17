import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Moon,
  Sun,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Experience", href: "experience" },
  { name: "Education", href: "education" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl lg:text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Omur<span className="text-primary">.</span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  activeSection === link.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
              <a href="https://github.com/fardin072" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
              <a href="https://www.linkedin.com/in/md-omurfaruque-talukder/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <div className="w-px h-6 bg-border mx-1" />
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9" aria-label="Toggle theme">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground ml-2">
              <a href="/cv.pdf" download="MD_Omur_Faruque_Talukder_CV.pdf" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Let's Talk
            </Button>
          </div>

          {/* Tablet actions */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
              <a href="https://github.com/fardin072" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
              <a href="https://www.linkedin.com/in/md-omurfaruque-talukder/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9" aria-label="Toggle theme">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-primary hover:bg-primary hover:text-primary-foreground px-3">
              <a href="/cv.pdf" download="MD_Omur_Faruque_Talukder_CV.pdf" className="flex items-center gap-1">
                <Download className="h-3 w-3" />
                CV
              </a>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="h-9 w-9" aria-label="Toggle menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9" aria-label="Toggle theme">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="h-9 w-9" aria-label="Toggle menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile / Tablet dropdown menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    activeSection === link.href
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  )}
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-3 px-2 flex flex-col gap-2">
                <div className="md:hidden flex items-center gap-3 pb-2">
                  <Button variant="ghost" size="icon" asChild className="h-9 w-9">
                    <a href="https://github.com/fardin072" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="h-9 w-9">
                    <a href="https://www.linkedin.com/in/md-omurfaruque-talukder/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="/cv.pdf" download="MD_Omur_Faruque_Talukder_CV.pdf" className="flex items-center gap-2 justify-center">
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
                <Button onClick={() => scrollToSection("contact")} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
