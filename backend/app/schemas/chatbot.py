from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    query: str
    session_id: str | None = None


class ChatResponse(BaseModel):
    answer: str
    context: list[str] = Field(default_factory=list)
