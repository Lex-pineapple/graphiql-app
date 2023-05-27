export interface IAuthSignUpInputProps {
  label: AuthMsg.signUpNameLabel | AuthMsg.signUpEmailLabel | AuthMsg.signUpPwdLabel;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorType: boolean;
  errorMessage: string;
  format?: boolean;
}

export interface IAuthSignInInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorType: string;
  errorMessage: string;
  format?: boolean;
}
