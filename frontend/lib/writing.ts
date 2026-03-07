import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import { RESEARCH_PAPERS } from "@/content/research/papers";
import type {
  NoteDocument,
  NoteMeta,
  PaperDocument,
  PaperMeta,
  WritingDocument,
  WritingMeta
} from "@/lib/research-types";

export const WRITING_CONTENT_ROOT = path.join(process.cwd(), "content");

export const RESEARCH_SECTION = {
  label: "Research",
  description: "Paper notes, experiments, and distilled implementation insights.",
  path: "research"
} as const;

type WritingFrontmatter = {
  title?: string;
  excerpt?: string;
  date?: string | number | Date;
  tags?: string[] | string;
  thumbnail?: string;
  thumbnailAlt?: string;
  draft?: boolean;
};

const FILE_EXTENSIONS = [".md", ".mdx"];
const DEFAULT_EXCERPT =
  "No excerpt provided. Add an `excerpt` field in frontmatter for better list previews.";
const DEFAULT_THUMBNAIL = "/static/images/intel_ai_banner.png";

export function getWritingRoute(slug?: string): string {
  return slug ? `/research/${slug}` : "/research";
}

export function getWritingList(): WritingMeta[] {
  return [...getPaperList(), ...getNoteList()].sort(sortWritingMeta);
}

export function getWritingDocument(slug: string): WritingDocument | null {
  const paper = getPaperDocument(slug);
  if (paper) {
    return paper;
  }

  return getNoteDocument(slug);
}

export function getAllWritingSlugs(): string[] {
  return getWritingList().map((post) => post.slug);
}

function getSectionDirectory(): string {
  return path.join(WRITING_CONTENT_ROOT, RESEARCH_SECTION.path);
}

function getPaperList(): PaperMeta[] {
  return RESEARCH_PAPERS.map((paper) => stripPaperDocument({ ...paper, figureAssets: paper.figureAssets ?? {} }));
}

function getPaperDocument(slug: string): PaperDocument | null {
  const paper = RESEARCH_PAPERS.find((entry) => entry.slug === slug);
  if (!paper) {
    return null;
  }

  return {
    ...paper,
    figureAssets: paper.figureAssets ?? {}
  };
}

function getNoteList(): NoteMeta[] {
  const sectionDir = getSectionDirectory();
  if (!fs.existsSync(sectionDir)) {
    return [];
  }

  const entries = fs.readdirSync(sectionDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .filter((entry) => FILE_EXTENSIONS.includes(path.extname(entry.name).toLowerCase()))
    .map((entry) => {
      const fullPath = path.join(sectionDir, entry.name);
      const slug = path.basename(entry.name, path.extname(entry.name));
      return parseDocument(slug, fs.readFileSync(fullPath, "utf8"));
    })
    .filter((doc): doc is NoteDocument => Boolean(doc))
    .map(stripNoteDocument);
}

function getNoteDocument(slug: string): NoteDocument | null {
  const sectionDir = getSectionDirectory();
  if (!fs.existsSync(sectionDir)) {
    return null;
  }

  for (const extension of FILE_EXTENSIONS) {
    const fullPath = path.join(sectionDir, `${slug}${extension}`);
    if (!fs.existsSync(fullPath)) {
      continue;
    }
    return parseDocument(slug, fs.readFileSync(fullPath, "utf8"));
  }

  return null;
}

function parseDocument(slug: string, raw: string): NoteDocument | null {
  const { data, content } = matter(raw);
  const frontmatter = data as WritingFrontmatter;

  if (frontmatter.draft === true) {
    return null;
  }

  const normalizedDate = normalizeDate(frontmatter.date);
  const excerpt = cleanText(frontmatter.excerpt ?? extractExcerpt(content) ?? DEFAULT_EXCERPT);
  const tags = normalizeTags(frontmatter.tags);
  const title = cleanText(frontmatter.title ?? slugToTitle(slug));
  const thumbnail = normalizeThumbnail(frontmatter.thumbnail);
  const thumbnailAlt = cleanText(frontmatter.thumbnailAlt ?? `${title} thumbnail`);

  return {
    kind: "note",
    slug,
    title,
    excerpt,
    date: normalizedDate,
    tags,
    thumbnail,
    thumbnailAlt,
    readingMinutes: estimateReadingMinutes(content),
    content
  };
}

function stripPaperDocument(document: PaperDocument): PaperMeta {
  const { layout: _layout, figureAssets: _figureAssets, ...meta } = document;
  return meta;
}

function stripNoteDocument(document: NoteDocument): NoteMeta {
  const { content: _content, ...meta } = document;
  return meta;
}

function sortWritingMeta(a: WritingMeta, b: WritingMeta): number {
  const priorityDelta = (b.priority ?? 0) - (a.priority ?? 0);
  if (priorityDelta !== 0) {
    return priorityDelta;
  }

  return toSortValue(b.date) - toSortValue(a.date);
}

function normalizeDate(value?: WritingFrontmatter["date"]): string {
  if (value === undefined || value === null) {
    return "1970-01-01";
  }

  const source = value instanceof Date ? value : new Date(String(value));
  const date = new Date(source);
  if (Number.isNaN(date.getTime())) {
    return "1970-01-01";
  }
  return date.toISOString().slice(0, 10);
}

function toSortValue(value: string): number {
  const date = new Date(value);
  const time = date.getTime();
  return Number.isNaN(time) ? 0 : time;
}

function normalizeTags(tags?: WritingFrontmatter["tags"]): string[] {
  if (typeof tags === "string") {
    const singleTag = cleanText(tags);
    return singleTag ? [singleTag] : [];
  }

  if (!Array.isArray(tags)) {
    return [];
  }
  return tags
    .map((tag) => cleanText(String(tag)))
    .filter(Boolean)
    .slice(0, 8);
}

function estimateReadingMinutes(markdown: string): number {
  const plain = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]+`/g, " ")
    .replace(/[#>*_~\-]/g, " ")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1");
  const words = plain
    .split(/\s+/)
    .map((word) => word.trim())
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / 220));
}

function extractExcerpt(markdown: string): string | null {
  const lines = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith("#"));

  if (lines.length === 0) {
    return null;
  }
  return lines[0];
}

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

function cleanText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeThumbnail(value: string | undefined): string | null {
  const normalized = value ? cleanText(value) : "";
  if (normalized.length > 0) {
    return normalized;
  }
  return DEFAULT_THUMBNAIL;
}
