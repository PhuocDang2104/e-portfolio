from fastapi import APIRouter

from app.schemas.contact import ContactRequest, ContactResponse
from app.services.contact_service import handle_contact

router = APIRouter()


@router.post("/contact", response_model=ContactResponse)
def submit_contact(payload: ContactRequest) -> ContactResponse:
    message = handle_contact(payload)
    return ContactResponse(status="ok", message=message)
