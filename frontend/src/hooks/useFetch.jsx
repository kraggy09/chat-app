import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useFetch = (url, method = "GET", body = null) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;
        if (method === "GET") {
          response = await fetch(url, {
            method: "GET",
            credentials: "include",
          });
        } else if (method === "POST") {
          response = await fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });
        }
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.msg || "An error occurred");
        }
        setData(responseData);
        setError(null);
      } catch (error) {
        toast.error(error.message || "An error occurred");
        setError(error);
        setData(null);
      }
      setLoading(false);
    };

    fetchData();
  }, [url, method, body]);

  return { loading, data, error };
};

export default useFetch;
