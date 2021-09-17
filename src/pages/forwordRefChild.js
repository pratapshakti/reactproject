import React,{forwardRef} from "react";
function ForwordRefChild (props,inputRef){

return <input type = "text" ref = {inputRef}></input>
}
export default forwardRef(ForwordRefChild) ;