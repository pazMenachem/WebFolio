"""Todo endpoints module."""

from fastapi import APIRouter, Depends, HTTPException, status
from typing import List

from sqlalchemy.orm import Session

from app.models.todo import Todo
from app.config.database import DBManager
from app.schemas.todo import TodoResponse, TodoCreate

router = APIRouter()

@router.get("/", response_model=List[TodoResponse])
async def get_todos(db: Session = Depends(DBManager().get_db)):
    """Get all todos."""
    return db.query(Todo).all()

@router.get("/{todo_id}", response_model=TodoResponse)
async def get_todo(todo_id: int, db: Session = Depends(DBManager().get_db)):
    """Get a todo by ID."""
    todo = db.query(Todo).filter(Todo.id == todo_id).first()

    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    
    return todo

@router.post("/", response_model=TodoResponse)
async def create_todo(todo: TodoCreate, db: Session = Depends(DBManager().get_db)):
    """Create a new todo."""
    try:
        db_todo = Todo(title=todo.title, description=todo.description)
        db.add(db_todo)
        db.commit()
        db.refresh(db_todo)

        return db_todo
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/{todo_id}", response_model=TodoResponse)
async def update_todo(todo_id: int, todo: TodoCreate, db: Session = Depends(DBManager().get_db)):
    """Update a todo by ID."""
    db_todo = db.query(Todo).filter(Todo.id == todo_id).first()

    if not db_todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    
    db_todo.title = todo.title
    db_todo.description = todo.description
    db.commit()
    db.refresh(db_todo)

    return db_todo

@router.delete("/{todo_id}", response_model=TodoResponse)
async def delete_todo(todo_id: int, db: Session = Depends(DBManager().get_db)):
    """Delete a todo by ID."""
    db_todo = db.query(Todo).filter(Todo.id == todo_id).first()

    if not db_todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    
    db.delete(db_todo)
    db.commit()
    
    return db_todo

@router.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy"}
