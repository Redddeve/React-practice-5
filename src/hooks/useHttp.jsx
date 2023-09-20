import { useState, useEffect } from 'react';

export const useHttp = (fn, params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fn(params);
        setData(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [fn, params]);
  return { data, error, loading };
};
