import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import PaperLayoutView from "@/components/research/PaperLayoutView";
import styles from "@/components/research/research.module.css";
import { researchSans, researchSerif } from "@/lib/research-fonts";
import { isPaperDocument } from "@/lib/research-types";
import { getAllWritingSlugs, getWritingDocument, getWritingList, getWritingRoute } from "@/lib/writing";

type WritingPageProps = {
  params: {
    slug: string;
  };
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

export function generateStaticParams() {
  return getAllWritingSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: WritingPageProps): Metadata {
  const post = getWritingDocument(params.slug);
  if (!post) {
    return {
      title: "Research Note Not Found"
    };
  }

  return {
    title: `${post.title} | Research`,
    description: post.excerpt
  };
}

export default function WritingPage({ params }: WritingPageProps) {
  const post = getWritingDocument(params.slug);
  if (!post) {
    notFound();
  }

  const posts = getWritingList().filter((item) => item.kind === post.kind);
  const postIndex = posts.findIndex((item) => item.slug === post.slug);
  const newerPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const olderPost = postIndex >= 0 && postIndex < posts.length - 1 ? posts[postIndex + 1] : null;
  const dateText = post.displayDate ?? dateFormatter.format(new Date(post.date));

  return (
    <main className={`page ${styles.page} ${researchSans.variable} ${researchSerif.variable}`}>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href={getWritingRoute()}>Research</Link>
        <span>/</span>
        <span>{post.title}</span>
      </nav>

      {isPaperDocument(post) ? (
        <>
          <PaperLayoutView paper={post} />

          <section className={styles.paperSupportGrid}>
            <div className={styles.asideBlock}>
              <p className={styles.asideLabel}>Paper Snapshot</p>
              <p className={styles.asideValue}>{dateText}</p>
              <p className={styles.asideValue}>{post.pageCount} pages</p>
              <p className={styles.asideValue}>{post.readingMinutes} min read</p>
            </div>

            <div className={styles.asideBlock}>
              <p className={styles.asideLabel}>Authors</p>
              <p className={styles.asideValue}>{post.authors.join(", ")}</p>
            </div>

            {post.tags.length > 0 && (
              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>Topics</p>
                <div className={styles.tagList}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.asideBlock}>
              <p className={styles.asideLabel}>Continue Reading</p>
              <div className={styles.asideLinks}>
                {newerPost ? (
                  <Link href={getWritingRoute(newerPost.slug)} className={styles.asideLink}>
                    Newer: {newerPost.title}
                  </Link>
                ) : null}
                {olderPost ? (
                  <Link href={getWritingRoute(olderPost.slug)} className={styles.asideLink}>
                    Older: {olderPost.title}
                  </Link>
                ) : null}
                <Link href={getWritingRoute()} className={styles.asideLink}>
                  Back to library
                </Link>
              </div>
            </div>
          </section>
        </>
      ) : (
        <article className={styles.articleShell}>
          <header className={styles.articleHeader}>
            <p className={styles.articleMeta}>
              <time dateTime={post.date}>{dateText}</time>
              <span>|</span>
              <span>{post.readingMinutes} min read</span>
            </p>
            <h1 className={styles.articleTitle}>{post.title}</h1>
            <p className={styles.articleExcerpt}>{post.excerpt}</p>

            {post.thumbnail && (
              <div className={styles.articleCover}>
                <img
                  src={post.thumbnail}
                  alt={post.thumbnailAlt}
                  className={styles.articleCoverImage}
                />
              </div>
            )}
          </header>

          <div className={styles.articleBody}>
            <div className={styles.markdown}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>

            <aside className={styles.articleAside}>
              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>Research Snapshot</p>
                <p className={styles.asideValue}>{dateText}</p>
                <p className={styles.asideValue}>{post.readingMinutes} min read</p>
              </div>

              {post.tags.length > 0 && (
                <div className={styles.asideBlock}>
                  <p className={styles.asideLabel}>Topics</p>
                  <div className={styles.tagList}>
                    {post.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>Continue Reading</p>
                <div className={styles.asideLinks}>
                  {newerPost ? (
                    <Link href={getWritingRoute(newerPost.slug)} className={styles.asideLink}>
                      Newer: {newerPost.title}
                    </Link>
                  ) : null}
                  {olderPost ? (
                    <Link href={getWritingRoute(olderPost.slug)} className={styles.asideLink}>
                      Older: {olderPost.title}
                    </Link>
                  ) : null}
                  <Link href={getWritingRoute()} className={styles.asideLink}>
                    Back to all notes
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </article>
      )}
    </main>
  );
}
