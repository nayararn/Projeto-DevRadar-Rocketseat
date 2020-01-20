const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://nayararn:Hamsterbola1@nayararn-2hrnb.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

//Métodos HTTP: get, post, put, delete

//Tipos de parâmetros:

//Query params: request.query (Filtros, ordenação, paginação, ...)
//Route params: request.params (Identificar recurso na alteraçã ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(routes);
app.listen(3333, () => {
    console.log('Server rodando :)')
});
