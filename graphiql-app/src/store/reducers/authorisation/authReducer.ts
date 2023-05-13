import { UserInfo } from 'firebase/auth';
import { IAuthInfoState } from '../../../@types/store';

const initialState = {
  displayName: '',
  email: '',
  phoneNumber: '',
  photoURL: '',
  providerId: '',
  uid: '',
};

export default function authReducer(state: UserInfo = initialState, action) {
  switch (action.type) {
    case 'auth/addUser': {
      return {
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
