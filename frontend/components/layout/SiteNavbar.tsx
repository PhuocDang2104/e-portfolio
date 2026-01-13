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
                alt="Đặng Như Phước avatar"
                className="nav-avatar"
              />
              <div className="brand">
                Đặng Như Phước <small>AI & Embedded Software Engineer</small>
              </div>
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div className="nav-links" id="nav-links">
              <a href="/#home">Home</a>
              <a href="/#about">About</a>
              <div className="dropdown">
                <a href="/#projects">Projects ▾</a>
                <div className="dropdown-content">
                  <div className="dropdown-label">Projects</div>
                  <a className="dropdown-item" href="/vnpt_ai_project">
                    <span className="dropdown-item-title">VNPT AI Hackathon: MeetMate SAAR</span>
                    <span className="dropdown-item-meta">2nd Runner-up | LPBank rollout</span>
                  </a>
                  <a className="dropdown-item" href="/iot_challenge_product">
                    <span className="dropdown-item-title">SCENT: Smart Customer Experience</span>
                    <span className="dropdown-item-meta">AIoT system | SILABS 1st Runner-up</span>
                  </a>
                  <a className="dropdown-item" href="/intel_ai_project">
                    <span className="dropdown-item-title">AIMING: AIoT Infravision</span>
                    <span className="dropdown-item-meta">Intel edge AI grading system</span>
                  </a>
                  <a className="dropdown-item" href="/rmit_hackathon_project">
                    <span className="dropdown-item-title">RMIT Logistics AIoT</span>
                    <span className="dropdown-item-meta">Top 10 | Hackathon project</span>
                  </a>
                  <a className="dropdown-item" href="/klu_hackathon_project">
                    <span className="dropdown-item-title">ESP32Cam RFID Warehouse</span>
                    <span className="dropdown-item-meta">HumanLog 2025 | Runner-up</span>
                  </a>
                  <a className="dropdown-item" href="/#achievements">
                    <span className="dropdown-item-title">DENSO Hackathon</span>
                    <span className="dropdown-item-meta">Top 10 | Awards</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-label">Research Paper</div>
                </div>
              </div>
              <a href="/#achievements">Achievements</a>
              <a href="/#skills">Skills</a>
              <a href="/#contact">Contact</a>
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
        <a href="/#home">Home</a>
        <a href="/#about">About</a>
        <a href="/#projects">Projects</a>
        <a href="/#achievements">Achievements</a>
        <a href="/#skills">Skills</a>
        <a href="/#contact">Contact</a>
      </div>
    </div>
  );
};

export default SiteNavbar;
