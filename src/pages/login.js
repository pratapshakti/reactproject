import React, { useState } from "react";
// import useCustomFetch from "./../hooks/useCustomFetch";
import { useHistory } from "react-router-dom";

function LogInPage() {
  const [usename, setUsename] = useState(null);
  const [password, setPassword] = useState(null);
  //const [logdIn, setlogdIn] = useState(false);
  const history = useHistory();
  //const [url, setUrl] = useState(null);
  // const [data, error, loading] = useCustomFetch(url);

  function onClickHandle() {
    // main.js

    // POST request using fetch()
    fetch("http://localhost:8080/login", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        email: usename,
        password: password,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => {
        console.log(json);
        if ((json.status = "Login Done")) {
          localStorage.setItem("token", json.token);
         history.push("/about");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function onChangeUsename(e) {
    setUsename(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  //console.log(document.getElementById("InputBox").value);
  return (
    // "<>" use for multipal element inside it
    <>
      <h1>Welcome LogIn</h1>
      <label>username:</label>
      <input type="text" onChange={onChangeUsename}></input>
      <br></br>
      <label>Password:</label>
      <input type="text" onChange={onChangePassword}></input>
      <br></br>
      <button id="button" onClick={onClickHandle}>
        {localStorage.getItem("token") ? "Log Out" : "Log In"}
      </button>
    </>
  );
}
export default LogInPage;
