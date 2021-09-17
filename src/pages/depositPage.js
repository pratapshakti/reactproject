import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as BlanceAction from "./../action/BlanceAction";
export default function DepositPage() {
  const balance = useSelector((state) => state.BlanceReducers.balance);
  const loading = useSelector((state) => state.BlanceReducers.loading);
  const lone = useSelector((state) => state.LoneReducers.lone);
  const dispatch = useDispatch();
  function depositHandle(params) {
    //dispatch({ type: "DIPOSIT", payload: 10 });
    dispatch(BlanceAction.AsynDeposit());
  }
  return (
    <div>
      depositPage
      {loading ? <h2>saving....</h2> : <h1>balance is {balance}</h1>}
      <button onClick={depositHandle}>deposit</button>
      <h1>{lone ? "lone applied" : "lone needed"}</h1>
    </div>
  );
}
