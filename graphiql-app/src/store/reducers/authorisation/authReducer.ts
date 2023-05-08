import { IAuthInfoState } from '../../../@types/store';

const initialState: IAuthInfoState = {
  uid: '',
  name: '',
  authProvider: '',
  email: '',
};

export default function authReducer(state: IAuthInfoState = initialState, action) {
  switch (action.type) {
    case 'auth/uidAdd': {
      return {
        ...state,
        uid: action.payload,
      };
    }
    case 'auth/nameAdd': {
      return {
        ...state,
        name: action.payload,
      };
    }
    case 'auth/authProviderAdd': {
      return {
        ...state,
        authProvider: action.payload,
      };
    }
    case 'auth/email': {
      return {
        ...state,
        email: action.payload,
      };
    }
    case 'auth/fetFull': {
      return {
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
