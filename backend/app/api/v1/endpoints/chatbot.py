from fastapi import APIRouter

from app.schemas.chatbot import ChatRequest, ChatResponse
from app.services.llm.provider import generate_answer
from app.services.rag.retriever import retrieve_context

router = APIRouter()


@router.post("/chatbot/chat", response_model=ChatResponse)
def chat(payload: ChatRequest) -> ChatResponse:
    context = retrieve_context(payload.query)
    answer = generate_answer(payload.query, context)
    return ChatResponse(answer=answer, context=context)
