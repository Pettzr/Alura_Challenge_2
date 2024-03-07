module.exports = function categoriaArgs(categorias) {

    const categoriasListadas = categorias.join("', '")
    return `Categoria inválida. Tente: '${categoriasListadas}'`
};