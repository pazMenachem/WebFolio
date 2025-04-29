from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

from app.models.todo import MAX_DESCRIPTION_LENGTH, MAX_TITLE_LENGTH

class TodoCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=MAX_TITLE_LENGTH)
    description: Optional[str] = Field(None, min_length=0, max_length=MAX_DESCRIPTION_LENGTH)

class TodoResponse(BaseModel):
    id: int
    title: str
    description: Optional[str]
    completed: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True  # Allows conversion from ORM objects
