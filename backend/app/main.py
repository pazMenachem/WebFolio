"""Main FastAPI application module."""

from app.config.database import DBManager
from app.config.logger import setup_logger

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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

db_manager = DBManager()
try:
    # db_manager.connect() ## TODO: Uncomment this when the database is ready
    logger.info("Database connected successfully")
except Exception as e:
    logger.error(f"Database connection failed: {e}")
    raise


@app.get("/")
async def root():
    """Root endpoint returning welcome message."""
    return {"message": "Welcome to PazFolio API"}


@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy"}
