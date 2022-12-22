import axios from 'axios';
import { USERS_API } from '../constants/api';

export const getAllUsers = async () => {
  const res = await axios.get(`${USERS_API}`);

  return res.data;
};

/**
 * Get data of user by userId
 * @param {number} id of user
 *
 * @returns {object} user
 */
export const getUserById = async (id) => {
  const res = await axios.get(`${USERS_API}?id=${id}`);

  return res.data;
};

/**
 * Get data of user by mail
 * @param {string} mail
 *
 * @returns {object} user
 */
export const getUserByMail = async (mail) => {
  const res = await axios.get(`${USERS_API}?mail=${mail}`);

  return res.data;
};

/**
 * Add new user
 * @param {object} data user's information (user name, email, password)
 */
export const createUser = async (data) => {
  const res = await axios.post(USERS_API, data);

  return res.data;
};
