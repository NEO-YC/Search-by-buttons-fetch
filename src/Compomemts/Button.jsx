import React from "react";
import "./Button.css";

function Button({ name, func }) {





  return (
    
    <button onClick={func}
      className="fancy-button">
      {name}
    </button>
  );
}

export default Button;
