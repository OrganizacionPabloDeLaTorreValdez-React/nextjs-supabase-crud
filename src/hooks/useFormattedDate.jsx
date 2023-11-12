import { useEffect, useState } from "react";

function useFormattedDate(date) {
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    const dateFormatted = new Date(date).toLocaleDateString();
    setFormattedDate(dateFormatted);
  }, []);

  return [formattedDate];
}

export default useFormattedDate;