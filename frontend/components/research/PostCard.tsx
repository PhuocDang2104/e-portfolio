import Link from "next/link";

import type { PaperMeta, WritingMeta } from "@/lib/research-types";
import { getWritingRoute } from "@/lib/writing";

import styles from "./research.module.css";

type PostCardProps = {
  post: WritingMeta;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
});

function formatAuthors(post: PaperMeta): string {
  if (post.authors.length <= 3) {
    return post.authors.join(", ");
  }

  return `${post.authors.slice(0, 3).join(", ")}, et al.`;
}

export default function PostCard({ post }: PostCardProps) {
  const detailHref = getWritingRoute(post.slug);
  const dateText = post.displayDate ?? dateFormatter.format(new Date(post.date));
  const excerpt = post.excerpt || "No abstract provided.";
  const isPaper = post.kind === "paper";
  const paper = isPaper ? (post as PaperMeta) : null;
  const secondaryMeta = paper ? `${paper.pageCount} pages` : `${post.readingMinutes} min read`;
  const authorText = paper ? formatAuthors(paper) : null;

  return (
    <article className={styles.postCard}>
      <Link href={detailHref} className={styles.postMediaLink}>
        {post.thumbnail ? (
          <img src={post.thumbnail} alt={post.thumbnailAlt} className={styles.postImage} />
        ) : (
          <div className={`${styles.postImageFallback} ${isPaper ? styles.paperPreview : ""}`}>
            {isPaper ? (
              <>
                <span className={styles.paperPreviewLabel}>Research Paper</span>
                <strong className={styles.paperPreviewTitle}>{post.title}</strong>
                <span className={styles.paperPreviewMeta}>{secondaryMeta}</span>
              </>
            ) : (
              "No preview available"
            )}
          </div>
        )}
      </Link>

      <div className={styles.postBody}>
        <p className={styles.postMeta}>
          <time dateTime={post.date}>{dateText}</time>
          <span>|</span>
          <span>{secondaryMeta}</span>
        </p>

        {authorText ? <p className={styles.postAuthor}>By {authorText}</p> : null}

        <h3 className={styles.postTitle}>
          <Link href={detailHref} className={styles.postTitleLink}>
            {post.title}
          </Link>
        </h3>
        <p className={styles.postExcerpt}>{excerpt}</p>

        {post.tags.length > 0 && (
          <div className={styles.postTagList}>
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className={styles.postTag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className={styles.postActions}>
          <Link href={detailHref} className={styles.cardActionPrimary}>
            Replica
          </Link>

          {paper ? (
            <>
              <a
                href={paper.pdfPath}
                target="_blank"
                rel="noreferrer"
                className={styles.cardActionSecondary}
              >
                Repo PDF
              </a>
              <a
                href={paper.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.cardActionGhost}
              >
                {paper.sourceLabel}
              </a>
            </>
          ) : (
            <Link href={detailHref} className={styles.cardActionSecondary}>
              Read note
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
