import React, { useState,useRef } from "react";
/**start from metarial */
import { makeStyles } from "@material-ui/core/styles";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
/**End from metarial */
function From(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const { forUpdate, updateData, data, closeHandle } = props;
  const [userId, setUserId] = useState(forUpdate ? updateData.userId : "");
  const [id, setId] = useState(forUpdate ? updateData.id : "");
  const [title, setTitle] = useState(forUpdate ? updateData.title : "");
  const [body, setBody] = useState(forUpdate ? updateData.body : "");
  //const x  = (forUpdate ? updateData : data)
 
  function onChangeUserId(e) {
    setUserId(e.target.value);
  }
  function onChangeId(e) {
    setId(e.target.value);
  }
  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  function onChangeBody(e) {
    setBody(e.target.value);
  }
  function saveHandle() {
    if (userId === "" || id === "" || title === "" || body === "") {
      alert("Please Fill All Required Field");
    } else if (isNaN(userId) || isNaN(id)) {
      alert("Please Fill this Field With Number");
    } else {
      if (!forUpdate) {
        data.push({
          userId: userId,
          id: id,
          title: title,
          body: body,
        });

        setUserId("");
        setId("");
        setTitle("");
        setBody("");
      } else {
        updateData.userId = userId;
        updateData.id = id;
        updateData.title = title;
        updateData.body = body;
      }
      //console.log(updateData);
      closeHandle(false);
    }
  }
  return (
    <div style={modalStyle} className={classes.paper}>
      <label>userId:</label>
      <input
        type="text"
        className="userId-Input"
         value={userId}
        onChange={onChangeUserId}
      ></input>
      <br></br>
      <label>id:</label>
      <input
        type="text"
        className="id-Input"
        value={id}
        onChange={onChangeId}
      ></input>
      <br></br>
      <label>title:</label>
      <input
        type="text"
        className="title-Input"
        value={title}
        onChange={onChangeTitle}
      ></input>
      <br></br>
      <label>body:</label>
      <input
        type="text"
        className="body-Input"
        value={body}
        onChange={onChangeBody}
      ></input>
      <br></br>
      <button onClick={saveHandle}>save</button>
    </div>
  );
}
export default From;
