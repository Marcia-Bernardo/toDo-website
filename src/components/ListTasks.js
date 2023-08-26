import React from "react";
import { useGlobalContext } from "../store/GlobalStore";

const ListTasks = () => {
  const { auth } = useGlobalContext();
  const listTasks = auth.tasks.map((task, index) => {
    return <li key={index}>{task.name}</li>;
  });
  return (
    <>
      <div>
        <ul>{listTasks}</ul>
      </div>
    </>
  );
};

export default ListTasks;
