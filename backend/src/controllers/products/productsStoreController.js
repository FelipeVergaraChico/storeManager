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
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res.status(422).json({ 
      message: '"name" length must be at least 5 characters long' });
  }
  const { status, data } = await productService.create(name);
  return res.status(mapHtppStatus(status)).json(data);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ message: '"name" is required' });
  }

  if (name.length < 5) {
    return res.status(422).json({
      message: '"name" length must be at least 5 characters long',
    });
  }
  const { status, data } = await productService.update(id, name);
  return res.status(mapHtppStatus(status)).json(data);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productService.remove(id);
  if (status !== 'NO_CONTENT') {
    return res.status(mapHtppStatus(status)).json(data);
  }
  res.status(mapHtppStatus(status)).end();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};