const productService = require('../../services/products/productsStoreServices');
const mapStatus = require('../../utils/mapStatutsHTTP');

const getAll = async (_req, res) => {
  const { status, data } = await productService.getAll();
  console.log('status retornado:', mapStatus(status));
  return res.status(mapStatus(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productService.getById(id);
  return res.status(mapStatus(status)).json(data);
};

module.exports = {
  getAll,
  getById,
};