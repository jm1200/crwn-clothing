export const SET_CURRENT_USER = "SET_CURRENT_USER";
const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export default setCurrentUser;
