import React, { useState } from "react";
/*
function HOC() {
  return (
    <div>
      <HocRed cmp={Counter}/>
      <HocBlue cmp={Counter}/>

    </div>
  );
}
function HocRed (props){
    return <h2 style={{backgroundColor:"red",width:100}}><props.cmp/></h2>
}
function HocBlue (props){
    return <h2 style={{backgroundColor:"blue",width:100}}><props.cmp/></h2>
}
function Counter() {
  const [count, setCount] = useState(0);
  function onClickHandle() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={onClickHandle}>count:{count}</button>
    </div>
  );
}
export default HOC;
*/

function HOC() {
  return (
    <div>
      <Hoc cmp={ClickCounter} />
      <Hoc cmp={HoverCounter} />
    </div>
  );
}

function Hoc(props) {
  const [count, setCount] = useState(0);
  function onClickHandle() {
    setCount(count + 1);
  }
  return (
    <div style={{ backgroundColor: "red", width: 500 }}>
      <props.cmp count={count} onClickHandle={onClickHandle} />
    </div>
  );
}

function ClickCounter(props) {
  return (
    <div>
      <button onClick={props.onClickHandle}>ClickCounter: {props.count}</button>
    </div>
  );
}
function HoverCounter(props) {
  const { count, onClickHandle } = props;
  return (
    <div>
      <button onMouseOver={onClickHandle}>HoverCounter: {count}</button>
    </div>
  );
}

export default HOC;
