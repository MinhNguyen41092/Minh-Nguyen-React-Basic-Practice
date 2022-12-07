import { USERS_URL } from '../constants/api';

/**
 * Get data of user by userId
 * @param {number} id of user
 *
 * @returns {object} user
 */

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${USERS_URL}?id=${id}`);

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Get data of user by mail
 * @param {string} mail
 *
 * @returns {object} user
 */

export const getUserByMail = async (mail) => {
  try {
    const response = await fetch(`${USERS_URL}?mail=${mail}`);

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Add new user
 * @param {object} data
 */

export const createUser = async (data) => {
  try {
    await fetch(USERS_URL, {
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
