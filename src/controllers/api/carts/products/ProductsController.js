import setQuantityById from './endpoints/setQuantityById.js';

class ProductsController {
  static postById(req, res) {}
  static putById(req, res) {
    setQuantityById(req, res);
  }
  static deleteById(req, res) {}
}

export default ProductsController;
