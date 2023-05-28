import { IAction } from '../../../@types/store';
import { UserInfo } from 'firebase/auth';

const initialState = {
  displayName: '',
  email: '',
  phoneNumber: '',
  photoURL: '',
  providerId: '',
  uid: '',
};

export default function authReducer(state: UserInfo = initialState, action: IAction<UserInfo>) {
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
