const route = require('express').Router();
const salesStoreController = require('../controllers/sales/salesStoreController');

route.get('/', salesStoreController.getAll);

route.get('/:id', salesStoreController.getById);

module.exports = route;