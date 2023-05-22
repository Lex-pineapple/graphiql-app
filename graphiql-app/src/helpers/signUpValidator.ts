import { AuthMsg } from '../languages/authMsg';

class SignUpValidator {
  ValidateSignUp(name: string, email: string, password: string) {
    const nameValid = this.ValidateName(name);
    const emailValid = this.ValidateEmail(email);
    const passwordValid = this.ValidatePassword(password);
    return {
      valid: nameValid.res && emailValid.res && passwordValid.res,
      details: {
        nameValid,
        emailValid,
        passwordValid,
      },
    };
  }

  ValidateName(name: string) {
    if (name.length > 3)
      return {
        res: true,
        message: '',
      };
    return {
      res: false,
      message: AuthMsg.signUpNameError,
    };
  }

  ValidateEmail(email: string) {
    const emailParts = email.split('@');
    if (emailParts.length > 1) {
      if (emailParts[emailParts.length - 1].split('.').length > 1) {
        return {
          res: true,
          message: '',
        };
      }
    }
    return {
      res: false,
      message: AuthMsg.signUpEmailError,
    };
  }

  ValidatePassword(password: string) {
    if (password.length > 8 && password.match(/[A-Z]/) && password.match(/[0-9]/))
      return {
        res: true,
        message: '',
      };
    return {
      res: false,
      message: AuthMsg.signUpPwdError,
    };
  }
}

export default SignUpValidator;
