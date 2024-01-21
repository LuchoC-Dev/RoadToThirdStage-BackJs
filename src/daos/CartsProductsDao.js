import { CartsDao } from './CartsDao.js';

class CartsProductsDao extends CartsDao {
  constructor() {
    super();
  }

  async setQuantityById(id, prodId, quantity) {
    const cart = await this.getById(id);
    const product = this.getProduct(cart, prodId);
    if (!product) {
      return await this.updateOneById(id, { $push: { products: { product: prodId, quantity: quantity } } });
    }

    product.quantity = quantity;
    await cart.save();
    return cart;
  }

  getProduct(cart, prodId) {
    const log = cart.products.find((product) => {
      if (String(product.product) === prodId) {
        return true;
      }
    });
    console.log(log);
    return log;
  }
}

const cartsProductsDao = new CartsProductsDao();

export { CartsProductsDao, cartsProductsDao };
