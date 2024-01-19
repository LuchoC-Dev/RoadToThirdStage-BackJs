import cartsModel from '../models/carts.model.js';
import Dao from './Dao.js';

class CartsDao extends Dao {
  constructor() {
    super(cartsModel);
  }

  async getAll() {
    return await this.read({});
  }
}

export default CartsDao;
