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
                <h5 className="card-title center">Market</h5>
                <p className="card-text">Purchase list</p>
                <a href="#" className="btn btn-primary">
                  task
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">daily activity</h5>
                <p className="card-text">Meeting</p>
                <a href="#" className="btn btn-primary">
                  task
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
