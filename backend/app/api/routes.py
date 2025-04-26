"""API routes module."""

from fastapi import APIRouter
from app.api.endpoints import todo

# Create main API router
router = APIRouter(prefix="/api")

# Include todo endpoints
router.include_router(
    todo.router,
    prefix="/todos",
    tags=["todos"]
)
