import React from "react";
import { BrowserRouter, Route, Redirect, NavLink } from "react-router-dom";
// Browser Router is a component that allows us to manage surround It makes our application routing capable.
import LogInPage from "./pages/login";
import AboutPage from "./pages/aboutPage";
import Table from "./pages/Table";
import Test from "./pages/Test";
import Test_Class from "./pages/Test_Class";
import TableMaterial from "./pages/TableUsingMaterial";
import UploadImaage from "./pages/UploadImage";
import MainUseMemo from "./pages/mainUseMemo";
import PriviousState from "./pages/priviousState";
import HOC from "./pages/HOC";
import ReanderProp from "./pages/ReanderProp";
import Mobx from "./pages/Mobx";
import NEW from "./pages/new";
import TestMe from "./pages/TestMe";
import LazyLoading from "./pages/LazyLoading";
import StyledComponents from "./pages/StyledComponents";
import SwitchComponent from "./pages/SwitchComponent";
import "./App.css";
import HomePage from "./pages/homePage";
import DepositPage from "./pages/depositPage";
import WithdrawalPage from "./pages/withdrawalPage";

// login page
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={StyledComponents}></Route>
          <Route
            path="/about"
            exact
            // replace 'render' by creating 'component' "AboutPage.js"
            render={() =>
              localStorage.getItem("token") ? (
                <Table />
              ) : (
                <Redirect to="/"></Redirect>
              )
            }
          ></Route>
          {/*adding 3rd route which is "user route", which means when I go to http://localhost:3000/user it should load something.*/}
        </header>
      </div>
    </BrowserRouter>
  );
}

// redux page
/*
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* links 
          <ul className="ul-style">
            <li className="li-style">
              <NavLink
                className="App-link"
                to="/"
                exact
                activeClassName="Link-active-style"
              >
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                className="App-link"
                to="/deposit"
                exact
                activeClassName="Link-active-style"
              >
                Deposit
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                className="App-link"
                to="/withdraw"
                exact
                activeClassName="Link-active-style"
              >
                Withdraw
              </NavLink>
            </li>
          </ul>

          <Route path="/" exact component={HomePage}></Route>
          <Route path="/deposit" exact component={DepositPage}></Route>

          <Route path="/withdraw" exact component={WithdrawalPage}></Route>
        </header>
      </div>
    </BrowserRouter>
  );
}
*/
export default App;
