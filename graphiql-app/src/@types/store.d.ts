import { UserInfo } from 'firebase/auth';
import { ISchema } from './graphql';

export interface IAuthInfoState {
  uid: string;
  name: string;
  authProvider: string;
  email: string;
}

export interface IStore {
  auth: {
    authInfo: UserInfo;
    login: boolean;
  };
  qraphql: ISchema;
}
