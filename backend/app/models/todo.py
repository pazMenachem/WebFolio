"""Todo item model module."""

from datetime import datetime
from typing import Optional

from sqlalchemy import DateTime, String, Boolean
from sqlalchemy.orm import Mapped, mapped_column

from app.config.database import DBManager

MAX_TITLE_LENGTH = 200
MAX_DESCRIPTION_LENGTH = 250

class Todo(DBManager().Base):
    """Todo item model."""
    
    __tablename__ = "todos"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(MAX_TITLE_LENGTH))
    completed: Mapped[bool] = mapped_column(Boolean, default=False)
    description: Mapped[Optional[str]] = mapped_column(String(MAX_DESCRIPTION_LENGTH), nullable=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime, default=datetime.now()
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime, default=datetime.now(), onupdate=datetime.now()
    )