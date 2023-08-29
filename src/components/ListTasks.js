import React from "react";
import { useGlobalContext } from "../store/GlobalStore";
import Tasks from "./Tasks";

const ListTasks = () => {
  const { globalState } = useGlobalContext();

  return (
    <>
      <div className="container">
        <h1>List tasks to do </h1>
        <div className="row row-cols-auto">
          {globalState.groups.map((group) => {
            return <Tasks group={group} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ListTasks;
