import { FormattedMessage } from 'react-intl';
import { AuthMsg } from '../../languages/authMsg';

interface IAuthSignUpInputProps {
  label: AuthMsg.signUpNameLabel | AuthMsg.signUpEmailLabel | AuthMsg.signUpPwdLabel;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorType: boolean;
  errorMessage: string;
}

function AuthSignUpInput(props: IAuthSignUpInputProps) {
  return (
    <>
      <p className="signup__form-input-header-text">
        <FormattedMessage id={props.label} />
      </p>
      <input
        type={props.type}
        className={`signup__form-input input-${props.type} input`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <p
        className={
          props.errorType
            ? `signup__form-input-validator-error-${props.name} active`
            : `signup__form-input-validator-error-${props.name}`
        }
      >
        {props.errorMessage}
      </p>
    </>
  );
}

export default AuthSignUpInput;
