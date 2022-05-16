import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setdata] = useState([]);
  const getProducts = async () => {
    const response = await fetch(url);
    const information = await response.json();
    setdata(information);
    setIsLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, [url]);
  return { data, isLoading };
};
