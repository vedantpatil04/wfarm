import { useCallback, useRef, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { useWebFarmMotion } from "@/hooks/use-webfarm-motion";
import { Header } from "./Header";
import { Preloader } from "./Preloader";
import { Project } from "./Project";
import heroImage from "@/assets/webfarm-hero.jpg";
import earneaziImage from "@/assets/earneazi.jpg";
import greenGuardImage from "@/assets/greenguard.jpg";
import medFindImage from "@/assets/medfind.jpg";

const services = [
  [
    "01",
    "Web Development",
    "Fast, expressive websites and web products built around real business goals.",
    heroImage,
  ],
  [
    "02",
    "Mobile Apps",
    "Focused mobile experiences that make complex workflows feel simple.",
    medFindImage,
  ],
  [
    "03",
    "AI & Automation",
    "Practical intelligence and automations that remove repetitive work.",
    greenGuardImage,
  ],
  [
    "04",
    "Business Software",
    "Purpose-built systems shaped around the way your team actually works.",
    earneaziImage,
  ],
] as const;

const capabilities = [
  "Web Applications",
  "Mobile Apps",
  "Business Websites",
  "E-commerce",
  "UI/UX Development",
  "AI Assistants",
  "Workflow Automation",
  "API Integration",
  "Cloud & Deployment",
  "Analytics & Dashboards",
  "Maintenance & Support",
  "SEO & Performance",
];
const process = ["Discovery", "Design", "Development", "Testing", "Launch"];

function Hero() {
  return (
    <section className="hero" id="top">
      <Header />
      <div className="hero__headline">
        <p className="eyebrow">Digital product studio · India</p>
        <h1>
          Your Ideas,
          <br />
          Our Technology.
        </h1>
      </div>
      <div className="hero__media media-frame">
        <img
          src={heroImage}
          alt="A digital workstation among thriving cultivated fields"
          width={1600}
          height={1200}
        />
        <span className="media-tag">From idea to launch</span>
      </div>
      <div className="hero__foot">
        <p>
          Websites, applications, mobile products, AI solutions and software — designed and
          engineered end to end.
        </p>
        <a href="#intro" aria-label="Continue to introduction">
          <ArrowDown />
        </a>
      </div>
    </section>
  );
}

function IntroStatement() {
  return (
    <section className="intro-statement section-pad" id="intro">
      <span className="section-label">/ The premise</span>
      <h2>
        Technology should feel clear, useful and distinctly <em>yours.</em>
      </h2>
      <p>
        We help businesses and startups turn ambitious ideas into digital products people can
        understand and enjoy using.
      </p>
    </section>
  );
}

function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="section-heading">
        <span className="section-label">/ Services</span>
        <h2>What we grow.</h2>
      </div>
      <div className="service-grid">
        <div className="service-list">
          {services.map(([number, title, copy], index) => (
            <article className="service-row" key={number} data-service-index={index}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowUpRight />
            </article>
          ))}
        </div>
        <div className="service-media" aria-hidden="true">
          {services.map(([number, , , image], index) => (
            <div
              className={`service-media__tile${index === 0 ? " is-active" : ""}`}
              key={number}
              data-service-media={index}
            >
              <img src={image} alt="" loading="lazy" width={1200} height={1500} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceVisual() {
  return (
    <section className="service-visual">
      <div className="service-visual__image media-frame">
        <img
          src={greenGuardImage}
          alt="A connected environmental sensor in a lush landscape"
          loading="lazy"
          width={1600}
          height={1200}
        />
      </div>
      <div className="service-visual__copy">
        <span className="section-label">/ Built around your world</span>
        <p>
          Strategy, design and engineering stay connected from the first conversation to the final
          release.
        </p>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="capabilities section-pad">
      <div className="section-heading">
        <span className="section-label">/ Capabilities</span>
        <h2>
          One team.
          <br />
          Many disciplines.
        </h2>
      </div>
      <ol className="capability-list">
        {capabilities.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
            <ArrowRight />
          </li>
        ))}
      </ol>
    </section>
  );
}

function Process() {
  return (
    <section className="process section-pad">
      <div className="section-heading">
        <span className="section-label">/ How we work</span>
        <h2>
          From unsure
          <br />
          to underway.
        </h2>
      </div>
      <ol>
        {process.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
      <div className="process__media media-frame" aria-hidden="true">
        <img src={earneaziImage} alt="" loading="lazy" width={1600} height={700} />
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="trust section-pad" id="proof">
      <div className="trust__media media-frame">
        <img
          src={medFindImage}
          alt="A calm, focused product interface in everyday use"
          loading="lazy"
          width={1400}
          height={1500}
        />
      </div>
      <div className="trust__copy">
        <span className="section-label">/ Proof, honestly</span>
        <p className="trust__quote">
          <span aria-hidden="true">&ldquo;</span>The work should speak before the numbers do.
        </p>
        <p className="trust__note">
          Verified client stories, references and outcomes will live here as the portfolio grows. No
          inflated claims. No borrowed credibility.
        </p>
      </div>
    </section>
  );
}

function Metrics() {
  const labels = ["Projects Delivered", "Products Built", "Clients Served", "Digital Experiences"];
  return (
    <section className="metrics" aria-label="Company metrics placeholders">
      <div className="metrics__media" aria-hidden="true">
        <img src={greenGuardImage} alt="" loading="lazy" width={1600} height={900} />
      </div>
      <div className="metrics__grid">
        {labels.map((label) => (
          <div key={label}>
            <strong>—</strong>
            <span>{label}</span>
            <small>Verified figure coming soon</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work section-pad" id="work">
      <div className="section-heading">
        <span className="section-label">/ Selected work</span>
        <h2>
          Products with
          <br />a point of view.
        </h2>
      </div>
      <div className="projects">
        <Project
          index="01"
          title="Earneazi"
          category="Fintech platform"
          year="2026"
          description="A clearer financial product experience, shaped for everyday momentum."
          image={earneaziImage}
        />
        <Project
          index="02"
          title="GreenGuard AI"
          category="AI · Environment"
          year="2026"
          description="Connected intelligence for monitoring and protecting living systems."
          image={greenGuardImage}
        />
        <Project
          index="03"
          title="36 Spokes"
          category="Digital commerce"
          year="2026"
          description="A distinctive digital home for a brand built around movement."
          tone="sun"
        />
        <Project
          index="04"
          title="MedFind"
          category="Health technology"
          year="2026"
          description="A calm, direct way to navigate healthcare discovery."
          image={medFindImage}
        />
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="contact section-pad" id="contact">
      <span className="section-label">/ Have something in mind?</span>
      <h2>
        Start
        <br />
        something.
      </h2>
      <div className="contact__actions">
        <p>
          Tell us about your next website, application, software product, AI solution or automation
          project.
        </p>
        <a href="mailto:hello@webfarm.in" className="contact__primary">
          Start a conversation <ArrowUpRight />
        </a>
        <a href="#work">
          View our work <ArrowDown />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer section-pad">
      <div className="footer__top">
        <div className="footer__intro">
          <span className="section-label">/ Let's grow something</span>
          <a href="mailto:hello@webfarm.in">hello@webfarm.in</a>
        </div>
        <nav className="footer__columns" aria-label="Footer">
          <div>
            <span className="footer__col-label">Sitemap</span>
            <a href="#top">Home</a>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <span className="footer__col-label">Services</span>
            <span>Web Development</span>
            <span>Mobile Apps</span>
            <span>AI &amp; Automation</span>
            <span>Business Software</span>
          </div>
          <div>
            <span className="footer__col-label">Elsewhere</span>
            <span>LinkedIn — soon</span>
            <span>Instagram — soon</span>
          </div>
        </nav>
      </div>
      <div className="footer__wordmark" aria-hidden="true">
        WebFarm<span>.</span>
      </div>
      <div className="footer__bottom">
        <span>© 2026 WebFarm</span>
        <span>Original digital products, thoughtfully grown.</span>
      </div>
    </footer>
  );
}

export function HomePage() {
  const shellRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const handleIntroComplete = useCallback(() => setReady(true), []);
  useWebFarmMotion(shellRef, ready);

  return (
    <>
      <div className="intro-backdrop" ref={backdropRef} aria-hidden="true" />
      <div className="site-shell" ref={shellRef}>
        <Preloader shellRef={shellRef} backdropRef={backdropRef} onComplete={handleIntroComplete} />
        <main>
          <Hero />
          <IntroStatement />
          <Services />
          <ServiceVisual />
          <Capabilities />
          <Process />
          <Trust />
          <Metrics />
          <Work />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
