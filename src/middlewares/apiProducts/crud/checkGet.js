import unimplements from '../../../class/Unimplements';

function checkGet(req, res, next) {
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
    console.error('Error en checkGet, cambiar \n' + error);
  }
}

function checkParams(req) {
  const { id } = req.params;
  console.error(unimplements('checkParams'));
  return isValidId(id);
}

function checkQuery(req) {
  const { data } = req.query;
  console.error(unimplements('checkQuery'));
  return isValidData(data);
}

export default checkGet;
