import Response from '../../../../class/Response.js';
import Dao from '../../../../daos/CartsDao.js';

async function getByConditions(req, res) {
  try {
    const result = await Dao.getByConditions();
    res.status(200).json(Response.ok(result));
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(error));
  }
}

export default getByConditions;
