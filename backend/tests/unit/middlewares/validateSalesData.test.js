const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;

chai.use(sinonChai);
const validateData = require('../../../src/middlewares/sales/validateSalesData');

describe('Testa o middleware validadeData', function () {
  it('Retorna um arrya de erro caso seja < 0', async function () {
    const req = {
      body: [
        { productId: 1, quantity: 32 },
        { productId: 2, quantity: 0 },
      ],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();
    await validateData(req, res, next);
    expect(res.status).to.have.calledWith(422);
    expect(res.json).to.have.calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });
});