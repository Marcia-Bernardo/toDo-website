import React, { createContext, useReducer, useContext } from "react";

export const GlobalContext = createContext();

// Initial state
const initialState = {
  groups: [],
};

// Reducer
export function authReducer(state, action) {
  switch (action.type) {
    case "addTask":
      const group = {
        [action.listName]: [{ name: action.name, status: "not done" }],
      };
      const allTasks = [...state.groups];
      allTasks.push(group);
      state.groups = allTasks;
      return state;

    default:
      return state;
  }
}

function GlobalProvider(props) {
  const [globalState, dispatch] = useReducer(authReducer, initialState);

  const authData = { globalState, dispatch };

  return <GlobalContext.Provider value={authData} {...props} />;
}

function useGlobalContext() {
  return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalContext };
