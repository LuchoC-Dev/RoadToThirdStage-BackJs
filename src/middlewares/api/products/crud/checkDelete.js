function checkDelete(req, res, next) {
  try {
    if (!checkParams(req)) {
      throw new Error('Invalid Params');
    }
    if (!checkQuery(req)) {
      throw new Error('Invalid Query');
    }
    if (!checkBody(req)) {
      throw new Error('Invalid Body');
    }
    next();
  } catch (error) {
    console.error('Error en checkDelete, cambiar \n' + error);
  }
}

export default checkDelete;
