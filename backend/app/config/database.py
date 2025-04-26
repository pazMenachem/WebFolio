"""Database configuration and management module."""

import os

from dotenv import load_dotenv

from fastapi import HTTPException

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

class DBManager:
    """Singleton database manager class for handling database connections and sessions."""

    __instance = None

    def __new__(cls):
        """
        Create or return the singleton instance of DBManager.

        Returns:
            DBManager: The singleton instance of the class.

        Raises:
            HTTPException: If the database connection fails.
        """
        if cls.__instance is None:
            instance = super(DBManager, cls).__new__(cls)
            instance.engine = None
            instance.SessionLocal = None
            instance.Base = None
            instance.__connect() ## May raise an exception
            cls.__instance = instance
        return cls.__instance

    def __connect(self):
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

    def create_all(self):
        """Create all tables in the database."""
        self.Base.metadata.create_all(bind=self.engine)

    def get_db(self):
        """Dependency to get DB session."""
        db = self.SessionLocal()
        try:
            yield db
        finally:
            db.close()

