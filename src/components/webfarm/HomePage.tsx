import { useCallback, useEffect, useRef, useState } from "react";
import { Header } from "./Header";
import { Preloader } from "./Preloader";
import { Project } from "./Project";
import { ServiceIcon } from "./ServiceIcon";
import { useWebFarmMotion } from "@/hooks/use-webfarm-motion";
import heroImage from "@/assets/webfarm-hero.webp";
import earneaziImage from "@/assets/earneazi.jpg";
import greenGuardImage from "@/assets/greenguard.jpg";
import spokesImage from "@/assets/spokes.jpg";
import medFindImage from "@/assets/medfind.jpg";
import processImage from "@/assets/process.jpg";
import proofBgImage from "@/assets/proof-bg.jpg";

const servicesData = [
  {
    num: "01",
    title: "Web Development",
    desc: "Fast, responsive web applications and platforms built with clean architecture and modern tooling. From first commit to production, quality is the default.",
    kind: "web" as const,
  },
  {
    num: "02",
    title: "Mobile Apps",
    desc: "Focused cross-platform mobile experiences that make complex product workflows feel fluid, intuitive, and effortless on every screen.",
    kind: "mobile" as const,
  },
  {
    num: "03",
    title: "AI & Automation",
    desc: "Stop doing manually what machines do better. We wire practical intelligence, custom LLM workflows, and automated pipelines into your operations.",
    kind: "ai" as const,
  },
  {
    num: "04",
    title: "Business Software",
    desc: "Purpose-built operational systems, data dashboards, and internal tooling shaped precisely around how your team actually works.",
    kind: "software" as const,
  },
];

const capabilitiesList = [
  "Web Applications",
  "Mobile Apps",
  "Business Websites",
  "E-Commerce",
  "UI/UX Development",
  "Cloud & DevOps",
  "QA & Testing",
  "AI Assistants",
  "Workflow Automation",
  "Data Insights",
  "AI Integrations",
  "API Integration",
  "Business Dashboards",
  "Security Audits",
  "Compliance",
  "SEO",
  "Performance & Speed",
];

const processSteps = [
  { step: "01", name: "Discovery", classSuffix: "" },
  { step: "02", name: "Design", classSuffix: "2" },
  { step: "03", name: "Develop", classSuffix: "3" },
  { step: "04", name: "Test", classSuffix: "4" },
  { step: "05", name: "Launch", classSuffix: "5" },
];

const clientQuotes = [
  {
    quote: "WebFarm took our product vision from concept to a living, production-ready system with remarkable engineering ownership and attention to detail.",
    author: "Abhishek Sharma",
    role: "Co-Founder, Earneazi",
  },
  {
    quote: "Working with WebFarm felt like having our own senior in-house engineering team. Fast, dependable, and zero fluff.",
    author: "Environmental AI Initiative",
    role: "GreenGuard AI Partner",
  },
  {
    quote: "The speed of execution and clarity of architecture exceeded expectations. They delivered ahead of schedule.",
    author: "Healthcare Network",
    role: "MedFind Operations",
  },
];

const buildingPhases = [
  { dot: "active", label: "Now building", text: "Earneazi (earneazi.com)" },
  { dot: "active", label: "Now building", text: "GreenGuard AI (greenguardai.in)" },
  { dot: "active", label: "Now building", text: "36 Spokes (Commerce)" },
  { dot: "done", label: "Shipped", text: "MedFind (Health)" },
];

