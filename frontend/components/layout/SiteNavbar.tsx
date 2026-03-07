import { getWritingRoute } from "@/lib/writing";

const projectLinks = [
  {
    href: "/vnpt_ai_project",
    title: "VNPT AI Hackathon: MeetMate SAAR",
    meta: "2nd Runner-up | LPBank rollout"
  },
  {
    href: "/iot_challenge_product",
    title: "SCENT: Smart Customer Experience",
    meta: "AIoT system | SILABS 1st Runner-up"
  },
  {
    href: "/intel_ai_project",
    title: "AIMING: AIoT Infravision",
    meta: "Intel edge AI grading system"
  },
  {
    href: "/rmit_hackathon_project",
    title: "RMIT Logistics AIoT",
    meta: "Top 10 | Hackathon project"
  },
  {
    href: "/klu_hackathon_project",
    title: "ESP32Cam RFID Warehouse",
    meta: "HumanLog 2025 | Runner-up"
  },
  {
    href: "/#achievements",
    title: "DENSO Hackathon",
    meta: "Top 10 | Awards"
  }
];

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" }
];

const SiteNavbar = () => {
  return (
    <div className="nav-wrap">
      <div className="page">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <a
              href="/"
              className="nav-brand-link"
              aria-label="Go to home"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none"
              }}
            >
              <img
                src="/static/images/Phuoc_avatar.png"
                alt="Dang Nhu Phuoc avatar"
                className="nav-avatar"
              />
              <div className="brand">
                Dang Nhu Phuoc <small>AI & Embedded Software Engineer</small>
              </div>
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div className="nav-links" id="nav-links">
              <a href="/#about">About</a>

              <div className="dropdown">
                <a href="/#projects">
                  Projects {"\u25BE"}
                </a>
                <div className="dropdown-content">
                  <div className="dropdown-label">Projects</div>
                  {projectLinks.map((link) => (
                    <a className="dropdown-item" href={link.href} key={link.href}>
                      <span className="dropdown-item-title">{link.title}</span>
                      <span className="dropdown-item-meta">{link.meta}</span>
                    </a>
                  ))}
                </div>
              </div>

              <a href={getWritingRoute()}>Research</a>

              {navLinks.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </div>

            <a
              className="cta-download"
              href="/static/Dang Nhu Phuoc _ CV _ Embedded Engineer.pdf"
              download
            >
              Download CV
            </a>

            <button className="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
              <span className="hamb-line"></span>
              <span className="hamb-line"></span>
              <span className="hamb-line"></span>
            </button>
          </div>
        </nav>
      </div>

      <div id="mobileMenu" className="mobile-menu" aria-hidden="true">
        <a href="/#about">About</a>
        <a href="/#projects">Projects</a>
        <a href={getWritingRoute()}>Research</a>
        <a href="/#achievements">Achievements</a>
        <a href="/#skills">Skills</a>
        <a href="/#contact">Contact</a>
      </div>
    </div>
  );
};

export default SiteNavbar;
