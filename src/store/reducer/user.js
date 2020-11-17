const stateData = {
  Authorization: "5555",
};
const userReducer = function (state = stateData, action) {
  switch (action.type) {
    case "AUTHORIZATION_UPDATE": {
      return { ...state, Authorization: action.data };
    }
    default:
      return state;
  }
};
export default userReducer;
