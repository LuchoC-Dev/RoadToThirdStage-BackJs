import unimplements from '../../../class/unimplements.js';

class ProductsMdw {
  static checkParams(req, res, next) {
    console.error(unimplements('checkParams'));
  }
  static checkQuery(req, res, next) {
    console.error(unimplements('checkQuery'));
  }
  static checkBody(req, res, next) {
    console.error(unimplements('checkBody'));
  }
}

export default ProductsMdw;
