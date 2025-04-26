"""Main FastAPI application module."""

from app.api.routes import router as api_router
from app.config.database import DBManager
from app.config.logger import setup_logger
from app.models.todo import Todo

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session

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


def create_test_todo(db: Session):
    """Create a test todo."""
    if not db.query(Todo).count():
        db.add_all([
            Todo(title=f"Test Todo {i}", description=f"This is a test todo {i}")
            for i in range(5)
        ])
        db.commit()


try:
    DBManager().create_all()
    create_test_todo(next(DBManager().get_db()))
    logger.info("Database connected successfully")
except Exception as e:
    logger.error(f"Database connection failed: {e}")
    raise


app.include_router(api_router)


@app.get("/")
async def root():
    """Root endpoint returning welcome message."""
    return {"message": "Welcome to PazFolio API"}
