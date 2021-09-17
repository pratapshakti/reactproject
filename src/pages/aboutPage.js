import React, { useState } from "react";
import "./table.css";
import useCustomFetch from "./../hooks/useCustomFetch";
const DATA = [{ userId: 0, id: 0, title: "", body: "" }];
function AboutPage() {
  const [url, setUrl] = useState(null);
  const [Data, setData] = useState(null);
  const [data, error, loading] = useCustomFetch(url, Data);
  // const [data, setData] = useState(DATA);
  function handle (){
  setUrl("https://jsonplaceholder.typicode.com/posts");
  setData(DATA);
  }
  return (
    <>
    <button on onClick={handle}>url click</button>
      {loading && url && <div>Loading.....</div>}
      {!loading && data && data.userId && (
        <table>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
          {data.map((d) => {
            return (
              <tr>
                <td>{d.userId}</td>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.body}</td>
              </tr>
            );
          })}
        </table>
      )}
      {error && <div>Error:{error} </div>}
    </>
  );
}
export default AboutPage;
