import attentionLayout from "@/content/research/layouts/attention-is-all-you-need.json";
import kronosLayout from "@/content/research/layouts/kronos-foundation-model-financial-markets.json";
import type { PaperLayout } from "@/lib/research-paper-layout";
import type { ResearchPaperDefinition } from "@/lib/research-types";

function estimateReadingMinutes(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / 220));
}

export const RESEARCH_PAPERS: ResearchPaperDefinition[] = [
  {
    kind: "paper",
    slug: "attention-is-all-you-need",
    title: "Attention Is All You Need (Transformer)",
    excerpt:
      "Attention-only sequence transduction architecture that replaces recurrence and convolution while improving translation quality and training efficiency.",
    date: "2017-06-01",
    displayDate: "Jun 2017",
    tags: ["Transformer", "Self-Attention", "Sequence Modeling"],
    thumbnail: null,
    thumbnailAlt: "Attention Is All You Need cover",
    readingMinutes: estimateReadingMinutes(attentionLayout.wordCount),
    priority: 300,
    authors: [
      "Ashish Vaswani",
      "Noam Shazeer",
      "Niki Parmar",
      "Jakob Uszkoreit",
      "Llion Jones",
      "Aidan N. Gomez",
      "Lukasz Kaiser",
      "Illia Polosukhin"
    ],
    pageCount: attentionLayout.pageCount,
    pdfPath: attentionLayout.pdfPath,
    sourceUrl: "https://arxiv.org/abs/1706.03762",
    sourceLabel: "arXiv",
    layout: attentionLayout as PaperLayout,
    // Example: { "p03-figure-01": "/research/figures/attention/p03-figure-01.png" }
    figureAssets: {}
  },
  {
    kind: "paper",
    slug: "kronos-foundation-model-financial-markets",
    title: "Kronos: A Foundation Model for the Language of Financial Markets",
    excerpt:
      "Autoregressive financial K-line foundation model with a specialized tokenizer, large-scale pre-training corpus, and strong zero-shot results across forecasting tasks.",
    date: "2025-08-01",
    displayDate: "Aug 2025",
    tags: ["Financial TSFM", "Foundation Models", "Quantitative Finance"],
    thumbnail: null,
    thumbnailAlt: "Kronos paper cover",
    readingMinutes: estimateReadingMinutes(kronosLayout.wordCount),
    priority: 290,
    authors: [
      "Yu Shi",
      "Zongliang Fu",
      "Shuo Chen",
      "Bohan Zhao",
      "Wei Xu",
      "Changshui Zhang",
      "Jian Li"
    ],
    pageCount: kronosLayout.pageCount,
    pdfPath: kronosLayout.pdfPath,
    sourceUrl: "https://arxiv.org/abs/2508.02739",
    sourceLabel: "arXiv",
    layout: kronosLayout as PaperLayout,
    // Example: { "p02-figure-01": "/research/figures/kronos/p02-figure-01.png" }
    figureAssets: {}
  }
];
