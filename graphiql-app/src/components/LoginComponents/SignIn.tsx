function SignIn(props: { handleClick: (type: string) => void }) {
  return (
    <div className="signin__form">
      <div className="signin__form-bigtext">Hello!</div>
      <p className="signin__form-subtext">Welcome to GraphQl client.</p>
      <button className="signin__form-btn-google btn-google btn">Log in with Google</button>
      <p className="signin__form-hr">or</p>
      <input
        type="email"
        className="signin__form-input input-email input"
        placeholder="Your email"
      />
      <input
        type="password"
        name=""
        id=""
        className="signin__form-input input-password input"
        placeholder="Password"
      />
      <p className="signin__form-text--highlight signin__form-text--right">Forgot password?</p>
      <button className="signin__form-btn-login btn-login btn">Log In</button>
      <div className="signin__form-text--under-container">
        Don&apos;t have an account?{' '}
        <p className="signin__form-text--highlight" onClick={() => props.handleClick('signup')}>
          Sign up
        </p>
      </div>
    </div>
  );
}

export default SignIn;
