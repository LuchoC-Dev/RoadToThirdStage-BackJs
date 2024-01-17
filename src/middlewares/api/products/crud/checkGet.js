import unimplements from '../../../../class/unimplements.js';

function checkGet(req, res, next) {
  try {
    if (!checkParams(req)) {
      throw new Error('Invalid Params');
    }
    if (!checkQuery(req)) {
      throw new Error('Invalid Query');
    }
    next();
  } catch (error) {
    console.error('Error en checkGet, cambiar \n' + error);
  }
}

export default checkGet;
