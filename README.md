# API Rest com JavaScript, Express e SQLite

## Descrição

O projeto fornece uma API que visa gerenciar Receitas e Despesas de uma empresa qualquer.
Foi implementado o CRUD, uma verificação de usuário Através de Token com o JWT, e funções que retornam informações sobre as Receitas e Despesas com base no mês e ano fornecido

## Principais Rotas da API

### Receitas:

> #### Para GET e POST em Receitas:
```/revenues```

> #### Para GET (por ID), PUT e DELETE em Receitas:
```/revenues/:id``` 

> ####  GET em todas as Receitas geradas no mês da data inserida:
```/revenues/:year/:month```

<br>

### Despesas:

> #### Para GET e POST em Despesas:
```/expenses```

> #### Para GET (por ID), PUT e DELETE em Despesas:
```/expenses/:id``` 

> ####  GET em todas as Despesas geradas no mês da data inserida:
```/expenses/:year/:month```

<br>

### Resumo do mês:

> #### GET no resumo estatístico mensal da data inserida:
```/summary/:year/:month```

<br>

### Login:

> ####  POST em um usuário para autenticar e poder utilizar as funções da API:
```/login```

## Como usar

Primeiro:
<p></p>
Faça uma requisição POST para a API `/login`. No corpo da requisição, envie o usuário e senha como JSON:

```json
{
  "username": "usuario"
  "password": "senha"
}
```

A API retornara um JSON como resposta:

```json
{
    "message": "Login successful"
}
```

OBS: Caso você tenha inserido o nome ou a senha errada, o JSON retornado será:

```json
{
    "error": "Usuário não encontrado"
}
```

#### Pronto! Agora você já pode usar a API normalmente.

<p></p>

Tente fazer uma requisição POST para a rota:

```/expenses```

com o seguinte JSON:

```json
{
"description": "Despesa com as compras do mês",
"value": "699",
"categorie": "Alimentação",
"date": "2023-02-01"
}
```

A resposta deve ser algo como:

```json
{
    "id": "1d479c09-ade7-446e-8ee0-3b778457af58",
    "description": "Despesa com as compras do mês",
    "value": "699",
    "categorie": "Alimentação",
    "date": "2023-02-01",
    "updatedAt": "2024-03-20T03:38:58.813Z",
    "createdAt": "2024-03-20T03:38:58.813Z"
}
```

<br>

> OBS: Caso de algum erro, basta ler a resposta do JSON e inserir as informações de acordo com o que for pedido.

<br>

Caso a resposta do JSON seja:

```json
{
    "message": " Token não fornecido"
}
```
Basta fazer login novamente. (O tempo de expiração foi colocado baixo, para fins de demonstração)


## Funcionalidades
### A API realiza as seguintes funções:

Cria, Lê, Atualiza e Deleta (CRUD) Receitas e Despesas.  
Busca Receitas e Despesas por ID.  
Agrupa Receitas e Despesas do Mês e Ano inseridos como parâmetros na URL.  
Faz um Resumo Mensal do Mês e Ano inseridos como parâmetros na URL  
Organiza as Despesas em diversas categorias.  
  
## Exemplos de uso

Gerencia Receitas e Despesas de uma empresa, ou pessoa.   
Organiza por data (e categoria no caso das Despesas) as transações efetuadas.  
Cria um resumo do que ocorreu em determinado mês inserido pelo usuário.        

## 🛠️Tecnologia Utilizadas
<div style="display: inline-block"><br>
<img align="center" alt="JavaScript" height="40" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />  
<img align="center" alt="Express" height="120" width="130" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
<img align="center" alt="Sequelize" height="120" width="130" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-plain-wordmark.svg" />
<img align="center" alt="SQLite" height="120" width="130" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-plain-wordmark.svg" />
</div> 
          
