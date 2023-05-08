export interface IAuthInfoState {
  uid: string;
  name: string;
  authProvider: string;
  email: string;
}

export interface IStore {
  auth: {
    authInfo: IAuthInfoState;
    login: boolean;
  };
}
