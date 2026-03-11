import os
import smtplib
from email.message import EmailMessage

from dotenv import load_dotenv

load_dotenv()

GMAIL_USER = os.getenv("GMAIL_USER")
GMAIL_APP_PASSWORD = os.getenv("GMAIL_APP_PASSWORD")
MAIL_TO = os.getenv("MAIL_TO")


def send_contact_email(name: str, email: str, subject: str, message: str) -> None:
    if not GMAIL_USER or not GMAIL_APP_PASSWORD or not MAIL_TO:
        raise ValueError("Email environment variables are missing.")

    msg = EmailMessage()
    msg["Subject"] = f"Portfolio Contact: {subject}"
    msg["From"] = GMAIL_USER
    msg["To"] = MAIL_TO
    msg["Reply-To"] = email

    msg.set_content(
        f"""
New portfolio contact message

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
""".strip()
    )

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(GMAIL_USER, GMAIL_APP_PASSWORD)
        smtp.send_message(msg)