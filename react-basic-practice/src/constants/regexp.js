const REGEXP = {
  inputEmail: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  inputPassword: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/,
  inputUserName: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
};

export default REGEXP;
