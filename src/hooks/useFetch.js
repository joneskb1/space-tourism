import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsPending(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setIsPending(false);
      setError(null);
      setData(data);
    } catch (err) {
      setIsPending(false);
      setError("Could not get data :(");
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isPending, error };
};
