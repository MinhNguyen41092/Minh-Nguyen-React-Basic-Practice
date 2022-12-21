const REGEXP = {
  REGEXP_MAIL: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  REGEXP_PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/g,
  REGEXP_USER_NAME: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/g,
};

const MINIMUM_PASSWORD_LENGTH = 8;

export { REGEXP, MINIMUM_PASSWORD_LENGTH };
