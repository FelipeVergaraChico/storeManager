const route = require('express').Router();
const salesStoreController = require('../controllers/sales/salesStoreController');
const salesINdex = require('../middlewares/sales/salesIndex');

route.get('/', salesStoreController.getAll);

route.get('/:id', salesStoreController.getById);

route.post('/', salesINdex, salesStoreController.create);

module.exports = route;