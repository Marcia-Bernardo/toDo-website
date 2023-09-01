import React, { createContext, useReducer, useContext } from "react";

export const GlobalContext = createContext();

// Initial state
const initialState = {
  groups: [
    {
      groupName: "Shopping",
      id: 0,
      status: "not done",
      tasks: [
        { name: "eggs", status: "done" },
        { name: "tomato", status: "not done" },
        { name: "salad", status: "not done" },
      ],
    },
    {
      groupName: "Book Store",
      id: 1,
      status: "not done",
      tasks: [
        { name: "books", status: "not done" },
        { name: "pens", status: "not done" },
        { name: "paper", status: "not done" },
        { name: "paper", status: "not done" },
      ],
    },
    {
      groupName: "School",
      id: 2,
      status: "not done",
      tasks: [
        { name: "payment", status: "not done" },
        { name: "house", status: "not done" },
        { name: "food", status: "not done" },
      ],
    },
    {
      groupName: "Pharmacy",
      id: 3,
      status: "not done",
      tasks: [
        { name: "benuron", status: "not done" },
        { name: "brufen", status: "not done" },
      ],
    },
  ],
};

// Reducer
export function authReducer(state, action) {
  switch (action.type) {
    case "addGroup":
      const group = {
        groupName: action.groupName,
        id: state.groups[state.groups.length - 1].id + 1,
        status: "not done",
        tasks: action.listTasks,
      };
      const allGroup = [...state.groups];
      allGroup.push(group);
      state.groups = allGroup;
      return state;

    case "remove":
      if (action.id === "") {
        return state;
      }

      let found = 0;
      state.groups.forEach((group, index) => {
        if (group.id === action.id) {
          found = index;
        }
      });
      state.groups.splice(found, 1);
      return { ...state };

    case "updateTaskState":
      const groupToUpdate = state.groups.find((group) => {
        return group.id === action.id;
      });
      const item = groupToUpdate.tasks.find(
        (task) => task.name === action.name
      );

      item.status = "done";

      const totalDone = groupToUpdate.tasks.filter(
        (task) => task.status === "done"
      );
      console.log("done", totalDone);

      console.log(groupToUpdate.tasks.length, totalDone.length);
      if (groupToUpdate.tasks.length === totalDone.length) {
        groupToUpdate.status = "done";
      }

      return { ...state };

    case "updateColourGroupState":

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
