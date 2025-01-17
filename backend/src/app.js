const express = require('express');

const app = express();

const productsRouter = require('./routes/productRoute');
const salesRoute = require('./routes/salesRoute');

app.use(express.json());

app.use('/products', productsRouter);
app.use('/sales', salesRoute);

app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

module.exports = app;
