import cartsModel from '../models/carts.model.js';
import Dao from './Dao.js';

class CartsDao extends Dao {
  constructor() {
    super(cartsModel);
  }
}

export default CartsDao;
