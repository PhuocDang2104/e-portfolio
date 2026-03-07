# Huong Dan Viet Research Note

Tai lieu nay la checklist de ban viet research note moi nhanh va dung format.

## 1) Dung folder

- Research: `frontend/content/research`

## 2) Dat ten file

Ten file dung `kebab-case`:

- `my-first-rag-note.md`
- `attention-notes-v2.md`

Duong dan URL se tu dong la:

- `/research/my-first-rag-note`
- `/research/attention-notes-v2`

## 3) Them frontmatter nay vao dau file

```md
---
title: "Your title"
excerpt: "1-2 cau tom tat de hien tren card."
date: "2026-02-17"
tags: ["llm", "rag", "fastapi"]
thumbnail: "/static/images/writing/your-cover.jpg"
thumbnailAlt: "Describe the thumbnail briefly"
draft: false
---
```

## 4) Thumbnail rules

- Card bai viet co o thumbnail `16:9`.
- Nen dung anh ngang `1600x900` hoac `1280x720`.
- De anh vao: `frontend/public/static/images/writing/`
- Trong markdown, set:
  - `thumbnail: "/static/images/writing/<file-name>.jpg"`

Neu khong set thumbnail, he thong se dung anh fallback.

## 5) Viet noi dung markdown

Ban chi can viet markdown binh thuong:

- heading `# ## ###`
- list
- code block
- table
- blockquote

Trang detail se render giong markdown preview.

## 6) Preview local

```bash
cd frontend
npm run dev
```

Mo:

- `/research`
- `/research/<slug>`

## 7) Publish

- Dat `draft: false`
- Commit file markdown + thumbnail image

Done.
