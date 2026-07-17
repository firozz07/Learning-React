import React from "react";
import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
function Card() {
  const {theme}=useContext(ThemeContext)
  return (
    
    <div className={`card ${theme}`}>
      <div className="card-header">
        <h3>React Course</h3>
        <span className="status">New</span>
      </div>

      <p className="card-text">
        Learn Context API, Hooks, and React Router with hands-on projects.
      </p>

      <button>Read More</button>
    </div>
  );
}

export default Card;