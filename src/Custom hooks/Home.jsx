import React from "react";
//custom hook called useFetch
import useFetch from "./useFetch";

function Home() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      <h2>Custom hook to fetch data</h2>
      {data &&
        data.map((element) => {
          return (
            <div>
              <li key={element.id}> {element.name} </li>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
