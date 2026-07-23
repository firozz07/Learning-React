import React, { useState } from 'react'
import TodoContext from './TodoContext'

const TodoContextProvider=({children})=>{
const [todos, setTodos] = useState([]);

const addTodo=(text)=>{
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    setTodos([...todos,newTodo]);
};

const deleteTodo = (id) => {
    setTodos(
        todos.filter((todo) => todo.id !== id)
    );
};
const editTodo=()=>{

}


    return(
        <TodoContext.Provider 
        value={{todos,addTodo,deleteTodo,editTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider