import axios from 'axios';
import { USERS_API } from '../../constants/api';

/**
 * Get data of user by userId
 * @param {number} id of user
 *
 * @returns {object} user
 */
export const getUserById = async (id) => {
  const res = await axios.get(`${USERS_API}/${id}`);

  return res.data;
};

/**
 * Get data of user by mail
 * @param {string} mail
 *
 * @returns {object} user
 */
export const getUserByEmail = async (mail) => {
  const res = await axios.get(`${USERS_API}?email=${mail}`);

  return res.data;
};

/**
 * Add new user
 * @param {object} data user's information (user name, email, password)
 */
export const createUser = async (data) => {
  await axios.post(USERS_API, data);
};
