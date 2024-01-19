import create from './endpoints/create';
import getAll from './endpoints/getAll';
import getById from './endpoints/getById';

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

  static putById(req, res) {}

  static delete(req, res) {}

  static deleteById(req, res) {}
}

export default CartsController;
