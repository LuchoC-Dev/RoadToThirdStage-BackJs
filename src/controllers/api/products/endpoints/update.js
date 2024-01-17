import Response from '../../../../class/Response.js';
import productsDao from '../../../../daos/ProductsDao.js';

async function update(req, res) {
  try {
    unimplements('update');
    const result = await productsDao.updateOne();
    res.status(200).json(Response.ok(result));
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(error));
  }
}

export default update;
