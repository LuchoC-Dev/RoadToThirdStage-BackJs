import unimplements from '../../../class/unimplements.js';
import create from './endpoints/create.js';
import remove from './endpoints/remove.js';
import removeAll from './endpoints/removeAll.js';
import getAll from './endpoints/getAll.js';
import getByConditions from './endpoints/getByConditions.js';
import getById from './endpoints/getById.js';
import update from './endpoints/update.js';

class ProductsController {
  static get(req, res) {
    getAll(req, res);
  }

  static getById(req, res) {
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

  static putById(req, res) {
    update(req, res);
  }

  static delete(req, res) {
    removeAll(req, res);
  }

  static deleteById(req, res) {
    remove(req, res);
  }
}

export default ProductsController;
