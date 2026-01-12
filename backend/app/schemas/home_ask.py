from pydantic import BaseModel


class HomeAskRequest(BaseModel):
    message: str


class HomeAskResponse(BaseModel):
    message: str
    confidence: float | None = None
