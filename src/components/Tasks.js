import React from "react";
import "./Tasks.module.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../store/GlobalStore";

const Tasks = ({ group }) => {
  const { dispatch } = useGlobalContext();

  const deleteGroup = () => {
    dispatch({ type: "remove", id: group.id });
  };

  const changeStatus = (name) => {
    dispatch({ type: "updateTaskState", id: group.id, name });
  };
  return (
    <>
      <div className="col" key={group.id}>
        <div className="card mt-3 " style={{ width: "18rem" }}>
          <div
            className="card-header m-3"
            style={{
              backgroundColor:
                group.status == "not done"
                  ? "rgba(198, 205, 29, 0.48) "
                  : " rgba(18, 154, 15, 0.48)",
            }}
          >
            <h4>{group.groupName}</h4>
          </div>
          <div className="card-bod">
            {group.tasks.map((task, index) => {
              return (
                <div className="m-3" key={index}>
                  <p className="card-text" key={index}></p>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      checked={task.status === "done"}
                      onChange={() => changeStatus(task.name)}
                    />

                    {task.name}
                  </div>
                </div>
              );
            })}
            <Link
              to={`/details/${group.id}`}
              className="btn btn-primary ms-5 mb-3"
            >
              Details
            </Link>
            <button className="btn btn-danger ms-5 mb-3" onClick={deleteGroup}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
