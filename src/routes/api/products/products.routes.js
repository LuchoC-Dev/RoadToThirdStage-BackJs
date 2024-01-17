import { Router } from 'express';
import mdw from '../../../middlewares/api/products/ProductsMiddlewares.js';
import endpoint from '../../../controllers/api/products/ProductsController.js';

const router = Router();
const path = '/api/products/';

router.get(path, endpoint.runGetAll);
router.get(path + ':id', mdw.checkParams, mdw.checkQuery, endpoint.get);

//test
router.delete(path, (req, res) => {
  res;
});

export default router;
