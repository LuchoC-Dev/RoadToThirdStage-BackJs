import Response from '../../../../../class/Response.js';
import { cartsProductsDao as Dao } from '../../../../../daos/CartsProductsDao.js';

async function removeById(req, res) {
  try {
    const { id, prodId } = req.params;
    const result = await Dao.removeById(id, prodId);
    res.status(200).json(Response.ok(result));
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(error));
  }
}

export default removeById;
