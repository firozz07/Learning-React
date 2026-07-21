import { useContext } from "react";
import TodoContext from "./Context/TodoContext";

function App() {
  const {todo,settodo} = useContext(TodoContext);

  return <h1>Hello {todo}</h1>;
}

export default App;