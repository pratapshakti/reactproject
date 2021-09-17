import React, { useEffect, useState } from "react";
import "./table.css";
import Modal from "@material-ui/core/Modal";
import From from "./From";

const DATA = [{ userId: 0, id: 0, title: "", body: "" }];
function Table() {
  const [currentRow, setCurrentRow] = useState({});
  const [data, setData] = useState(DATA);
  async function customFetch() {
    try {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jason = await responce.json();
      setData(jason);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    customFetch();
  }, []);
  /**Start from metarial */
  const [addOpen, setaddOpen] = React.useState(false);
  const [updateOpen, setupdateOpen] = React.useState(false);

  const addHandleOpen = () => {
    setaddOpen(true);
  };
  const updateHandleOpen = (d) => {
    setupdateOpen(true);
    setCurrentRow(d);
  };
  const deleteHandleOpen = (d) => {
    
    const newData = [...data];
    console.log(newData.length);
    newData.splice(
      newData.findIndex((a) => a.id === d.id),
      1
    );
    console.log(newData.length);
    setData(newData);
  };

  const addHandleClose = () => {
    setaddOpen(false);
  };
  function updateHandleClose() {
    setupdateOpen(false);
  }
  return (
    <div>
      {/* Start from metarial */}
      <button type="button" onClick={addHandleOpen}>
        add
      </button>
      <Modal open={addOpen} onClose={addHandleClose}>
        <From
          forUpdate={false}
          updateData={currentRow}
          data={data}
          closeHandle={setaddOpen}
        />
      </Modal>
      <Modal open={updateOpen} onClose={updateHandleClose}>
        <From
          forUpdate={true}
          updateData={currentRow}
          data={data}
          closeHandle={setupdateOpen}
        />
      </Modal>
      {/* End from metarial */}
      <table>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
          <th>action</th>
        </tr>
        {data.map((d) => {
          return (
            <tr key={d.id}>
              <td>{d.userId}</td>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.body}</td>
              <td>
                <button onClick={() => updateHandleOpen(d)}>updte</button>
                <button onClick={() => deleteHandleOpen(d)}>delete</button>
         
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Table;
