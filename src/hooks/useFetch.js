import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url,  { signal: controller.signal});
        if (!res.ok) {
          console.log(res);
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setIsPending(false);
        setError(null);
        setData(data);
      } catch (err) {
        if(err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIsPending(false);
          console.log(err)
          setError("Could not fetch the error");
      }
      }
    };
    fetchData();
    return ()=>controller.abort();
  
  }, [url]);

  return { data, isPending, error };
};
