"use client"
import TaskDetail from "@/components/TaskDetail";
import { getTask } from "@/data/tasks";
import Link from "next/link";
import { useEffect, useState } from "react";

function DetallePage({params}) {
  const [task, setTask] = useState(null);

  const fetchTask = async () => {
    const resTask = await getTask(params.id);
    setTask(resTask);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <section 
      className="flex flex-col h-full justify-center items-center"
    >
      <div
        className="space-y-5 w-2/4 lg:w-1/4"
      >
        <Link 
          href="/"
          className="px-5 py-2 bg-blue-800 rounded-lg"
        >
          back
        </Link>
        {
          task ? (
            <TaskDetail 
              task={task}
            />
          ) : ''
        }
      </div>
    </section>
  );
}

export default DetallePage;