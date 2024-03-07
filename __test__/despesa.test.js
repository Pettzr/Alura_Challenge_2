const supertest = require('supertest')
const app = require('../src/app')

describe('GET /despesas', () => {
    it('Deve retornar uma lista de despesas', async () => {
        const response = await supertest(app).get('/despesas')
        expect(response.status).toBe(200)
    });
});

describe('GET /despesas/:id', () => {
    it('Deve retornar uma despesa', async () => {
        const response = await supertest(app).get('/despesas/1')
        expect(response.status).toBe(200)
    });
});

describe('GET /despesas/:ano/:mes', () => {
    it('Deve retornar as despesas de determinado mês do ano', async () => {
        const response = await supertest(app).get('/despesas/2024-03')
        expect(response.status).toBe(200)
    });
});

describe('PUT /despesas/:id', () => {
    it('Deve atualizar uma despesa', async () => {
        const response = await supertest(app).put('/despesas/1')
        expect(response.status).toBe(200)
    });
});

describe('DELETE /despesas/:id', () => {
    it('Deve deletar uma despesa', async () => {
        const response = await supertest(app).delete('/despesas/1')
        expect(response.status).toBe(200)
    });
});

describe('POST /despesas', () => {
    it('Deve cadastrar uma despesa', async () => {
        const novaDespesa = {
            descricao: 'Recebimento de salário',
            valor: '1000',
            data: '2023-03-15',
        }
        const response = await supertest(app).post('/despesas').send(novaDespesa);
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('id');
        expect(response.body.descricao).toBe(novaDespesa.descricao);
        expect(response.body.valor).toBe(novaDespesa.valor.toString());
        expect(response.body.data).toBe(novaDespesa.data);
        expect(response.body).toHaveProperty('categoria')
    });
})