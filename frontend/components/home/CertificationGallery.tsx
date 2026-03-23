"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

import styles from "./CertificationGallery.module.css";

type CertificationFormat = "portrait" | "landscape";

type CertificationItem = {
  id: string;
  title: string;
  label: string;
  description: string;
  pdfSrc: string;
  accent: string;
  accentSoft: string;
  surface: string;
  format: CertificationFormat;
};

const certifications: CertificationItem[] = [
  {
    id: "generative-agentic-ai",
    title: "Generative & Agentic AI",
    label: "Course Certificate",
    description: "Focused study in generative AI workflows, prompting, and agent-based systems.",
    pdfSrc: "/static/images/course_cert/generative-agentic-ai-cert.pdf",
    accent: "#2dd4bf",
    accentSoft: "rgba(45, 212, 191, 0.2)",
    surface: "#f5fffd",
    format: "landscape"
  },
  {
    id: "ielts",
    title: "IELTS 6.5",
    label: "English Proficiency",
    description: "Official English-language qualification with balanced performance across all skills.",
    pdfSrc: "/static/images/course_cert/IELTS-cert.pdf",
    accent: "#38bdf8",
    accentSoft: "rgba(56, 189, 248, 0.18)",
    surface: "#f7fcff",
    format: "portrait"
  },
  {
    id: "udemy-python",
    title: "Python Programming",
    label: "Course Certificate",
    description: "Practical coursework covering Python fundamentals and implementation-oriented exercises.",
    pdfSrc: "/static/images/course_cert/udemy-python-cert.pdf",
    accent: "#f59e0b",
    accentSoft: "rgba(245, 158, 11, 0.2)",
    surface: "#fffaf1",
    format: "landscape"
  }
];

const buildPdfSrc = (src: string) => `${src}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=Fit`;

function getCardTheme(item: CertificationItem): CSSProperties {
  return {
    "--cert-accent": item.accent,
    "--cert-accent-soft": item.accentSoft,
    "--cert-surface": item.surface
  } as CSSProperties;
}

function getFormatClassName(format: CertificationFormat): string {
  return format === "portrait" ? styles.cardPortrait : styles.cardLandscape;
}

function getModalViewportClassName(format: CertificationFormat): string {
  return format === "portrait" ? styles.modalViewportPortrait : styles.modalViewportLandscape;
}

export default function CertificationGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);

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

  return (
    <>
      <div className={styles.grid}>
        {certifications.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.card} ${getFormatClassName(item.format)}`}
            style={getCardTheme(item)}
            onClick={() => setActiveId(item.id)}
            aria-label={`Open ${item.title}`}
          >
            <div className={styles.previewFrame} aria-hidden="true">
              <object
                data={buildPdfSrc(item.pdfSrc)}
                type="application/pdf"
                className={styles.previewDocument}
              >
                <div className={styles.previewFallback}>PDF preview</div>
              </object>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.cardLabel}>{item.label}</p>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className={styles.modalRoot}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${activeItem.id}-title`}
        >
          <button
            type="button"
            className={styles.backdrop}
            aria-label="Close certificate preview"
            onClick={() => setActiveId(null)}
          />

          <div className={styles.modal} style={getCardTheme(activeItem)}>
            <div
              className={`${styles.modalPreview} ${getModalViewportClassName(activeItem.format)}`}
            >
              <object
                data={buildPdfSrc(activeItem.pdfSrc)}
                type="application/pdf"
                className={styles.modalDocument}
                aria-label={`${activeItem.title} PDF`}
              >
                <div className={styles.modalFallback}>
                  <p>PDF preview unavailable.</p>
                  <a
                    href={activeItem.pdfSrc}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.modalLink}
                  >
                    Open PDF
                  </a>
                </div>
              </object>
            </div>

            <div className={styles.modalContent}>
              <div className={styles.modalHead}>
                <div className={styles.modalText}>
                  <p className={styles.modalLabel}>{activeItem.label}</p>
                  <h4 id={`${activeItem.id}-title`} className={styles.modalTitle}>
                    {activeItem.title}
                  </h4>
                  <p className={styles.modalDescription}>{activeItem.description}</p>
                </div>
              </div>

              <div className={styles.modalActions}>
                <a
                  href={activeItem.pdfSrc}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.modalLink}
                >
                  Open PDF
                </a>
                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={() => setActiveId(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
