import unimplements from '../class/unimplements.js';
import productsModel from '../models/productsModel.js';
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
}

const productsDao = new ProductsDao();

export default productsDao;
