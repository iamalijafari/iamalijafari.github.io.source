import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  Sparkles,
  X,
} from "lucide-react";

const profile = {
  email: "alijafari98.mail@gmail.com",
  phone: "+98 933 809 9321",
  github: "https://github.com/iamalijafari",
  linkedin: "https://linkedin.com/in/ali-jafari-545261185",
  resume: "/assets/Ali_Jafari_Resume.pdf",
};

const navigation = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Credentials", "credentials"],
];

const impact = [
  { value: "5+", label: "years in software engineering" },
  { value: "1,500+", label: "enterprise customers supported" },
  { value: "78%", label: "faster critical processing" },
];

const experience = [
  {
    period: "Feb 2026 — Present",
    role: "Senior Backend Engineer (.NET)",
    company: "Chargoon",
    description:
      "Leading backend delivery for enterprise financial systems, from technical design through production deployment.",
    achievements: [
      "Led a government tax-service integration and delivered 10+ production API endpoints.",
      "Reduced a timeout-prone process from 90 seconds to 20 seconds through SQL optimization and parallelization.",
      "Mentor engineers through code reviews, onboarding, and maintainability-focused refactoring.",
    ],
  },
  {
    period: "Mar 2023 — Feb 2026",
    role: "Mid-Level Backend Engineer (.NET)",
    company: "Chargoon",
    description:
      "Built and maintained ASP.NET Core APIs and high-volume data access for complex enterprise workflows.",
    achievements: [
      "Optimized SQL Server and Dapper-based data access for performance and reliability.",
      "Partnered with infrastructure engineers to cut logical database reads by 50%.",
      "Resolved production issues across large customer databases and modernized legacy services.",
    ],
  },
  {
    period: "Jan 2021 — Mar 2023",
    role: "Backend Engineer — Intern to Junior",
    company: "Chargoon",
    description:
      "Progressed from internship to backend ownership while delivering features for production enterprise applications.",
    achievements: [
      "Implemented ASP.NET Core features, including authentication and authorization.",
      "Supported debugging, automated testing, production fixes, and feature delivery.",
    ],
  },
  {
    period: "Sep 2019 — Oct 2020",
    role: "Windows Forms Developer (VB.NET)",
    company: "Sarvak Drilling Services",
    description:
      "Developed internal desktop applications and relational-database workflows that automated business processes.",
    achievements: [],
  },
];

const projects = [
  {
    featured: true,
    eyebrow: "Featured open-source project",
    title: "PlannerApp",
    description:
      "A production-minded bilingual planning platform that turns long-term goals into structured yearly, monthly, weekly, and daily plans.",
    highlights: [
      "Progress dashboard and hierarchical planning",
      "English/Persian localization with RTL support",
      "Gregorian and Jalali date handling",
      "Automated tests, CI, and containerized delivery",
    ],
    stack: [".NET 9", "Next.js 16", "React 19", "PostgreSQL", "Docker"],
    href: "https://github.com/iamalijafari/PlannerApp",
  },
  {
    featured: false,
    eyebrow: "Backend portfolio project",
    title: "URL Shortener API",
    description:
      "A production-inspired URL shortening service designed around clean boundaries, reliable operations, and straightforward deployment.",
    highlights: [
      "Clean Architecture and REST API design",
      "PostgreSQL persistence and health checks",
      "Swagger/OpenAPI documentation",
      "Docker Compose and GitHub Actions CI",
    ],
    stack: ["ASP.NET Core", "PostgreSQL", "Docker", "GitHub Actions"],
    href: "https://github.com/iamalijafari/UrlShortener",
  },
];

const capabilities = [
  {
    icon: Server,
    title: "Backend & APIs",
    items: [
      "C# and ASP.NET Core",
      "REST API design",
      "Dapper and EF Core",
      "Authentication & authorization",
      "Swagger / OpenAPI",
    ],
  },
  {
    icon: Database,
    title: "Data & Performance",
    items: [
      "SQL Server and PostgreSQL",
      "Query optimization",
      "Database design",
      "High-volume workloads",
      "Production diagnostics",
    ],
  },
  {
    icon: Layers3,
    title: "Architecture & Quality",
    items: [
      "Clean Architecture",
      "SOLID and design patterns",
      "xUnit and NSubstitute",
      "Refactoring and code review",
      "System design",
    ],
  },
  {
    icon: Code2,
    title: "Delivery & Collaboration",
    items: [
      "Docker and Docker Compose",
      "GitHub Actions and Azure DevOps",
      "CI/CD workflows",
      "Agile / Scrum",
      "Technical mentoring",
    ],
  },
];

