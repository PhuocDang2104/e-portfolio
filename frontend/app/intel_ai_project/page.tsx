import Script from "next/script";

export default function Page() {
  return (
    <>
      <div className="nav-wrap">
        <div className="page">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <a
                href="#home"
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
                  src="../static/images/Phuoc_avatar.png"
                  alt="Phước Đặng avatar"
                  className="nav-avatar"
                />
                <div className="brand">
                  Phước Đặng <small>Embedded & Edge AI</small>
                </div>
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div className="nav-links" id="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#exp">Certifications</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
              </div>
              <a
                className="cta-download"
                href="../static/Dang Nhu Phuoc _ CV _ Embedded Engineer.pdf"
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
      </div>

      <main className="under-construction">
        <div className="icon">🚧</div>
        <h1>Under Construction</h1>
        <p>Sorry for inconvenience, this page is being updated.</p>
      </main>

      <footer>
        © <span id="year"></span> Phước Đặng — Built with HTML/CSS/JS · Hosted on GitHub Pages
      </footer>

            <Script id="year-script" strategy="afterInteractive">
        {`document.getElementById("year").textContent = new Date().getFullYear();`}
      </Script>
    </>
  );
}
