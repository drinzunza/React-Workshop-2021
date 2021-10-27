import React, { useState } from "react";
import "./important.css";

const Important = (props) => {
  const [isImportant, setIsImportant] = useState(props.important || false);

  const toggleImportant = () => {
    let newVal = !isImportant;
    setIsImportant(newVal);
    props.onChange(newVal);
  };

  const getClass = () => {
    if (isImportant) {
      return "fas";
    } else {
      return "far";
    }
  };

  return (
    <div className="imp-container">
      <i onClick={toggleImportant} id="iImportant" className={"fa-star " + getClass()}></i>
    </div>
  );
};

export default Important;
