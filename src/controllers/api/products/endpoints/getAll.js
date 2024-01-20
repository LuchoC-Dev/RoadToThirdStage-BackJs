import Response from '../../../../class/Response.js';
import { productsDao as Dao } from '../../../../daos/ProductsDao.js';

async function getAll(req, res) {
  try {
    const result = await Dao.getAll();
    res.status(200).json(Response.ok(result));
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(error));
  }
}

export default getAll;
