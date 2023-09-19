import { useState, useEffect } from 'react';

export const useHttp = (fn, params) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fn(params).then({data}=> setData(data))
  }, []);
  //   return [data, setData];
  return { data, setData };
};

//* const { data } = useHttp(fetchMovies, params);
