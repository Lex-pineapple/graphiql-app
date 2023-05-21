import { FormattedMessage } from 'react-intl';
import { IAuthSignInInputProps } from '../../@types/auth';

function AuthSignInInput(props: IAuthSignInInputProps) {
  return (
    <>
      <input
        type={props.type}
        className={`signin__form-input input-${props.type} input`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <p
        className={
          props.errorType === props.type
            ? 'signin__form-input-validator-error-email active'
            : 'signup__form-input-validator-error-email'
        }
      >
        {props.format && props.errorType === props.type ? (
          <FormattedMessage id={props.errorMessage} />
        ) : (
          props.errorMessage
        )}
      </p>
    </>
  );
}

export default AuthSignInInput;
