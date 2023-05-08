const initialState = false;

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'login/logIn/Out':
      return action.payload;
    default:
      return state;
  }
}
