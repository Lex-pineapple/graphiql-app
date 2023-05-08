function SignUp(props: { handleClick: (type: string) => void }) {
  return (
    <div className="signup__form">
      <div className="signup__form-bigtext">Sign up</div>
      <p className="signup__form-subtext">Join the GraphGl community.</p>
      <p className="signup__form-input-header-text">Name</p>
      <input type="text" className="signup__form-input input-text input" placeholder="Your name" />
      <p className="signup__form-input-header-text">Email</p>
      <input type="email" className="signup__form-input input-email input" placeholder="Email" />
      <p className="signup__form-input-header-text">Password</p>
      <input
        type="password"
        className="signup__form-input input-password input"
        placeholder="Enter your password"
      />
      <button className="signup__form-btn-signup btn-signup btn">Get started now</button>
      <div className="signin__form-text--under-container">
        Already a user?{' '}
        <p className="signin__form-text--highlight" onClick={() => props.handleClick('signin')}>
          Log in
        </p>
      </div>
    </div>
  );
}

export default SignUp;
