const URL_API = {
  BASE_URL: 'http://localhost:3000',
  USERS_URL: '/users',
  PRODUCTS_URL: '/products',
  CART_URL: '/cart',
};

const USERS_API = `${URL_API.BASE_URL}${URL_API.USERS_URL}`;
const PRODUCTS_API = `${URL_API.BASE_URL}${URL_API.PRODUCTS_URL}`;
const CART_API = `${URL_API.BASE_URL}${URL_API.CART_URL}`;

export { USERS_API, PRODUCTS_API, CART_API };
