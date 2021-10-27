import "./task.css";

import Important from "./important";

const Task = ({ task }) => {
  return (
    <div className="task">
      <Important important={task.important}></Important>
      <div className="description">
        <h5>{task.title}</h5>
        <p>{task.description}</p>
      </div>
      <label class="location">{task.location}</label>
    </div>
  );
};

export default Task;
