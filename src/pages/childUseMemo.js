//solution 1:make use of "React.memo()" in <ChildUseMemo> ,make "export default React.memo(ChildUseMemo)"";
/*
import React from "react";
function ChildUseMemo(props) {
  console.log("reander child")
  return <>
   <div>child component</div>
  <p>{props.title}</p>
  </>
}
export default React.memo(ChildUseMemo) ;

*/

import React, { useEffect } from "react";
function ChildUseMemo(props) {
  console.log("reander child");
  useEffect(()=>{
    props.fetchData("gitmil");
  },[props])
  return (
    <>
      <div>child component</div>
      <p>{props.title}</p>
      <p>{props.array}</p>
    </>
  );
}
export default React.memo(ChildUseMemo);
