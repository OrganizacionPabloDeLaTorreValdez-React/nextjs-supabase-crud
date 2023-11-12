"use client";
import { createContext, useState } from "react";

export const TaskContext = createContext({});

function TaskProvider({children}) {
  const [editTask, setEditTask] = useState({});

  return(
    <TaskContext.Provider value={
      {
        editTask,
        setEditTask,
      }
    }>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;