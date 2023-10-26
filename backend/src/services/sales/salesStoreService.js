const salesModel = require('../../models/sales/salesStoreModel');

const getAll = async () => {
  const sales = await salesModel.getAll();
  return { status: 'SUCCESFULL', data: sales };
};

const getById = async (id) => {
  const sales = await salesModel.getById(id);

  if (sales.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }
  return { status: 'SUCCESFULL', data: sales };
};

module.exports = {
  getAll,
  getById,
};