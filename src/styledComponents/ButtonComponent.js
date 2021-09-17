import React from "react";
//creating button component and styled it and display it on "StyledComponents.js"
export default function ButtonComponent({ className, buttonLable }) {
  return <button className={className}>{buttonLable}</button>;
}
