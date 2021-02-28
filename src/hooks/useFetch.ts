import { useState, useEffect } from "react";
const useFetch = <T>(url: string | Promise<T>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<any | undefined>();
  const [refresh, setRefresh] = useState<number | undefined>(undefined);
  useEffect(() => {
    setLoading(true);
    let f = url;
    if (typeof url == "string") {
      f = fetch(url).then((response) => response.json());
    }
    // @ts-ignore
    (f as Promise<T>)
      .then((data: T) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [refresh]);

  return {
    loading,
    data,
    error,
    reload: () => setRefresh(Math.random()),
  };
};

export default useFetch;
