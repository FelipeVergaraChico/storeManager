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

const mockCreate = {
  id: 4,
  name: 'Arthur',
};

const mockCreateStatus = {
  status: 'CREATED',
  data: mockCreate,
};

const mockCreateErr = {
  message: '"name" is required',
};
const mockCreateErrLeng = {
  message: '"name" length must be at least 5 characters long',
};

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
const productNotFoundStatus = {
  message: 'Product not found',
};
const mockUpdate = {
  id: 1,
  name: 'Tesoura',
};

const mockUpdateFail = {
  id: 19,
  name: 'Tesoura',
};

module.exports = {
  mockProducts,
  mockProductsStatus,
  mockProductsById,
  mockProductsByIdStatus,
  productNotFound,
  mockCreate,
  mockCreateErr,
  mockCreateErrLeng,
  mockCreateStatus,
  productNotFoundStatus,
  mockUpdate,
  mockUpdateFail,
};