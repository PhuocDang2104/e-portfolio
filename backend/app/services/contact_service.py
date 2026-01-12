from app.clients.mail import send_contact_message
from app.schemas.contact import ContactRequest


def handle_contact(payload: ContactRequest) -> str:
    send_contact_message(payload)
    return "Message received."
