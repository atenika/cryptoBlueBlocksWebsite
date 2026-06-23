const services = [
  {
    title: "Smart Contract Development",
    label: "Architecture",
    description:
      "Production-ready contracts for Ethereum and Solana, built for clarity, security, and maintainability.",
    icon: "contract",
  },
  {
    title: "Testing for Vibe-Coded Programs",
    label: "Testing",
    description:
      "We review, break, and harden fast-built codebases so they behave predictably before users touch them.",
    icon: "shield",
  },
  {
    title: "dApp Frontend Development",
    label: "Frontend delivery",
    description:
      "Clean, reliable interfaces that connect complex onchain logic to a smooth user experience.",
    icon: "layout",
  },
];

const reasons = [
  {
    text: "We keep complex Web3 systems understandable.",
    icon: "clarity",
  },
  {
    text: "We test fast-moving code before it becomes expensive code.",
    icon: "bug",
  },
  {
    text: "We build with long-term maintainability in mind.",
    icon: "layers",
  },
];

const process = [
  {
    step: "01",
    title: "Scope",
    description:
      "We define the critical path, technical risks, and what needs to ship first.",
    icon: "scope",
  },
  {
    step: "02",
    title: "Build",
    description:
      "We implement contract logic, frontend flows, or targeted fixes with tight feedback loops.",
    icon: "build",
  },
  {
    step: "03",
    title: "Test",
    description:
      "We validate behavior, edge cases, and integration points before release.",
    icon: "flask",
  },
  {
    step: "04",
    title: "Ship",
    description:
      "We help you move from working code to production-ready delivery.",
    icon: "ship",
  },
];

const fit = [
  {
    text: "Founders shipping on Ethereum or Solana",
    icon: "founder",
  },
  {
    text: "Teams with contract logic that needs careful implementation",
    icon: "logic",
  },
  {
    text: "Projects with vibe-coded code that needs serious testing",
    icon: "spark",
  },
  {
    text: "dApps that need a frontend people can actually use",
    icon: "ux",
  },
];

const proof = [
  { text: "Ethereum", icon: "eth" },
  { text: "Solana", icon: "sol" },
  { text: "Smart Contracts", icon: "contract" },
  { text: "QA", icon: "shield" },
  { text: "dApp Frontends", icon: "layout" },
];

