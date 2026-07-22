function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <div className="left">
        <input type="checkbox" />

        <span>{todo.text}</span>
      </div>

      <div className="actions">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;