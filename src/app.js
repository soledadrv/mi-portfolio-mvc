const express = require('express');
const app = express();
const main = require('./routes/main.js');
const port = 3000;

app.use(express.static('public'));

app.use('/', main);


app.listen(port, () => console.log('Servidor funcionando en http://localhost:' +port));