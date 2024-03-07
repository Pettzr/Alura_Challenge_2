const sequelize = require("./src/config/dbConfig.js");
const app = require("./src/app.js");
// const receita = require("./src/models/ReceitaModel.js");
// const despesa = require("./src/models/DespesaModel.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ${PORT}`)
});

