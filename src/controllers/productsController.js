const productsService = require('../services/productsService');

const getProducts = async (req, res) => {
  const products = await productsService.getProducts();
  return res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const productSearched = await productsService.getById(+id);
  if (!productSearched) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(productSearched);
}

module.exports = { getProducts , getById };
