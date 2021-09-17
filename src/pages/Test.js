import React, { useState, useEffect, useRef } from "react";
import TableUsingMaterial from "./TableUsingMaterial";
import { render } from "react-dom";
import ForwordRefChild from "./forwordRefChild";
import OtherPort from "./../Other_Port";
let born = false;

function Test() {
  
// use of portal in react
return (<div>
   <h1>portal</h1>
  <OtherPort></OtherPort>
 </div>
 )

  /*
  // Ref use
const [value,setValue]= useState("initial value");
const refValue = useRef(null);

function saveHandle(){
     setValue(refValue.current.value) ;
    console.log(value);
}
return <div>
    <input type= "text" ref={refValue}></input>
    <h1>value is: {value}</h1>
    <button onClick={saveHandle}>save</button>
</div>
*/

  /*
// forwordRef use (parent)
const [value,setValue] = useState("initalValue")
const refValue = useRef(null);
function onClickHandle(){
setValue(refValue.current.value);
console.log(value);
}
return <div>
  <h1>forwordRef</h1>
<ForwordRefChild ref={refValue}></ForwordRefChild>
<h1>value={value}</h1>
<button onClick={onClickHandle}>save</button>
</div>
*/

  
  /*
  // passing data from parent to child and child to parent 
const [msg, setMsg] = useState("");
  const fromParent = "i m holding parent data";
  function gettingDataFromChild(d) {
    console.log(d);
    setMsg(d);
  }
  return (
    <div>
      <TableUsingMaterial
        childData={fromParent} // sending data from parent to child
        sendDataToParent={gettingDataFromChild} //sending function from parent to child so that we call that function from child and get data from child to parent
      />

      <h1>parent:{msg}</h1>
    </div>
  );
*/

/*
// infinite loop problem of useEffect hooks
  const [num, setNum] = useState(1);
  useEffect(() => {
    setNum(num + 1);
  }, []);

  function onClickHandle() {
    setNum(num + 1);
  }

  return <h1 onClick={onClickHandle}>num is :{num}</h1>;
*/

  /* 
  //useEffect hooks
    const [growth, setGrowth] = useState(0); 
    const [nirvana, setNirvana] = useState(false);
   
    // useEffect function get run when the component is either mouted first time(born) or updated or die and it's depend on 2nd parameter  
  //if we pass "empty Array" as 2nd parameter then component is mouted first time(born) if we pass "nothing" as 2nd parameter  then it run on every time whenever state changs(initial mount time and every update)
    // if we pass any "variable" in Array as 2nd parameter then it run only when that "variable" value get chang.
    // we can use "Hooks" more than one time also
    useEffect(() => {
      // we r passing "nirvana" in array as 2nd paramter so it will run when "nirvana" chang it's state and initial mount time also.
      if (born) {
        document.title = "nirvana attained";
      }
    }, [nirvana]);
  
    useEffect(() => {
      //we passed "empty Array" so it will run only mouted first time(born)
      console.log("i m born");
    }, []);
  
    useEffect(() => {
      if (born) {
        // not provied 2nd parameter so it run on whenever State changs( "initial mount" and "every update") but we use "born" variable for stop running this on "initial mount" and only run on "every update"
        console.log("make mistake and learn");
      } else {
        born = true;
      }
      if (growth> 20) {
        setNirvana(true);
      }
      return function cleanUp() {
        console.log("clean up after mistake");
      };
    });
  
    const growthHandle = () => {
      setGrowth(growth + 10);
    };
    return (
      <div className="App">
        <header className="App-header">
          <h2>useEffect</h2>
          <h3>Growth:{growth}</h3>
          <button onClick={growthHandle}>learn and growth</button>
        </header>
      </div>
    );
  */
 
  /*
// example of seter function can't chang value immediate if you console it, it will chang on next rerender
//(but it wiil reflec on dom iimediate) because it is function which get update on next reender 
  
  const [lableState, setLableState] = useState("test component");

  useEffect(() => {
    console.log("useEfect value: "+lableState);
  },[lableState ]);

  function onClickHandle() {
    setLableState("test componnet chang");
     console.log(lableState); // after 1tclick privious value show "test component" after 2nd click show "test componnet chang"
    
  }
  return (
    <div onClick={onClickHandle}>
       <p>lable is :{lableState}</p> 
       {/* after 1tclick privious value show "test componnet chang" because it is DOM   
    </div>
  );
*/
}
export default Test;
