const ReceitaService = require('../services/ReceitaServices');
const DespesaService = require('../services/DespesaServices');
const { calcularTotalDespesas, calcularTotalReceitas, calcularTotal, calcularDespesasPorCategoria } = require('../utils/resumoMesUtils');

async function resumoMesMiddleware(req, res, next) {
  const { ano, mes } = req.params;

  const receitaService = new ReceitaService();
  const despesaService = new DespesaService();

  try {
    const [receitas, despesas] = await Promise.all([
      receitaService.getElementByDateService(ano, mes),
      despesaService.getElementByDateService(ano, mes),
    ]);

    req.resumo = {
      totalReceitas: calcularTotalReceitas(receitas),
      totalDespesas: calcularTotalDespesas(despesas),
      total: calcularTotal(receitas, despesas),
      despesaPorCategoria: calcularDespesasPorCategoria(despesas)
    };

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = resumoMesMiddleware;