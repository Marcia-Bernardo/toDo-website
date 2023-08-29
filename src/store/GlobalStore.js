import React, { createContext, useReducer, useContext } from "react";

export const GlobalContext = createContext();

// Initial state
const initialState = {
  groups: [],
};

// Reducer
export function authReducer(state, action) {
  switch (action.type) {
    case "addGroup":
      const group = {
        [action.groupName]: action.listTasks 
      };
      const allGroup = [...state.groups];
      allGroup.push(group);
      state.groups = allGroup;
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
