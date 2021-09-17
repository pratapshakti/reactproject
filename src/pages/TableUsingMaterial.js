import React, { useEffect } from "react";

function TableUsingMaterial(props) {
  const fromChild = "i m holding child data";
  const { childData, sendDataToParent } = props;
  useEffect(() => {
    sendDataToParent(fromChild);
  },);
 
  return (
    <div>
      <h1>child:{childData}</h1>
    </div>
  );
}
export default TableUsingMaterial;
// props = {sendDataToParent:"gettingDataFromChild"}
