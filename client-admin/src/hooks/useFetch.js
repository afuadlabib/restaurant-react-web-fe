import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    fetch(`http://localhost:3000/${url}`)
      .then((res) => res.json())
      .then((datas) => {
        setData(datas);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading };
}

export default useFetch;
