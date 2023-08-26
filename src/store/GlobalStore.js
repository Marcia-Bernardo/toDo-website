import React, { createContext, useReducer, useContext } from "react";

export const GlobalContext = createContext();

// Initial state
const initialState = {
  tasks: [],
};

// Reducer
export function authReducer(state, action) {
  switch (action.type) {
    case "addTask":
      const task = { name: action.name, status: "not done" };
      const allTasks = [...state.tasks];
      allTasks.push(task);
      state.tasks = allTasks;
      return state;

    default:
      return state;
  }
}

function GlobalProvider(props) {
  const [auth, dispatch] = useReducer(authReducer, initialState);

  const authData = { auth, dispatch };

  return <GlobalContext.Provider value={authData} {...props} />;
}

function useGlobalContext() {
  return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalContext };
