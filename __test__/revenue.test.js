const supertest = require('supertest')
const app = require('../src/app')

describe('GET /revenue', () => {
    it('Deve retornar uma lista de receitas', async () => {
        const response = await supertest(app).get('/revenue')
        expect(response.status).toBe(200)
    });
});

describe('GET /revenue/:id', () => {
    it('Deve retornar uma receita', async () => {
        const response = await supertest(app).get('/revenue/1')
        expect(response.status).toBe(200)
    });
});

describe('GET /revenue/:year/:month', () => {
    it('Deve retornar as receitas de determinado mês do ano', async () => {
        const response = await supertest(app).get('/revenue/2024-03')
        expect(response.status).toBe(200)
    });
});

describe('PUT /revenue/:id', () => {
    it('Deve atualizar uma receita', async () => {
        const response = await supertest(app).put('/revenue/1')
        expect(response.status).toBe(200)
    });
});

describe('DELETE /revenue/:id', () => {
    it('Deve deletar uma receita', async () => {
        const response = await supertest(app).delete('/revenue/1')
        expect(response.status).toBe(200)
    });
});

describe('POST /revenue', () => {
    it('Deve cadastrar uma receita', async () => {
        const newRevenue = {
            description: 'Recebimento de salário',
            value: '1000',
            date: '2023-03-15',
        }
        const response = await supertest(app).post('/revenue').send(newRevenue);
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('id'); 
        expect(response.body.description).toBe(newRevenue.description);
        expect(response.body.value).toBe(newRevenue.value.toString()); 
        expect(response.body.date).toBe(newRevenue.date);
    });
})
