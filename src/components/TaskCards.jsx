"use client";
import { useEffect, useMemo, useState } from "react";
import { getTasks } from "@/data/tasks";
import TaskCard from "./TaskCard";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";

function TaskCards() {
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(true);
  const supabase = useMemo(() => {
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_KEY,
    );
  }, []);

  useEffect(() => {
    getTasks()
      .then(tasks => {
        setTasks(tasks);
        setLoad(false);
      });

    const channel = supabase
      .channel('custom-all-tasks')
      .on('postgres_changes',
        {event: '*',schema: 'public', table: 'tasks'},
        (payload) => {
          const {eventType, new: newTask, old: oldTask} = payload;
          switch(eventType) {
            case 'UPDATE':
              setTasks(prevTasks => 
                prevTasks.map(task => {
                  if(task.id === oldTask.id) {
                    return {
                      ...task,
                      ...newTask,
                    }
                  }
                  return task;
                })
              );
              break;
            case 'INSERT':
              setTasks(prevTasks => [...prevTasks, newTask]);
              break;
            case 'DELETE':
              setTasks(prevTasks => prevTasks.filter(task => task.id !== oldTask.id));
              break;
          }
        },
      )
      .subscribe();

      return () => {
        supabase.removeChannel(channel);
      }
  }, []);

  return (
    <div className="flex flex-col justify-start gap-y-4">
      <Link 
        href={"/task/new"}
        className="text-center bg-yellow-600 hover:bg-yellow-600/50 rounded-md transition ease-out"
      >
        Agregar tarea
      </Link>
      <div
        className="grid grid-cols-3 auto-rows-fr gap-3"
      >
        {
          load ? 
            "Loading..." :
            (tasks?.length === 0 && "There is no tasks")
        }

        {
          tasks?.length > 0 &&
          tasks?.map(task => (
            <TaskCard 
              key={task?.id}
              task={task}
            />
          ))
        }
      </div>
    </div>
  );
}

export default TaskCards;