const supertest = require('supertest')
const app = require('../src/app')

describe('GET /receitas', () => {
    it('Deve retornar uma lista de receitas', async () => {
        const response = await supertest(app).get('/receitas')
        expect(response.status).toBe(200)
    });
});

describe('GET /receitas/:id', () => {
    it('Deve retornar uma receita', async () => {
        const response = await supertest(app).get('/receitas/1')
        expect(response.status).toBe(200)
    });
});

describe('GET /receitas/:ano/:mes', () => {
    it('Deve retornar as receitas de determinado mês do ano', async () => {
        const response = await supertest(app).get('/receitas/2024-03')
        expect(response.status).toBe(200)
    });
});

describe('PUT /receitas/:id', () => {
    it('Deve atualizar uma receita', async () => {
        const response = await supertest(app).put('/receitas/1')
        expect(response.status).toBe(200)
    });
});

describe('DELETE /receitas/:id', () => {
    it('Deve deletar uma receita', async () => {
        const response = await supertest(app).delete('/receitas/1')
        expect(response.status).toBe(200)
    });
});

describe('POST /receitas', () => {
    it('Deve cadastrar uma receita', async () => {
        const novaReceita = {
            descricao: 'Recebimento de salário',
            valor: '1000',
            data: '2023-03-15',
        }
        const response = await supertest(app).post('/receitas').send(novaReceita);
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('id'); 
        expect(response.body.descricao).toBe(novaReceita.descricao);
        expect(response.body.valor).toBe(novaReceita.valor.toString()); 
        expect(response.body.data).toBe(novaReceita.data);
    });
})
