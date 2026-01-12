import Script from "next/script";

export default function Page() {
  return (
    <>
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
                  src="../static/images/Phuoc_avatar.png"
                  alt="Phước Đặng avatar"
                  className="nav-avatar"
                />
                <div className="brand">
                  Đặng Như Phước <small>Embedded & Edge AI Engineer</small>
                </div>
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div className="nav-links" id="nav-links">
                <a href="/">Home</a>
                <a href="#overview">About</a>
                <div className="dropdown">
                  <a href="#projects">Projects ▾</a>
                  <div className="dropdown-content">
                    <a href="/iot_challenge_product">SCENT — Smart Customer Experience</a>
                    <a href="/klu_hackathon_project">ESP32Cam RFID AIoT in Warehouse</a>
                    <a href="/intel_ai_project">AIMING - Agricultural AIoT</a>
                    <a href="/rmit_hackathon_project">RMIT logistic AIoT</a>
                  </div>
                </div>
                <a href="#timeline">Certifications</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
              </div>

              <a className="cta-download" href="Dang_Nhu_Phuoc_Resume.pdf" download>
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
          <a href="#home">Home</a>
          <a href="#overview">About</a>
          <a href="#projects">Projects</a>
          <a href="#timeline">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <section className="hero project-hero reveal" id="home" aria-label="Project hero">
        <div className="page hero-inner">
          <div className="hero-left reveal">
            <div className="kicker">
              Fsoft / SILABS IoT Challenge 2025 · 1st Runner-up · Leader of Edgelectronix
            </div>
            <h1 className="hero-title">SCENT — Smart Customer Experience & Edge AIoT</h1>
            <p className="lead">
              End-to-end 24/7 AIoT system: MCU firmware (EFR32), Edge Gateway (Raspberry Pi 4),
              Flask backend, Redis + PostgreSQL, and NLP/Edge-CV pipelines for retail scent
              recommendations & inventory/threat monitoring.
            </p>

            <div className="hero-ctas">
              <a className="btn btn-primary" href="#technical">
                Technical details
              </a>
              <a className="btn btn-ghost" href="#data">
                Product Sketch
              </a>
              <a className="btn btn-ghost" id="copyGithub">
                Copy GitHub
              </a>
            </div>

            <div className="meta-row" aria-hidden="true">
              <div className="meta-pill">EFR32 · RPi4 </div>
              <div className="meta-pill">RTOS (MicriumOS) · Linux</div>
              <div className="meta-pill">Thread · BLE · MQTT</div>
              <div className="meta-pill">Flask · PostgreSQL · Redis</div>
              <div className="meta-pill">UART · I2C</div>
              <div className="meta-pill">BERT · spaCy NER </div>
            </div>
          </div>

          <div className="hero-right reveal">
            <img
              src="../static/images/iot_challenge/1.png"
              alt="SCENT banner"
              className="hero-img-full"
            />
          </div>
        </div>
      </section>

      <div className="page">
        <section id="overview" className="content reveal" aria-labelledby="overview-title">
          <h2 className="section-title" id="overview-title">
            Project Overview
          </h2>
          <p className="muted">
            SCENT is an offline-capable AIoT system for retail: personalized scent suggestions,
            inventory sensing, and environmental threat detection. Designed for continuous
            operation with local buffering & sync, and on-device/edge inference for low-latency
            experience.
          </p>

          <div className="quick-grid" style={{ marginTop: "16px" }}>
            <div className="quick-card">
              <strong>Role</strong>
              <div className="muted">Team leader — Edgelectronix</div>
            </div>
            <div className="quick-card">
              <strong>Award</strong>
              <div className="muted">1st Runner-up · Internship Certification from FPT</div>
            </div>
            <div className="quick-card">
              <strong>Product Scope</strong>
              <div className="muted">Hardware → Firmware → Network → Software</div>
            </div>
          </div>
        </section>

        <section id="certifications" className="content reveal" aria-labelledby="certifications-title">
          <h2 className="section-title" id="certifications-title">
            Certifications
          </h2>
          <div className="gallery-grid iot-prize">
            <img
              src="../static/images/iot_challenge/fsoft_2nd_prize.jpg"
              alt="Certification 1"
              className="gallery-thumb"
              data-large="../static/images/iot_challenge/fsoft_2nd_prize.jpg"
            />
            <img
              src="../static/images/iot_challenge/fsoft_top20.jpg"
              alt="Certification 2"
              className="gallery-thumb"
              data-large="../static/images/iot_challenge/fsoft_top20.jpg"
            />
          </div>
        </section>

        <section id="architecture" className="content reveal" aria-labelledby="arch-title">
          <h2 className="section-title" id="arch-title">
            System Architecture
          </h2>

          <div className="arch-banner">
            <img src="../static/images/iot_challenge/6.png" alt="System Architecture Banner" />
          </div>

          <div className="arch" style={{ marginTop: "12px" }}>
            <div className="box device">
              EFR32 Nodes<br />
              <span className="small-muted">HX711, IR, I2S mic, SI7021</span>
            </div>
            <div className="arrow">→</div>
            <div className="box gateway">
              Raspberry Pi 4 (OTBR + MQTT)
              <br />
              <span className="small-muted">Parsers, Smart LCD, MQTT broker</span>
            </div>
            <div className="arrow">→</div>
            <div className="box backend">
              Desktop ( Redis / Flask + Postgres)
              <br />
              <span className="small-muted">Workers, ETL, Software</span>
            </div>
            <div className="arrow">→</div>
            <div className="box ai">
              AI & Data Pipeline
              <br />
              <span className="small-muted">Datalake, Personalization & retrain</span>
            </div>
          </div>
        </section>

        <section id="stacks" className="content reveal" aria-labelledby="stacks-title">
          <h2 className="section-title" id="stacks-title">
            Product Stacks
          </h2>

          <div className="stack-carousel-wrap" aria-label="Product stacks">
            <div
              className="stack-carousel"
              id="stackCarousel"
              tabIndex={0}
              aria-roledescription="carousel"
            >
              <button className="stack-nav stack-nav-left" id="stackPrev" aria-label="Previous stack">
                ◀
              </button>

              <div className="stack-track" id="stackTrack">
                <div
                  className="stack-item"
                  data-title="EFR32xG24 - Perfume Suggestion DL Model"
                  data-desc="A deep learning–based recommendation system that personalizes perfume suggestions. 
                        It generates compact 64D embeddings from user preferences (gender, brand, notes, accords, sillage, longevity, price), 
                        compares them with a curated catalog of perfumes, and returns the most relevant matches. 
                        Designed for edge deployment on EFR32xG26 microcontrollers, it leverages TensorFlow Lite quantization for efficient, 
                        low-power inference while retaining recommendation quality."
                  data-detail='[
            "Personalized perfume recommendation based on structured inputs: gender, brand, fragrance notes, accords, sillage, longevity, and price category.",
            "Neural network model trained on a curated dataset of 50+ perfumes, producing 64-dimensional embeddings optimized for cosine similarity search.",
            "Dual training strategy: classification loss combined with contrastive fine-tuning for better embedding separation.",
            "Export pipeline generates quantized int8 TensorFlow Lite Micro model plus C++ headers for integration into EFR32xG26 firmware.",
            "PREF line input format encodes user preferences as feature vectors, enabling consistent parsing and testing both on desktop and on-device.",
            "Interactive Tkinter GUI tool for quickly generating preference lines and validating recommendations.",
            "On-device inference pipeline: parse PREF line → encode 260D vector → quantize → run TFLite model → compute similarity → return top-ranked perfumes.",
            "Lightweight and memory-efficient, designed to run fully offline on constrained hardware without external servers."
            ]'
                  data-image="../static/images/iot_challenge/suggestion_AI_banner.png"
                >
                  <div className="stack-card">
                    <img
                      className="stack-icon-img"
                      src="../static/images/iot_challenge/suggestion_AI.png"
                      alt="Firmware icon"
                    />
                    <div className="stack-name">
                      EFR32xg24 <br /> <i>AI perfume suggestion</i>
                    </div>
                  </div>
                </div>

                <div
                  className="stack-item"
                  data-title="EFR32xG26 - Drop Detection AI + SI7021 → Thread"
                  data-desc="Firmware for detecting perfume glass bottle drops using embedded AI on the EFR32xG26. 
                        The system combines real-time audio inference with environmental sensing (SI7021) 
                        and seamlessly forwards events over Thread networking to backend services. 
                        Optimized for MicriumOS task scheduling, it runs fully on constrained IoT hardware."
                  data-detail='[
            "Embedded AI model trained to detect perfume bottle drop sounds while rejecting background noises (e.g., claps, collisions).",
            "MicriumOS pipeline: Voice Task (continuous audio recording & inference), Sensor Task (SI7021 temp/humidity sampling), OT Task (Thread UDP networking).",
            "Data preprocessing pipeline: dataset collection, augmentation, spectrogram feature extraction, and CNN-based training in TensorFlow/Keras.",
            "Deployed TFLite Micro quantized model (.tflite) integrated into Simplicity Studio firmware project.",
            "Well-structured dataset (~4.5k drop samples + auxiliary classes: clap, object collision, ambient sounds).",
            "Project structure includes firmware sources, pre-trained models, dataset scripts, and Simplicity Studio build files (.sls).",
            "On-device workflow: record audio → preprocess → run AI inference → enqueue result → Thread UDP message dispatch.",
            "Scalable design: can be extended to other sound event detection tasks and additional wireless protocols."
            ]'
                  data-image="../static/images/iot_challenge/drop_detect_AI_banner.png"
                >
                  <div className="stack-card">
                    <img
                      className="stack-icon-img"
                      src="../static/images/iot_challenge/drop_detect_AI.png"
                      alt="Gateway icon"
                    />
                    <div className="stack-name">
                      EFR32xg26 <br /> <i>AI drop detect</i>
                    </div>
                  </div>
                </div>

                <div
                  className="stack-item"
                  data-title="EFR32xG26 - HX711 / IR → Thread"
                  data-desc="Firmware for the second EFR32xG26 device, integrating dual HX711 load-cell sensors and 8 IR sensor interrupts. 
                        It detects weight changes and product movements in real time, then transmits structured events over the Thread network 
                        to the Raspberry Pi 4 border router. Built on bare-metal OpenThread, it demonstrates efficient sensor fusion, 
                        low-latency interrupt handling, and reliable UDP/IPv6 communication."
                  data-detail='[
            "HX711 dual-channel driver: reads load cell data every 500 ms, converts raw ADC values into grams, and reports weight drops ≥ 100 g as product events (e.g., P017, P026).",
            "IR sensor interface: 8 GPIO-driven sensors with interrupt + debounce logic (500 ms). Each valid trigger increments a counter and maps to a product code (e.g., P001, P045).",
            "Thread networking stack: pre-configured Active Operational Dataset, UDP socket (port 12346), IPv6 communication with Raspberry Pi 4 OTBR gateway.",
            "Bare-metal firmware design: written in C for Simplicity Studio 5, integrating HX711 + IR logic into app.c.",
            "Serial debugging: CLI enabled via otCliOutputFormat, supporting commands such as ifconfig up, thread start, udp open, and udp send.",
            "Folder structure includes source code, Simplicity Studio project files, and README_CODE.md for implementation details.",
            "Deployment workflow: flash Gecko Bootloader → flash application firmware → monitor via serial console (115200 baud).",
            "Scalable design for retail or warehouse IoT: can be extended to more sensors or adapted for BLE/Zigbee connectivity."
            ]'
                  data-image="../static/images/iot_challenge/xg26_sensors_banner.png"
                >
                  <div className="stack-card">
                    <img
                      className="stack-icon-img"
                      src="../static/images/iot_challenge/xg26_sensors.png"
                      alt="Backend icon"
                    />
                    <div className="stack-name">
                      EFR32xg26 <br /> <i>HX711 + IR</i>
                    </div>
                  </div>
                </div>

                <div
                  className="stack-item"
                  data-title="Raspberry Pi 4 + MG21 - OpenThread Border Router | Backend for Customer Smart UI/UX"
                  data-desc="Smart retail backbone combining OTBR, MQTT bridge, real-time LCD, and NLP-powered analytics."
                  data-detail='[
            "Operates as the OpenThread Border Router using Raspberry Pi 4 and Silicon Labs MG21 for IPv6/Thread connectivity",
            "Bridges Thread ↔ MQTT, forwarding multi-sensor telemetry from EFR32 devices into backend services",
            "Runs a local LCD controller to visualize shelf events, stock levels, and quick diagnostic data in real time",
            "Integrates tightly with Flask-based admin UI, REST APIs, PostgreSQL, and Redis for monitoring, logging, and synchronization",
            "Implements customer-facing live updates via Socket.IO and pub/sub architecture",
            "Hosts NLP pipeline (BERT + spaCy NER) to extract structured perfume preferences and enable smart recommendation UX"
            ]'
                  data-image="../static/images/iot_challenge/rp4_mg21_banner.png"
                >
                  <div className="stack-card">
                    <img
                      className="stack-icon-img"
                      src="../static/images/iot_challenge/rp4_mg21.png"
                      alt="AI icon"
                    />
                    <div className="stack-name">
                      Raspi 4 + MG21 <br /> <i>Open Thread Border Router</i>
                    </div>
                  </div>
                </div>

                <div
                  className="stack-item"
                  data-title="Admin Desktop - Store Management Software + DB"
                  data-desc="Flask + Socket.IO powered admin panel with PostgreSQL, Redis, and MQTT bridge."
                  data-detail='[
            "Flask backend serving Jinja2 templates for dashboard, authentication pages, and system config",
            "Implements REST APIs for product stock queries, KPI retrieval, and shelf management",
            "Real-time updates via Flask-SocketIO integrated with Redis pub/sub (eventlet backend)",
            "PostgreSQL database schema handling products, shelves, transactions, and user accounts",
            "Threading-based background tasks for KPI aggregation, log rotation, and data synchronization",
            "MQTT bridge (Paho client) forwarding EFR32 telemetry into Redis channels and backend services",
            "Session handling and role-based access control via Flask-Login and secure cookies",
            "Admin UI with live KPI cards, searchable inventory tables, and real-time shelf event feed",
            "Integrated LCD controller sync to display shelf alerts and local status information"
            ]'
                  data-image="../static/images/iot_challenge/software_banner.png"
                >
                  <div className="stack-card">
                    <img
                      className="stack-icon-img"
                      src="../static/images/iot_challenge/software.png"
                      alt="Hardware icon"
                    />
                    <div className="stack-name">
                      Desktop Admin <br /> <i>Software + DB</i>
                    </div>
                  </div>
                </div>
              </div>

              <button className="stack-nav stack-nav-right" id="stackNext" aria-label="Next stack">
                ▶
              </button>
            </div>

            <div className="stack-details split" id="stackDetails" aria-live="polite">
              <div className="stack-details-left">
                <h5 id="stackDetailsTitle">Firmware (EFR32)</h5>
                <div id="stackDetailsText"></div>
              </div>
              <div className="stack-details-right">
                <img
                  id="stackDetailsImg"
                  src="../static/images/iot_challenge/stack_firmware.png"
                  alt="Firmware illustration"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="technical" className="content reveal" aria-labelledby="tech-title">
          <h2 className="section-title" id="tech-title">
            System Flow
          </h2>

          <div className="grid-2">
            <article className="card">
              <h3>System Flow & Connectivity</h3>
              <ul>
                <li>
                  <strong>Sensor Layer → Edge MCU</strong>:
                  <ul>
                    <li>IR + Loadcell (HX711) → EFR32xG26 (Sensors) via GPIO interrupts</li>
                    <li>SI7021 (Temp/Humidity) + Mic I²S → EFR32xG26 (Edge Drop Detection AI) via GPIO/I²S</li>
                  </ul>
                </li>
                <li>
                  <strong>Edge AI Processing</strong>:
                  <ul>
                    <li>EFR32xG26 (sound/drop AI) → UDP results</li>
                    <li>EFR32xG24 (Perfume Suggestion DL) → LEDs via GPIO + UART</li>
                  </ul>
                </li>
                <li>
                  <strong>Connectivity Backbone</strong>:
                  <ul>
                    <li>All EFR32 boards on Thread protocol</li>
                    <li>MG21 bridges Thread → Raspberry Pi 4</li>
                  </ul>
                </li>
                <li>
                  <strong>Embedded PC Layer (Raspberry Pi 4)</strong>:
                  <ul>
                    <li>Runs Customer Classification AI</li>
                    <li>LCD Touch (iPad) user interface</li>
                    <li>NLP Transformer for text understanding</li>
                  </ul>
                </li>
                <li>
                  <strong>Backend & Admin Management</strong>:
                  <ul>
                    <li>Raspberry Pi ↔ Backend over LAN</li>
                    <li>Pipeline: MQTT/Redis ↔ Flask ↔ WebSocket ↔ Frontend</li>
                    <li>PostgreSQL + Admin Website</li>
                  </ul>
                </li>
              </ul>
            </article>

            <article className="card">
              <img
                className="gallery-thumb"
                src="../static/images/iot_challenge/7.png"
                alt=""
                data-large="../static/images/iot_challenge/7.png"
              />
            </article>
          </div>
        </section>

        <section id="data" className="content reveal" aria-labelledby="data-title">
          <h2 className="section-title" id="data-title">
            S.C.E.N.T Shelf BOM
          </h2>

          <div className="grid-2">
            <article className="card">
              <img
                className="gallery-thumb"
                src="../static/images/iot_challenge/8.png"
                alt=""
                data-large="../static/images/iot_challenge/8.png"
              />
            </article>

            <article className="card">
              <h3>Smart Shelf Summary</h3>
              <ul>
                <li>
                  <strong>MCU/Embedded PC:</strong> EFR32xG26, EFR32xG24, Raspberry Pi 4, EFRMG21
                </li>
                <li>
                  <strong>Sensors:</strong> HX711 load cells, IR, PIR, Si7021
                </li>
                <li>
                  <strong>LEDs:</strong> 10 product highlights + 3m decorative strip
                </li>
                <li>
                  <strong>Connectivity:</strong> Wi-Fi, BLE/Thread, UART/EN0
                </li>
                <li>
                  <strong>Power:</strong> 220V → multiple 5V adapters
                </li>
                <li>
                  <strong>Capacity:</strong> Up to 13 SKUs (3 loadcell + 10 IR)
                </li>
                <li>
                  <strong>Constraints:</strong> 5 kg max/loadcell, PIR 0.5–2 m
                </li>
              </ul>
              <br />
              <h3>Pros</h3>
              <ul>
                <li>Scalable, flexible, energy-efficient</li>
                <li>IoT-ready with real-time connectivity</li>
                <li>Multi-sensor fusion for reliable detection</li>
                <li>Engaging UX with LEDs for highlight & decoration</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="gallery" className="content reveal" aria-labelledby="gallery-title">
          <h2 className="section-title" id="gallery-title">
            Gallery & Artifacts
          </h2>
          <div className="gallery-grid">
            <img
              src="../static/images/iot_challenge/2.png"
              alt="Board"
              className="gallery-thumb"
              data-large="../static/images/iot_challenge/2.png"
            />
            <img
              src="../static/images/iot_challenge/3.png"
              alt="PCB"
              className="gallery-thumb"
              data-large="../static/images/iot_challenge/3.png"
            />
            <img
              src="../static/images/iot_challenge/4.png"
              alt="Demo"
              className="gallery-thumb"
              data-large="../static/images/iot_challenge/4.png"
            />
          </div>
          <div className="gallery-grid">
            <img
              src="../static/images/iot_challenge/1.png"
              alt="Board"
              className="gallery-thumb"
              data-large="../static/images/iot_challenge/1.png"
            />
            <img
              src="../static/images/iot_challenge/5.png"
              alt="PCB"
              className="gallery-thumb"
              data-large="../static/images/iot_challenge/5.png"
            />
            <img
              src="../static/images/iot_challenge/9.jpg"
              alt="Demo"
              className="gallery-thumb"
              data-large="../static/images/iot_challenge/9.jpg"
            />
          </div>
        </section>

        <section id="downloads" className="content reveal" aria-labelledby="downloads-title">
          <h2 className="section-title" id="downloads-title">
            Downloads & Links
          </h2>
          <div className="download-row">
            <a
              className="btn btn-case-study"
              href="../static/images/iot_challenge/Edgelectronix.pptx"
              download
            >
              Download Presentation Slides ( PPTX )
            </a>
            <a className="btn btn-ghost" id="copyGithub2" href="#">
              Copy GitHub URL
            </a>
          </div>
        </section>

        <section className="content" id="contact" aria-labelledby="contact-title">
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
                  <a className="btn btn-primary" href="Dang_Nhu_Phuoc_Resume.pdf" download>
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

        <footer>
          © <span id="year"></span> Phước Đặng — Built with HTML/CSS/JS · Hosted on GitHub Pages
        </footer>
      </div>

      <div id="lightbox" className="lightbox" aria-hidden="true">
        <div className="lightbox-inner">
          <button id="lbClose" className="lb-close" aria-label="Close">
            ✕
          </button>
          <img id="lbImg" src="" alt="Preview" />
        </div>
      </div>

      <Script src="/static/js/main.js" strategy="afterInteractive" />
      <Script src="/static/js/iot_challenge_product.js" strategy="afterInteractive" />
    </>
  );
}
