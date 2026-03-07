import type { PaperLayout } from "@/lib/research-paper-layout";

export type WritingKind = "note" | "paper";

export type WritingSharedMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  displayDate?: string;
  tags: string[];
  thumbnail: string | null;
  thumbnailAlt: string;
  readingMinutes: number;
  priority?: number;
  kind: WritingKind;
};

export type NoteMeta = WritingSharedMeta & {
  kind: "note";
};

export type PaperMeta = WritingSharedMeta & {
  kind: "paper";
  authors: string[];
  pageCount: number;
  pdfPath: string;
  sourceUrl: string;
  sourceLabel: string;
};

export type WritingMeta = NoteMeta | PaperMeta;

export type NoteDocument = NoteMeta & {
  content: string;
};

export type PaperDocument = PaperMeta & {
  layout: PaperLayout;
  // Keys map placeholder ids from the extracted layout JSON to image files in /public.
  figureAssets: Record<string, string>;
};

export type WritingDocument = NoteDocument | PaperDocument;

export type ResearchPaperDefinition = PaperMeta & {
  layout: PaperLayout;
  figureAssets?: Record<string, string>;
};

export function isPaperDocument(document: WritingDocument): document is PaperDocument {
  return document.kind === "paper";
}

export function isPaperMeta(document: WritingMeta): document is PaperMeta {
  return document.kind === "paper";
}
