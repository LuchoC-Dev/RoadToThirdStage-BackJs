import Response from '../../../../class/Response';
import productsDao from '../../../../daos/ProductsDao';

async function getAll(req, res) {
  try {
    const result = await productsDao.getAll();
    res.status(200).json(Response.ok(result));
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(error));
  }
}

export default getAll;
