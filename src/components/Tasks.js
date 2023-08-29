import React from "react";
import "./Tasks.module.css";
import { Link } from "react-router-dom";

const Tasks = ({ group }) => {
  return Object.keys(group).map((key, index) => {
    const taskList = group[key].map((task) => {
      return (
        <>
          <p className="card-text">{task.name}</p>
        </>
      );
    });

    return (
      <>
        <div className="col" key={index}>
          <div className="card mt-4 " style={{ width: "18rem" }}>
            <div className="card-header">
              <h4>{key}</h4>
            </div>
            <div className="card-body">
              {taskList}
              <Link to="/details" className="btn btn-primary">
                Details
              </Link>
              <button className="btn btn-danger ms-3">Delete</button>
            </div>
          </div>
        </div>
      </>
    );
  });
};

export default Tasks;