function Icon({ name, className }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon ${className || ""}`.trim(),
    "aria-hidden": "true",
  };

  switch (name) {
    case "brand":
      return (
        <svg {...common}>
          <path d="M12 3 21 8v8l-9 5-9-5V8z" />
          <path d="M12 3v18M3 8l9 5 9-5" />
        </svg>
      );
    case "contract":
      return (
        <svg {...common}>
          <path d="M9 4 4 9v11h16V4z" />
          <path d="M9 4v5H4" />
          <path d="m13 12-2 2 2 2M16 12l2 2-2 2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "layout":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M9 9v11" />
        </svg>
      );
    case "clarity":
      return (
        <svg {...common}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "bug":
      return (
        <svg {...common}>
          <rect x="8" y="8" width="8" height="11" rx="4" />
          <path d="M12 8V5M9 6 7.5 4M15 6 16.5 4M8 12H4M16 12h4M8 16H4.5M16 16h3.5" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="m12 3 9 5-9 5-9-5z" />
          <path d="m3 13 9 5 9-5M3 16l9 5 9-5" />
        </svg>
      );
    case "scope":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
      );
    case "build":
      return (
        <svg {...common}>
          <path d="m14.5 4 5.5 5.5-4 1.5 3 5-2.5 1.5-3-5-3 3z" />
        </svg>
      );
    case "flask":
      return (
        <svg {...common}>
          <path d="M10 3v6l-5 9a1.5 1.5 0 0 0 1.3 2.2h11.4A1.5 1.5 0 0 0 19 18l-5-9V3" />
          <path d="M9 3h6M7.5 14h9" />
        </svg>
      );
    case "ship":
      return (
        <svg {...common}>
          <path d="M12 3c3 1.5 5 4.5 5 9l-2 3H9l-2-3c0-4.5 2-7.5 5-9z" />
          <circle cx="12" cy="9" r="1.6" />
          <path d="M9 18l-2 3M15 18l2 3" />
        </svg>
      );
    case "founder":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
        </svg>
      );
    case "logic":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="12" r="2.5" />
          <path d="M6 8.5v7M8.4 7.2 15.6 11M8.4 16.8 15.6 13" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
        </svg>
      );
    case "ux":
      return (
        <svg {...common}>
          <path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11M12 11V4.5a1.5 1.5 0 0 1 3 0V11M15 11V6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7l-2.2-3.3a1.6 1.6 0 0 1 2.5-2L9 12" />
        </svg>
      );
    case "check":
      return (
        <svg {...common} strokeWidth="2.2">
          <path d="m5 12 4.5 4.5L19 7" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common} strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "eth":
      return (
        <svg {...common} strokeWidth="1.6">
          <path d="M12 3 6 12l6 3.5L18 12z" />
          <path d="m6 13.5 6 7.5 6-7.5-6 3.5z" />
        </svg>
      );
    case "sol":
      return (
        <svg {...common} strokeWidth="1.6">
          <path d="M6 7h10l2-2H8zM6 12h10l2 2H8zM6 17h10l2 2H8z" />
        </svg>
      );
    default:
      return null;
  }
}

function Eyebrow({ children, center = false }) {
  return <p className={`eyebrow${center ? " center" : ""}`}>{children}</p>;
}

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <nav className="nav-bar" aria-label="Primary">
          <a className="brand" href="#top" aria-label="Crypto Blue Rocks home">
            <span className="brand-mark">
              <Icon name="brand" />
            </span>
            <span className="brand-text">Crypto Blue Rocks</span>
          </a>

          <div className="site-nav">
            <a href="#services">Services</a>
            <a href="#why">Why us</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="button button-primary header-cta" href="https://calendly.com/barnaby-bogusz-pawelczak/15min" target="_blank" rel="noopener noreferrer">
            Book a call
          </a>
        </nav>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <Eyebrow>Ethereum and Solana delivery partner</Eyebrow>
          <h1>
            Web3 products built with care,{" "}
            <span className="hero-gradient">tested like they matter.</span>
          </h1>
          <p className="hero-text">
            We help founders ship smart contracts, harden vibe-coded programs,
            and build dApp frontends people can actually use.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="https://calendly.com/barnaby-bogusz-pawelczak/15min" target="_blank" rel="noopener noreferrer">
              Book a call
              <Icon name="arrow" />
            </a>
            <a className="button button-secondary" href="#services">
              See services
            </a>
          </div>

          <ul className="proof-strip" aria-label="Core capabilities">
            {proof.map((item) => (
              <li key={item.text}>
                <Icon name={item.icon} />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-node">
            <Icon name="brand" />
          </div>

          <div className="float-card float-card-a">
            <span className="float-chip">
              <Icon name="contract" />
            </span>
            <span>
              <span className="float-label">Layer</span>
              <strong>Smart contracts</strong>
            </span>
          </div>

          <div className="float-card float-card-b">
            <span className="float-chip">
              <Icon name="shield" />
            </span>
            <span>
              <span className="float-label">Layer</span>
              <strong>QA &amp; testing</strong>
            </span>
          </div>

          <div className="float-card float-card-c">
            <span className="float-chip">
              <Icon name="layout" />
            </span>
            <span>
              <span className="float-label">Layer</span>
              <strong>dApp frontend</strong>
            </span>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <Eyebrow>Services</Eyebrow>
          <h2>What we build</h2>
          <p className="section-intro">
            Three tight focus areas, the parts of a Web3 product that break
            first and cost the most when they do.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.title}>
              <div className="card-icon">
                <Icon name={service.icon} />
              </div>
              <span className="service-label">{service.label}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="why">
        <div className="section-heading">
          <Eyebrow>Why us</Eyebrow>
          <h2>Why teams work with us</h2>
          <p className="section-intro">
            Founders come to us when they need a team that moves quickly without
            treating reliability as optional.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article className="reason-card reveal" key={reason.text}>
              <div className="card-icon">
                <Icon name={reason.icon} />
              </div>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-heading">
          <Eyebrow>Process</Eyebrow>
          <h2>How we work</h2>
          <p className="section-intro">
            A short, legible path from risk to release. No long sales process,
            no mystery.
          </p>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <article className="process-card reveal" key={item.step}>
              <div className="process-card-top">
                <span className="process-step">{item.step}</span>
                <span className="process-icon">
                  <Icon name={item.icon} />
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section fit-section" id="fit">
        <div className="fit-copy">
          <Eyebrow>Best fit</Eyebrow>
          <h2>Built for founders who need serious execution.</h2>
          <p className="section-intro">
            If your product is technically real and needs to become
            operationally solid, we can help.
          </p>
        </div>

        <ul className="fit-list">
          {fit.map((item) => (
            <li className="reveal" key={item.text}>
              <span className="fit-check">
                <Icon name={item.icon} />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="section cta-section" id="contact">
        <div className="cta-card">
          <Eyebrow center>Contact</Eyebrow>
          <h2>Need a reliable Web3 team to get this shipped?</h2>
          <p>
            Let&apos;s look at the architecture, the risks, and what needs to
            happen next.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://calendly.com/barnaby-bogusz-pawelczak/15min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
              <Icon name="arrow" />
            </a>
          </div>
          <p className="cta-note">
            Start with a focused conversation, not a long sales process.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="brand" href="#top" aria-label="Crypto Blue Rocks home">
            <span className="brand-mark">
              <Icon name="brand" />
            </span>
            <span className="brand-text">Crypto Blue Rocks</span>
          </a>
          <small>
            Smart Contracts · QA · dApp Frontends - Ethereum &amp; Solana
          </small>
        </div>
      </footer>
    </main>
  );
}
