import { CartsDao } from './CartsDao.js';
import mongoose, { ObjectId } from 'mongoose';

class CartsProductsDao extends CartsDao {
  constructor() {
    super();
  }

  async addById(id, prodId) {
    const cart = await this.getById(id);
    const product = this.getProduct(cart, prodId);
    if (!product) {
      return await this.updateOneById(id, { $push: { products: { product: prodId, quantity: 1 } } });
    }

    product.quantity++;
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

  async removeById(id, prodId) {
    return await this.updateOneById(id, { $pull: { products: { product: prodId } } });
  }
}

const cartsProductsDao = new CartsProductsDao();

export { CartsProductsDao, cartsProductsDao };
