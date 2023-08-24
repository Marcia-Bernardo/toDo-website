import React from "react";
import "./NewTask.module.css";
import { useState } from "react";

const NewTask = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState({});

  function registerTask(e) {
    e.preventDefault();
    const task = { name: name, status: "not done" };
    console.log(e.target);
    const allTasks = tasks;
    allTasks.push(task);
    setTasks(allTasks);
    console.log(tasks);
  }

  return (
    <>
      <div className="relative">
        <h1>Create task</h1>
        <br />
        <form onSubmit={registerTask}>
          <div>
            <label htmlFor="Task">Task:</label>
            <input
              type="text"
              id="task"
              name="task"
              placeholder="Enter the task"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <br />
          <div>
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </>
  );
};

export default NewTask;
