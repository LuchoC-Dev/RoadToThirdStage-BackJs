import create from './endpoints/create.js';
import getAll from './endpoints/getAll.js';
import getById from './endpoints/getById.js';
import removeProducts from './endpoints/removeProducts.js';
import removeAll from './endpoints/removeAll.js';
import update from './endpoints/update.js';

class CartsController {
  static get(req, res) {
    getAll(req, res);
  }

  static getById(req, res) {
    getById(req, res);
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
    removeProducts(req, res);
  }
}

export default CartsController;
