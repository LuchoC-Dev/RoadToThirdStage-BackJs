import Response from '../../../../class/Response.js';
import unimplements from '../../../../class/unimplements.js';
import Dao from '../../../../daos/CartsDao.js';

async function remove(req, res) {
  try {
    const { id } = req.params;
    const result = await Dao.removeById(id);
    res.status(200).json(Response.ok(result));
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(error));
  }
}

export default remove;
