from __future__ import annotations

import json
from pathlib import Path
from typing import Any

import pdfplumber


ROOT = Path(__file__).resolve().parents[1]
PDF_DIR = ROOT / "public" / "research"
OUT_DIR = ROOT / "content" / "research" / "layouts"

PAPERS = [
    {
        "slug": "attention-is-all-you-need",
        "pdf_name": "Attention Is All You Need (Transformer).pdf",
    },
    {
        "slug": "kronos-foundation-model-financial-markets",
        "pdf_name": "Kronos_ A Foundation Model for the Language of Financial Markets.pdf",
    },
]


def round_number(value: float | int) -> float:
    return round(float(value), 3)


def normalize_text(value: str) -> str:
    return value.replace("\u00a0", " ").strip()


def resolve_family(font_name: str) -> str:
    if "CambriaMath" in font_name:
        return "math"
    return "sans"


def resolve_weight(font_name: str) -> int:
    return 700 if "Bold" in font_name else 400


def resolve_italic(font_name: str) -> bool:
    return "Italic" in font_name or "Oblique" in font_name


def serialize_word(word: dict[str, Any]) -> dict[str, Any] | None:
    text = normalize_text(str(word.get("text", "")))
    if not text:
        return None

    font_name = str(word.get("fontname", ""))
    return {
        "text": text,
        "x": round_number(word["x0"]),
        "y": round_number(word["bottom"]),
        "size": round_number(word["size"]),
        "family": resolve_family(font_name),
        "weight": resolve_weight(font_name),
        "italic": resolve_italic(font_name),
    }


def serialize_figure(image: dict[str, Any], page_number: int, index: int) -> dict[str, Any] | None:
    width = round_number(image["width"])
    height = round_number(image["height"])
    if width < 24 or height < 24:
        return None

    return {
        "id": f"p{page_number:02d}-figure-{index:02d}",
        "x": round_number(image["x0"]),
        "y": round_number(image["top"]),
        "width": width,
        "height": height,
    }


def extract_paper_layout(pdf_path: Path, slug: str) -> dict[str, Any]:
    pages: list[dict[str, Any]] = []
    word_count = 0

    with pdfplumber.open(pdf_path) as pdf:
        for page_number, page in enumerate(pdf.pages, start=1):
            words = page.extract_words(
                use_text_flow=True,
                keep_blank_chars=False,
                extra_attrs=["fontname", "size"],
            )
            serialized_words = [serialize_word(word) for word in words]
            serialized_words = [word for word in serialized_words if word is not None]
            word_count += len(serialized_words)

            figures = [
                serialize_figure(image, page_number, index)
                for index, image in enumerate(page.images, start=1)
            ]
            figures = [figure for figure in figures if figure is not None]

            pages.append(
                {
                    "number": page_number,
                    "width": round_number(page.width),
                    "height": round_number(page.height),
                    "words": serialized_words,
                    "figures": figures,
                }
            )

    return {
        "slug": slug,
        "pdfPath": f"/research/{pdf_path.name}",
        "pageCount": len(pages),
        "wordCount": word_count,
        "pages": pages,
    }


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for paper in PAPERS:
        pdf_path = PDF_DIR / paper["pdf_name"]
        if not pdf_path.exists():
            raise FileNotFoundError(f"Missing PDF: {pdf_path}")

        layout = extract_paper_layout(pdf_path, paper["slug"])
        output_path = OUT_DIR / f"{paper['slug']}.json"
        output_path.write_text(
            json.dumps(layout, ensure_ascii=False, separators=(",", ":")),
            encoding="utf-8",
        )
        print(f"Wrote {output_path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
