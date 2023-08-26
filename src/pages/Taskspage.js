import React from "react";
import { useState } from "react";
import ListTasks from "../components/ListTasks";
import NewTask from "../components/NewTask";

const Taskspage = ({ componentName }) => {
  return (
    <>
      {componentName === "create" && <NewTask />}
      {componentName === "list" && <ListTasks />}
    </>
  );
};

export default Taskspage;
