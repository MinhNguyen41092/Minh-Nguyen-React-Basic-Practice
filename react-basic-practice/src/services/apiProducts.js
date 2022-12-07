import { PRODUCTS_API } from '../constants/api';

/**
 * Get data product by productId
 * @param {number} productId
 *
 * @returns {object} product
 */

export const getProductById = async (productId) => {
  try {
    const response = await fetch(`${PRODUCTS_API}?id=${productId}`);

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Get data product by productName
 * @param {number} name of product
 *
 * @returns {object} product
 */

export const getProductByName = async (name) => {
  try {
    const response = await fetch(`${PRODUCTS_API}?name=${name}`);

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Get all data of product
 * @returns {object} list products
 */

export const getListProducts = async () => {
  try {
    const response = await fetch(`${PRODUCTS_API}`);

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Get list data of product (limit: 6 products)
 * @param {number} pageNumber
 *
 * @returns {object} list 6 products
 */

export const getListProductsLimit = async (pageNumber) => {
  try {
    const response = await fetch(`${PRODUCTS_API}_limit=6&_page=${pageNumber}`);

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
