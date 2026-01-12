# Phuoc Portfolio Monorepo

## Structure

- frontend/  Next.js (App Router) + TypeScript
- backend/   FastAPI (API-first)
- static/, templates/, app.py remain as legacy reference

## Development

Backend:
1) cd backend
2) python -m venv .venv
3) .\.venv\Scripts\activate
4) pip install -r requirements.txt
5) copy .env.example .env
6) uvicorn app.main:app --reload --port 8000

Frontend:
1) cd frontend
2) npm install
3) copy .env.local.example .env.local
4) npm run dev

## Env Vars

- frontend/.env.local: NEXT_PUBLIC_API_BASE
- backend/.env: DATABASE_URL, CORS_ORIGINS, LLM_PROVIDER, LLM_API_KEY

## Ports

- Frontend: http://localhost:3000
- Backend: http://localhost:8000
