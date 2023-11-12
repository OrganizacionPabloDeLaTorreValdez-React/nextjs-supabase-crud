import { useRouter } from "next/navigation";
import Link from "next/link";
import useFormattedDate from "@/hooks/useFormattedDate";
import useTaskContext from "@/hooks/useTaskContext";
import { deleteTask } from "@/data/tasks";

function TaskCard({
  task,
  deleteTaskAction,
}) {
  const router = useRouter();
  const {setEditTask} = useTaskContext();
  const [dateFormatted] = useFormattedDate(task.created_at);

  const callEditPage = () => {
    setEditTask({
      id: task.id,
      title: task.title,
      description: task.description,
    });
    router.push(`/task/edit/${task.id}`);
  };

  return (
  <div 
    className="p-3 space-y-2 bg-slate-900"
  >
    <h3
      className="font-bold text-xl"
    >
      {task?.title}
    </h3>
    <p>{task?.description}</p>
    <time
      dateTime="2023-10-24T00:00:00-05.00" pubdate="true"
    >{dateFormatted}</time>
    <div 
      className="flex justify-start gap-x-2"
    >
      <button
        type="button"
        onClick={callEditPage}
        className="px-2 bg-blue-500 hover:bg-blue-500/50 rounded-sm"
      >Editar</button>
      <button
        type="button"
        onClick={() => deleteTask(task?.id)}
        className="px-2 bg-red-800 hover:bg-red-800/50 rounded-sm"
      >Eliminar</button>
      <Link 
        href={`/task/detalle/${task?.id}`}
        className="px-2 bg-green-800 hover:bg-green-800/50 rounded-sm"
      >Ver Detalle</Link>
    </div>
  </div>
  );
}

export default TaskCard;