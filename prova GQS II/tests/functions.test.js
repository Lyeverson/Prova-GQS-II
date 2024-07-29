const { verificarMelhorRota, calcularDistancia } = require('../src/functions');

test('verifica a melhor rota', () => {
    const pedidos = [
        { endereco: { latitude: 1, longitude: 1 } },
        { endereco: { latitude: 2, longitude: 2 } },
    ];
    const rotas = [
        { latitude: 1, longitude: 1 },
        { latitude: 2, longitude: 2 },
    ];

    const melhorRota = verificarMelhorRota(pedidos, rotas);
    expect(melhorRota).toEqual(rotas[0]);
});

test('calcula a distância corretamente', () => {
    const endereco1 = { latitude: 1, longitude: 1 };
    const endereco2 = { latitude: 4, longitude: 5 };

    const distancia = calcularDistancia(endereco1, endereco2);
    expect(distancia).toBeCloseTo(5, 1);
});
