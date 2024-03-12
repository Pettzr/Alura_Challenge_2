const supertest = require('supertest');
const app = require('../src/app');

describe('Testando o endpoint de resumo', () => {
  test('Deve responder com status 200 e o formato esperado', async () => {
    const ano = '2024';
    const mes = '03';
    const response = await supertest(app).get(`/summary/${ano}/${mes}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('totalReceitas');
    expect(response.body).toHaveProperty('totalDespesas');
    expect(response.body).toHaveProperty('total');
    expect(response.body).toHaveProperty('despesaPorCategoria');
  });
});