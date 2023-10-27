const salesStoreService = require('../../services/sales/salesStoreService');
const mapHtppStatus = require('../../utils/mapStatutsHTTP');

const getAll = async (_req, res) => {
  const { status, data } = await salesStoreService.getAll();
  res.status(mapHtppStatus(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesStoreService.getById(id);

  res.status(mapHtppStatus(status)).json(data);
};

const create = async (req, res) => {
  const { body } = req;
  const { status, data } = await salesStoreService.create(body);
  return res.status(mapHtppStatus(status)).json(data);
};

module.exports = {
  getAll,
  getById,
  create,
};