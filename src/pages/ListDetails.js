import React from "react";
import TodoDetails from "../components/TodoDetails";

import { useParams } from "react-router-dom";
const ListDetails = () => {
  const { id } = useParams();

  return <TodoDetails id={id} />;
};

export default ListDetails;
