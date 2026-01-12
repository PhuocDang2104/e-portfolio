from fastapi import APIRouter

from app.api.v1.endpoints import chatbot, contact, health, home_chat

api_router = APIRouter()

api_router.include_router(health.router, tags=["health"])
api_router.include_router(contact.router, tags=["contact"])
api_router.include_router(chatbot.router, tags=["chatbot"])
api_router.include_router(home_chat.router, tags=["chat"])
