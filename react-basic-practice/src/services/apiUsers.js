import { USERS_API } from '../constants/api';

/**
 * Get data of user by userId
 * @param {number} id of user
 *
 * @returns {object} user
 */
export const getUserById = async (id) => {
  const response = await fetch(`${USERS_API}?id=${id}`);
  const data = await response.json();

  return data;
};

/**
 * Get data of user by mail
 * @param {string} mail
 *
 * @returns {object} user
 */
export const getUserByMail = async (mail) => {
  const response = await fetch(`${USERS_API}?mail=${mail}`);
  const data = await response.json();

  return data;
};

/**
 * Add new user
 * @param {object} data user's information (user name, email, password)
 */
export const createUser = async (data) => {
  await fetch(USERS_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
