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

const createSale = async () => {
  const [sales] = await connection.execute('INSERT INTO sales VALUES ()');
  return sales;
};

const insertItem = async (saleId, productId, quantity) => {
  const [sales] = await connection.execute(
    `
  INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)`, 
    [saleId, productId, quantity],
  );
  return sales;
};

module.exports = {
  getAll,
  getById,
  createSale,
  insertItem,
};