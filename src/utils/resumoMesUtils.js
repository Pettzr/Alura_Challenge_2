 function calcularTotalReceitas(receitas) {
     return receitas.reduce((total, receita) => total + receita.valor, 0);
 }

 function calcularTotalDespesas(despesas) {
     return despesas.reduce((total, despesa) => total + despesa.valor, 0);
 }

 function calcularTotal(receitas, despesas) {
     return calcularTotalReceitas(receitas) - calcularTotalDespesas(despesas);
 }

 function calcularDespesasPorCategoria(despesas) {
    return despesas.reduce((total, { categoria, valor }) => {
        total[categoria] = total[categoria] || 0;
        total[categoria] += valor;
        return total;
    }, {});
}

 module.exports = { calcularTotalReceitas, calcularTotalDespesas, calcularTotal, calcularDespesasPorCategoria}