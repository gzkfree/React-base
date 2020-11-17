import * as actionType from "../actionType";

export function Authorization_update(data) {
  return {
    type: actionType.AUTHORIZATION_UPDATE,
    data,
  };
}
