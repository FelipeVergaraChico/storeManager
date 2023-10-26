const connection = require('../connection');
const { getAllSalesQuery, getByIdSalesQuery } = require('../querys/salesQuery');
const { mapSales, mapSale } = require('../../utils/mapSalesData');

const getAll = async () => {
  const [sales] = await connection.execute(getAllSalesQuery);
  const data = mapSales(sales);
  return data;
};

const getById = async (id) => {
  const [sales] = await connection.execute(getByIdSalesQuery, [id]);
  const data = mapSale(sales);
  return data;
};

module.exports = {
  getAll,
  getById,
};