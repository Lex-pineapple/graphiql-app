import { IAction } from '../../../@types/store';

const initialState = false;

export default function loginReducer(state = initialState, action: IAction<boolean>) {
  switch (action.type) {
    case 'login/loggedIn':
      return action.payload;
    default:
      return state;
  }
}
