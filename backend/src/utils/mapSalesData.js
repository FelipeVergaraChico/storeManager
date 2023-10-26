const mapSales = (s) => {
  const datas = s.map((sa) => ({
    saleId: sa.sale_id,
    date: sa.date,
    productId: sa.product_id,
    quantity: sa.quantity,
  }));
  return datas;
};

const mapSale = (s) => {
  const data = s.map((sa) => ({
    productId: sa.product_id,
    quantity: sa.quantity,
    date: sa.date,
  }));
  return data;
};

module.exports = {
  mapSales,
  mapSale,
};