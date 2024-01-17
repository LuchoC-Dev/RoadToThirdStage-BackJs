import productsModel from '../models/productsModel';
import Dao from './Dao';

class ProductsDao extends Dao {
  constructor() {
    super(productsModel);
  }

  async getAll() {
    return await this.read({});
  }
}

const productsDao = new ProductsDao();

export default productsDao;
