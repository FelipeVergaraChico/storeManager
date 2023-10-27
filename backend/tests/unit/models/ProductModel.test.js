const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { mockProducts, mockProductsById, productNotFound, mockCreate, mockCreateErr } = require('../mocks/product.mock');
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
  it('Cria um produto', async function () {
    sinon.stub(connection, 'execute').resolves([mockCreate]);
    const namme = 'Arthur';
    const data = await productsModel.createModel(namme);
    expect(data).to.deep.equal(mockCreate);
    expect(data).to.be.an('object');
  });
  it('Retorna um erro caso não tenha nome', async function () {
    sinon.stub(connection, 'execute').resolves([mockCreateErr]);
    const data = await productsModel.createModel('ar');
    expect(data).to.deep.equal(mockCreateErr);
  });
  it('Produto deve ser deletado', async function () {
    const del = sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    await productsModel.removeModel(1);
    expect(del).to.have.calledWith();
  });
  afterEach(function () {
    sinon.restore();
  });
});