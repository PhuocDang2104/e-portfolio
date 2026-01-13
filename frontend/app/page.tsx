import ShowcaseCarousel from "@/components/ShowcaseCarousel/ShowcaseCarousel";
import { EncryptedText } from "@/components/ui/encrypted-text";
import HomeAsk from "./_components/HomeAsk";

export const metadata = {
  title: "Phước Đặng — AI & Embedded Software Engineer"
};

export default function Page() {
  return (
    <>
      <div className="x-clip">
        <section className="hero home-hero reveal" id="home" aria-label="Hero">
        <div className="home-hero-gradients" aria-hidden="true">
          <span className="home-hero-gradient home-hero-gradient--first"></span>
          <span className="home-hero-gradient home-hero-gradient--second"></span>
          <span className="home-hero-gradient home-hero-gradient--third"></span>
          <span className="home-hero-gradient home-hero-gradient--fourth"></span>
          <span className="home-hero-gradient home-hero-gradient--fifth"></span>
        </div>

        <div className="home-hero-visuals" aria-hidden="true">
          <img
            src="/static/images/hero/hero-2.png"
            alt=""
            className="home-hero-visual home-hero-visual--two"
          />
          <img
            src="/static/images/hero/hero-3.png"
            alt=""
            className="home-hero-visual home-hero-visual--three"
          />
          <img
            src="/static/images/hero/hero-4.png"
            alt=""
            className="home-hero-visual home-hero-visual--four"
          />
        </div>

        <div className="home-hero-scroll-anchor" aria-hidden="true"></div>

        <div className="page hero-inner home-hero-inner">
          <div className="hero-left home-hero-content reveal">
            <h1 className="home-hero-title">
              <EncryptedText text="Đặng Như Phước" />
            </h1>
            <p className="home-hero-subtitle">
              <EncryptedText text="Electrical - Electronic Engineering Student at HCMUT-VNU | Aspiring AI Engineer" />
            </p>
            <HomeAsk />
          </div>
        </div>

        <div className="home-scroll-cue" aria-hidden="true">
          <span className="home-scroll-line"></span>
          <span className="home-scroll-text">Scroll</span>
        </div>
      </section>

      <div className="scroll-media" aria-hidden="true">
        <img src="/static/images/hero/hero-1.png" alt="" className="scroll-media-img" />
      </div>

      <div className="page">
        <section className="content reveal" id="about" aria-labelledby="about-title">
          <div className="about-grid">
            <div className="about-media" aria-hidden="true"></div>
            <div className="about-body">
              <h2 className="section-title" id="about-title">
                About
              </h2>
              <p className="muted">
                I am a third-year Electrical & Electronic Engineering student at Ho Chi Minh City
                University of Technology (HCMUT), specializing in AI-driven software systems. My
                work focuses on designing and implementing end-to-end AI solutions, from data
                pipelines and model development to scalable Python-based backends and
                production-ready AI services.
              </p>
              <p className="muted about-paragraph">
                I have hands-on experience with LLMs, machine learning, deep learning, NLP, and
                computer vision, and I am particularly interested in building reliable,
                deployable systems that operate under real-world constraints such as latency,
                data quality, and system safety. Through multiple national-level hackathons, I
                have applied these skills to deliver functional AI products, gaining practical
                experience in system design, deployment, and cross-disciplinary collaboration.
              </p>
              <div className="about-tags">
                <span className="about-tag">LLM Systems</span>
                <span className="about-tag">Agentic RAG</span>
                <span className="about-tag">ML/DL</span>
                <span className="about-tag">Backend APIs</span>
                <span className="about-tag">Data Platforms</span>
              </div>
            </div>
          </div>
        </section>

        <section className="content reveal" id="projects" aria-labelledby="projects-title">
          <h2 className="section-title" id="projects-title">
            Highlighted Products & Projects
          </h2>
          <div className="projects-grid">
            <article id="vnpt-ai" className="project-card big reveal" role="listitem">
              <img
                src="/static/images/vnpt-ai/vnpt-ai-banner.png"
                alt="VNPT AI Hackathon 2025"
                className="project-thumb"
              />
              <div className="project-content">
                <h3>VNPT AI Hackathon 2025 | Leader of SAVINAI | 2nd Runner-up Prize</h3>
                <p className="muted project-subtitle">
                  MeetMate SAAR - Self-Reflective Agentic RAG Engine for Meeting Intelligence
                  <span className="project-subtitle-note">In production rollout at LPBank</span>
                </p>
                <ul className="project-list">
                  <li>
                    <strong>Agentic Architecture (LangGraph)</strong>
                    <ul>
                      <li>
                        Built a stage-aware (Pre/In/Post) LangGraph system with a single-entry
                        StateGraph, routing by stage / sensitivity / SLA to switch realtime vs
                        batch execution profiles
                      </li>
                      <li>
                        Defined a typed MeetingState (agenda/transcript/RAG/citations/tools/metrics)
                        to ensure cross-stage consistency, reduce re-computation, and support
                        audit-friendly replay
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>RAG Systems (Enterprise, Permission-Aware)</strong>
                    <ul>
                      <li>
                        Implemented Self-Reflective/Corrective RAG (SAAR) with pgvector + BM25
                        hybrid retrieval, ACL /metadata /effective-date filtering, and controlled
                        query rewrite + retries
                      </li>
                      <li>
                        Enforced "no-source -&gt no-answer" with mandatory citations for regulated
                        domains to reduce hallucinations and strengthen compliance
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Realtime LLM Orchestration:</strong> Shipped dual-tick scheduling for
                    in-meeting runtime: Intent/ADR (~10s) + Recap (~60s) with event-driven Q&A
                    force-tick for instant Ask-AI responses under token/latency budgets
                  </li>
                  <li>
                    <strong>LLM Reliability (Evaluation & Guardrails)</strong>
                    <ul>
                      <li>
                        Added retrieval grading + faithfulness checks to gate outputs, trigger
                        corrective retrieval, and fail safely when evidence is insufficient,
                        improving answer groundedness and reducing hallucination risk
                      </li>
                      <li>
                        Implemented policy-based tool gating (stage/sensitivity allow-lists +
                        confidence gating) to prevent unsafe actions during realtime sessions
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Tool-Calling & Workflow Automation</strong>
                    <ul>
                      <li>
                        Designed schema-first tool-calling (tasks/follow-ups/docs) with idempotency
                        keys, human-in-the-loop approval, and auditable execution logs for
                        enterprise integrations
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Streaming Integration:</strong> Co-designed REST + WebSocket API
                    handshake with VNPT Senior Engineers to trigger per-endpoint meeting events
                    and stream audio -&gt ASR -&gt transcript events into the AI pipeline reliably
                  </li>
                  <li>
                    <strong>Production Readiness (BFSI / LPBank):</strong> Delivered a private
                    SaaS backend deployed on VNPT Cloud for LPBank, with audit-ready logging and
                    an extensible stack for PostgreSQL OLTP + vector store + RAG hub + multi-LLM
                    providers
                  </li>
                </ul>
                <p className="muted project-links">
                  <strong>Link github:</strong> ...
                  <br />
                  <strong>Link certification:</strong> ...
                  <br />
                  <strong>Link Product MVP:</strong> ...
                </p>
              </div>
              <div style={{ marginTop: "18px", textAlign: "center" }}>
                <a href="/vnpt_ai_project" className="btn btn-case-study">
                  View case study
                </a>
              </div>
            </article>

            <div className="projects-col">
              <article className="project-card reveal" role="listitem">
                <img
                  src="../static/images/iot_challenge_banner.png"
                  alt="SCENT — Smart Customer Experience"
                  className="project-thumb"
                />
                <div className="project-content">
                  <h3>SCENT — System for Customer EXperience, iNventory & Threats</h3>
                  <div className="project-card__short">
                    <p className="muted project-body">
                      End-to-end AIoT system spanning firmware, gateway, software, hardware, and
                      AI platforms.
                    </p>
                    <ul className="project-list project-list--compact">
                      <li>Thread/BLE/UART/I2C/MQTT dataflows on EFR32 + Raspberry Pi.</li>
                      <li>Flask APIs + PostgreSQL + Redis with analytics-ready pipelines.</li>
                      <li>1st runner up (SILABS IoT Challenge).</li>
                    </ul>
                  </div>
                  <div className="project-card__full">
                    <p className="muted project-body">
                      Designed & delivered a resilient <strong>end-to-end AIoT system</strong>{" "}
                      spanning firmware, gateway, software, hardware, and AI platforms.
                    </p>
                    <ul className="project-list">
                      <li>
                        <strong>System design & integration:</strong> Architected a 24/7 AIoT
                        system with robust dataflows over Thread, BLE, UART, I²C, MQTT.
                      </li>
                      <li>
                        <strong>MCU firmware (EFR32):</strong>
                        <ul>
                          <li>Developed HX711 load-cell driver & IR sensor interrupts.</li>
                          <li>
                            MicriumOS tasks:
                            <ul>
                              <li>Glass-break detection (I2S mic, 200 ms loop).</li>
                              <li>Temp/humidity sensing (SI7021, every 5s).</li>
                              <li>Continuous OpenThread networking.</li>
                            </ul>
                          </li>
                          <li>Enabled Thread-to-gateway messaging with failover.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Edge gateway (Raspberry Pi 4):</strong>
                        <ul>
                          <li>Configured as OTBR (MG21 RCP + Spinel).</li>
                          <li>Python scripts for Thread parsing, UART, I²C LCD1602.</li>
                          <li>MQTT gateway + PostgreSQL schema & ETL scripts.</li>
                          <li>Local DB for scent notes & shelf ops with sync/offline mode.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Software & data platform:</strong>
                        <ul>
                          <li>Full-stack Flask app (APIs, templates, admin).</li>
                          <li>Smart Screen UI/UX (HTML, CSS, JS).</li>
                          <li>Backend with Redis + PostgreSQL; Python workers for sync.</li>
                          <li>Collected & processed 5k+ interactions for analytics & retraining.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Hardware engineering:</strong>
                        <ul>
                          <li>Integrated sensors (load cell, cam, mic) with MCUs & Pi.</li>
                          <li>PCB soldering, wiring validation, shelf-mounting design.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>AI:</strong>
                        <ul>
                          <li>Python pipelines for dataset generation & labeling.</li>
                          <li>NLP pipeline (BERT + spaCy NER) for keyword extraction.</li>
                        </ul>
                      </li>
                    </ul>
                    <p className="muted project-body">
                      <strong>Awards:</strong> 1st runner up (SILABS IoT Challenge) —{" "}
                      <em>Granted Internship Certification</em>{" "}
                      <strong>Github Link:</strong> https:// ...
                    </p>
                  </div>
                  <a href="/iot_challenge_product" className="link-accent">
                    View case study
                  </a>
                </div>
              </article>

              <article className="project-card reveal" role="listitem">
                <img
                  src="../static/images/intel_ai_banner.png"
                  alt="Edge AI — Fruit quality"
                  className="project-thumb"
                />
                <div className="project-content">
                  <h3>AIMING - AIoT Infravision for Agricultural Quality</h3>
                  <div className="project-card__short">
                    <p className="muted project-body">
                      <strong>Edge AIoT system on Intel hardware ensuring produce quality via dual AI modules.</strong>
                      <br />
                      <br />• <strong>Hardware:</strong> Intel® NUC (CPU+GPU), 720p camera.
                      <br />• <strong>Software:</strong> OpenVINO™, Intel® Tiber™ Cloud, Edge Software Hub.
                      <br />• <strong>AI Modules:</strong> <br />– <em>Vision AI:</em> fruit type, count, ripeness, external defects.
                      <br />– <em>NIR AI:</em> °Brix, moisture, internal bruises, pest/disease detection.
                      <br />• <strong>Evaluation:</strong> Real-time grading, defect detection, SDG-aligned impact.
                      <br />
                    </p>
                  </div>
                  <div className="project-card__full">
                    <ul className="project-list">
                      <li>
                        Architected and delivered an edge AIoT grading system on an Intel® industrial
                        PC (CPU/GPU), integrating NIR spectral sensing + metadata pipeline for
                        on-site agricultural quality assessment.
                      </li>
                      <li>
                        Built an end-to-end ML pipeline in Python: feature engineering from 6-channel
                        NIR spectra (610-860nm) + fruit-type one-hot + ripeness (10-dim input),
                        scaling (StandardScaler), train/validation split, and evaluation with
                        regression + classification metrics.
                      </li>
                      <li>
                        <strong>Multi-task deep learning model (TensorFlow/Keras):</strong> Multi-branch
                        1D CNN residual blocks (kernel 2 & 5) + positional embedding + 2-layer
                        Multi-Head Self-Attention + attention pooling + shared MLP with multi-head
                        outputs:
                        <ul>
                          <li>
                            <strong>Regression:</strong> °Brix & Moisture
                          </li>
                          <li>
                            <strong>Classification:</strong> Grade (A/B/C), Defect (Y/N), Fungus (Y/N)
                          </li>
                        </ul>
                      </li>
                      <li>
                        Training included Huber loss (regression) + focal losses (classification),
                        loss weighting, and EarlyStopping for stability.
                      </li>
                      <li>
                        Productionized inference for Intel hardware: exported Keras to ONNX (tf2onnx)
                        and converted ONNX/OpenVINO to OpenVINO IR (.xml/.bin), achieving up to ~3x
                        faster inference on Intel® devices.
                      </li>
                      <li>
                        Built a real-time monitoring dashboard (frontend + backend) with MQTT +
                        Redis to stream and visualize grading outputs, enabling live operational
                        monitoring and faster on-site decision-making.
                      </li>
                    </ul>
                  </div>
                  <a href="/intel_ai_project" className="link-accent">
                    View case study
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>

      <ShowcaseCarousel />

      <div className="page">
        <section className="content reveal" id="exp" aria-labelledby="exp-title">
          <h2 className="section-title" id="exp-title">
            Certifications
          </h2>
          <div className="timeline">
            <div className="item reveal">
              <strong>IELTS 6.5</strong>
            </div>
            <div className="item reveal">
              <strong>Udemy Advanced Python / C / C++ Course</strong>
            </div>
            <div className="item reveal">
              <strong>UEHG club</strong>
              <div className="muted small">Charitable journeys to Bình Thuận & Đắk Nông schools</div>
            </div>
          </div>
        </section>

        <section className="content reveal" id="skills" aria-labelledby="skills-title">
          <h2 className="section-title" id="skills-title">
            Skills & Tools
          </h2>

          <div className="skills-groups">
            <div className="skills-row reveal">
              <div className="skills-label">Programming Languages</div>
              <div className="skills-grid">
                <span className="skill">Python</span>
                <span className="skill">C/C++</span>
                <span className="skill">TypeScript/JavaScript</span>
                <span className="skill">SQL</span>
                <span className="skill">HTML/CSS</span>
              </div>
            </div>

            <div className="skills-row reveal">
              <div className="skills-label">GenAI / LLM Systems</div>
              <div className="skills-grid">
                <span className="skill">Agentic RAG (hybrid retrieval, citations)</span>
                <span className="skill">tool-calling APIs</span>
                <span className="skill">prompt orchestration (LangGraph/ LangChain)</span>
                <span className="skill">safety/guardrails & evaluation (grounding/faithfulness)</span>
              </div>
            </div>

            <div className="skills-row reveal">
              <div className="skills-label">ML / DL</div>
              <div className="skills-grid">
                <span className="skill">NLP (Hugging Face Transformers, spaCy, BERT/NER)</span>
                <span className="skill">Deep Learning (1D-CNN, MLP)</span>
                <span className="skill">classical ML (XGBoost)</span>
                <span className="skill">dataset prep & evaluation (TensorFlow)</span>
              </div>
            </div>

            <div className="skills-row reveal">
              <div className="skills-label">Backend Engineering</div>
              <div className="skills-grid">
                <span className="skill">FastAPI/Flask</span>
                <span className="skill">REST APIs</span>
                <span className="skill">WebSocket</span>
                <span className="skill">async/background jobs (Redis, Celery)</span>
                <span className="skill">service modularization</span>
                <span className="skill">API design & integration</span>
              </div>
            </div>

            <div className="skills-row reveal">
              <div className="skills-label">DevOps / Production</div>
              <div className="skills-grid">
                <span className="skill">Dockerized services</span>
                <span className="skill">basic CI/CD</span>
                <span className="skill">deployment & production debugging</span>
                <span className="skill">logging/monitoring</span>
              </div>
            </div>

            <div className="skills-row reveal">
              <div className="skills-label">Vector Search & Data Stores</div>
              <div className="skills-grid">
                <span className="skill">PostgreSQL</span>
                <span className="skill">pgvector</span>
                <span className="skill">TimescaleDB</span>
              </div>
            </div>

            <div className="skills-row reveal">
              <div className="skills-label">Developer Tools</div>
              <div className="skills-grid">
                <span className="skill">Git/GitHub</span>
                <span className="skill">Docker</span>
                <span className="skill">CMake</span>
                <span className="skill">Jupyter</span>
                <span className="skill">VSCode</span>
                <span className="skill">Bash scripting & cron automation</span>
              </div>
            </div>

            <div className="skills-row reveal">
              <div className="skills-label">IoT / Real-time OS</div>
              <div className="skills-grid">
                <span className="skill">Thread</span>
                <span className="skill">BLE</span>
                <span className="skill">MQTT/TCP-IP basics</span>
                <span className="skill">RTOS (FreeRTOS, MicriumOS)</span>
                <span className="skill">Embedded Linux</span>
              </div>
            </div>
          </div>
        </section>

        <section className="content reveal" id="contact" aria-labelledby="contact-title">
          <h2 className="section-title" id="contact-title">
            Contact
          </h2>
          <div className="contact-card">
            <div className="contact-grid">
              <div>
                <p className="muted">
                  Email:{" "}
                  <a href="mailto:phuoc.dang2104@gmail.com" className="link-normal">
                    phuoc.dang2104@gmail.com
                  </a>
                </p>
                <p className="muted">
                  GitHub:{" "}
                  <a
                    href="https://github.com/PhuocDang2104"
                    target="_blank"
                    className="link-normal"
                  >
                    PhuocDang2104
                  </a>
                </p>
                <p className="muted">
                  LinkedIn:{" "}
                  <a href="#" target="_blank" className="link-normal">
                    Phuoc Dang
                  </a>
                </p>
                <div className="contact-buttons">
                  <a
                    className="btn btn-primary"
                    href="../static/Dang Nhu Phuoc _ CV _ Embedded Engineer.pdf"
                    download
                  >
                    Download CV
                  </a>
                  <a className="btn btn-ghost" href="mailto:phuoc.dang2104@gmail.com">
                    Email me
                  </a>
                </div>
              </div>

              <div>
                <form id="contactForm">
                  <label className="muted small" htmlFor="subject">
                    Short message
                  </label>
                  <input id="subject" name="subject" placeholder="Subject" />
                  <textarea id="message" name="message" rows={4} placeholder="Message..."></textarea>
                  <div style={{ marginTop: "8px" }}>
                    <button className="btn btn-primary" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
}
