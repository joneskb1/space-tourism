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
        console.log(res);
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setIsPending(false);
      setError(null);
      setData(data);
    } catch (err) {
      setIsPending(false);
      console.log(err)
      setError("Could not get data :(");
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isPending, error };
};
