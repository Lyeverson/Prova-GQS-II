const express = require('express');
const bodyParser = require('body-parser');
const { verificarMelhorRota, calcularDistancia } = require('./functions');
const app = express();
app.use(bodyParser.json());

let pedidos = [];
let rotas = [];

app.get('/pedidos', (req, res) => {
    res.json(pedidos);
});

app.post('/pedidos', (req, res) => {
    const novoPedido = req.body;
    pedidos.push(novoPedido);
    res.status(201).json(novoPedido);
});

app.get('/rotas', (req, res) => {
    res.json(rotas);
});

app.post('/rotas', (req, res) => {
    const novaRota = req.body;
    rotas.push(novaRota);
    res.status(201).json(novaRota);
});

app.post('/melhor-rota', (req, res) => {
    const { pedidos, rotas } = req.body;
    const melhorRota = verificarMelhorRota(pedidos, rotas);
    res.json(melhorRota);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

module.exports = app;
