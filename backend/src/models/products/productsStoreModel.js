const connection = require('../connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

const findById = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product;
};

const createModel = async (name) => {
  const [product] = await connection.execute('INSERT INTO products (name) VALUES (?)', [name]);
  return product;
};

const updateMOdel = async (id, name) => {
  const [product] = await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?', 
    [name, id],
  );
  return product;
};

const removeModel = async (id) => {
  await connection.execute('DELETE FROM products WHERE id = ?', [id]);
};

module.exports = {
  getAll,
  findById,
  createModel,
  updateMOdel,
  removeModel,
};