const productsModel = require('../models/productsModel');

const getProducts = async () => {
  const products = await productsModel.getProducts();
  return products;
};

const getById = async (id) => {
  const productSearched = await productsModel.getById(id);
  if (!productSearched) {
    return { message: 'Product not found' };
  }
  return productSearched;
};

module.exports = { getProducts, getById };