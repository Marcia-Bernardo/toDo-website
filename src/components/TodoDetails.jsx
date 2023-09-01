import React from "react";
import { useGlobalContext } from "../store/GlobalStore";
import Tasks from "./Tasks";

const TodoDetails = ({ id }) => {
  const { globalState } = useGlobalContext();

  const group = globalState.groups.find((group) => group.id == id);
  console.log(group);
  return (
    <>
      <div className="container">
        <Tasks group={group} />
      </div>
    </>
  );
};

export default TodoDetails;
