from pydantic import BaseModel


class ContactRequest(BaseModel):
    subject: str | None = None
    message: str | None = None


class ContactResponse(BaseModel):
    status: str
    message: str
