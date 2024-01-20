import Parser from '../../../../class/parsers/Parser.js';
import Response from '../../../../class/Response.js';
import unimplements from '../../../../class/unimplements.js';
import { cartsDao as Dao } from '../../../../daos/CartsDao.js';

async function create(req, res) {
  try {
    const result = await Dao.create({});
    res.status(200).json(Response.ok(result));
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(error));
  }
}

export default create;
