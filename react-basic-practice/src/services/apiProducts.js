import axios from 'axios';
import { PRODUCTS_API } from '../constants/api';

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

/**
 * Get data product by productName
 * @param {number} name of product
 *
 * @returns {object} product
 */
export const getProductByName = async (name) => {
  const res = await axios.get(`${PRODUCTS_API}?name=${name}`);

  return res.data;
};

/**
 * Get all data of product
 * @returns {object} list products
 */
export const getListProducts = async () => {
  const res = await axios.get(`${PRODUCTS_API}`);

  return res.data;
};

/**
 * Get list data of product (limit: 6 products)
 * @param {number} pageNumber
 *
 * @returns {object} list 6 products
 */
export const getListProductsLimit = async (pageNumber) => {
  const res = await axios.get(`${PRODUCTS_API}_limit=6&_page=${pageNumber}`);

  return res.data;
};
