const getAllSalesQuery = `SELECT
SP.sale_id,
SA.date,
SP.product_id,
SP.quantity
FROM sales_products SP
INNER JOIN sales SA
ON SP.sale_id = SA.id`;

const getByIdSalesQuery = `SELECT 
SA.date, 
SP.product_id, 
SP.quantity
FROM sales_products SP
INNER JOIN sales SA ON SP.sale_id = SA.id
WHERE SP.sale_id = ?`;

module.exports = {
  getAllSalesQuery,
  getByIdSalesQuery,
};