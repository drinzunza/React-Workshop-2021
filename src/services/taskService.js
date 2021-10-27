class TaskService {
  KEY_TASKS = "tasks";

  saveTask(task) {
    // add a unique id to the task
    task.id = Date.now();

    // load old data
    let data = this.getTasks();

    // merge
    data.push(task);

    // save
    let val = JSON.stringify(data); // parse object into a JSON string
    localStorage.setItem(this.KEY_TASKS, val);

    return task;
  }

  getTasks() {
    // load data from local storage
    let val = localStorage.getItem(this.KEY_TASKS);
    if (val) {
      return JSON.parse(val); // parse a JSON string, producing an object
    }
    return [];
  }

  deleteTask(id) {
    // load data
    let data = this.getTasks();

    // filter out the task
    data = data.filter((task) => task.id !== id);

    // save again
    let val = JSON.stringify(data);
    localStorage.setItem(this.KEY_TASKS, val);
  }

  clearTasks() {
    localStorage.removeItem(this.KEY_TASKS);
  }
}

export default TaskService;
