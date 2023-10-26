const mockProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];

const mockProductsStatus = {
  status: 'SUCCESSFULL',
  data: mockProducts,
};

const mockProductsById = {
  id: 1,
  name: 'Martelo de Thor',
};
const mockProductsByIdStatus = {
  status: 'SUCCESSFUL',
  data: mockProductsById,
};

const productNotFound = {
  status: 'NOT_FOUND',
  data: { message: 'Product not found' },
};

module.exports = {
  mockProducts,
  mockProductsStatus,
  mockProductsById,
  mockProductsByIdStatus,
  productNotFound,
};