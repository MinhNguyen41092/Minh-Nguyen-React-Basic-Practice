import { PRODUCTS_API } from '../constants/api';

/**
 * Get data product by productId
 * @param {number} productId
 *
 * @returns {object} product
 */
export const getProductById = async (productId) => {
  const response = await fetch(`${PRODUCTS_API}?id=${productId}`);
  const data = await response.json();

  return data;
};

/**
 * Get data product by productName
 * @param {number} name of product
 *
 * @returns {object} product
 */
export const getProductByName = async (name) => {
  const response = await fetch(`${PRODUCTS_API}?name=${name}`);
  const data = await response.json();

  return data;
};

/**
 * Get all data of product
 * @returns {object} list products
 */
export const getListProducts = async () => {
  const response = await fetch(`${PRODUCTS_API}`);
  const data = await response.json();

  return data;
};

/**
 * Get list data of product (limit: 6 products)
 * @param {number} pageNumber
 *
 * @returns {object} list 6 products
 */
export const getListProductsLimit = async (pageNumber) => {
  const response = await fetch(`${PRODUCTS_API}_limit=6&_page=${pageNumber}`);
  const data = await response.json();

  return data;
};
