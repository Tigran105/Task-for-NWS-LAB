export const getCategoriesUrl = () => {
    return `https://api.thecatapi.com/v1/categories`
}
export const getProductsUrl = (limit , category_id ) => {
    return `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${category_id}`
}