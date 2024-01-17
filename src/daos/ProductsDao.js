import productsModel from '../models/productsModel';
import Dao from './Dao';

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
}

const productsDao = new ProductsDao();

export default productsDao;
