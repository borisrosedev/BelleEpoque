export default class ProductsService {
  constructor() {}
  async getProducts() {
    const result = await fetch("./data/products.json")
    const products = await result.json()
    return products
  }
}
