"use client";
import { putTask, postTask } from "@/data/tasks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useTaskContext from "@/hooks/useTaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {editTask, setEditTask} = useTaskContext();
  const router = useRouter();

  useEffect(() => {
    if(Object.keys(editTask).length > 0) {
      setTitle(editTask.title);
      setDescription(editTask.description);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
    }

    if(Object.keys(editTask).length > 0) {
      await putTask(data, editTask.id);
      setEditTask({});
    } else {
      await postTask(data);
    }
    router.push("/");
  };

  return (
    <form 
      action=""
      className="p-10 lg:w-2/4 bg-slate-800"
      onSubmit={handleSubmit}
    >
      <label 
        htmlFor="title"
        className="font-bold text-sm"
      >Título de la tarea</label>
      <input 
        id="title"
        type="text" 
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 p-2 w-full text-black border border-gray-400"
      />
      <label 
        htmlFor="description"
        className="font-bold text-sm"
      >Descripcion de la tarea</label>
      <textarea 
        id="description"
        rows="3"
        placeholder="Describe tu tarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-4 p-2 w-full text-black border border-gray-400"
      ></textarea>
      <button
        className="py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold"
      >
        {
          Object.keys(editTask).length ? 'Editar' : 'Crear'
        }
      </button>
    </form>
  );
}

export default TaskForm;