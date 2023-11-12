import { TaskContext } from "@/app/context/TaskProvider";
import { useContext } from "react";

function useTaskContext() {
  const {editTask, setEditTask} = useContext(TaskContext)
  return {
    editTask,
    setEditTask
  }
}

export default useTaskContext;