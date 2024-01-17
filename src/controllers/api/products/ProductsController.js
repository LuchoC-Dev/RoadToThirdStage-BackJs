import unimplements from '../../../class/unimplements.js';
import getAll from './endpoints/getAll.js';
import getByConditions from './endpoints/getByConditions.js';
import getById from './endpoints/getById.js';

class ProductsController {
  static runGetAll(req, res) {
    getAll(req, res);
  }
  static get(req, res) {
    const { id } = req.params;
    if (id) {
      getById(req, res);
      return;
    }
    getByConditions(req, res);
  }
}

export default ProductsController;
