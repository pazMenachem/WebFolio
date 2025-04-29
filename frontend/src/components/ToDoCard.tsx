import { ToDo } from "../types/toDo";

/**
 * Card component for displaying a single ToDo item.
 */
export default function ToDoCard({ toDo }: { toDo: ToDo }) {
  return (
    <div className="to-do-card">
      <div className="to-do-card-header">
        <span className="to-do-card-title">{toDo.title}</span>
        <span className="to-do-card-date">{toDo.updated_at?.slice(0, 10) ?? ""}</span>
      </div>
      <div className="to-do-card-desc">{toDo.description}</div>
      <div className="flex justify-end">
        <span className="to-do-card-status">
          {toDo.completed ? "✔️" : ""}
        </span>
      </div>
    </div>
  );
}
