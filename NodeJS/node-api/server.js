const express = require('express'); //importando o express
const mongoose = require('mongoose'); //Importando o mongoose
const requireDir = require('require-dir'); //Importando require-dir
const cors = require('cors'); //Importando o cors

//iniciando o app
const app = express();
app.use(express.json()); // permitindo o envio de dados para a aplicacao no formato json
app.use(cors()); //aqui pode colocar os dominios que terao acesso, assim como outras configuracoes de seguranca

//iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true });
requireDir('./src/models'); //Importando os models

// const Product = mongoose.model('Product'); //Tendo acesso ao modelo Product

// Redirecionando rotas com prefixo api
app.use('/api', require('./src/routes'));

app.listen(3001); // Rode na porta 3001

