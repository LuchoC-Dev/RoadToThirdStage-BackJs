import Response from '../../../../class/Response.js';
import { productsDao as Dao } from '../../../../daos/ProductsDao.js';

async function getByConditions(req, res) {
  try {
    const { limit, page, sort, query } = req.query;
    const result = await Dao.getByConditions(limit, page, sort, query);
    console.log(result);
    res.status(200).json(Response.ok(result));
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(error));
  }
}

export default getByConditions;
