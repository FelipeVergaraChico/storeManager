const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const productService = require('../../../src/services/products/productsStoreServices');
const productsController = require('../../../src/controllers/products/productsStoreController');
const { 
  mockProducts, 
  mockProductsStatus, 
  mockCreate, 
  mockCreateStatus, 
  mockProductsById, 
  mockProductsByIdStatus, 
  productNotFound, 
  productNotFoundStatus, 
} = require('../mocks/product.mock');

describe('Testa o controller de products', function () {
  it('Deve listar todos os produtos', async function () {
    sinon.stub(productService, 'getAll').resolves(mockProductsStatus);
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productsController.getAll(req, res);
    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.calledWith(mockProducts);
  });
  it('Deve criar um produto novo', async function () {
    sinon.stub(productService, 'create').resolves(mockCreateStatus);
    const req = {
      body: {
        name: 'Arthur',
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productsController.create(req, res);
    expect(res.status).to.have.calledWith(201);
    expect(res.json).to.have.calledWith(mockCreate);
  });
  it('Deve listar um produto pelo id', async function () {
    sinon.stub(productService, 'getById').resolves(mockProductsByIdStatus);
    const req = {
      params: { id: 1 },
      body: { name: 'Martelo de Thor' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productsController.getById(req, res);
    expect(res.status).to.have.calledWith(500);
    expect(res.json).to.have.calledWith(mockProductsById);
  });
  it('não é possivel buscar um produto que não existe', async function () {
    sinon.stub(productService, 'getById').resolves(productNotFound);
    const req = {
      params: { id: 20 },
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productsController.getById(req, res);
    expect(res.status).to.have.calledWith(404);
    expect(res.json).to.have.calledWith(productNotFoundStatus);
  });
  it('Produto deve ser deletado', async function () {
    sinon.stub(productService, 'remove').resolves({ status: 'NO_CONTENT' });
    const req = {
      params: {
        id: 1,
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      end: sinon.stub(),
    };
    await productsController.remove(req, res);
    expect(res.status).to.have.calledWith(204);
    expect(res.end).to.have.calledWith();
  });
  afterEach(function () {
    sinon.restore();
  });
});