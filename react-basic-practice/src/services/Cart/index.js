import axios from 'axios';
import { CART_API } from '../../constants/api';

/**
 * Add new cart for new user
 * @param {object} data userId and empty list item
 */
export const createUserCart = async (data) => {
  const res = await axios.post(CART_API, data);

  return res.data;
};

/**
 * Get list product by userId
 * @param {number} userId
 *
 * @returns {object} list product of user
 */
export const getCartByUserId = async (userId) => {
  const res = await axios.get(`${CART_API}?userId=${userId}`);

  return res.data;
};

/**
 * Update list product in cart of user
 * @param {number} userId
 * @param {object} data list product (productId, quantity)
 */
export const update = async (userId, data) => {
  const res = await axios.put(`${CART_API}?userId=${userId}`, data);

  return res.data;
};
