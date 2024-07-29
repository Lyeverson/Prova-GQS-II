const request = require('supertest');
const app = require('../src/index');

test('GET /pedidos retorna a lista de pedidos', async () => {
    const response = await request(app).get('/pedidos');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
});

test('POST /pedidos cria um novo pedido', async () => {
    const novoPedido = { endereco: { latitude: 1, longitude: 1 }, produto: 'Produto1', quantidade: 1 };
    const response = await request(app).post('/pedidos').send(novoPedido);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(novoPedido);
});

test('GET /rotas retorna a lista de rotas', async () => {
    const response = await request(app).get('/rotas');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]);
});

test('POST /rotas cria uma nova rota', async () => {
    const novaRota = { latitude: 1, longitude: 1 };
    const response = await request(app).post('/rotas').send(novaRota);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(novaRota);
});

test('POST /melhor-rota retorna a melhor rota de entrega', async () => {
    const pedidos = [
        { endereco: { latitude: 1, longitude: 1 }, latitude: 1, longitude: 1 },
        { endereco: { latitude: 2, longitude: 2 }, latitude: 2, longitude: 2 },
    ];
    const rotas = [
        { latitude: 1, longitude: 1 },
        { latitude: 3, longitude: 3 },
    ];

    const response = await request(app).post('/melhor-rota').send({ pedidos, rotas });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(rotas[0]);
});
