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

const create = async (name) => {
  const product = await productsModel.createModel(name);
  const data = await productsModel.findById(product.insertId);
  return { status: 'CREATED', data };
};

module.exports = {
  getAll,
  getById,
  create,
};