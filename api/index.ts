

const api = 'https://fakestoreapi.com/products'

export const productAPI = {
    getProducts: () => fetch(api).then(data => data.json())
}

