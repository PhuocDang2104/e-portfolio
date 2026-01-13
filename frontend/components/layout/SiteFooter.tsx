const SiteFooter = () => {
  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-col footer-brand">
            <div className="footer-brand-header">
              <img
                src="/static/images/Phuoc_avatar.png"
                alt="Đặng Như Phước avatar"
                className="footer-avatar"
              />
              <div>
                <div className="footer-brand-name">Đặng Như Phước</div>
                <div className="footer-brand-role">
                  AI & Embedded Software Engineer • Building deployable AI systems
                </div>
              </div>
            </div>
            <p className="footer-desc">
              I build end-to-end AI systems: data → models → APIs → production, with reliability
              & safety in mind.
            </p>
            <div className="footer-tags">
              <span>LLM Systems</span>
              <span>Agentic RAG</span>
              <span>FastAPI</span>
              <span>Edge/IoT</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title" id="footer-title">
              Navigation
            </h4>
            <ul className="footer-links">
              <li>
                <a href="/#home">Home</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#projects">Projects</a>
              </li>
              <li>
                <a href="/#achievements">Achievements</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
              <li>
                <a href="/static/Dang Nhu Phuoc _ CV _ Embedded Engineer.pdf" download>
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li>
                <span className="footer-label">Email:</span>{" "}
                <a href="mailto:phuoc.dang2104@gmail.com">phuoc.dang2104@gmail.com</a>
              </li>
              <li>
                <span className="footer-label">GitHub:</span>{" "}
                <a href="https://github.com/PhuocDang2104" target="_blank" rel="noreferrer">
                  PhuocDang2104
                </a>
              </li>
              <li>
                <span className="footer-label">LinkedIn:</span>{" "}
                <a href="#" target="_blank" rel="noreferrer">
                  Phuoc Dang
                </a>
              </li>
              <li>
                <span className="footer-label">Location:</span> HCMC, Vietnam
              </li>
              <li>
                <span className="footer-label">Timezone:</span> GMT+7 (HCMC)
              </li>
            </ul>
            <a className="footer-cta" href="/#contact">
              Send a message →
            </a>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Tech / Trust</h4>
            <div className="footer-status">Status: Open to opportunities</div>
            <div className="footer-subtitle">
              <strong>Infrastructure</strong>
            </div>
            <ul className="footer-links footer-links--tight">
              <li>Frontend: Next.js on Vercel</li>
              <li>Backend: Render</li>
              <li>Database: Aiven (PostgreSQL)</li>
            </ul>
            <div className="footer-subtitle">
              <strong>Notes</strong>
            </div>
            <ul className="footer-links footer-links--tight">
              <li>Designed for fast load & reliability</li>
              <li>Evidence-first AI outputs (citations when available)</li>
              <li>Privacy: No tracking cookies</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Phước Đặng — Built with Next.js · Deployed on Vercel · Backend on Render · DB on
            Aiven
          </span>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
