import Parser from '../../../../class/parsers/Parser.js';
import Response from '../../../../class/Response.js';
import unimplements from '../../../../class/unimplements.js';
import Dao from '../../../../daos/CartsDao.js';

async function create(req, res) {
  try {
    const cart = Parser.cartsData(req.body);
    const result = await Dao.create(cart);
    res.status(200).json(Response.ok(result));
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(error));
  }
}

export default create;