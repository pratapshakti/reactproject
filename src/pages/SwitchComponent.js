import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import HomePage from "./homePage";
import DepositPage from "./depositPage";
import WithdrawalPage from "./withdrawalPage";

function SwitchComponent() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* links */}
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
          {/*PROBLEM if 2 root havw same path("/deposit") then both component will display because normally
           seach will done in all path available so (DepositPage,WithdrawalPage) both get display 
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/deposit" exact component={DepositPage}></Route>
        <Route path="/deposit" exact component={WithdrawalPage}></Route> 
        <Route path="/withdraw" exact component={WithdrawalPage}></Route>*/}
          {/* solution:<switch> it will stop search when it meet to first match */}
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/deposit" exact component={DepositPage}></Route>
            <Route path="/deposit" exact component={WithdrawalPage}></Route>
            <Route path="/withdraw" exact component={WithdrawalPage}></Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}
export default SwitchComponent;
