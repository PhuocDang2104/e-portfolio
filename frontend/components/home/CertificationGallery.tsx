"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

import styles from "./CertificationGallery.module.css";

type CertificationItem = {
  id: string;
  title: string;
  issuer: string;
  summary: string;
  detail: string;
  assetHint: string;
  thumbnailSrc?: string;
  accent: string;
  accentSoft: string;
  paperTint: string;
};

const certifications: CertificationItem[] = [
  {
    id: "ielts",
    title: "IELTS 6.5",
    issuer: "English Proficiency",
    summary: "International English language proficiency credential.",
    detail:
      "Academic language certification covering listening, reading, writing, and speaking performance.",
    assetHint: "/static/documents/certifications/ielts-6-5.pdf",
    accent: "#38bdf8",
    accentSoft: "rgba(56, 189, 248, 0.18)",
    paperTint: "#f8fdff"
  },
  {
    id: "udemy",
    title: "Udemy Advanced Python / C / C++ Course",
    issuer: "Udemy",
    summary: "Advanced coursework across Python, C, and C++ development.",
    detail:
      "Programming certificate intended to highlight hands-on study in applied software engineering foundations and implementation.",
    assetHint: "/static/documents/certifications/udemy-advanced-python-c-cpp.pdf",
    accent: "#f59e0b",
    accentSoft: "rgba(245, 158, 11, 0.2)",
    paperTint: "#fffaf1"
  },
  {
    id: "uehg",
    title: "UEHG Club",
    issuer: "Student Organization",
    summary: "Club participation and student leadership record.",
    detail:
      "Community and campus contribution certificate representing club involvement, coordination, and participation.",
    assetHint: "/static/documents/certifications/uehg-club.pdf",
    accent: "#a78bfa",
    accentSoft: "rgba(167, 139, 250, 0.2)",
    paperTint: "#faf7ff"
  },
  {
    id: "charity",
    title: "Charitable Journeys to Binh Thuan & Dak Nong Schools",
    issuer: "Volunteer Program",
    summary: "Community service and school outreach recognition.",
    detail:
      "Volunteer certificate for charitable journeys supporting students and school communities in Binh Thuan and Dak Nong.",
    assetHint: "/static/documents/certifications/charitable-journeys-binh-thuan-dak-nong.pdf",
    accent: "#22c55e",
    accentSoft: "rgba(34, 197, 94, 0.2)",
    paperTint: "#f5fff8"
  }
];

const buildPdfSrc = (src: string) => `${src}#toolbar=0&navpanes=0&scrollbar=0`;

function getCardTheme(item: CertificationItem): CSSProperties {
  return {
    "--cert-accent": item.accent,
    "--cert-accent-soft": item.accentSoft,
    "--cert-paper": item.paperTint
  } as CSSProperties;
}

