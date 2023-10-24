const express = require('express');

const app = express();

const productsRouter = require('./routes/productRoute');

app.use(express.json());

app.use('/products', productsRouter);

app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

module.exports = app;
