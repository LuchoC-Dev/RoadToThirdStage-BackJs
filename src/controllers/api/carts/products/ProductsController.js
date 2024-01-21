import addById from './endpoints/addById.js';
import removeById from './endpoints/removeById.js';
import setQuantityById from './endpoints/setQuantityById.js';

class ProductsController {
  static postById(req, res) {
    addById(req, res);
  }
  static putById(req, res) {
    setQuantityById(req, res);
  }
  static deleteById(req, res) {
    removeById(req, res);
  }
}

export default ProductsController;
