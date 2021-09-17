import React, { useState } from "react";

function ReanderProp() {
  return (
    <div>
      <Render
        render={(count, onClickHandle) => (
          <ClickCounter count={count} onClickHandle={onClickHandle} />
        )}
      />
      <Render
        render={(count, onClickHandle) => (
          <HoverCounter count={count} onClickHandle={onClickHandle} />
        )}
      />
    </div>
  );
}
function Render(props) {
  const [count, setCount] = useState(0);
  function onClickHandle() {
    setCount(count + 1);
  }
  return (
    <div style={{ backgroundColor: "red", width: 500 }}>
      {props.render(count, onClickHandle)}
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
export default ReanderProp;
