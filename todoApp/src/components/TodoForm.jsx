import { useContext, useState } from "react";
import TodoContext from "../Context/TodoContext";

function TodoForm() {
const {addTodo}=useContext(TodoContext);
  const [input,setInput]=useState("");
  const handleSubmit = () => {
    if (input.trim() === "") return;

    addTodo(input);
    setInput("");
};
  return (
    <div className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        
        placeholder="Enter a new task..."
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default TodoForm;