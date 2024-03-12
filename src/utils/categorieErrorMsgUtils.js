module.exports = function categorieArgs(categories) {

    const listedCategories = categories.join("', '")
    return `Categoria inválida. Tente: '${listedCategories}'`
};