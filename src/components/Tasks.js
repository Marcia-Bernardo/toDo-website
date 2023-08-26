import React from "react";
import "./Tasks.module.css";

const Tasks = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title center">List tasks</h5>
                <p className="card-text">Name list</p>
                <a href="/listtasks" className="btn btn-primary">
                  List
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tasks;
