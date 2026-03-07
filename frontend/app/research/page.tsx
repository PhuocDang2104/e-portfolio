import PostCard from "@/components/research/PostCard";
import styles from "@/components/research/research.module.css";
import { researchSans, researchSerif } from "@/lib/research-fonts";
import { getWritingList } from "@/lib/writing";

export const metadata = {
  title: "Research | Dang Nhu Phuoc",
  description:
    "Research paper archive with PDF-faithful replicas, local PDFs, and source links."
};

export default function ResearchHubPage() {
  const papers = getWritingList().filter((post) => post.kind === "paper");

  return (
    <main className={`page ${styles.page} ${researchSans.variable} ${researchSerif.variable}`}>
      <section className={styles.notesPanel}>
        <div className={styles.notesPanelHead}>
          <h1 className={styles.notesPanelTitle}>Research Library</h1>
          <p className={styles.notesPanelMeta}>{papers.length} papers</p>
        </div>
        <p className={styles.libraryIntro}>
          Full-paper replicas rendered from the source PDF layout. Each card links to the replica
          page, the local PDF stored in this repo, and the original paper page.
        </p>

        {papers.length === 0 ? (
          <p className={styles.emptyState}>
            No research papers yet. Add a paper definition in `content/research/papers.ts` to
            publish the first one.
          </p>
        ) : (
          <div className={styles.libraryStack}>
            <section className={styles.librarySection}>
              <div className={styles.archiveHead}>
                <div>
                  <p className={styles.sectionLabel}>Paper Archive</p>
                  <h2 className={styles.archiveTitle}>Full research papers</h2>
                </div>
                <p className={styles.archiveSubtitle}>
                  Detailed paper views preserve the PDF page layout and reserve figure slots for
                  future asset linking.
                </p>
              </div>

              <ul className={styles.postGrid}>
                {papers.map((post) => (
                  <li key={post.slug}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </section>
    </main>
  );
}
