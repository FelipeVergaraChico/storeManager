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

const validadeId = async (sales) => {
  const data = await Promise.all(
    sales.map(async (sale) => {
      const { productId } = sale;
      const product = await salesModel.getById(productId);
      if (product.length === 0) {
        return { status: 'NOT_FOUND' };
      }
      return null;
    }),
  );
  const noError = data.filter((r) => r && r.status === 'NOT_FOUND');
  return noError;
};

const create = async (salesSold) => {
  const data = await salesModel.createSale();
  const verifyErr = await validadeId(salesSold);
  if (verifyErr.length > 0) {
    return {
      status: 'NOT_FOUND',
      data: { message: 'Product not found' },
    };
  }
  salesSold.map(async (s) => {
    const { productId, quantity } = s;
    await salesModel.insertItem(data.insertId, productId, quantity);
  });
  return { status: 'CREATED',
    data: {
      id: data.insertId,
      itemsSold: salesSold,
    },
  };
};

module.exports = {
  getAll,
  getById,
  create,
};