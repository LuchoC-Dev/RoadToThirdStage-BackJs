class ProductsMdw {
  static checkGet(req, res, next) {
    checkP(req, res, next);
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