function Hero() {
  const [phaseIdx, setPhaseIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhaseIdx((prev) => (prev + 1) % buildingPhases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const currentPhase = buildingPhases[phaseIdx] ?? buildingPhases[0]!;

  return (
    <section className="home_root__h_YgT" id="top">
      <Header />
      <div className="home_topContainer__lv_m1 layout-grid-inner">
        <div className="home_leftContainer__YulaL">
          <h1 className="h1">
            Your Ideas,
            <br />
            Our Technology.
          </h1>
        </div>
        <p className="p-l home_rightContainer__E0__a">
          Web, mobile, AI automation, and business software. Engineered end to end, from concept to launch.
        </p>
      </div>

      <div className="home_bottomContainer__9ptEK">
        <div className="heroShowcase_root__iKIqh">
          <img
            className="heroShowcase_world__ncTmF"
            src={heroImage}
            alt="Pixel-art city park with a laptop running code on a picnic blanket, a crane on the skyline"
          />
          {/* Restrained floating status pill */}
          <div className="heroShowcase_pillStack__kGwfh" aria-hidden="true">
            <div className="heroShowcase_pill__bbdr0" style={{ opacity: 1, visibility: "visible" }}>
              <span className="heroShowcase_pillInner__gHqSZ">
                <span
                  className="heroShowcase_pillDot___d_Lb"
                  data-dot="true"
                  data-status={currentPhase.dot}
                />
                <span className="p-x heroShowcase_pillLabel__TVU4D" data-label="true">
                  {currentPhase.label}
                </span>
                <span className="p-x heroShowcase_pillText__2Pq23" data-text="true">
                  {currentPhase.text}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroStatement() {
  return (
    <section className="about_root__PbHfP layout-block-inner" id="intro">
      <div className="about_block__FMv8R">
        <h2 className="about_statement__q4ksl">
          Technology the way it should be:{" "}
          <span className="about_tile__FcV_3 about_tileMark__KPATz" aria-hidden="true">
            <span className="about_tileMarkInner">WF</span>
          </span>
          reliable, fast, and obsessively yours. Work with us and your{" "}
          <span className="about_tile__FcV_3 about_tileImage__3uWq5" aria-hidden="true">
            <img src={earneaziImage} alt="" loading="lazy" />
          </span>
          product gets built to last.
        </h2>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="services_root__evxuc layout-block-inner">
      <div className="services_headline__EixW3">
        <div className="label-pixel services_mark___29RQ">
          <span className="services_slash__CfA79" aria-hidden="true">/</span> Services
        </div>
        <h2 className="services_headlineText__cbSDH">What we build.</h2>
        <span className="services_sprite__XGsav services_spriteStar__n_QoE" aria-hidden="true" />
      </div>

      <div className="services_topGrid__fY8hG">
        <div className="services_rows__8aBnT">
          {servicesData.map((svc) => (
            <div className="services_row__Ioo7J" key={svc.num} data-service-row={svc.num}>
              <div className="services_rowLabel__bMROy">
                <span className="services_slash__CfA79" aria-hidden="true">/</span> {svc.num}
                <br />
                {svc.title}
              </div>
              <p className="p-l services_rowDesc__9Khjm">{svc.desc}</p>
            </div>
          ))}
        </div>

        <div className="services_clusterRight__6nk9F">
          {/* Main featured technology tile: Web Development */}
          <div className="services_tile__yGHfn">
            <div className="services_tileMedia__XClYf">
              <ServiceIcon kind="web" />
            </div>
            <span className="services_tileCaption__6ftO0">
              <span className="services_slash__CfA79" aria-hidden="true">/</span> Web Development
            </span>
          </div>

          {/* Large warm-yellow accent discipline card */}
          <div className="services_tile__yGHfn services_tileAmber__OI4DX">
            <span className="services_numeral__3uHRP">04</span>
            <span className="services_numeralLabel__ntLHW">Disciplines, one accountable team</span>
          </div>
        </div>
      </div>

      {/* Asymmetric staggered stair grid */}
      <div className="services_stair__KJc9m">
        <div className="services_tile__yGHfn">
          <div className="services_tileMedia__XClYf">
            <ServiceIcon kind="mobile" />
          </div>
          <span className="services_tileCaption__6ftO0">
            <span className="services_slash__CfA79" aria-hidden="true">/</span> Mobile Apps
          </span>
        </div>

        <div className="services_tile__yGHfn services_step2__Och2_">
          <div className="services_tileMedia__XClYf">
            <ServiceIcon kind="ai" />
          </div>
          <span className="services_tileCaption__6ftO0">
            <span className="services_slash__CfA79" aria-hidden="true">/</span> AI & Automation
          </span>
        </div>

        <div className="services_tile__yGHfn services_step3__4lSFG">
          <div className="services_tileMedia__XClYf">
            <ServiceIcon kind="software" />
          </div>
          <span className="services_tileCaption__6ftO0">
            <span className="services_slash__CfA79" aria-hidden="true">/</span> Business Software
          </span>
        </div>
      </div>

      {/* Core Capabilities wrapping typographic field */}
      <div className="services_capBlock__7EOaR">
        <div className="services_capLabel__hUQzq">
          <span className="services_slash__CfA79" aria-hidden="true">/</span> Core Capabilities
          <span className="services_sprite__XGsav services_spriteCursor__62qsK" aria-hidden="true" />
        </div>
        <ul className="services_capabilities__mKutk">
          {capabilitiesList.map((item, idx) => (
            <li className="services_capability__qNSe5" key={item}>
              <span className="services_capabilityName__wh82P">{item}</span>
              <sup className="services_capabilityNo__xyobv">
                {String(idx + 1).padStart(2, "0")}
              </sup>
              {idx < capabilitiesList.length - 1 && (
                <span className="services_capabilitySlash__Vsyn0" aria-hidden="true">/</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="process_root__Cxgip layout-block-inner">
      <span className="label-pixel process_mark__HnpSV">
        <span className="process_slash__BC9Hr" aria-hidden="true">/</span> How we ship.
      </span>
      <div className="process_stack__MO_8E">
        {processSteps.map((step, idx) => (
          <span
            key={step.step}
            className={`process_word__9WpvM ${step.classSuffix ? `process_word${step.classSuffix}__RfZ5M` : ""} ${
              idx === activeStep ? "process_wordActive__2oGF8" : ""
            }`}
            data-process-idx={idx}
            onMouseEnter={() => setActiveStep(idx)}
          >
            {step.name}
          </span>
        ))}
      </div>
      <div className="process_mediaWrap" aria-hidden="true">
        <img src={processImage} alt="WebFarm product delivery pipeline and engineering workspace" loading="lazy" />
      </div>
    </section>
  );
}

function ProofAndMetrics() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const quote = clientQuotes[quoteIdx] ?? clientQuotes[0]!;

  return (
    <section className="clients_root__4y9IF" id="proof">
      <div className="clients_bg__YE82x" aria-hidden="true">
        <img src={proofBgImage} alt="" className="clients_bgImage__nWPZH" loading="lazy" />
        <div className="clients_scrim__TASUn" />
      </div>
      <div className="clients_pixelEdge__13bS3 clients_pixelEdgeTop__gLD57" aria-hidden="true" />
      <div className="clients_pixelEdge__13bS3 clients_pixelEdgeBottom__tcM88" aria-hidden="true" />

      <div className="clients_frame__HWVfz">
        <div className="clients_content__xDpOO">
          <div className="label-pixel clients_mark__TFlYc">
            <span className="clients_markSlash__47nRr" aria-hidden="true">/</span> Clients & Outcomes
          </div>
          <h2 className="clients_headlineText___xx9K">
            Been shipping
            <br />
            for a while.
          </h2>
          <p className="p-l clients_intro__YevR1">
            Every number tells a story of shipped products and teams that stayed. Here they are, in their own words.
          </p>

          <figure className="clients_quoteInner__cmH0_">
            <blockquote className="h5 clients_quote__lmhKF">
              &ldquo;{quote.quote}&rdquo;
            </blockquote>
            <figcaption className="clients_attribution__sjOF9">
              <span className="p medium clients_author__pxvdA">{quote.author}</span>
              <span className="p-x clients_role__8sShe">{quote.role}</span>
            </figcaption>
          </figure>

          <div className="clients_dots__WqsC7" role="tablist" aria-label="Client testimonials">
            {clientQuotes.map((q, idx) => (
              <button
                type="button"
                role="tab"
                key={q.author}
                aria-selected={idx === quoteIdx}
                aria-label={`Testimonial from ${q.author}`}
                className={`clients_dot__cbnCw ${idx === quoteIdx ? "clients_dotActive__15im_" : ""}`}
                onClick={() => setQuoteIdx(idx)}
              />
            ))}
          </div>
        </div>

        {/* Asymmetric stat grid */}
        <div className="clients_statGrid__vsdyk">
          <div className="clients_stat__Tc2fs clients_stat1__5CLXR clients_statAmber__w9F9x">
            <svg viewBox="0 0 12 12" className="clients_statIcon__CkWN6" aria-hidden="true">
              <path fill="currentColor" d="M5 0h2v1H5zM3 1h2v1H3zM7 1h2v1H7zM1 2h2v1H1zM9 2h2v1H9zM0 3h1v6H0zM11 3h1v6h-1zM5 3h2v1H5zM3 4h2v1H3zM7 4h2v1H7zM5 5h2v7H5zM1 9h4v1H1zM7 9h4v1H7zM3 10h2v1H3zM7 10h2v1H7z" />
            </svg>
            <span className="clients_statBottom__TD3h3">
              <span className="clients_statValue__vzMFh" data-stat-target="10">10+</span>
              <span className="clients_statLabel__AssjX">Products delivered</span>
            </span>
          </div>

          <div className="clients_stat__Tc2fs clients_stat2__qISeq clients_statPlain__IeoX_">
            <svg viewBox="0 0 12 12" className="clients_statIcon__CkWN6" aria-hidden="true">
              <path fill="currentColor" d="M3 0h6v1H3zM1 1h2v1H1zM9 1h2v1H9zM0 3h1v6H0zM11 3h1v6h-1zM1 10h2v1H1zM9 10h2v1H9zM3 11h6v1H3zM5 3h1v4H5zM6 6h3v1H6z" />
            </svg>
            <span className="clients_statBottom__TD3h3">
              <span className="clients_statValue__vzMFh" data-stat-target="4">4+</span>
              <span className="clients_statLabel__AssjX">Years of experience</span>
            </span>
          </div>

          <div className="clients_stat__Tc2fs clients_stat3__yK5Y_ clients_statAmber__w9F9x">
            <svg viewBox="0 0 12 12" className="clients_statIcon__CkWN6" aria-hidden="true">
              <path fill="currentColor" d="M4 0h4v1H4zM3 1h1v3H3zM8 1h1v3H8zM4 4h4v1H4zM2 6h8v1H2zM1 7h1v5H1zM10 7h1v5h-1zM2 11h8v1H2z" />
            </svg>
            <span className="clients_statBottom__TD3h3">
              <span className="clients_statValue__vzMFh" data-stat-target="50">50k+</span>
              <span className="clients_statLabel__AssjX">Users on our products</span>
            </span>
          </div>

          <div className="clients_stat__Tc2fs clients_stat4__O6mYi clients_statAmber__w9F9x">
            <svg viewBox="0 0 12 12" className="clients_statIcon__CkWN6" aria-hidden="true">
              <path fill="currentColor" d="M7 0h2v1H7zM6 1h2v1H6zM5 2h2v1H5zM4 3h2v1H4zM3 4h2v2H3zM4 5h5v1H4zM6 6h2v1H6zM5 7h2v1H5zM4 8h2v1H4zM3 9h2v1H3zM2 10h2v2H2z" />
            </svg>
            <span className="clients_statBottom__TD3h3">
              <span className="clients_statValue__vzMFh" data-stat-target="24">&lt;24h</span>
              <span className="clients_statLabel__AssjX">Response time</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="projects_root__qa0vh" id="work">
      <div className="projects_header__B_8CC layout-block-inner">
        <div className="label-pixel projects_mark__gIzUg">
          <span className="projects_markSlash__S_htz" aria-hidden="true">/</span> Work
        </div>
        <h2 className="projects_headlineText__xcmVf">Work that ships.</h2>
        <p className="p-l projects_headerPara__qEWmL">
          Real products, built to last and live in the world.
        </p>
      </div>

      <div className="projects_grid__4VaRR layout-block-inner">
        <Project
          index="01"
          title="Earneazi"
          category="Fintech Platform"
          year="2026"
          description="A clearer financial product experience, shaped for everyday wealth momentum and intuitive goal planning."
          image={earneaziImage}
          link="https://earneazi.com"
        />
        <Project
          index="02"
          title="GreenGuard AI"
          category="AI · Environment"
          year="2026"
          description="Intelligent environmental monitoring and alert system. Real-time air, water, and climate intelligence for cities, authorities, and citizens."
          image={greenGuardImage}
          link="https://greenguardai.in"
        />
        <Project
          index="03"
          title="36 Spokes"
          category="Digital Commerce"
          year="2026"
          description="A distinctive digital home and community storefront engineered for an adventurous motorcycle touring brand."
          image={spokesImage}
          link="#contact"
        />
        <Project
          index="04"
          title="MedFind"
          category="Health Technology"
          year="2026"
          description="A calm, direct digital pathway to navigate healthcare discovery, local doctor appointments, and prescription fulfillment."
          image={medFindImage}
          link="#contact"
        />
      </div>
    </section>
  );
}

interface TeamPerson {
  num: string;
  name: string;
  initials: string;
  role?: string;
  description?: string;
}

const teamMembers: TeamPerson[] = [
  {
    num: "01",
    name: "Vedant Patil",
    initials: "VP",
    role: "Lead Developer",
  },
  {
    num: "02",
    name: "Om Mohite",
    initials: "OM",
    role: "Developer",
  },
];

const partners: TeamPerson[] = [
  {
    num: "01",
    name: "Abhishek Sharma",
    initials: "AS",
    description: "(Founder of Earneazi & 36Spokes)",
  },
  {
    num: "02",
    name: "Simran Kathuria",
    initials: "SK",
    description: "(Founder of 36spokes and TheWolfHouse Events)",
  },
];

function TeamAndPartners() {
  const [activePerson, setActivePerson] = useState<string | null>(null);

  return (
    <section className="team_root layout-block-inner" id="team" aria-labelledby="team-heading">
      <div className="team_grid">
        {/* Editorial Heading Column */}
        <div className="team_headerCol team_header__reveal">
          <div className="label-pixel team_mark">
            <span className="team_markSlash" aria-hidden="true">/</span> Team
          </div>
          <h2 id="team-heading" className="team_heading">
            The people
            <br />
            behind
            <br />
            WebFarm.
          </h2>
          <p className="team_introSub">
            Built by developers, strengthened by people who know the business.
          </p>
        </div>

        {/* Editorial Rows Column */}
        <div className="team_contentCol team_groups" onMouseLeave={() => setActivePerson(null)}>
          {/* Sub-group: Our Team */}
          <div className="team_group">
            <div className="team_subheadingRow">
              <span className="team_subheading">OUR TEAM</span>
            </div>
            <ul className="team_list" role="list">
              {teamMembers.map((member) => {
                const isActive = activePerson === member.name;
                return (
                  <li
                    key={member.name}
                    className={`team_row ${isActive ? "team_row--active" : ""}`}
                    tabIndex={0}
                    aria-label={`${member.name}, ${member.role}`}
                    onMouseEnter={() => setActivePerson(member.name)}
                    onFocus={() => setActivePerson(member.name)}
                    onBlur={() => setActivePerson(null)}
                  >
                    <div className="team_rowLeft">
                      <span className="team_rowNum" aria-hidden="true">{member.num}</span>
                      <span className="team_initialBadge" aria-hidden="true">{member.initials}</span>
                      <div className="team_nameBlock">
                        <span className="team_rowName">{member.name}</span>
                        <span className="team_rowDescription">{member.role}</span>
                      </div>
                    </div>
                    <div className="team_rowRight" aria-hidden="true">
                      <span className="team_rowArrow">→</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Sub-group: Our Partners */}
          <div className="team_group team_groupPartners">
            <div className="team_subheadingRow">
              <span className="label-pixel team_groupLabel">
                <span className="team_markSlash" aria-hidden="true">/</span> Partners
              </span>
              <span className="team_subheading">OUR PARTNERS</span>
            </div>
            <ul className="team_list" role="list">
              {partners.map((partner) => {
                const isActive = activePerson === partner.name;
                return (
                  <li
                    key={partner.name}
                    className={`team_row ${isActive ? "team_row--active" : ""}`}
                    tabIndex={0}
                    aria-label={`${partner.name}, ${partner.description}`}
                    onMouseEnter={() => setActivePerson(partner.name)}
                    onFocus={() => setActivePerson(partner.name)}
                    onBlur={() => setActivePerson(null)}
                  >
                    <div className="team_rowLeft">
                      <span className="team_rowNum" aria-hidden="true">{partner.num}</span>
                      <span className="team_initialBadge" aria-hidden="true">{partner.initials}</span>
                      <div className="team_nameBlock">
                        <span className="team_rowName">{partner.name}</span>
                        <span className="team_rowDescription">{partner.description}</span>
                      </div>
                    </div>
                    <div className="team_rowRight" aria-hidden="true">
                      <span className="team_rowArrow">→</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="preFooter_root__Zxcjj layout-block-inner" id="contact">
      <div className="preFooter_ticks__qhrL0" aria-hidden="true" />
      <div className="preFooter_panel__FE39v">
        <div className="preFooter_headingRow__O4R_A">
          <div className="label-pixel preFooter_mark__Jm0JM">
            <span className="preFooter_markSlash__cLbWN" aria-hidden="true">/</span> Contact
          </div>
          <h2 className="preFooter_heading__21tdo">Start something.</h2>
        </div>

        <div className="preFooter_paths__OPYcG">
          <div className="preFooter_path__ddNXX">
            <p className="p-l preFooter_pathText__Sbyxr">
              <strong className="preFooter_pathLead__6up6e">Talk to us.</strong> Tell us what you are making.
              We reply within 24 hours with a real technical assessment, not a sales brochure.
            </p>
            <div className="preFooter_ctaWrap__dRVJQ">
              <a className="preFooter_cta__NrGXq" href="mailto:hello@webfarm.in">
                <span className="preFooter_ctaLabel__WQ6WW">Start a conversation</span>
                <span className="preFooter_ctaArrow__IaUJQ" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h15M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="preFooter_path__ddNXX preFooter_pathSecond__Ubgdu">
            <p className="p-l preFooter_pathText__Sbyxr">
              <strong className="preFooter_pathLead__6up6e">See the work.</strong> Real products, live in the
              world. Judge us by what shipped, not by what we promise.
            </p>
            <div className="preFooter_ctaWrap__dRVJQ">
              <a className="preFooter_ghostLink__zU7iT" href="#work">
                View projects
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12h15M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="preFooter_band__SM_Dz">
          <div className="preFooter_bandLeft__5BJqg">
            <span className="preFooter_bandLead__BjtF1">Prefer email?</span>
            <a href="mailto:hello@webfarm.in" className="preFooter_bandEmail__oUliR">
              hello@webfarm.in
            </a>
          </div>
          <div className="preFooter_bandNote__INunC">
            <span className="preFooter_bandDot__m1AJS" aria-hidden="true" />
            Replies within 24h
          </div>
        </div>
      </div>
      <div className="preFooter_ticks__qhrL0" aria-hidden="true" />
    </section>
  );
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="layout_footer__I5bXP">
      <section className="footer_root__s8jc0 layout-grid-inner" role="contentinfo">
        <div className="footer_linksContainer__T7A5C footer_colSitemap__JYUAB">
          <h6 className="footer_title__gNhmS h6">Sitemap</h6>
          <div className="footer_linkTextContainer__eysg2">
            <a aria-label="Go Home" className="footer_linkText__nKx6n linkText_root__m0DpP" href="#top">
              <div>
                <svg viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" />
                </svg>
                <span><div><span className="footer">Home</span></div></span>
              </div>
            </a>
          </div>
          <div className="footer_linkTextContainer__eysg2">
            <a aria-label="Go Work" className="footer_linkText__nKx6n linkText_root__m0DpP" href="#work">
              <div>
                <svg viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" />
                </svg>
                <span><div><span className="footer">Work</span></div></span>
              </div>
            </a>
          </div>
          <div className="footer_linkTextContainer__eysg2">
            <a aria-label="Go Services" className="footer_linkText__nKx6n linkText_root__m0DpP" href="#services">
              <div>
                <svg viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" />
                </svg>
                <span><div><span className="footer">Services</span></div></span>
              </div>
            </a>
          </div>
          <div className="footer_linkTextContainer__eysg2">
            <a aria-label="Go Contact" className="footer_linkText__nKx6n linkText_root__m0DpP" href="#contact">
              <div>
                <svg viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" />
                </svg>
                <span><div><span className="footer">Contact</span></div></span>
              </div>
            </a>
          </div>
        </div>

        <div className="footer_linksContainer__T7A5C footer_colFollow__P_9Nr">
          <h6 className="footer_title__gNhmS h6">Follow us</h6>
          <div className="footer_linkTextContainer__eysg2">
            <a aria-label="WebFarm on LinkedIn" target="_blank" rel="noopener noreferrer" className="footer_linkText__nKx6n linkText_root__m0DpP" href="https://www.linkedin.com/company/webfarm">
              <div>
                <svg viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" />
                </svg>
                <span><div><span className="footer">LinkedIn</span></div></span>
              </div>
            </a>
          </div>
          <div className="footer_linkTextContainer__eysg2">
            <a aria-label="WebFarm on Instagram" target="_blank" rel="noopener noreferrer" className="footer_linkText__nKx6n linkText_root__m0DpP" href="https://www.instagram.com/webfarm.in">
              <div>
                <svg viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" />
                </svg>
                <span><div><span className="footer">Instagram</span></div></span>
              </div>
            </a>
          </div>
          <div className="footer_linkTextContainer__eysg2">
            <a aria-label="WebFarm on X" target="_blank" rel="noopener noreferrer" className="footer_linkText__nKx6n linkText_root__m0DpP" href="https://x.com/webfarm_in">
              <div>
                <svg viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" />
                </svg>
                <span><div><span className="footer">X</span></div></span>
              </div>
            </a>
          </div>
        </div>

        <div className="footer_emailContaineer__Ar2UR">
          <h4 className="footer_workWithMe__Q4dDg h4">Work With Us:</h4>
          <div className="footer_link__vJ4hm">
            <a aria-label="Send email" href="mailto:hello@webfarm.in">
              <h4 className="footer_email__mb5rC h4">hello@webfarm.in</h4>
            </a>
          </div>
          <div className="footer_contactActions__GyUoU">
            <a className="footer_contactBtn__0UFeN" href="mailto:hello@webfarm.in">
              Contact us
            </a>
          </div>
        </div>

        <div className="footer_middleContainer__QRvHD footer_metaLocation__K3qiX">
          <div className="p-x footer_metaLabel__CDKSR">Location</div>
          <div className="p-x footer_middleText__o7Dp7">India</div>
          <div className="p-x footer_middleText__o7Dp7">Working worldwide</div>
        </div>

        <div className="footer_middleContainer__QRvHD footer_metaAvailability__LMs1S">
          <div className="p-x footer_metaLabel__CDKSR">Availability</div>
          <div className="p-x footer_middleText__o7Dp7">Open for new projects</div>
        </div>

        <div className="footer_middleContainer__QRvHD footer_metaLegal__65hDR">
          <div className="p-x">© 2026 · WebFarm</div>
          <div className="p-x footer_middleText__o7Dp7">All rights reserved</div>
        </div>

        {/* Giant Dominant Wordmark */}
        <div className="footer_brandMark__AjdSf">
          <span>WebFarm</span>
        </div>

        {/* Floating Circle Back To Top Button */}
        <div className="footer_goToTop__VApPt">
          <button
            type="button"
            className="footer_circleButton__aI9zh"
            aria-label="Back to top"
            onClick={scrollToTop}
          >
            <svg className="footer_arrowClassic__VIRA0" viewBox="0 0 26 27" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" />
            </svg>
            <span className="footer_ball__ZQjqC" />
          </button>
        </div>
      </section>
    </footer>
  );
}

export function HomePage() {
  const shellRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setReady(true);
  }, []);

  useWebFarmMotion(shellRef, ready);

  return (
    <>
      {/* Dark surround for opening panel exchange */}
      <div className="intro-backdrop" ref={backdropRef} aria-hidden="true" />

      {/* Outgoing statement panel (Panel A) */}
      <Preloader shellRef={shellRef} backdropRef={backdropRef} onComplete={handleIntroComplete} />

      {/* Live website shell (Panel B) */}
      <div className="site-shell" ref={shellRef}>
        <main>
          <Hero />
          <IntroStatement />
          <Services />
          <Process />
          <ProofAndMetrics />
          <Work />
          <TeamAndPartners />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
