import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

const ThemeContextProvider=({children})=>{
    const[theme,settheme]=useState('white')
    return(
        <ThemeContext.Provider value={{theme,settheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider