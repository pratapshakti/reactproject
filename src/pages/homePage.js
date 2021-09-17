import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function HomePage() {
  const balance = useSelector((state) => state.BlanceReducers.balance);
  const loading = useSelector((state) => state.BlanceReducers.loading);
  const lone = useSelector((state) => state.LoneReducers.lone);
  const dispatch = useDispatch();
  function loneApplyHAndle(params) {
    dispatch({ type: "APPLY" });
  }

  return (
    <div>
      homePage
      {loading ? <h2>saving....</h2> : <h1>balance is {balance}</h1>}
      <button onClick={loneApplyHAndle}>
        {lone ? "lone applied" : "lone Needed"}
      </button>
    </div>
  );
}
