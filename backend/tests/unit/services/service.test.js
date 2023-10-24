const { expect } = require('chai');
const sinon = require('sinon');
const productsStoreService = require('../../../src/services/products/productsStoreServices');
const productsStoreModel = require('../../../src/models/products/productsStoreModel');
const { mockProducts, mockProductsById } = require('../mocks/product.mock');

describe('Testa o serivce de produtos', function () {
  it('Lista todos os produtos', async function () {
    sinon.stub(productsStoreModel, 'getAll').resolves(mockProducts);

    const data = await productsStoreService.getAll();

    expect(data).to.be.an('object');
    expect(data.status).to.equal('SUCCESFULL');
    expect(data.data).to.deep.equal(mockProducts);
  });

  it('Deve listar o produto por id', async function () {
    sinon.stub(productsStoreModel, 'findById').resolves(mockProductsById);

    const dataId = 1;
    const data = await productsStoreService.getById(dataId);

    expect(data.status).to.equal('SUCCESFULL');
    expect(data.data).to.deep.equal(mockProductsById);
  });

  afterEach(function () {
    sinon.restore();
  });
});