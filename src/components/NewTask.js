import React from "react";
import "./NewTask.module.css";
import { useState } from "react";
import { useGlobalContext } from "../store/GlobalStore";

const NewTask = () => {
  const [name, setName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [listTasks, setListTasks] = useState([]);
  const { dispatch } = useGlobalContext();

  const addTask = () => {
    if (name === "") {
      return;
    }
    const listTask = [...listTasks];
    const task = { name: name, status: "not done" };
    listTask.push(task);
    setListTasks(listTask);
    setName("");
  };

  function registerTask() {
    if (groupName === "" && listTasks === "") {
      return;
    }
    dispatch({ groupName, listTasks, type: "addGroup" });
    setGroupName("");
    setName("");
    setListTasks([]);
  }

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <h1>Create tasks to do</h1>
          <div className="col-6 col-sm-4">
            <div className="input-group mt-2 mb-2">
              <label htmlFor="Name" className="input-group-text">
                Name group:
              </label>
              <input
                className="form-control"
                type="text"
                id="groupName"
                name="groupName"
                placeholder="List name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-6 col-sm-4"></div>

          <div className="w-100 d-none d-md-block"></div>

          <div className="col-6 col-sm-4">
            <div className="input-group mt-2 mb-2">
              <label htmlFor="Task" className="input-group-text">
                Add tasks:
              </label>
              <input
                className="form-control"
                type="text"
                id="task"
                name="task"
                placeholder="Enter the task"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-6 col-sm-4">
            <button
              className="btn btn-success mt-2 mb-2"
              type="button"
              onClick={addTask}
            >
              Add
            </button>
          </div>
        </div>
        <div className="mb-3">
          <button
            className="btn btn-primary mt-3"
            type="button"
            onClick={registerTask}
          >
            Save
          </button>
        </div>
        <ul>
          {listTasks.map((task, index) => {
            return <li key={index}>{task.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default NewTask;
