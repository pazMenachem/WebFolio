import { useEffect, useState } from "react";
import { toDoApi } from "../api/toDoApi";
import type { ToDo } from "../types/toDo";
import ToDoCard from "../components/toDoCard";

export default function ToDoPage() {
    const [toDos, setToDos] = useState<ToDo[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        toDoApi.getAll()
            .then(setToDos)
            .catch((err: Error) => setError(err.message ?? 'An error occurred'));
    }, []);
    
    return (
        <div className="todo-page-container">
        <h1>To do's:</h1>
        <div className="to-do-page-scroll-container">
          {error && <p className="text-red-500">{error}</p>}
          {toDos.map((todo) => (
            <ToDoCard key={todo.id} toDo={todo} />
          ))}
        </div>
      </div>
    );
}
