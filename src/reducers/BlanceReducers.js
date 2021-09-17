const initialState = {
  balance: 0,
  loading: false,
};
function BlanceReducers(state = initialState, action) {
  switch (action.type) {
    case "DIPOSIT":
      return { balance: state.balance + action.payload };
    case "WITHDRAW":
      return { balance: state.balance - action.payload };
    case "LOADING":
      return { ...state, loading: true };

    default:
      return state;
  }
}
export default BlanceReducers;
