import unimplements from '../class/unimplements.js';
import productsModel from '../models/products.model.js';
import Dao from './Dao.js';

class ProductsDao extends Dao {
  constructor() {
    super(productsModel);
  }

  async getAll() {
    return await this.read({});
  }

  async getById(id) {
    return await this.readOne({ _id: id });
  }

  async getByConditions(limit, page, sort, query) {
    unimplements('getByConditions');
  }

  async updateOneById(id, updates) {
    return await this.updateOne({ _id: id }, updates);
  }

  async removeById(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

const productsDao = new ProductsDao();

export default productsDao;
