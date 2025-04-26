"""Todo endpoints module."""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.models.todo import Todo
from app.config.database import DBManager

router = APIRouter()

@router.get("/")
async def get_todos(db: Session = Depends(DBManager().get_db)):
    """Get all todos."""
    return {"message": "List all todos"}

@router.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy"}