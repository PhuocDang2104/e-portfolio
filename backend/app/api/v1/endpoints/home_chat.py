from fastapi import APIRouter

from app.schemas.home_ask import HomeAskRequest, HomeAskResponse
from app.services.llm.provider import generate_answer
from app.services.rag.retriever import retrieve_context

router = APIRouter()


@router.post("/chat/home", response_model=HomeAskResponse)
def home_chat(payload: HomeAskRequest) -> HomeAskResponse:
    context = retrieve_context(payload.message)
    answer = generate_answer(payload.message, context)
    return HomeAskResponse(message=answer)
