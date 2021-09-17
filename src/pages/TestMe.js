import React, { useState } from "react";

function TestMe (){
    return (<div>
<ClickCount></ClickCount>
        </div>) 
}
export default TestMe;

function ClickCount (){

    const [count,setCount] = useState(0);
    function onClickHandle (){
        setCount(count+1);
        }
        return (<div>

            <button onClick={onClickHandle}>click :{count}</button>
                    </div>) 
}
