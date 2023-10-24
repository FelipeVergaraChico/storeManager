const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { mockProducts, mockProductsById, productNotFound } = require('../mocks/product.mock');
const productsModel = require('../../../src/models/products/productsStoreModel');

describe('Testa o model de produtos', function () {
  it('Lista todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([mockProducts]);

    const products = await productsModel.getAll();

    expect(products).length(3);
    expect(products).to.be.an('array');
    expect(products).to.deep.equal(mockProducts);
  });
  it('Lista um produto pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[mockProductsById]]);

    const id = 1;
    const product = await productsModel.findById(id);
    expect(product).to.be.an('object');
    expect(product).to.deep.equal(mockProductsById);
  });
  it('Retorna um erro caso o produto não seja encontrado', async function () {
    sinon.stub(connection, 'execute').resolves([[productNotFound]]);

    const id = 2;
    const product = await productsModel.findById(id);
    expect(product).to.be.an('object');
    expect(product).to.deep.equal(productNotFound);
  });
  afterEach(function () {
    sinon.restore();
  });
});