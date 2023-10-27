const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;

chai.use(sinonChai);
const validate = require('../../../src/middlewares/sales/validateSales');

describe('Testa o middleware validate', function () {
  it('Retorna um erro se um campo estiver faltando o id', async function () {
    const req = {
      body: [
        { productID: 2 },
        { quantity: 25 },
      ],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();
    await validate(req, res, next);
    expect(res.status).to.have.calledWith(400);
    expect(res.json).to.have.calledWith({ message: '"productId" is required' });
  });
});