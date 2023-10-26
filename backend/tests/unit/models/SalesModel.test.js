const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');

const { mockSales, mockSalesDB, mocksalesIdDB } = require('../mocks/sales.mock');
const salesModel = require('../../../src/models/sales/salesStoreModel');

describe('Tesa o model de Sales', function () {
  it('Lista todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([mockSalesDB]);
    const data = await salesModel.getAll();
    expect(data).to.have.length(3);
    expect(data).to.be.deep.equal(mockSales);
  });
  it('lista pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([mocksalesIdDB]);
    const id = 1;
    const data = await salesModel.getById(id);
    expect(data).to.be.an('array');
    expect(data).to.have.length(2);
  });

  afterEach(function () {
    sinon.restore();
  });
});