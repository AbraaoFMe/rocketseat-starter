const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductControllers'); // importando a logica da rota

//primeira rota
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);
routes.post('/products', ProductController.store);

module.exports = routes; //Para ser utilizando dentro de server.js