import cartsModel from '../models/carts.model.js';
import Dao from './Dao.js';

class CartsDao extends Dao {
  constructor() {
    super(cartsModel);
  }

  async getAll() {
    return await this.read({});
  }

  async getById(id) {
    return await this.readOne({ _id: id });
  }

  async removeById(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

export default CartsDao;
