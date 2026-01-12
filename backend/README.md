# Backend (FastAPI)

## Quickstart

1) Create and activate a virtual environment.
2) Install dependencies:
   pip install -r requirements.txt
3) Create a local env file:
   copy .env.example .env
4) Run the API:
   uvicorn app.main:app --reload --port 8000

## Notes
- API base path: /api/v1
- Healthcheck: GET /api/v1/health
