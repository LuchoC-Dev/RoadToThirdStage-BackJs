import Response from '../../../../class/Response.js';
import unimplements from '../../../../class/unimplements.js';
import productsDao from '../../../../daos/ProductsDao.js';

async function removeAll(req, res) {
  try {
    unimplements('removeAll');
    const result = await productsDao.delete({});
    res.status(200).json(Response.ok(result));
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(error));
  }
}

export default removeAll;