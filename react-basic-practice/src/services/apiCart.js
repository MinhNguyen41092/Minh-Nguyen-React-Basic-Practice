import { CART_API } from '../constants/api';

/**
 * Add new cart for new user
 * @param {object} data
 */

export const createUser = async (data) => {
  try {
    await fetch(CART_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Get list product by userId
 * @param {number} userId
 *
 * @returns {object} list product of user
 */

export const getCartByUserId = async (userId) => {
  try {
    const response = await fetch(`${CART_API}?userId=${userId}`);

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Update list product in cart of user
 * @param {number} userId
 * @param {object} data
 */
export const update = async (userId, data) => {
  try {
    await fetch(`${CART_API}?userId=${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
