# Writing Content Guide

All research entries are loaded from markdown files at build/runtime.
Read `WRITE_GUIDE.md` for the full authoring flow.

## Directory structure

- `content/research` -> paper notes, experiments, and implementation insights

You can change this folder in `lib/writing.ts` (`RESEARCH_SECTION` + `WRITING_CONTENT_ROOT`).

## File naming

Use kebab-case for filenames, because filename becomes the URL slug:

- `content/research/attention-is-all-you-need-notes.md` -> `/research/attention-is-all-you-need-notes`

## Frontmatter format

```md
---
title: "Your title"
excerpt: "One sentence preview shown on listing pages."
date: "2026-02-17"
tags: ["llm", "fastapi", "rag"]
thumbnail: "/static/images/writing/your-cover.jpg"
thumbnailAlt: "Short image description"
draft: false
---

# Markdown body starts here
```

### Field notes

- `title` optional, fallback is generated from filename
- `excerpt` optional but recommended for card preview
- `date` optional, defaults to `1970-01-01` if missing/invalid
- `tags` optional array of strings
- `thumbnail` optional but recommended (card image, shown in 16:9 slot)
- `thumbnailAlt` optional, defaults to `<title> thumbnail`
- `draft: true` hides the post from pages

## Writing flow

1. Create a markdown file in `content/research` with kebab-case filename.
2. Paste the frontmatter block and fill metadata.
3. Write the note in markdown.
4. Run `npm run dev` and open `/research`.
5. Commit file. The note is now part of research navigation and route.
