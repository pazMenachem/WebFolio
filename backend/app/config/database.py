"""Database configuration and management module."""

import os

from dotenv import load_dotenv

from fastapi import HTTPException

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


class DBManager:
    """Database manager class for handling database connections and sessions."""

    def __init__(self):
        """Initialize the DBManager instance."""
        self.engine = None
        self.SessionLocal = None
        self.Base = None

    def connect(self):
        """Connect to the database."""
        try:
            load_dotenv()
            DATABASE_URL = os.getenv("DATABASE_URL")

            if not DATABASE_URL:
                raise ValueError("DATABASE_URL is not set in the environment variables")

            self.engine = create_engine(DATABASE_URL)
            self.SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=self.engine)
            self.Base = declarative_base()

        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"Database connection failed: {str(e)}"
            )

    def get_db(self):
        """Dependency to get DB session."""
        db = self.SessionLocal()
        try:
            yield db
        finally:
            db.close()
