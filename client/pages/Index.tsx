import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useInView,
  useMotionValue,
  useTransform,
  useSpring,
  animate,
} from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiNodedotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMui,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiAmazonwebservices,
  SiAwslambda,
  SiAmazons3,
  SiAmazondynamodb,
  SiFigma,
  SiDocker,
  SiExpress,
} from "react-icons/si";
import {
  Code,
  Database,
  Server,
  Globe,
  Wrench,
  Cloud,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
  Check,
  Download,
  Calendar,
  Trophy,
  ShieldAlert,
  ShieldCheck,
  Lock,
  Sparkles,
  ExternalLink,
  Linkedin,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";

// ─── Data ───────────────────────────────────────────────────────────────────

const SKILLS_DATA = [
  {
    category: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    technologies: ["JavaScript", "TypeScript", "Python", "C", "C++", "Node.js"],
  },
  {
    category: "Frontend",
    icon: <Globe className="h-6 w-6" />,
    technologies: ["React", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "ShadCN UI"],
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    technologies: ["Node.js", "Express.js", "REST APIs", "Serverless"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    technologies: ["AWS Lambda", "API Gateway", "S3", "DynamoDB", "Firebase", "Vercel", "Netlify", "Heroku"],
  },
  {
    category: "Databases",
    icon: <Database className="h-6 w-6" />,
    technologies: ["MongoDB", "MySQL", "PostgreSQL", "DynamoDB", "IndexedDB"],
  },
  {
    category: "Tools",
    icon: <Wrench className="h-6 w-6" />,
    technologies: ["Git", "GitHub", "Postman", "VS Code", "UI/UX"],
  },
];

const ALL_TECH_ITEMS = SKILLS_DATA.flatMap((skill) =>
  skill.technologies.map((tech) => ({ tech, category: skill.category }))
);

const EXPERIENCE_DATA = [
  {
    title: "Full Stack Developer",
    company: "CODER VAI",
    type: "Remote",
    period: "Nov 2025 – Present",
    current: true,
    bullets: [
      "Build and maintain full-stack web applications using React and Node.js",
      "Design and deploy RESTful APIs with Express.js and AWS services",
      "Integrate AWS (Lambda, S3, DynamoDB) for scalable cloud infrastructure",
      "Collaborate with cross-functional teams in agile workflows",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express.js", "AWS", "MongoDB"],
  },
  {
    title: "Backend Developer",
    company: "CODER VAI",
    type: "Internship",
    period: "Sep 2025 – Nov 2025",
    current: false,
    bullets: [
      "Developed RESTful API endpoints using Node.js and Express",
      "Worked with MongoDB for data modeling and schema design",
      "Implemented authentication and authorization patterns",
      "Participated in code reviews and pair programming sessions",
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
  },
  {
    title: "Frontend Developer",
    company: "UDDHAR BD",
    type: "Remote",
    period: "Nov 2024 – Feb 2025",
    current: false,
    bullets: [
      "Built responsive UIs with React and TypeScript",
      "Created pixel-perfect designs using Tailwind CSS and Material UI",
      "Integrated backend APIs for seamless data flow",
      "Optimized performance for cross-browser compatibility",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Material UI", "Git"],
  },
];

const EDUCATION_DATA = [
  {
    degree: "B.Sc in Computer Science and Engineering",
    institution: "National Institute of Textile Engineering and Research",
    period: "Dec 2024 – Expected Jan 2028",
    gpa: null,
    current: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Shah Sultan College, Bogura",
    period: "Jan 2021 – Dec 2022",
    gpa: "5.00 / 5.00",
    current: false,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Armed Police Public School and College, Bogura",
    period: "Jan 2015 – Feb 2020",
    gpa: "5.00 / 5.00",
    current: false,
  },
];

const CERTIFICATES_DATA = [
  {
    title: "Champion Team Member",
    issuer: "ACS Career Bootcamp 1.0",
    type: "achievement" as const,
    Icon: Trophy,
    color: "#F59E0B",
  },
  {
    title: "Web Design & Development",
    issuer: "Professional Certificate",
    type: "technical" as const,
    Icon: Globe,
    color: "#3B82F6",
  },
  {
    title: "Jr Penetration Tester",
    issuer: "Try Hack Me",
    type: "security" as const,
    Icon: ShieldAlert,
    color: "#EF4444",
  },
  {
    title: "Pre-Security",
    issuer: "Try Hack Me",
    type: "security" as const,
    Icon: ShieldCheck,
    color: "#F97316",
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Try Hack Me",
    type: "security" as const,
    Icon: Lock,
    color: "#10B981",
  },
];

const PROJECTS_DATA = [
  {
    title: "Finmate",
    subtitle: "AI Powered Finance Management System",
    description:
      "AI-powered personal finance platform with intelligent spending insights, bank account connection, and financial goals tracking.",
    bullets: [
      "AI-powered insights into spending patterns and habits",
      "Secure bank account connection for automatic transaction import",
      "Visual financial goals tracking and achievement system",
      "Automatic transaction categorization and analytics charts",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "AWS", "Tailwind CSS"],
    image: "/finmate.jpeg",
    github: null,
    live: "https://project-finmate.netlify.app/",
    featured: true,
  },
  {
    title: "High School Admin Project",
    subtitle: "School Result Management System",
    description:
      "Web-based school result management system with student data entry, mark sheet generation, and XLSX import/export with offline support.",
    bullets: [
      "Student data entry and mark sheet generation",
      "XLSX import/export functionality",
      "IndexedDB integration for offline support",
    ],
    technologies: ["React", "TypeScript", "IndexedDB", "Dexie.js"],
    image: "/ghs-admin.png",
    github: "https://github.com/fardin072/ghs-admin.git",
    live: "https://guzia-high-school-admin.netlify.app/",
    featured: false,
  },
];

const CONTACT_INFO = {
  location: "Kalyanpur, Dhaka, Bangladesh",
  email: "omurfaruquetalukder9@gmail.com",
  phone: "+880 1581 452083",
  github: "https://github.com/fardin072",
  linkedin: "https://www.linkedin.com/in/md-omurfaruque-talukder/",
};

const HERO_TECHS = [
  "React", "TypeScript", "Node.js", "AWS", "MongoDB",
  "Tailwind", "Express.js", "Python", "PostgreSQL",
  "Firebase", "Git", "Docker", "Vercel", "REST APIs",
];

// ─── Tech Icon Map ──────────────────────────────────────────────────────────

type TechIconDef = {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color?: string;
};

const TECH_ICON_MAP: Record<string, TechIconDef> = {
  // Programming Languages
  "JavaScript":    { Icon: SiJavascript,        color: "#F7DF1E" },
  "TypeScript":    { Icon: SiTypescript,        color: "#3178C6" },
  "Python":        { Icon: SiPython,            color: "#3776AB" },
  "C++":           { Icon: SiCplusplus,         color: "#00599C" },
  "Node.js":       { Icon: SiNodedotjs,         color: "#339933" },
  // Frontend
  "React":         { Icon: SiReact,             color: "#61DAFB" },
  "HTML5":         { Icon: SiHtml5,             color: "#E34F26" },
  "CSS3":          { Icon: SiCss3,              color: "#1572B6" },
  "Tailwind CSS":  { Icon: SiTailwindcss,       color: "#06B6D4" },
  "Tailwind":      { Icon: SiTailwindcss,       color: "#06B6D4" },
  "Material UI":   { Icon: SiMui,               color: "#007FFF" },
  // Cloud & DevOps
  "AWS":           { Icon: SiAmazonwebservices, color: "#FF9900" },
  "AWS Lambda":    { Icon: SiAwslambda,         color: "#FF9900" },
  "S3":            { Icon: SiAmazons3,          color: "#FF9900" },
  "DynamoDB":      { Icon: SiAmazondynamodb,    color: "#FF9900" },
  "API Gateway":   { Icon: SiAmazonwebservices, color: "#FF9900" },
  "Firebase":      { Icon: SiFirebase,          color: "#FFCA28" },
  "Vercel":        { Icon: SiVercel },
  "Netlify":       { Icon: SiNetlify,           color: "#00C7B7" },
  "Heroku":        { Icon: SiHeroku,            color: "#430098" },
  "Docker":        { Icon: SiDocker,            color: "#2496ED" },
  // Databases
  "MongoDB":       { Icon: SiMongodb,           color: "#47A248" },
  "MySQL":         { Icon: SiMysql,             color: "#4479A1" },
  "PostgreSQL":    { Icon: SiPostgresql,        color: "#336791" },
  // Tools
  "Git":           { Icon: SiGit,               color: "#F05032" },
  "GitHub":        { Icon: SiGithub },
  "Postman":       { Icon: SiPostman,           color: "#FF6C37" },
  "Express.js":    { Icon: SiExpress },
  "UI/UX":         { Icon: SiFigma,             color: "#F24E1E" },
};

function renderTechIcon(name: string, className = "h-7 w-7") {
  const entry = TECH_ICON_MAP[name];
  if (entry) {
    const { Icon, color } = entry;
    return <Icon className={className} style={color ? { color } : undefined} />;
  }
  // Lucide fallbacks for unmapped techs
  const fallbacks: Record<string, React.ReactNode> = {
    "C":          <span className="font-bold text-xs text-blue-500 flex items-center justify-center w-full h-full">C</span>,
    "REST APIs":  <Globe className={`${className} text-primary`} />,
    "Serverless": <Cloud className={`${className} text-primary`} />,
    "IndexedDB":  <Database className={`${className} text-primary`} />,
    "ShadCN UI":  <Layers className={`${className} text-foreground`} />,
    "VS Code":    <Code className={`${className} text-blue-500`} />,
  };
  return fallbacks[name] ?? <Code className={`${className} text-muted-foreground`} />;
}

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "TypeScript Engineer",
  "Cloud & AWS Builder",
];

// ─── Animated Counter ────────────────────────────────────────────────────────

function AnimatedCounter({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 1.5, ease: "easeOut" });
    }
  }, [isInView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// ─── 3D Tilt Card ────────────────────────────────────────────────────────────

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [shinePos, setShinePos] = useState({ x: "50%", y: "50%" });

  const rotateX = useTransform(y, [-0.5, 0.5], [9, -9]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-9, 9]);
  const rotateXSpring = useSpring(rotateX, { stiffness: 280, damping: 22 });
  const rotateYSpring = useSpring(rotateY, { stiffness: 280, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    setShinePos({
      x: `${((e.clientX - rect.left) / rect.width) * 100}%`,
      y: `${((e.clientY - rect.top) / rect.height) * 100}%`,
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: rotateXSpring, rotateY: rotateYSpring, transformStyle: "preserve-3d" }}
      className={cn("relative", className)}
    >
      {children}
      {/* Specular highlight that tracks cursor */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${shinePos.x} ${shinePos.y}, rgba(255,255,255,0.10), transparent 55%)`,
        }}
      />
    </motion.div>
  );
}

// ─── Animation Preset ───────────────────────────────────────────────────────

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5, ease: "easeOut" },
};

// ─── Component ──────────────────────────────────────────────────────────────

export default function Index() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Role ticker
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 3000);
    return () => clearInterval(t);
  }, []);

  // Cursor spotlight — hero
  const [spotlight, setSpotlight] = useState({ x: "50%", y: "50%" });
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlight({ x: `${e.clientX - rect.left}px`, y: `${e.clientY - rect.top}px` });
  };

  // Skills section state
  const [activeCategory, setActiveCategory] = useState("All");
  const [skillsSpotlight, setSkillsSpotlight] = useState({ x: "50%", y: "50%" });
  const handleSkillsMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSkillsSpotlight({ x: `${e.clientX - rect.left}px`, y: `${e.clientY - rect.top}px` });
  };

  // Scroll progress
  const { scrollYProgress } = useScroll();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      <Navigation />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 via-background to-accent/20 hero-grid-bg"
        onMouseMove={handleHeroMouseMove}
      >
        {/* Dot grid radial fade overlay */}
        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

        {/* Cursor spotlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(500px circle at ${spotlight.x} ${spotlight.y}, hsl(var(--primary) / 0.07), transparent 60%)`,
          }}
        />

        {/* Blob decorations */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 -right-32 w-80 h-80 bg-brand-400/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-mono mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for work
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-4 tracking-tight">
            <span className="gradient-text">MD. Omur Faruque</span>
            <br />
            <span className="text-foreground">Talukder</span>
          </h1>

          {/* Role ticker */}
          <div className="flex items-center justify-center gap-1.5 text-xl md:text-2xl text-muted-foreground mb-8 font-medium h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="animate-blink text-primary font-light ml-0.5">|</span>
          </div>

          {/* Marquee */}
          <div
            className="relative w-full mb-10 overflow-hidden py-2"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
            }}
          >
            <div className="flex animate-marquee w-max">
              {[...HERO_TECHS, ...HERO_TECHS, ...HERO_TECHS, ...HERO_TECHS].map((tech, i) => (
                <div key={`${tech}-${i}`} className="flex-shrink-0 mx-3">
                  <Badge
                    variant="outline"
                    className="flex items-center gap-2.5 px-5 py-3 text-base font-semibold whitespace-nowrap rounded-2xl border-border/60 bg-background/50 backdrop-blur-sm shadow-sm cursor-default select-none"
                  >
                    <span className="icon-shine h-6 w-6 flex items-center justify-center shrink-0">
                      {renderTechIcon(tech, "h-6 w-6")}
                    </span>
                    {tech}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Button size="lg" asChild className="gap-2">
              <a href="/cv.pdf" download="MD_Omur_Faruque_Talukder_CV.pdf">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
              Contact Me
            </Button>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 justify-center">
            {[
              { href: CONTACT_INFO.github, icon: <Github className="h-6 w-6" />, label: "GitHub" },
              { href: CONTACT_INFO.linkedin, icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn" },
              { href: `mailto:${CONTACT_INFO.email}`, icon: <Mail className="h-6 w-6" />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.15 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">About Me</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Who I Am</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate developer who loves building things for the web
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <motion.div {...fadeInUp} className="relative">
              <div className="relative w-full max-w-xs mx-auto">
                {/* Decorative glow ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/40 via-brand-400/20 to-primary/10 blur-sm" />

                {/* Photo frame */}
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-primary/20">
                  <img
                    src="/fardin-27.jpeg"
                    alt="MD. Omur Faruque Talukder"
                    className="w-full object-cover object-top aspect-[3/4]"
                  />
                  {/* Bottom gradient — blends the grey sky into card color in dark mode */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, hsl(var(--card)) 0%, hsl(var(--card) / 0.6) 40%, transparent 100%)",
                    }}
                  />
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mt-6 max-w-sm mx-auto">
                {[
                  { counter: <AnimatedCounter to={5} decimals={2} />, label: "GPA" },
                  { counter: <AnimatedCounter to={3} />, label: "Roles" },
                  { counter: <AnimatedCounter to={5} />, label: "Certs" },
                ].map(({ counter, label }) => (
                  <Card key={label} className="text-center p-3">
                    <p className="text-2xl font-bold gradient-text">{counter}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.15 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a <span className="text-foreground font-semibold">Full Stack Developer</span> and
                  CSE student at the National Institute of Textile Engineering and Research (NITER), passionate
                  about building scalable, user-friendly web applications. Currently working as a Full Stack
                  Developer at <span className="text-primary font-semibold">Coder Vai</span>, I specialize in
                  the React + Node.js + AWS ecosystem.
                </p>
                <p>
                  I enjoy turning complex problems into clean, efficient solutions. When I'm not coding, I'm
                  exploring cloud architecture, earning certifications, and contributing to team projects that
                  make a real impact.
                </p>
              </div>

              {/* Info list */}
              <div className="space-y-3">
                {[
                  { icon: <MapPin className="h-4 w-4 text-primary" />, text: CONTACT_INFO.location },
                  { icon: <Mail className="h-4 w-4 text-primary" />, text: CONTACT_INFO.email },
                  { icon: <Phone className="h-4 w-4 text-primary" />, text: CONTACT_INFO.phone },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm">
                    {icon}
                    <span className="text-muted-foreground">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="gap-2">
                  <a href="/cv.pdf" download="MD_Omur_Faruque_Talukder_CV.pdf">
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
                <Button variant="outline" onClick={() => scrollToSection("contact")}>
                  Let's Work Together
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────────────────── */}
      <section id="skills" className="py-24 lg:py-32 overflow-hidden bg-muted/20">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 mb-14">
          <motion.div {...fadeInUp} className="text-center">
            <Badge variant="outline" className="mb-4">Tech Stack</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {ALL_TECH_ITEMS.length}+ tools across the full stack —
              hover any row to pause
            </p>
          </motion.div>
        </div>

        {/* ── 4-row alternating marquee ──────────────────────────────── */}
        {(() => {
          const rows: { label: string; techs: string[]; reverse: boolean; dur: string }[] = [
            {
              label: "Languages",
              techs: ["JavaScript", "TypeScript", "Python", "C", "C++", "Node.js", "Git", "GitHub"],
              reverse: false,
              dur: "28s",
            },
            {
              label: "Frontend & Backend",
              techs: ["React", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "ShadCN UI", "Express.js", "REST APIs"],
              reverse: true,
              dur: "34s",
            },
            {
              label: "Cloud & DevOps",
              techs: ["AWS Lambda", "API Gateway", "S3", "DynamoDB", "Firebase", "Vercel", "Netlify", "Heroku", "Docker"],
              reverse: false,
              dur: "26s",
            },
            {
              label: "Databases & Tools",
              techs: ["MongoDB", "MySQL", "PostgreSQL", "IndexedDB", "Serverless", "Postman", "VS Code", "UI/UX"],
              reverse: true,
              dur: "32s",
            },
          ];

          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              {rows.map(({ label, techs, reverse, dur }) => {
                // 4 copies so -25% keyframe always loops seamlessly at any viewport width
                const track = [...techs, ...techs, ...techs, ...techs];
                return (
                  <div key={label} className="relative">
                    {/* Fade masks */}
                    <div
                      className="absolute inset-0 pointer-events-none z-10"
                      style={{
                        background:
                          "linear-gradient(to right, hsl(var(--background)) 0%, transparent 10%, transparent 90%, hsl(var(--background)) 100%)",
                      }}
                    />

                    {/* Scrolling track — pure CSS, no Framer Motion inside */}
                    <div
                      className={cn(
                        "flex w-max gap-3",
                        reverse ? "animate-marquee-reverse" : "animate-marquee"
                      )}
                      style={{ animationDuration: dur, transform: "translateZ(0)" }}
                    >
                      {track.map((tech, i) => {
                        const color = TECH_ICON_MAP[tech]?.color;
                        return (
                          <div
                            key={`${tech}-${i}`}
                            className="tech-badge-card flex-shrink-0 cursor-default select-none flex items-center gap-2 px-3 py-1.5 rounded-xl border"
                            style={{
                              backgroundColor: color
                                ? `${color}15`
                                : "hsl(var(--primary) / 0.06)",
                              borderColor: color
                                ? `${color}38`
                                : "hsl(var(--border))",
                            }}
                          >
                            <span className="icon-shine h-5 w-5 flex items-center justify-center shrink-0">
                              {renderTechIcon(tech, "h-5 w-5")}
                            </span>
                            <span className="text-xs font-medium text-foreground whitespace-nowrap">
                              {tech}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          );
        })()}
      </section>

      {/* ── Experience ───────────────────────────────────────────────────── */}
      <section id="experience" className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Career</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the roles I've held
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-px bg-border ml-1.5 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            <div className="space-y-10">
              {EXPERIENCE_DATA.map((exp, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                  className="relative pl-10"
                >
                  {/* Timeline dot */}
                  <div
                    className={cn(
                      "absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-background",
                      exp.current ? "bg-primary" : "bg-muted-foreground/40"
                    )}
                  />

                  <div style={{ perspective: "900px" }}>
                  <TiltCard>
                  <Card className={cn("transition-colors", exp.current && "border-primary/20")}>
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <Badge
                          className={cn(
                            "shrink-0",
                            exp.current
                              ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                              : exp.type === "Internship"
                              ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                              : "bg-muted text-muted-foreground"
                          )}
                          variant="outline"
                        >
                          {exp.current ? "Current" : exp.type}
                        </Badge>
                      </div>

                      {/* Company & period */}
                      <p className="text-primary font-semibold mb-1">
                        {exp.company}
                        <span className="text-muted-foreground font-normal text-sm ml-2">· {exp.type}</span>
                      </p>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2 mb-4">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-primary/60 rounded-full shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* Tech icon chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => {
                          const color = TECH_ICON_MAP[tag]?.color;
                          return (
                            <div
                              key={tag}
                              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-medium whitespace-nowrap"
                              style={{
                                backgroundColor: color ? `${color}15` : "hsl(var(--muted))",
                                borderColor: color ? `${color}35` : "hsl(var(--border))",
                                color: color ?? undefined,
                              }}
                            >
                              <span className="icon-shine h-3.5 w-3.5 flex items-center justify-center shrink-0">
                                {renderTechIcon(tag, "h-3.5 w-3.5")}
                              </span>
                              {tag}
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                  </TiltCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Education ────────────────────────────────────────────────────── */}
      <section id="education" className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Background</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey and educational achievements
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-px bg-border ml-1.5 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            <div className="space-y-8">
              {EDUCATION_DATA.map((edu, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                  className="relative pl-10"
                >
                  <div
                    className={cn(
                      "absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-background",
                      edu.current ? "bg-primary" : "bg-muted-foreground/40"
                    )}
                  />

                  <div style={{ perspective: "900px" }}>
                  <TiltCard>
                  <Card className={cn("transition-colors", edu.current && "border-primary/20")}>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <Badge
                          variant="outline"
                          className={cn(
                            "shrink-0",
                            edu.current
                              ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                              : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                          )}
                        >
                          {edu.current ? "Ongoing" : `GPA ${edu.gpa}`}
                        </Badge>
                      </div>
                      <p className="text-primary font-semibold text-sm mb-1">{edu.institution}</p>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {edu.period}
                      </div>
                    </CardContent>
                  </Card>
                  </TiltCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certificates ─────────────────────────────────────────────────── */}
      <section id="certificates" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Achievements</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognized skills and professional certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATES_DATA.map((cert, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
              >
                <div style={{ perspective: "900px" }}>
                  <TiltCard>
                    <Card
                      className="hover:shadow-lg transition-all duration-300"
                      style={{ borderColor: cert.color + "22" }}
                    >
                      <CardContent className="p-6">
                        <div
                          className="icon-shine w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                          style={{ backgroundColor: cert.color + "20", color: cert.color }}
                        >
                          <cert.Icon className="h-8 w-8" />
                        </div>
                        <h3 className="font-bold text-base mb-1 leading-tight">{cert.title}</h3>
                        <p className="text-xs text-muted-foreground mb-3">{cert.issuer}</p>
                        <Badge
                          variant="outline"
                          className="text-xs"
                          style={{ color: cert.color, borderColor: cert.color + "40" }}
                        >
                          {cert.type === "achievement" ? "Achievement" : cert.type === "security" ? "Security" : "Technical"}
                        </Badge>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I've built — from personal tools to full-stack applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS_DATA.map((project, index) => (
              <motion.div
                key={project.title}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
              >
                <div style={{ perspective: "900px" }} className="h-full">
                <TiltCard className="h-full">
                <Card
                  className={cn(
                    "h-full overflow-hidden hover:shadow-lg transition-all duration-300",
                    project.featured && "border-primary/40 border-2"
                  )}
                >
                  {/* Card image / placeholder */}
                  {project.image ? (
                    <div className="relative group overflow-hidden h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {(project.github || project.live) && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                          {project.github && (
                            <Button size="sm" variant="secondary" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-1" /> GitHub
                              </a>
                            </Button>
                          )}
                          {project.live && (
                            <Button size="sm" asChild>
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" /> Live
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 via-brand-300/10 to-accent flex items-center justify-center">
                      <Sparkles className="h-12 w-12 text-primary/40" />
                      {project.featured && (
                        <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                          Flagship Project
                        </Badge>
                      )}
                    </div>
                  )}

                  <CardContent className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="text-xs text-muted-foreground self-center">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Footer links */}
                    <div className="flex gap-3 pt-2 border-t border-border items-center">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="h-4 w-4" /> Code
                        </a>
                      ) : (
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground border border-dashed border-border/60 rounded-lg px-2.5 py-1">
                          <Lock className="h-3.5 w-3.5" /> Private Access
                        </span>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
                </TiltCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left — contact info */}
            <motion.div {...fadeInUp} className="space-y-8">
              <div className="space-y-4">
                {[
                  { icon: <Mail className="h-5 w-5 text-primary" />, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                  { icon: <Phone className="h-5 w-5 text-primary" />, label: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}` },
                  { icon: <MapPin className="h-5 w-5 text-primary" />, label: "Location", value: CONTACT_INFO.location, href: null },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
                      {href ? (
                        <a href={href} className="text-foreground hover:text-primary transition-colors font-medium">
                          {value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Connect</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" asChild>
                    <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" asChild>
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" asChild>
                    <a href={`mailto:${CONTACT_INFO.email}`} aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.15 }}
            >
              <Card>
                <CardContent className="p-6">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                      <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Check className="h-7 w-7 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold">Message Sent!</h3>
                      <p className="text-muted-foreground text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell me about your project or idea..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold gradient-text cursor-pointer"
            >
              Omur.
            </button>

            <p className="text-sm text-muted-foreground text-center">
              © 2025 MD. Omur Faruque Talukder. All rights reserved.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                aria-label="Email"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
