import time
from collections import defaultdict

from fastapi import FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware

from .email_utils import send_contact_email
from .schemas import ContactCreate, HealthResponse

app = FastAPI(
    title="Landry Portfolio API",
    version="1.0.0",
    description="Backend API for portfolio contact form and future portfolio features.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://my-portfolio-opal-ten-76.vercel.app",
        "https://ruglan.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

RATE_LIMIT_WINDOW = 60
RATE_LIMIT_MAX_REQUESTS = 3
request_log = defaultdict(list)


def check_rate_limit(ip: str) -> None:
    now = time.time()
    request_log[ip] = [
        timestamp for timestamp in request_log[ip]
        if now - timestamp < RATE_LIMIT_WINDOW
    ]

    if len(request_log[ip]) >= RATE_LIMIT_MAX_REQUESTS:
        raise HTTPException(
            status_code=429,
            detail="Too many requests. Please try again shortly.",
        )

    request_log[ip].append(now)


@app.get("/api/health", response_model=HealthResponse)
def health_check():
    return {
        "status": "ok",
        "message": "Portfolio API is running.",
    }


@app.post("/api/contact", status_code=status.HTTP_201_CREATED)
def create_contact_message(payload: ContactCreate, request: Request):
    client_ip = request.client.host if request.client else "unknown"

    if payload.website.strip():
        return {
            "status": "success",
            "message": "Your message has been sent successfully.",
        }

    check_rate_limit(client_ip)

    try:
        send_contact_email(
            name=payload.name,
            email=payload.email,
            subject=payload.subject,
            message=payload.message,
        )

        return {
            "status": "success",
            "message": "Your message has been sent successfully.",
        }

    except Exception as exc:
        raise HTTPException(
            status_code=500,
            detail=f"An error occurred while sending your message: {str(exc)}",
        ) from exc