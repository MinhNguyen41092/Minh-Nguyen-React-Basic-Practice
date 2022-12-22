const REGEXP = {
  REGEXP_MAIL: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  REGEXP_PASSWORD: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/,
  REGEXP_USER_NAME: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
};

export default REGEXP;
