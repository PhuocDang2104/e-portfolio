export type PaperWord = {
  text: string;
  x: number;
  y: number;
  size: number;
  family: "sans" | "math";
  weight: 400 | 700;
  italic: boolean;
};

export type PaperFigureSlot = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type PaperPageLayout = {
  number: number;
  width: number;
  height: number;
  words: PaperWord[];
  figures: PaperFigureSlot[];
};

export type PaperLayout = {
  slug: string;
  pdfPath: string;
  pageCount: number;
  wordCount: number;
  pages: PaperPageLayout[];
};
