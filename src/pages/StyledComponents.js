/** 1st need to install "styled-components" libary to use it , npm install styled-components
 * 2nd add extention name "vscoad-styled-components"
 * 3rd create an folder "styledComponents" in that create element with style and for using import here so
 * no css filed needed so we didnot need classname to styled the components
 * no css file need so disable App.css
 */
import { ThemeProvider } from "styled-components";
import {
  StyledButton,
  ButtonLable,
  Styledbutton,
} from "./../styledComponents/Button.style";
import { AppContainer } from "./../styledComponents/AppContainer";
import { HeaderText } from "./../styledComponents/HeaderText ";
import { GlobalStyle } from "./../GlobalStyle";
const theme1 = {
  font: "Calibri",
};
const theme2 = {
  font: "Arial",
};
export default function StyledCopmponent() {
  return (
    // <div> insted of <div> use AppContenor
    <AppContainer>
      <GlobalStyle /> {/* enable GlobalStyle and disable App.css */}
      <ThemeProvider theme={theme1}>
        <HeaderText>StyledCopmponent Start</HeaderText>
      </ThemeProvider>
      {/* <StyledButton backgroundColor="lightgreen">click me</StyledButton>*/}
      {/* <StyledButton backgroundColor="violet">
         <ButtonLable>click me</ButtonLable>
       </StyledButton> */}
      <Styledbutton primary buttonLable="click here"></Styledbutton>
      <Styledbutton buttonLable="click me"></Styledbutton>
      <ThemeProvider theme={theme2}>
        <HeaderText>StyledCopmponent End</HeaderText>
      </ThemeProvider>
    </AppContainer>

    // </div>
  );
}
/*use of style component:
 1: work as SASS for ex: we apply "ThemeProvider" to work for entire application
 2: Also their is no html in "StyledCopmponent" so we can use it both for "reactNative" and "reactjs" 
 just we need to chang all "styledComponents" folder files. for Ex: "Button.js" need to implement in
 reactNative only
  */
