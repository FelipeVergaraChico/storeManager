const { expect } = require('chai');
const sinon = require('sinon');
const productsStoreService = require('../../../src/services/products/productsStoreServices');
const productsStoreModel = require('../../../src/models/products/productsStoreModel');
const { mockProducts, mockProductsById, mockCreate, mockUpdate, productNotFound, mockUpdateFail } = require('../mocks/product.mock');
const mapHtppStatus = require('../../../src/utils/mapStatutsHTTP');

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
  it('Adiciona um produto', async function () {
    sinon.stub(productsStoreModel, 'createModel').resolves(4);
    sinon.stub(productsStoreModel, 'findById').resolves(mockCreate);
    const created = mockCreate;
    const data = await productsStoreService.create('Arthur');
    expect(mapHtppStatus(data.status)).to.equal(201);
    expect(data.data).to.equal(created);
  });
  it('Pode atualizar produto', async function () {
    sinon.stub(productsStoreModel, 'updateMOdel').resolves();
    sinon.stub(productsStoreModel, 'findById').resolves(mockUpdate);
    const data = await productsStoreService.update(1, 'Tesoura');
    expect(data.status).equal('SUCCESFULL');
    expect(data.data).deep.equal(mockUpdate);
  });
  it('Não pode atualizar produto que não existe', async function () {
    sinon.stub(productsStoreModel, 'findById').resolves();
    const { id, name } = mockUpdateFail;
    const data = await productsStoreService.update(id, name);
    expect(data.status).to.equal(productNotFound.status);
    expect(data.data).to.deep.equal(productNotFound.data);
  });
  it('Produto deve ser deletado', async function () {
    sinon.stub(productsStoreModel, 'findById').resolves([mockProducts]);
    sinon.stub(productsStoreModel, 'removeModel').resolves();
    const data = await productsStoreService.remove(1);
    expect(data.status).to.equal('NO_CONTENT');
  });
  it('Não é possivel deletar produto que não existe', async function () {
    sinon.stub(productsStoreModel, 'findById').resolves();
    const data = await productsStoreService.remove(200);
    expect(data.status).to.equal(productNotFound.status);
    expect(data.data).to.deep.equal(productNotFound.data);
  });
  afterEach(function () {
    sinon.restore();
  });
});