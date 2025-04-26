"""Logging configuration for the application."""

import logging
from pathlib import Path


def setup_logger(name: str) -> logging.Logger:
    """
    Set up and configure a logger instance.

    Args:
        name: The name for the logger instance

    Returns:
        logging.Logger: Configured logger instance
    """
    logger = logging.getLogger(name)
    logger.setLevel(logging.INFO)

    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    )

    Path("logs").mkdir(exist_ok=True)
    file_handler = logging.FileHandler('logs/app.log')
    file_handler.setFormatter(formatter)

    logger.addHandler(file_handler)
    return logger
