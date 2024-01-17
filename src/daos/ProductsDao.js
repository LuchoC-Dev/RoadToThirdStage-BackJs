import productsModel from '../models/productsModel';
import Dao from './Dao';

class ProductsDao extends Dao {
  constructor() {
    super(productsModel);
  }
}

const productsDao = new ProductsDao();

export default productsDao;
