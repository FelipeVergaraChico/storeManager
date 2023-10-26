const date = '2023-10-18T23:48:55.000Z';
const saleId = 'sale_id';
const productId = 'product_id';

const mockSalesDB = [
  {
    [saleId]: 1,
    [productId]: 1,
    date,
    quantity: 5,
  },
  {
    [saleId]: 1,
    date,
    [productId]: 2,
    quantity: 10,
  },
  {
    [saleId]: 2,
    date,
    [productId]: 3,
    quantity: 15,
  },
];

const mockSales = [
  {
    saleId: 1,
    date: '2023-10-18T23:48:55.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: '2023-10-18T23:48:55.000Z',
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: '2023-10-18T23:48:55.000Z',
    productId: 3,
    quantity: 15,
  },
];

const mocksalesIdDB = [
  {
    [productId]: 1,
    quantity: 5,
    date,
  },
  {
    [productId]: 2,
    quantity: 10,
    date,
  },
];

const mockSalesId = [
  {
    saleId: 1,
    date: '2023-10-19T00:26:00.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: '2023-10-19T00:26:00.000Z',
    productId: 2,
    quantity: 10,
  },
];

const saleNotFound = {
  message: 'Sale not found',
};

const saleNotFoundStatus = {
  status: 'NOT_FOUND',
  data: saleNotFound,
};

const mockSalesStatus = {
  status: 'SUCCESFULL',
  data: mockSales,
};

const mockSalesIdStatus = {
  status: 'SUCCESFULL',
  data: mockSalesId,
};

module.exports = {
  mockSales,
  mockSalesId,
  saleNotFound,
  mockSalesIdStatus,
  mockSalesStatus,
  saleNotFoundStatus,
  mockSalesDB,
  mocksalesIdDB,
};