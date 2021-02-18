const stateData = {
  Authorization: sessionStorage.getItem("Authorization")
    ? sessionStorage.getItem("Authorization")
    : "",
};
const userReducer = function (state = stateData, action) {
  switch (action.type) {
    case "AUTHORIZATION_UPDATE": {
      sessionStorage.setItem("Authorization", action.data);
      return { ...state, Authorization: action.data };
    }
    default:
      return state;
  }
};
export default userReducer;
