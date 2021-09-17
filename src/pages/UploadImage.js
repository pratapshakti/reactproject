import React, { useState } from "react";
import { Image } from "cloudinary-react";
function UploadImaage() {
  const [selectedFile, setSelectedFile] = useState(null);
  function onChangeHandle(e) {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0].name);
  }
  function onClickHnadle() {
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);
    formData.append("upload_preset", "d5axhipd");
    fetch("https://api.cloudinary.com/v1_1/neerajsingh/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((respoce) => respoce.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <h1>upload image</h1>
      <input type="file" name="image" onChange={onChangeHandle}></input>
      <button onClick={onClickHnadle}>upload</button>
      {/* npm install cloudinary-react */}
      <Image
        style={{ width: 200 }}
        cloudName="neerajsingh"
        publicId="https://res.cloudinary.com/neerajsingh/image/upload/v1629173110/nfqu4oxrgdgtuxyscull.png"
      />
    </div>
  );
}
export default UploadImaage;
