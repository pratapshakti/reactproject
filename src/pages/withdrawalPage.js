import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as BlanceAction from "./../action/BlanceAction";
export default function WithdrawalPage() {
  const balance = useSelector((state) => state.BlanceReducers.balance);
  const loading = useSelector((state) => state.BlanceReducers.loading);
  const lone = useSelector((state) => state.LoneReducers.lone);
  const dispatch = useDispatch();
  function withdrawHandle() {
    //dispatch({ type: "WITHDRAW", payload: 10 });
    dispatch(BlanceAction.AsynWithdraw());
  }
  return (
    <div>
      withdrawalPage
      {loading ? <h2>saving....</h2> : <h1>balance is {balance}</h1>}
      <button onClick={withdrawHandle}>withdraw</button>
      <h1>{lone ? "lone applied" : "lone needed"}</h1>
    </div>
  );
}
