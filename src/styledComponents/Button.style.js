import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
//1st
/* 
export const StyledButton = styled.button `
width:200px ;
height: 50px;
background-color: ${(props)=>props.backgroundColor};
&:hover{
    background-color: red;
}
`
*/
//2nd:
/*
export const StyledButton = styled.button `
width:200px ;
height: 50px;
background-color: ${(props)=>props.backgroundColor};
&:hover{
    & label{
        color:red;
    }
}
`

export const ButtonLable = styled.label`
font-size: 25px;
color: white;
`
*/
//3rd  importing external Button component and styling here and display in styledComponent
export const Styledbutton = styled(ButtonComponent)`
  width: 200px;
  height: 50px;
  background-color: ${(props) => (props.primary ? "green" : "blue")};
  &:hover {
    background-color: red;
  }
`;
