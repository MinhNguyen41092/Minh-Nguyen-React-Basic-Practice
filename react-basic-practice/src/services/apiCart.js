import { CART_API } from '../constants/api';

/**
 * Add new cart for new user
 * @param {object} data userId and empty list item
 */
export const createUser = async (data) => {
  await fetch(CART_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

/**
 * Get list product by userId
 * @param {number} userId
 *
 * @returns {object} list product of user
 */
export const getCartByUserId = async (userId) => {
  const response = await fetch(`${CART_API}?userId=${userId}`);
  const data = await response.json();

  return data;
};

/**
 * Update list product in cart of user
 * @param {number} userId
 * @param {object} data list product (productId, quantity)
 */
export const update = async (userId, data) => {
  await fetch(`${CART_API}?userId=${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
