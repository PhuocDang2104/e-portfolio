export default function Page() {
  return (
    <>
      <main className="page">
        <section
          className="content reveal"
          id="overview"
          aria-labelledby="overview-title"
          style={{ marginTop: "110px" }}
        >
          <h1 className="section-title" id="overview-title">
            VNPT AI Hackathon 2025 — MeetMate SAAR
          </h1>
          <p className="muted">
            Self-Reflective Agentic RAG engine for meeting intelligence, built for enterprise
            reliability and production deployment at LPBank.
          </p>
          <div className="meta-row">
            <div className="meta-pill">2nd Runner-up</div>
            <div className="meta-pill">Agentic RAG</div>
            <div className="meta-pill">Realtime + Batch</div>
            <div className="meta-pill">Citations-first</div>
          </div>
        </section>

        <section
          className="content reveal"
          id="architecture"
          aria-labelledby="architecture-title"
        >
          <h2 className="section-title" id="architecture-title">
            System Architecture
          </h2>
          <div className="cards">
            <article className="project-card reveal" role="listitem">
              <div className="project-content">
                <h3>Core modules</h3>
                <ul className="project-list">
                  <li>Stage-aware orchestration (Pre / In / Post meeting).</li>
                  <li>Hybrid retrieval: pgvector + BM25 with ACL filtering.</li>
                  <li>Evidence-first response policy with citations.</li>
                </ul>
              </div>
            </article>
            <article className="project-card reveal" role="listitem">
              <div className="project-content">
                <h3>Data & integrations</h3>
                <ul className="project-list">
                  <li>Streaming ingest: audio → ASR → transcript events.</li>
                  <li>Tool-calling workflows for tasks, follow-ups, and docs.</li>
                  <li>Audit-ready logs with traceable prompt lineage.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="content reveal" id="pipeline" aria-labelledby="pipeline-title">
          <h2 className="section-title" id="pipeline-title">
            Pipeline & Flow
          </h2>
          <div className="cards">
            <article className="project-card reveal" role="listitem">
              <div className="project-content">
                <h3>Realtime loop</h3>
                <ul className="project-list">
                  <li>Intent/ADR tick (~10s) for action tracking.</li>
                  <li>Event-driven Q&A force-ticks for instant answers.</li>
                  <li>Guardrails: confidence gating + safe tool use.</li>
                </ul>
              </div>
            </article>
            <article className="project-card reveal" role="listitem">
              <div className="project-content">
                <h3>Post-meeting loop</h3>
                <ul className="project-list">
                  <li>Recap tick (~60s) with corrective retrieval.</li>
                  <li>Faithfulness checks + fallback to no-answer.</li>
                  <li>Artifacts: summaries, tasks, and action logs.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="content reveal" id="deployment" aria-labelledby="deployment-title">
          <h2 className="section-title" id="deployment-title">
            Deployment & Stack
          </h2>
          <div className="project-card reveal" role="listitem">
            <div className="project-content">
              <h3>Production stack</h3>
              <ul className="project-list">
                <li>Backend: Python services + REST/WebSocket API.</li>
                <li>Data: PostgreSQL OLTP + vector store for RAG.</li>
                <li>Infra: VNPT Cloud deployment with audit logging.</li>
                <li>LLM providers: multi-model routing by SLA.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content reveal" id="results" aria-labelledby="results-title">
          <h2 className="section-title" id="results-title">
            Results & Impact
          </h2>
          <div className="timeline">
            <div className="item reveal">
              <strong>2nd Runner-up at VNPT AI Hackathon 2025</strong>
              <div className="muted small">Top 3 among 200+ teams nationwide.</div>
            </div>
            <div className="item reveal">
              <strong>Production rollout at LPBank</strong>
              <div className="muted small">Private SaaS backend with audit-ready logs.</div>
            </div>
            <div className="item reveal">
              <strong>Evidence-first responses</strong>
              <div className="muted small">Citations required; no-source → no-answer policy.</div>
            </div>
          </div>
        </section>

        <section className="content reveal" id="contact" aria-labelledby="contact-title">
          <h2 className="section-title" id="contact-title">
            Contact
          </h2>
          <p className="muted">
            Want to see the full system design or deployment details? Reach out and I will share
            the deep-dive docs.
          </p>
          <div className="contact-buttons">
            <a className="btn btn-primary" href="mailto:phuoc.dang2104@gmail.com">
              Send email
            </a>
            <a className="btn btn-ghost" href="/#contact">
              Go to main contact
            </a>
          </div>
        </section>

      </main>
    </>
  );
}
