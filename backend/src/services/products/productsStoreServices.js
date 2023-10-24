const productsModel = require('../../models/products/productsStoreModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return { status: 'SUCCESFULL', data: products };
};

const getById = async (id) => {
  const product = await productsModel.findById(id);
  
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  
  return { status: 'SUCCESFULL', data: product };
};

module.exports = {
  getAll,
  getById,
};