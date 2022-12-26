const REGEXP = {
  email: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/,
  userName: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
};

export default REGEXP;
