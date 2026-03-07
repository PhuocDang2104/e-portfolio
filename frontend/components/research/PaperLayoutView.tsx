import type { PaperDocument } from "@/lib/research-types";

import styles from "./research.module.css";

type PaperLayoutViewProps = {
  paper: PaperDocument;
};

function getFontFamily(family: "sans" | "math"): string {
  if (family === "math") {
    return "'Cambria Math', 'Times New Roman', serif";
  }

  return "Arial, Helvetica, sans-serif";
}

function formatAuthors(authors: string[]): string {
  return authors.join(", ");
}

export default function PaperLayoutView({ paper }: PaperLayoutViewProps) {
  return (
    <section className={styles.paperDocumentShell}>
      <div className={styles.paperViewerHead}>
        <div>
          <p className={styles.paperEyebrow}>Research Paper Replica</p>
          <h1 className={styles.paperViewerTitle}>{paper.title}</h1>
          <p className={styles.paperViewerByline}>{formatAuthors(paper.authors)}</p>
          <p className={styles.paperViewerExcerpt}>{paper.excerpt}</p>
        </div>

        <div className={styles.paperViewerActions}>
          <a href={paper.pdfPath} target="_blank" rel="noreferrer" className={styles.paperAction}>
            Open PDF
          </a>
          <a
            href={paper.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.paperActionMuted}
          >
            {paper.sourceLabel}
          </a>
        </div>
      </div>

      <div className={styles.paperStatRow}>
        <span className={styles.paperStatChip}>{paper.displayDate ?? paper.date}</span>
        <span className={styles.paperStatChip}>{paper.pageCount} pages</span>
        <span className={styles.paperStatChip}>{paper.readingMinutes} min read</span>
      </div>

      <div className={styles.paperPages}>
        {paper.layout.pages.map((page) => (
          <section key={page.number} className={styles.paperSheet}>
            <div className={styles.paperSheetMeta}>
              <span>Page {page.number}</span>
              <span>{paper.title}</span>
            </div>

            <svg
              viewBox={`0 0 ${page.width} ${page.height}`}
              className={styles.paperSvg}
              aria-label={`${paper.title} page ${page.number}`}
            >
              <rect x="0" y="0" width={page.width} height={page.height} fill="#f7fbff" />

              {page.figures.map((figure) => {
                const assetUrl = paper.figureAssets[figure.id];

                if (assetUrl) {
                  return (
                    <image
                      key={figure.id}
                      className={styles.paperFigureAsset}
                      href={assetUrl}
                      x={figure.x}
                      y={figure.y}
                      width={figure.width}
                      height={figure.height}
                      preserveAspectRatio="xMidYMid meet"
                    />
                  );
                }

                return (
                  <g key={figure.id}>
                    <rect
                      x={figure.x}
                      y={figure.y}
                      width={figure.width}
                      height={figure.height}
                      rx="8"
                      fill="#e8f5ff"
                      stroke="#0284c7"
                      strokeDasharray="8 6"
                    />
                    <text
                      x={figure.x + 14}
                      y={figure.y + 26}
                      fontSize="12"
                      fontWeight="700"
                      fill="#075985"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      Figure asset placeholder
                    </text>
                    <text
                      x={figure.x + 14}
                      y={figure.y + 46}
                      fontSize="11"
                      fill="#0f172a"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      {figure.id}
                    </text>
                  </g>
                );
              })}

              {page.words.map((word, index) => (
                <text
                  key={`${page.number}-${index}-${word.x}-${word.y}`}
                  x={word.x}
                  y={word.y}
                  fontSize={word.size}
                  fontWeight={word.weight}
                  fontStyle={word.italic ? "italic" : "normal"}
                  fontFamily={getFontFamily(word.family)}
                  fill="#121826"
                >
                  {word.text}
                </text>
              ))}
            </svg>
          </section>
        ))}
      </div>
    </section>
  );
}