const certificates = [
  {
    title: "CS50AI",
    subtitle: "Introduction to Artificial Intelligence with Python",
    issuer: "Harvard University",
    date: "Dec 2023",
    href: "https://cs50.harvard.edu/certificates/cad015f6-1464-4aeb-9a64-0be7fbba699a",
  },
  {
    title: "CS50P",
    subtitle: "Introduction to Programming with Python",
    issuer: "Harvard University",
    date: "Oct 2023",
    href: "https://cs50.harvard.edu/certificates/cb3abd94-1eca-4fac-b29b-9dd65c92dbf3",
  },
  {
    title: "CS50x",
    subtitle: "Introduction to Computer Science",
    issuer: "Harvard University",
    date: "Sep 2023",
    href: "https://cs50.harvard.edu/certificates/13d354da-b167-4c51-82f6-c7db441e2dc3",
  },
];

const education = [
  {
    degree: "M.Sc. Biotechnology",
    school: "Amirkabir University of Technology",
    period: "2021 — 2024",
  },
  {
    degree: "B.Eng. Chemical Engineering",
    school: "University of Tehran",
    period: "2016 — 2020",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </Reveal>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-shell">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ali Jafari, home">
          <span>AJ</span>
          <strong>Ali Jafari</strong>
        </a>

        <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer">
            <Download size={16} aria-hidden="true" />
            Résumé
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="availability">
            <span />
            Open to backend engineering opportunities in Ireland
          </div>

          <p className="hero-kicker">Senior Backend Engineer · .NET</p>
          <h1>
            I build backend systems that stay
            <span> fast, reliable, and maintainable.</span>
          </h1>
          <p className="hero-summary">
            5+ years delivering enterprise software with C#, ASP.NET Core, SQL Server,
            Dapper, and REST APIs—backed by measurable performance gains and
            production ownership.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              Connect on LinkedIn
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin size={16} aria-hidden="true" />
              Tehran, Iran
            </span>
            <span>
              <Sparkles size={16} aria-hidden="true" />
              Critical Skills eligible · Open to relocation
            </span>
          </div>
        </motion.div>

        <motion.aside
          className="hero-panel"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Professional highlights"
        >
          <div className="panel-topline">
            <span>Engineering snapshot</span>
            <span className="panel-status">Available</span>
          </div>
          <div className="code-window">
            <div className="code-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <pre>
              <code>
                <span className="code-muted">{"// measurable engineering impact"}</span>
                {"\n"}
                <span className="code-blue">public</span> <span className="code-blue">record</span> Impact(
                {"\n  "}
                <span className="code-green">int</span> Customers = <span className="code-orange">1500</span>,
                {"\n  "}
                <span className="code-green">string</span> Runtime = <span className="code-yellow">"90s → 20s"</span>,
                {"\n  "}
                <span className="code-green">string</span> Focus = <span className="code-yellow">"Reliable APIs"</span>
                {"\n"});
              </code>
            </pre>
          </div>
          <div className="panel-stack">
            {["ASP.NET Core", "SQL Server", "Clean Architecture", "Docker"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.aside>
      </div>

      <div className="container impact-strip">
        {impact.map((item, index) => (
          <Reveal className="impact-item" delay={index * 0.08} key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container about-layout">
        <SectionHeading
          eyebrow="About"
          title="Backend engineering grounded in business impact."
          description="I work where architecture, data, and delivery meet—turning complex requirements into dependable software that teams can operate and extend."
        />
        <Reveal className="about-card">
          <div className="about-card-icon">
            <BriefcaseBusiness aria-hidden="true" />
          </div>
          <div>
            <p>
              At Chargoon, I progressed from intern to Senior Backend Engineer while
              helping maintain and evolve enterprise financial software used by more
              than 1,500 customers.
            </p>
            <p>
              My engineering approach favors clear boundaries, observable behavior,
              thoughtful data access, and practical improvements that make a visible
              difference in production.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section section-muted">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="A career built through growing ownership."
          description="From implementation and production support to technical leadership, performance work, and mentoring."
        />
        <div className="timeline">
          {experience.map((role, index) => (
            <Reveal className="timeline-item" delay={index * 0.06} key={`${role.role}-${role.period}`}>
              <div className="timeline-marker" aria-hidden="true">
                <span />
              </div>
              <div className="timeline-period">{role.period}</div>
              <article className="timeline-card">
                <div className="timeline-title">
                  <div>
                    <h3>{role.role}</h3>
                    <p>{role.company} · Tehran, Iran</p>
                  </div>
                </div>
                <p className="timeline-description">{role.description}</p>
                {role.achievements.length > 0 && (
                  <ul>
                    {role.achievements.map((achievement) => (
                      <li key={achievement}>
                        <Check size={16} aria-hidden="true" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Selected projects"
          title="Production thinking, applied end to end."
          description="Projects chosen to demonstrate API design, architecture, data modeling, testing, CI, deployment, and user-facing product thinking."
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal
              className={`project-card ${project.featured ? "project-featured" : ""}`}
              delay={index * 0.08}
              key={project.title}
            >
              <div className="project-card-top">
                <div>
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                </div>
                <a
                  className="icon-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Check size={15} aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="tag-list">
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                <Github size={17} aria-hidden="true" />
                View repository
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section-muted">
      <div className="container">
        <SectionHeading
          eyebrow="Technical toolkit"
          title="Built for reliable software delivery."
          description="A backend-first skill set spanning system design, data performance, automated quality, and production delivery."
        />
        <div className="capability-grid">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Reveal className="capability-card" delay={index * 0.05} key={capability.title}>
                <div className="capability-icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{capability.title}</h3>
                <ul>
                  {capability.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section id="credentials" className="section">
      <div className="container credentials-layout">
        <div>
          <SectionHeading
            eyebrow="Credentials"
            title="Continuous learning, backed by fundamentals."
            description="Formal engineering education and computer-science coursework shape a multidisciplinary approach to problem solving."
          />
          <div className="education-list">
            {education.map((item, index) => (
              <Reveal className="education-item" delay={index * 0.06} key={item.degree}>
                <div className="credential-icon">
                  <GraduationCap aria-hidden="true" />
                </div>
                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                  <span>{item.period}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="certificate-panel">
          <div className="certificate-panel-heading">
            <div className="credential-icon">
              <Award aria-hidden="true" />
            </div>
            <div>
              <p className="eyebrow">Harvard University</p>
              <h3>CS50 certificates</h3>
            </div>
          </div>
          <div className="certificate-list">
            {certificates.map((certificate) => (
              <a key={certificate.title} href={certificate.href} target="_blank" rel="noreferrer">
                <div>
                  <strong>{certificate.title}</strong>
                  <span>{certificate.subtitle}</span>
                  <small>
                    {certificate.issuer} · {certificate.date}
                  </small>
                </div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal className="contact-card">
          <div className="contact-copy">
            <p className="eyebrow">Let’s work together</p>
            <h2>Looking for a backend engineer who cares about the details?</h2>
            <p>
              I’m open to backend and software engineering opportunities in Ireland,
              including roles requiring visa sponsorship and relocation.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}>
                <Mail size={18} aria-hidden="true" />
                Start a conversation
              </a>
              <a className="button button-secondary" href={profile.resume} target="_blank" rel="noreferrer">
                <Download size={18} aria-hidden="true" />
                View résumé
              </a>
            </div>
          </div>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" />
              <span>
                <small>Email</small>
                {profile.email}
              </span>
            </a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
              <Phone aria-hidden="true" />
              <span>
                <small>Phone</small>
                {profile.phone}
              </span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" />
              <span>
                <small>LinkedIn</small>
                linkedin.com/in/ali-jafari-545261185
              </span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github aria-hidden="true" />
              <span>
                <small>GitHub</small>
                github.com/iamalijafari
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <a className="brand" href="#home" aria-label="Back to top">
          <span>AJ</span>
          <strong>Ali Jafari</strong>
        </a>
        <p>Senior Backend Engineer · Building dependable software with .NET.</p>
        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
