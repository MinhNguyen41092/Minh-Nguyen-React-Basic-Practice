const REGEXP = {
  email: /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z0-9-]+(?:\.[a-z]{2,10}){1,2}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/,
  username: /^(([A-Za-z]+[\\-\\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\\-\\']?)*([A-Za-z]+)?$/,
};

export default REGEXP;
