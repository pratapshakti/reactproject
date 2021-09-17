import React from 'react';
import ReactDOM from "react-dom";

 function OtherPort() {
    return ReactDOM.createPortal(
        <div> 
         <h1>OtherPort</h1>   
        </div>,
        document.getElementById("other-root")
        )
        
    
}
export default OtherPort;
