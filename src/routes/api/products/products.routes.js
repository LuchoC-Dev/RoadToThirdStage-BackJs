import { Router } from 'express';
import mdw from '../../../middlewares/api/products/ProductsMiddlewares.js';
import endpoint from '../../../controllers/api/products/ProductsController.js';

const router = Router();
const path = '/api/products/';

router.get(path, endpoint.runGetAll);
router.get(path + ':id', endpoint.get);
router.post(path + ':id', endpoint.post);
router.put(path + ':id', endpoint.put);
router.delete(path, endpoint.removeAll);
router.delete(path + ':id', endpoint.remove);

//test
router.delete(path, (req, res) => {
  res;
});

export default router;
