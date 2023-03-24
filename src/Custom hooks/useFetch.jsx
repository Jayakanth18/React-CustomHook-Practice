import React, { useState, useEffect } from "react";

//custom hook to fetch url

function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((resolve) => resolve.json())
      .then((jsonData) => setData(jsonData));
  }, [url]);

  return [data];
}

export default useFetch;
