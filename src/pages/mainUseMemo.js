//useMemo problem statement: whenevre we click on "update items button" it will also call "multicount function"
//which is umwanted call ,it will only call on "update count button", so using useMemo we can tell "multicount function"
// to call only when we "update count button"
/*
import React,{useState} from "react";
function MainUseMemo (){
const [count,setCount] = useState(0);
const [items,setItems] = useState(10);
 function multicount (){
     console.log("muticount");
    return count*5;
 }
    return (<div>
<h1>useMemo</h1>
<h2>count :{count}</h2>
<h2>items:{items}</h2>
<h2>{multicount()}</h2>
<button onClick={()=>{setCount(count+1)}}>update count</button>
<button onClick={()=>{setItems(items*10)}}>update items</button>
    </div>)
}
export default MainUseMemo;
*/
// solution using "useMemo"
/*
import React,{useState,useMemo} from "react";
function MainUseMemo (){
const [count,setCount] = useState(0);
const [items,setItems] = useState(10);
const multicountuseMemo = useMemo(function multicount (){
    console.log("muticount");
   return count*5;
},[count]);// run only when cont chang
 
    return (<div>
<h1>useMemo</h1>
<h2>count :{count}</h2>
<h2>items:{items}</h2>
<h2>{multicountuseMemo}</h2>
<button onClick={()=>{setCount(count+1)}}>update count</button>
<button onClick={()=>{setItems(items*10)}}>update items</button>
    </div>)
}export default MainUseMemo;
*/

//2nd example: now here whenever we click on button to chang the value of count the the <child useMemo> also get called
// but we are not chang anything in <childUseMemo> component so it will decrese over performance.
/*
import React, { useState, useMemo } from "react";
import ChildUseMemo from "./childUseMemo";
function MainUseMemo() {
  const [count, setCount] = useState(0);
  const ary = ["one","two","three"] // not work using React.memo()
  return (
    <div>
      <h1>useMemo</h1>
      <h2>count :{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        update count
      </button>
      <h2>normal reander</h2>
      <ChildUseMemo title ="this is the title" arry ={ary}></ChildUseMemo>
    </div>
  );
}
export default MainUseMemo;
*/
//solution 1:make use of "React.memo()" in <ChildUseMemo> ,make "export default React.memo(ChildUseMemo)"";
//problem : it will work fine of primitive data type(string,num) passing as props in <ChildUseMemo> but not
// work for "Array/object" it will again rerendering child component every time.
//solution 2: "useMemo" hook using which we can control unwanted rendering of <ChildUseMemo> component for Array/object

import React, { useState, useMemo, useEffect } from "react";
import { useCallback } from "react";
import ChildUseMemo from "./childUseMemo";
//const ary = ["one","two","three"]
function MainUseMemo() {
  const [count, setCount] = useState(0);
  const ary = ["one", "two", "three"];

  const memoArry = useMemo(() => ary, []);
  //   const memoChild = useMemo(()=>{
  //    return <ChildUseMemo title ="this is the title" array ={ary}></ChildUseMemo>
  //   },[])
  const fetchData = function (value){
      return fetch(`https://api.github.com/users/${value}`)
      .then((responce) => responce.json())
      .then((jason) => {
        console.log(jason);
      });
  }
  const memoFetchData = useCallback(fetchData,[])
  /*
  //before using useCallBack hook
  useEffect(() => {
    fetchData("techsithgit")
  }, []);
  */
  // after using useCallBack hook
  useEffect(() => {
    // fetchData("techsithgit")
     memoFetchData("techsithgit");
   }, [memoFetchData]);
  return (
    <div>
      <h1>useMemo</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        update count -{count}
      </button>
      <h2>memo reander</h2>
      {/* <ChildUseMemo title ="this is the title" array ={ary} ></ChildUseMemo> problem with React.memo is it can
      not differciate for refernce data type(array,object) because each time when parent rerender(on each click)
      it create new reference (new ary) so again child component rerender because we r paasing array as prop
      in child component solution : useMemo hook it is used to memozied value */}
      {/* <ChildUseMemo title ="this is the title" array ={memoArry} name={name} ></ChildUseMemo> */}
      {/* <ChildUseMemo
        title="this is the title"
        fetchData={fetchData}
      ></ChildUseMemo>  the same problem here also here for refernce data type(function) because each time when
       parent rerender(on each click )it create  new reference (new function) so again child component rerender
       because we r paasing function as prop in child componentsolution : useCallBack hook it is used to memozied function  */}
     <ChildUseMemo
        title="this is the title"
        fetchData={memoFetchData}
      ></ChildUseMemo> 
    </div>
  );
}
export default MainUseMemo;
