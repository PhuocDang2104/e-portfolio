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
      <header className={styles.libraryHeader}>
        <div>
          <p className={styles.sectionLabel}>Paper Archive</p>
          <h1 className={styles.libraryTitle}>Research Library</h1>
        </div>
        <p className={styles.libraryCount}>{papers.length} papers</p>
      </header>

      <p className={styles.libraryIntro}>
        Full-paper replicas rendered from source PDF layouts. Each entry links to the replica
        page, the local PDF in this repo, and the original paper source.
      </p>

      {papers.length === 0 ? (
        <p className={styles.emptyState}>
          No research papers yet. Add a paper definition in `content/research/papers.ts` to
          publish the first one.
        </p>
      ) : (
        <ul className={styles.postGrid}>
          {papers.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
