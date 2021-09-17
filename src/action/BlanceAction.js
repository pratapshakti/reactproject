export function loading() {
  return { type: "LOADING" };
}
export function deposit() {
  return { type: "DIPOSIT", payload: 10 };
}
export function withdraw() {
  return { type: "WITHDRAW", payload: 10 };
}
export function AsynDeposit() {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(deposit());
    }, 5000);
  };
}
export function AsynWithdraw() {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(withdraw());
    }, 5000);
  };
}
