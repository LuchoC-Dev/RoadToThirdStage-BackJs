import { CartsDao } from './CartsDao.js';

class CartsProductsDao extends CartsDao {
  constructor() {
    super();
  }
}

const cartsProductsDao = new CartsProductsDao();

export { CartsProductsDao, cartsProductsDao };
