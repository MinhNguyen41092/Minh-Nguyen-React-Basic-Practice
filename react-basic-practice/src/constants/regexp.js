const REGEXP = {
  email: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/,
  userName: /^(([A-Za-z]+[\\-\\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\\-\\']?)*([A-Za-z]+)?$/,
};

export default REGEXP;
