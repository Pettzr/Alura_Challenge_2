const supertest = require('supertest')
const app = require('../src/app')

describe('GET /expenses', () => {
    it('Deve retornar uma lista de despesas', async () => {
        const response = await supertest(app).get('/expenses')
        expect(response.status).toBe(200)
    });
});

describe('GET /expenses/:id', () => {
    it('Deve retornar uma despesa', async () => {
        const response = await supertest(app).get('/expenses/1')
        expect(response.status).toBe(200)
    });
});

describe('GET /expenses/:year/:month', () => {
    it('Deve retornar as despesas de determinado mês do ano', async () => {
        const response = await supertest(app).get('/expenses/2024-03')
        expect(response.status).toBe(200)
    });
});

describe('PUT /expenses/:id', () => {
    it('Deve atualizar uma despesa', async () => {
        const response = await supertest(app).put('/expenses/1')
        expect(response.status).toBe(200)
    });
});

describe('DELETE /expenses/:id', () => {
    it('Deve deletar uma despesa', async () => {
        const response = await supertest(app).delete('/expenses/1')
        expect(response.status).toBe(200)
    });
});

describe('POST /expenses', () => {
    it('Deve cadastrar uma despesa', async () => {
        const newExpense = {
            description: 'Recebimento de salário',
            value: '1000',
            date: '2023-03-15',
        }
        const response = await supertest(app).post('/expenses').send(newExpense);
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('id');
        expect(response.body.description).toBe(newExpense.description);
        expect(response.body.value).toBe(newExpense.value.toString());
        expect(response.body.date).toBe(newExpense.date);
        expect(response.body).toHaveProperty('categorie')
    });
})