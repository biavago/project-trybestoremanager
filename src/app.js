const express = require('express');
const productsController = require('./controllers/productsController');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getProducts);

app.get('/products/:id', productsController.getById);


module.exports = app;
