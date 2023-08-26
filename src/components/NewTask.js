import React from "react";
import "./NewTask.module.css";
import { useState } from "react";
import { useGlobalContext } from "../store/GlobalStore";

const NewTask = () => {
  const [name, setName] = useState({});
  const { auth, dispatch } = useGlobalContext();
  function registerTask(e) {
    e.preventDefault();

    dispatch({ name, type: "addTask" });
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

        <ul>
          {auth.tasks &&
            auth.tasks.map((task, index) => {
              return <li key={index}>{task.name}</li>;
            })}
        </ul>
      </div>
    </>
  );
};

export default NewTask;
