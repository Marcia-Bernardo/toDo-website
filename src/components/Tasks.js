import React from "react";
import "./Tasks.module.css";

const Tasks = ({ group }) => {
  Object.keys(group).map((tasks, index) => {
    const listTasks = group[tasks].map((task) => {
      return (
        <>
          <li key={index}>
            {task.name}
            {task.status === "not done" && (
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault"></label>
              </div>
            )}
          </li>
        </>
      );
    });
    console.log(listTasks);
    return (
      <>
        <h1>{tasks}</h1>
        {listTasks}
      </>
    );
  });
};

export default Tasks;
