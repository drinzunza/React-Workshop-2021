import React, { useState } from "react";
import "./taskInfo.css";
import Important from "./important";

const TaskInfo = (props) => {
  const [task, setTask] = useState({ color: "#ffffff" });
  const [isImportant, setIsImportant] = useState(false);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleImportantChange = (important) => {
    setTask({
      ...task,
      important: important,
    });
  };

  const handleSave = () => {
    // apply some validations

    // return to parent
    props.onSave(task);
  };

  return (
    <div className="task-info">
      <h3>Create Task</h3>

      <div className="control">
        <label className="form-label">Important</label>
        <Important important={task.important} onChange={handleImportantChange}></Important>
      </div>

      <div className="form">
        <div className="control">
          <label className="form-label">Title</label>
          <input name="title" onChange={handleChange} type="text" className="form-control" />
        </div>

        <div className="control">
          <label className="form-label">Description</label>
          <textarea name="description" onChange={handleChange} type="text" className="form-control"></textarea>
        </div>

        <div className="control">
          <label className="form-label">Location</label>
          <input type="text" name="location" onChange={handleChange} className="form-control" />
        </div>

        <div className="control text-center">
          <button className="btn btn-dark btn-large btn-save" onClick={handleSave}>
            Save Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
