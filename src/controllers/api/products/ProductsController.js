import unimplements from '../../../class/unimplements.js';
import getAll from './endpoints/getAll.js';

class ProductsController {
  static runGetAll(req, res) {
    getAll(req, res);
  }
  static get(req, res) {
    unimplements('get');
  }
}

export default ProductsController;
