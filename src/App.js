//@fortawesome/fontawesome-free

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";

import NavBar from "./components/navBar";
import TaskInfo from "./components/taskInfo";
import Task from "./components/task";
import TaskService from "./services/taskService";

function App() {
  const service = new TaskService();
  const [tasks, setTasks] = useState([]);

  const handleSave = (task) => {
    let newTask = service.saveTask(task);
    setTasks([...tasks, newTask]);
  };

  // load current tasks from taskService on page load
  useEffect(() => {
    let tasks = service.getTasks();
    setTasks(tasks);
  }, []);

  return (
    <div className="App">
      <NavBar />

      <div className="main">
        <section className="section-list">
          {tasks.map((task) => (
            <Task task={task} />
          ))}
        </section>

        <section className="section-form">
          <TaskInfo onSave={handleSave}></TaskInfo>
        </section>
      </div>
    </div>
  );
}

export default App;
