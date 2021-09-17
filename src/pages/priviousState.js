import React,{useState,useEffect,useRef} from "react";

function PriviousState (){

    //storing privious state is: we will find it inside call back function of setter function.(it will aoutomatically provied by react)

  const [count, setCount] = useState(null);
  const [priviousValue, setpriviousValue] = useState(null);
  function onClickHandle() {
    let rand = Math.floor(Math.random() * 10);
    setCount((pre)=>{
      setpriviousValue(pre);
      console.log(pre)
    return rand;
    });
    
  }

  return (
    <div>
      <h1>privious value:{priviousValue}</h1>
      <h1>current value:{count}</h1>
      <button onClick={onClickHandle}>chang count</button>
    </div>
  );
/*
  // QUS:(on privious state) what will value of count on each click?
  const [count, setCount] = useState(null);
  function onClickHandle() {
    for (let i = 0; i < 5; i++) {
      // setCount(count+1); // count value increse by 1 on each click beacuse the loop get execute before updation of count.
      // soluation: use priviouse state:
      setCount(count =>count + 1); // now count value increse by 5 on each click
    }
  }

  return (
    <div>
      <h1>privious value:{priviousValue}</h1>
      <h1>current value:{count}</h1>
      <button onClick={onClickHandle}>chang count</button>
    </div>
  );
*/

/*
//anoter way of storing privious state is: we will store in current property of ref on each update(useEffect)

  const [count, setCount] = useState(null);
  const [priviousValue, setpriviousValue] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    ref.current = count;
  });
  function onClickHandle() {
    let rand = Math.floor(Math.random() * 10);
    setCount(rand);
    setpriviousValue(ref.current);
  }

  return (
    <div>
      <h1>privious value:{priviousValue}</h1>
      <h1>current value:{count}</h1>
      <button onClick={onClickHandle}>chang count</button>
    </div>
  );

*/
}
export default PriviousState;