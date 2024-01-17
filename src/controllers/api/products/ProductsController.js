import unimplements from '../../../class/unimplements.js';
import create from './endpoints/create.js';
import remove from './endpoints/delete.js';
import removeAll from './endpoints/deleteAll.js';
import getAll from './endpoints/getAll.js';
import getByConditions from './endpoints/getByConditions.js';
import getById from './endpoints/getById.js';
import update from './endpoints/update.js';

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

  static post(req, res) {
    create(req, res);
  }

  static put(req, res) {
    update(req, res);
  }

  static removeAll(req, res) {
    removeAll(req, res);
  }

  static remove(req, res) {
    remove(req, res);
  }
}

export default ProductsController;
