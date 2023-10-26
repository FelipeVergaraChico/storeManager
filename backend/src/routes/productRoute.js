const route = require('express').Router();

const productsController = require('../controllers/products/productsStoreController');

route.get('/', productsController.getAll);
route.get('/:id', productsController.getById);
route.post('/', productsController.create);

module.exports = route;