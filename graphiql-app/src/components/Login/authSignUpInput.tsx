import { FormattedMessage } from 'react-intl';
import { IAuthSignUpInputProps } from '../../@types/auth';

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
        {props.format && props.errorMessage ? (
          <FormattedMessage id={props.errorMessage} />
        ) : (
          props.errorMessage
        )}
      </p>
    </>
  );
}

export default AuthSignUpInput;
