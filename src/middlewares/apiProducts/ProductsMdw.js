import checkDelete from './crud/checkDelete.js';
import checkGet from './crud/checkGet.js';
import checkPost from './crud/checkPost.js';
import checkPut from './crud/checkPut.js';

class ProductsMdw {
  static checkGet(req, res, next) {
    checkGet(req, res, next);
  }
  static checkPost(req, res, next) {
    checkPost(req, res, next);
  }
  static checkPut(req, res, next) {
    checkPut(req, res, next);
  }
  static checkDelete(req, res, next) {
    checkDelete(req, res, next);
  }
}

export default ProductsMdw;
