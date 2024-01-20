import Response from '../../../../class/Response.js';
import unimplements from '../../../../class/unimplements.js';
import { productsDao as Dao } from '../../../../daos/ProductsDao.js';

async function removeAll(req, res) {
  try {
    const { clear } = req.query;
    if (clear !== 'true') {
      throw new Error('Invalid key');
    }
    const result = await Dao.delete({});
    res.status(200).json(Response.ok(result));
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(error));
  }
}

export default removeAll;
