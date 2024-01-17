import Response from '../../../../class/Response.js';
import productsDao from '../../../../daos/ProductsDao.js';

async function getById(req, res) {
  try {
    const { id } = req.params;
    const result = await productsDao.getById(id);
    res.status(200).json(Response.ok(result));
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(error));
  }
}

export default getById;
