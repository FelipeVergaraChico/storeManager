const { expect } = require('chai');
const sinon = require('sinon');
const salesStoreModel = require('../../../src/models/sales/salesStoreModel');
const salesStoreService = require('../../../src/services/sales/salesStoreService');
const mapHtppStatus = require('../../../src/utils/mapStatutsHTTP');
const { mockSales, mockSalesId } = require('../mocks/sales.mock');

describe('Teste a service de sales', function () {
  it('lista todas as sales', async function () {
    sinon.stub(salesStoreModel, 'getAll').resolves(mockSales);
    const data = await salesStoreService.getAll();
    expect(mapHtppStatus(data.status)).to.equal(200);
    expect(data.data).to.deep.equal(mockSales);
  });
  it('Lista sale pelo id', async function () {
    sinon.stub(salesStoreModel, 'getById').resolves(mockSalesId);
    const data = await salesStoreService.getById(1);
    expect(mapHtppStatus(data.status)).to.equal(200);
    expect(data.data).to.deep.equal(mockSalesId);
  });
  it('Deve retornar um erro', async function () {
    sinon.stub(salesStoreModel, 'getById').resolves([]);
    const message = { message: 'Sale not found' };
    const data = await salesStoreService.getById(20);
    expect(mapHtppStatus(data.status)).to.equal(404);
    expect(data.data).to.deep.equal(message);
  });
  afterEach(function () {
    sinon.restore();
  });
});