interface IAuthSignInInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorType: string;
  errorMessage: string;
}

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
        {props.errorType === props.type && props.errorMessage}
      </p>
    </>
  );
}

export default AuthSignInInput;
