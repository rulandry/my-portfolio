from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)
    website: str = Field(default="", max_length=200)


class HealthResponse(BaseModel):
    status: str
    message: str