"use client";
import useFormattedDate from "@/hooks/useFormattedDate";

function TaskDetail({
  task
}) {
  const [dateFormatted] = useFormattedDate(task?.created_at);

  return (
    <div 
      className="divide-y-2 p-5 bg-slate-900"
    >
      <h3
        className="py-2"
      >
        title: {task?.title}
      </h3>
      <p 
        className="py-2"
      >
        description: {task?.description}
      </p>
      <p 
        className="py-2"
      >
        createdAt: {''} 
        <time
          dateTime="2023-10-24T00:00:00-05.00" pubdate="true"
        >{dateFormatted}</time>
      </p>
    </div>
  );
}

export default TaskDetail;