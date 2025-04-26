"""Main FastAPI application module."""

from app.config.database import DBManager
from app.config.logger import setup_logger

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router as api_router

from app.models.todo import Todo

logger = setup_logger(__name__)

app = FastAPI(
    title="PazFolio API",
    description="Backend API for PazFolio personal portfolio",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    DBManager().create_all()
    logger.info("Database connected successfully")
except Exception as e:
    logger.error(f"Database connection failed: {e}")
    raise

# Include API routes
app.include_router(api_router)

@app.get("/")
async def root():
    """Root endpoint returning welcome message."""
    return {"message": "Welcome to PazFolio API"}
