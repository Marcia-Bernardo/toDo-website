import React from "react";
import "./NewTask.module.css";
import { useState } from "react";
import { useGlobalContext } from "../store/GlobalStore";

const NewTask = () => {
  const [name, setName] = useState("");
  const [listName, setListName] = useState("");
  const { globalState, dispatch } = useGlobalContext();

  function registerTask(e) {
    e.preventDefault();

    dispatch({ listName, name, type: "addTask" });
  }

  return (
    <>
      <div className="relative">
        <h1>Create task</h1>
        <br />
        <form onSubmit={registerTask}>
          <div>
            <label htmlFor="Task">List Name:</label>
            <input
              type="text"
              id="listName"
              name="listName"
              placeholder="List name"
              onChange={(e) => setListName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Task">Task:</label>
            <input
              type="text"
              id="task"
              name="task"
              placeholder="Enter the task"
              onChange={(e) => setName(e.target.value)}
            />
            <input type="submit" value="Add" />
          </div>

          <br />
          <div>
            <input type="submit" value="Save" />
          </div>
        </form>

        <ul>
          {/* {globalState.tasks &&
            globalState.tasks.map((task, index) => {
              return <li key={index}>{task.name}</li>;
            })} */}
        </ul>
      </div>
    </>
  );
};

export default NewTask;
