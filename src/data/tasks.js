export async function getTasks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_TASK_URL}/tasks`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .catch(err => []);
  return res;
}

export async function getTask(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_TASK_URL}/tasks/${id}`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(res => res[0])
    .catch(err => {
      return {};
    })
  return res;
}

export async function putTask(data, id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_TASK_URL}/tasks/${id}`,{
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(res => res[0])
    .catch(err => {
      return {};
    });
  return res;
}

export async function postTask(data) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_TASK_URL}/tasks`,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(res => res[0])
  .catch(err => {
    return {};
  });

  return res;
}

export async function deleteTask(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_TASK_URL}/tasks/${id}`, {
    method: 'DELETE',
  })
  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(res => res[0])
  .catch(err => {
    return {};
  });

  return res;
}