export default function CertificationGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [availablePdfSrcById, setAvailablePdfSrcById] = useState<Record<string, string>>({});

  useEffect(() => {
    let cancelled = false;

    async function detectAssets() {
      const assetEntries = await Promise.all(
        certifications.map(async (item) => {
          try {
            const response = await fetch(item.assetHint, { method: "HEAD" });
            return response.ok ? [item.id, item.assetHint] : null;
          } catch {
            return null;
          }
        })
      );

      if (cancelled) {
        return;
      }

      setAvailablePdfSrcById(
        Object.fromEntries(
          assetEntries.filter((entry): entry is [string, string] => Boolean(entry))
        )
      );
    }

    void detectAssets();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!activeId) {
      document.body.classList.remove("lightbox-open");
      return undefined;
    }

    document.body.classList.add("lightbox-open");

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveId(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeId]);

  const activeItem = certifications.find((item) => item.id === activeId) ?? null;
  const activePdfSrc = activeItem ? availablePdfSrcById[activeItem.id] : undefined;

  return (
    <>
      <div className={styles.shell}>
        <p className={styles.eyebrow}>Credential archive</p>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>Certification holders</h3>
            <p className={styles.subtitle}>
              Square certificate cards with expanded document preview states for each credential.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {certifications.map((item) => {
            const availablePdfSrc = availablePdfSrcById[item.id];

            return (
              <button
                key={item.id}
                type="button"
                className={styles.card}
                style={getCardTheme(item)}
                onClick={() => setActiveId(item.id)}
              >
                <div className={styles.thumb}>
                  {item.thumbnailSrc ? (
                    <img src={item.thumbnailSrc} alt={item.title} className={styles.thumbImage} />
                  ) : (
                    <div className={styles.thumbMock}>
                      <span className={styles.thumbBadge}>{item.issuer}</span>
                      <div className={styles.thumbSheet}>
                        <span className={styles.thumbKicker}>Certificate</span>
                        <strong className={styles.thumbTitle}>{item.title}</strong>
                        <span className={styles.thumbLine}>{item.summary}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.cardIssuer}>{item.issuer}</p>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <p className={styles.cardSummary}>{item.summary}</p>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.cardState}>
                    {availablePdfSrc ? "Expanded PDF preview" : "Preview holder"}
                  </span>
                  <span className={styles.cardCta}>Open</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {activeItem && (
        <div
          className={styles.modalRoot}
          role="dialog"
          aria-modal="true"
          aria-label={`Certificate preview for ${activeItem.title}`}
        >
          <button
            type="button"
            className={styles.backdrop}
            aria-label="Close certificate preview"
            onClick={() => setActiveId(null)}
          />

          <div className={styles.modal} style={getCardTheme(activeItem)}>
            <div className={styles.modalPreview}>
              {activePdfSrc ? (
                <object
                  data={buildPdfSrc(activePdfSrc)}
                  type="application/pdf"
                  className={styles.modalDocument}
                  aria-label={`${activeItem.title} PDF`}
                >
                  <div className={styles.modalFallback}>
                    <p>PDF preview unavailable.</p>
                    <a
                      href={activePdfSrc}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.modalLink}
                    >
                      Open the document
                    </a>
                  </div>
                </object>
              ) : (
                <div className={styles.modalPending}>
                  <div className={styles.modalPendingSheet}>
                    <span className={styles.thumbBadge}>{activeItem.issuer}</span>
                    <div className={styles.pendingBody}>
                      <span className={styles.thumbKicker}>Document slot</span>
                      <strong className={styles.pendingTitle}>{activeItem.title}</strong>
                      <p className={styles.pendingCopy}>
                        Add the certificate PDF to enable the full expanded preview.
                      </p>
                      <code className={styles.assetHint}>{activeItem.assetHint}</code>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.modalContent}>
              <div className={styles.modalHead}>
                <div>
                  <p className={styles.modalEyebrow}>{activeItem.issuer}</p>
                  <h4 className={styles.modalTitle}>{activeItem.title}</h4>
                </div>
                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={() => setActiveId(null)}
                >
                  Close
                </button>
              </div>

              <p className={styles.modalSummary}>{activeItem.summary}</p>
              <p className={styles.modalDetail}>{activeItem.detail}</p>

              <div className={styles.metaGrid}>
                <div className={styles.metaCard}>
                  <span className={styles.metaLabel}>Preview</span>
                  <strong className={styles.metaValue}>
                    {activePdfSrc ? "Embedded PDF" : "Holder ready"}
                  </strong>
                </div>
                <div className={styles.metaCard}>
                  <span className={styles.metaLabel}>Asset path</span>
                  <strong className={styles.metaValue}>{activeItem.assetHint}</strong>
                </div>
              </div>

              {activePdfSrc ? (
                <a
                  href={activePdfSrc}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.modalLink}
                >
                  Open PDF in a new tab
                </a>
              ) : (
                <p className={styles.modalNote}>
                  PDF viewer wiring is complete. Drop the real certificate file at the path above,
                  then refresh the page to activate the embedded preview automatically.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
