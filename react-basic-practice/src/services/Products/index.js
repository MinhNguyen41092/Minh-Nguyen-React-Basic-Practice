import axios from 'axios';
import { PRODUCTS_API } from '../../constants/api';

/**
 * Fetch api products
 * @param {number} pageNumber
 *
 * @returns {object} list 6 products
 */
export const getListProducts = async (pageNumber, keyword = '') => {
  console.log(keyword);
  const res = await axios.get(`${PRODUCTS_API}?_page=${pageNumber}&_limit=6&name_like=${keyword}`);

  return res.data;
};

/**
 * Get data product by productId
 * @param {number} productId
 *
 * @returns {object} product
 */
export const getProductById = async (productId) => {
  const res = await axios.get(`${PRODUCTS_API}?id=${productId}`);

  return res.data;
};
