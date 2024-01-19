import create from './endpoints/create';
import getAll from './endpoints/getAll';
import getById from './endpoints/getById';
import remove from './endpoints/remove';
import removeAll from './endpoints/removeAll';
import update from './endpoints/update';

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
    remove(req, res);
  }
}

export default CartsController;
