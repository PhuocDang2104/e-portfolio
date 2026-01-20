export default function Page() {
  return (
    <>
      <section className="hero vnpt-hero reveal" id="home" aria-label="VNPT AI Hackathon hero">
        <div className="page hero-inner">
          <div className="hero-left reveal">
            <div className="kicker">VNPT AI Hackathon 2025</div>
            <h1 className="hero-title">MeetMate SAAR</h1>
            <p className="lead">
              Self-Reflective Agentic RAG Engine for Meeting Intelligence (Pre-In-Post)
            </p>
            <div className="meta-row vnpt-hero-badges">
              <div className="meta-pill">VNPT AI Hackathon 2025 - 2nd Runner-up</div>
              <div className="meta-pill">In production rollout at LPBank</div>
            </div>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="https://vnpt-ai-hackathon-meetmate.vercel.app/">
                View Demo
              </a>
              <a
                className="btn btn-ghost"
                href="/static/images/vnpt-ai/SAVINAI%20MeetMate%20Round%202%20Proposal.pdf"
              >
                Read Proposal PDF
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/PhuocDang2104/vnpt_ai_hackathon_meetmate"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-right reveal">
            <div className="vnpt-hero-media">
              <img
                src="/static/images/vnpt-ai/vnpt-ai-banner.png"
                alt="MeetMate SAAR banner"
                className="vnpt-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="page">
        <section
          className="content meetmate-overview reveal"
          id="overview"
          aria-labelledby="overview-title"
        >
          <div className="meetmate-grid">
            <div className="meetmate-left">
              <h2 className="meetmate-title" id="overview-title">
                Overview of MeetMate
              </h2>
              <p className="muted">
                MeetMate is an AI meeting assistant powered by ASR, RAG, LLMs and tool-calling, with
                VNPT APIs & Cloud services. It follows the entire meeting lifecycle to automate
                minutes, actions and knowledge, helping teams make decisions faster and with greater
                transparency.
              </p>

              <h3 className="meetmate-subtitle">Three core blocks</h3>

              <div className="meetmate-block">
                <h4>Pre-Meeting - Intelligent preparation</h4>
                <ul>
                  <li>
                    Syncs calendars from Outlook/Teams and understands topic, project and
                    participating units.
                  </li>
                  <li>
                    Uses RAG over internal documents to pull relevant policies, proposals and past
                    minutes.
                  </li>
                  <li>
                    Generates a suggested agenda and pre-read pack and sends it to participants in
                    advance.
                  </li>
                </ul>
              </div>

              <div className="meetmate-block">
                <h4>In-Meeting - AI co-host during the meeting</h4>
                <ul>
                  <li>
                    A MeetMate bot joins Teams/desktop meetings with a "Live Notes - Actions - Ask
                    AI" panel.
                  </li>
                  <li>
                    Provides real-time transcription (multi-language) by speaker, with live recaps
                    along the timeline.
                  </li>
                  <li>
                    Detects Actions / Decisions / Risks and suggests creating tasks, scheduling
                    follow-ups, and attaching documents.
                  </li>
                </ul>
              </div>

              <div className="meetmate-block">
                <h4>Post-Meeting - Turning discussion into execution</h4>
                <ul>
                  <li>
                    Produces standardized professional Minutes of Meeting: objectives, key
                    discussion points, decisions, actions/owners/deadlines and risks.
                  </li>
                  <li>
                    Syncs tasks to tools such as Planner/Jira/Work/internal PM systems and supports
                    reminders.
                  </li>
                  <li>
                    Stores transcripts, highlights and meeting knowledge for search and Q&A after
                    the meeting.
                  </li>
                </ul>
              </div>
            </div>

            <div className="meetmate-right">
              <h3 className="meetmate-subtitle meetmate-subtitle--accent" id="core-features">
                Core Features Across the 3 Stages Breakthrough
              </h3>

              <div className="meetmate-stages">
                <article className="stage-block stage-block--pre">
                  <span className="stage-tag">Pre</span>
                  <h4>
                    Before the meeting{" "}
                    <span className="stage-quote">"Walk into the room already aligned"</span>
                  </h4>
                  <ul>
                    <li>
                      MeetMate sends a reminder with objective, attendees and project context.
                    </li>
                    <li>
                      Automatically assembles a pre-read pack from relevant policies, proposals and
                      previous minutes.
                    </li>
                    <li>
                      Participants log questions/risks/requests in advance; the meeting owner sees a
                      consolidated view to refine the agenda.
                    </li>
                  </ul>
                </article>

                <article className="stage-block stage-block--in">
                  <span className="stage-tag">In</span>
                  <h4>
                    During the meeting{" "}
                    <span className="stage-quote">
                      "An AI co-host that listens, understands and suggests"
                    </span>
                  </h4>
                  <ul>
                    <li>
                      The MeetMate bot joins with a "Live Notes - Actions - Ask AI" panel, quietly
                      updating the sidebar instead of interrupting the discussion.
                    </li>
                    <li>
                      Delivers real-time, speaker-aware transcription and rolling recaps, so
                      everyone (including late joiners) instantly sees who said what and what's
                      been agreed.
                    </li>
                    <li>
                      Detects actions, decisions & risks in what people say using intent
                      understanding, converts them into structured ADR entries and tool suggestions
                      (tasks, follow-ups, open documents), and answers questions powered by LightRAG
                      that prioritises the current meeting context and internal documents - with
                      every action gated by one-click human confirmation.
                    </li>
                  </ul>
                </article>

                <article className="stage-block stage-block--post">
                  <span className="stage-tag">Post</span>
                  <h4>
                    After the meeting{" "}
                    <span className="stage-quote">
                      "Minutes are done and work doesn't get lost"
                    </span>
                  </h4>
                  <ul>
                    <li>
                      Instantly generates standardized Minutes of Meeting (summary, decisions,
                      actions, risks with timecodes).
                    </li>
                    <li>
                      Pushes action items into Planner/Jira/Work/PM tools and assigns them to the
                      right owners.
                    </li>
                    <li>
                      Each user gets a personal "My Recap" and can later query: deadlines,
                      decisions, or where something was approved across past meetings.
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          className="content meetmate-architecture reveal"
          id="architecture"
          aria-labelledby="architecture-title"
        >
          <div
            className="meetmate-arch-carousel"
            role="region"
            aria-label="MeetMate full-stack architecture slides"
          >
            <input type="radio" name="meetmate-arch" id="arch-slide-1" defaultChecked />
            <input type="radio" name="meetmate-arch" id="arch-slide-2" />
            <input type="radio" name="meetmate-arch" id="arch-slide-3" />

            <div className="meetmate-arch-heading">
              <h2 className="section-title" id="architecture-title">
                Full-stack Architecture
                <span className="meetmate-arch-subtitle">
                  <span className="arch-subtitle-item arch-subtitle-1">
                    End-to-end workflow & system map
                  </span>
                  <span className="arch-subtitle-item arch-subtitle-2">
                    Orchestration, data flow, and stage routing
                  </span>
                  <span className="arch-subtitle-item arch-subtitle-3">
                    Deployment layers & enterprise integrations
                  </span>
                </span>
              </h2>
            </div>

            <div className="meetmate-arch-frame">
              <div className="meetmate-arch-nav meetmate-arch-nav--prev">
                <label className="meetmate-arch-btn nav-for-1" htmlFor="arch-slide-3">
                  Prev
                </label>
                <label className="meetmate-arch-btn nav-for-2" htmlFor="arch-slide-1">
                  Prev
                </label>
                <label className="meetmate-arch-btn nav-for-3" htmlFor="arch-slide-2">
                  Prev
                </label>
              </div>

              <div className="meetmate-arch-nav meetmate-arch-nav--next">
                <label className="meetmate-arch-btn nav-for-1" htmlFor="arch-slide-2">
                  Next
                </label>
                <label className="meetmate-arch-btn nav-for-2" htmlFor="arch-slide-3">
                  Next
                </label>
                <label className="meetmate-arch-btn nav-for-3" htmlFor="arch-slide-1">
                  Next
                </label>
              </div>

              <div className="meetmate-arch-track">
                <figure className="meetmate-arch-slide meetmate-arch-slide--one">
                  <img
                    src="/static/images/vnpt-ai/meetmate_architect_1.png"
                    alt="MeetMate full-stack architecture slide 1"
                  />
                </figure>
                <figure className="meetmate-arch-slide meetmate-arch-slide--two">
                  <img
                    src="/static/images/vnpt-ai/meetmate_architect_2.png"
                    alt="MeetMate full-stack architecture slide 2"
                  />
                </figure>
                <figure className="meetmate-arch-slide meetmate-arch-slide--three">
                  <img
                    src="/static/images/vnpt-ai/meetmate_architect_3.png"
                    alt="MeetMate full-stack architecture slide 3"
                  />
                </figure>
              </div>
            </div>

            <div className="meetmate-arch-dots">
              <label className="meetmate-arch-dot" htmlFor="arch-slide-1" aria-label="Slide 1" />
              <label className="meetmate-arch-dot" htmlFor="arch-slide-2" aria-label="Slide 2" />
              <label className="meetmate-arch-dot" htmlFor="arch-slide-3" aria-label="Slide 3" />
            </div>
          </div>
        </section>

        <section
          className="content meetmate-saar reveal"
          id="saar-architecture"
          aria-labelledby="saar-title"
        >
          <h2 className="section-title" id="saar-title">
            MeetMate | SAAR - Stage-aware Agentic Adaptive RAG
            <span className="meetmate-saar-subtitle">AI Architecture Focus</span>
          </h2>

          <div className="saar-diagram">
            <img
              src="/static/images/vnpt-ai/meetmate_SAARchitect.png"
              alt="MeetMate SAAR architecture overview diagram"
            />
          </div>

          <div className="saar-stage-selector" role="tablist" aria-label="SAAR stages">
            <input type="radio" name="saar-stage" id="saar-pre" defaultChecked />
            <input type="radio" name="saar-stage" id="saar-in" />
            <input type="radio" name="saar-stage" id="saar-post" />

            <div className="saar-stage-row">
              <label className="saar-stage-btn" htmlFor="saar-pre">
                Pre
              </label>
              <label className="saar-stage-btn" htmlFor="saar-in">
                In
              </label>
              <label className="saar-stage-btn" htmlFor="saar-post">
                Post
              </label>
            </div>

            <div className="saar-stage-panels">
              <article className="saar-panel saar-panel--pre" role="tabpanel">
                <div className="saar-panel-text">
                  <h3>Pre-meeting RAG & agenda prep</h3>
                  <p className="muted">
                    History-aware RAG builds agenda and pre-read packs before the meeting.
                  </p>
                  <ul>
                    <li>
                      Ingest calendar context, series history, pending actions/risks, and meeting
                      attachments.
                    </li>
                    <li>
                      Retrieve project/topic docs + policies with priority scoring (recency +
                      unresolved ADR boosts).
                    </li>
                    <li>
                      Generate a 3-7 item agenda with time allocation and cited pre-read links;
                      collect attendee questions/requests.
                    </li>
                  </ul>
                </div>
                <div className="saar-panel-media">
                  <a className="saar-lightbox-trigger" href="#saar-lightbox-pre">
                    <img
                      src="/static/images/vnpt-ai/pre-meeting-ai.png"
                      alt="Pre-meeting AI architecture diagram"
                    />
                  </a>
                </div>
              </article>

              <article className="saar-panel saar-panel--in" role="tabpanel">
                <div className="saar-panel-text">
                  <h3>In-meeting realtime multi-agent RAG</h3>
                  <p className="muted">
                    Low-latency LangGraph pipeline with VNPT APIs turns speech into recap, ADR,
                    Q&A, and governed tool-calls.
                  </p>
                  <ul>
                    <li>ASR streaming + stage/event router; tick scheduler controls LLM budget.</li>
                    <li>
                      Shared state: transcript window, topics, ADR, Q&A, tool suggestions, and
                      metrics.
                    </li>
                    <li>
                      Three-layer retrieval: meeting context → project/topic docs → global
                      knowledge, always with citations.
                    </li>
                  </ul>
                </div>
                <div className="saar-panel-media">
                  <a className="saar-lightbox-trigger" href="#saar-lightbox-in">
                    <img
                      src="/static/images/vnpt-ai/in-meeting-ai.png"
                      alt="In-meeting AI architecture diagram"
                    />
                  </a>
                </div>
              </article>

              <article className="saar-panel saar-panel--post" role="tabpanel">
                <div className="saar-panel-text">
                  <h3>Post-meeting long-context consolidation</h3>
                  <p className="muted">
                    Refines ADR and produces minutes with compliance-ready archiving.
                  </p>
                  <ul>
                    <li>
                      Consolidate transcript/recap/ADR, dedupe decisions, and fill owners/deadlines
                      with timecodes.
                    </li>
                    <li>
                      Enrich with policies and historical minutes using weighted long-context RAG.
                    </li>
                    <li>
                      Generate MoM + highlights, sync tasks to Planner/Jira, and archive with audit
                      trails.
                    </li>
                  </ul>
                </div>
                <div className="saar-panel-media">
                  <a className="saar-lightbox-trigger" href="#saar-lightbox-post">
                    <img
                      src="/static/images/vnpt-ai/post-meeting-ai.png"
                      alt="Post-meeting AI architecture diagram"
                    />
                  </a>
                </div>
              </article>
            </div>
          </div>

          <div className="saar-lightbox" id="saar-lightbox-pre" aria-hidden="true">
            <div className="saar-lightbox-inner" role="dialog" aria-label="Pre-meeting AI diagram">
              <a className="saar-lightbox-close" href="#" aria-label="Close">
                x
              </a>
              <img
                src="/static/images/vnpt-ai/pre-meeting-ai.png"
                alt="Pre-meeting AI architecture diagram enlarged"
              />
            </div>
          </div>

          <div className="saar-lightbox" id="saar-lightbox-in" aria-hidden="true">
            <div className="saar-lightbox-inner" role="dialog" aria-label="In-meeting AI diagram">
              <a className="saar-lightbox-close" href="#" aria-label="Close">
                x
              </a>
              <img
                src="/static/images/vnpt-ai/in-meeting-ai.png"
                alt="In-meeting AI architecture diagram enlarged"
              />
            </div>
          </div>

          <div className="saar-lightbox" id="saar-lightbox-post" aria-hidden="true">
            <div className="saar-lightbox-inner" role="dialog" aria-label="Post-meeting AI diagram">
              <a className="saar-lightbox-close" href="#" aria-label="Close">
                x
              </a>
              <img
                src="/static/images/vnpt-ai/post-meeting-ai.png"
                alt="Post-meeting AI architecture diagram enlarged"
              />
            </div>
          </div>
        </section>

        <section className="content art-gallery reveal" id="gallery" aria-labelledby="gallery-title">
          <h2 className="section-title" id="gallery-title">
            Art Gallery
          </h2>
          <p className="muted">
            Curated visual highlights. Replace the placeholder images with your own.
          </p>

          <div className="art-gallery-frame">
            <div className="art-gallery-track">
              <figure className="art-card art-card--wide" id="art-1">
                <img
                  src="/static/images/vnpt-ai/vnpt-ai-banner.png"
                  alt="Gallery placeholder 1"
                />
                <figcaption>Showcase cover</figcaption>
              </figure>
              <figure className="art-card" id="art-2">
                <img
                  src="/static/images/vnpt-ai/meetmate_architect_1.png"
                  alt="Gallery placeholder 2"
                />
                <figcaption>System overview</figcaption>
              </figure>
              <figure className="art-card art-card--tall" id="art-3">
                <img
                  src="/static/images/vnpt-ai/meetmate_architect_2.png"
                  alt="Gallery placeholder 3"
                />
                <figcaption>Deployment view</figcaption>
              </figure>
              <figure className="art-card" id="art-4">
                <img
                  src="/static/images/vnpt-ai/meetmate_architect_3.png"
                  alt="Gallery placeholder 4"
                />
                <figcaption>Infrastructure layers</figcaption>
              </figure>
              <figure className="art-card art-card--wide" id="art-5">
                <img
                  src="/static/images/vnpt-ai/meetmate_SAARchitect.png"
                  alt="Gallery placeholder 5"
                />
                <figcaption>Agentic RAG flow</figcaption>
              </figure>
            </div>
          </div>

          <div className="art-gallery-nav" aria-label="Gallery navigation">
            <a className="art-dot" href="#art-1" aria-label="Go to artwork 1"></a>
            <a className="art-dot" href="#art-2" aria-label="Go to artwork 2"></a>
            <a className="art-dot" href="#art-3" aria-label="Go to artwork 3"></a>
            <a className="art-dot" href="#art-4" aria-label="Go to artwork 4"></a>
            <a className="art-dot" href="#art-5" aria-label="Go to artwork 5"></a>
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
              <div className="muted small">Citations required; no-source -&gt; no-answer policy.</div>
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
