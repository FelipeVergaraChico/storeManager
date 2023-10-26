const productService = require('../../services/products/productsStoreServices');
const mapHtppStatus = require('../../utils/mapStatutsHTTP');
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

const create = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await productService.create(name);
  return res.status(mapHtppStatus(status)).json(data);
};

module.exports = {
  getAll,
  getById,
  create,
};