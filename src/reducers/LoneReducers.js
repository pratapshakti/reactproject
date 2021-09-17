const intialState = {
  lone: false,
};
function LoneReducers(state = intialState, action) {
  switch (action.type) {
    case "APPLY":
      return { lone: true };
    default:
      return state;
  }
}
export default LoneReducers;
