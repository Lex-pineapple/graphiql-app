const initialState = false;

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'login/loggedIn':
      return action.payload;
    default:
      return state;
  }
}
