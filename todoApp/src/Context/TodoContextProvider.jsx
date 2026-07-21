import React, { useState } from 'react'
import TodoContext from './TodoContext'

const TodoContextProvider=({children})=>{
const [todo, settodo] = useState("firoz");
    return(
        <TodoContext.Provider value={{todo,settodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider