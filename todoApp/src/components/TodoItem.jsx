import { useContext } from "react";
import TodoContext from "../Context/TodoContext";

function TodoItem({ todo }) {
  const {deleteTodo}=useContext(TodoContext)
  return (
    <div className="todo-item">
      <div className="left">
        <input type="checkbox" />

        <span>{todo.text}</span>
      </div>

      <div className="actions">
        <button className="edit">Edit</button>
        <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;