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
      message: 'The name must be longer that 3 characters',
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
      message: 'Please input the correct email',
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
      message:
        'The password must be at least 8 characters long, contain at least 1 uppercase letter and at least 1 number',
    };
  }
}

export default SignUpValidator;
