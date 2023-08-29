import React from "react";
import { useGlobalContext } from "../store/GlobalStore";
import Tasks from "./Tasks";

const ListTasks = () => {
  const { globalState } = useGlobalContext();

  const listTasks = globalState.groups.map((group) => {
    return <Tasks group={group} />;
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
