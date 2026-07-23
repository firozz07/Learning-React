import { useState } from "react";
import { useContext } from "react";
import TodoContext from "../Context/TodoContext";

function TodoItem({ todo }) {
  const {deleteTodo,editTodo}=useContext(TodoContext)
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  return (
    <div className="todo-item">
      <div className="left">
        <input type="checkbox" />

        {isEditing ? (
    <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
    />
) : (
    <span>{todo.text}</span>
)}
      </div>

      <div className="actions">
        <button
    className="edit"
    onClick={() => {
        if (isEditing) {
            editTodo(todo.id, editText);
        }
        setIsEditing(!isEditing);
    }}
>
    {isEditing ? "Save" : "Edit"}
</button>
        <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;