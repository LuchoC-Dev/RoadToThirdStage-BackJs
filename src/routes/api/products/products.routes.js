import { Router } from 'express';
import mdw from '../../../middlewares/api/products/ProductsMiddlewares.js';
import endpoint from '../../../controllers/api/products/ProductsController.js';

const router = Router();
const path = '/api/products/';

router.get(path, endpoint.runGetAll);
router.get(path + ':id', endpoint.get);
router.post(path, endpoint.post);
router.put(path + ':id', endpoint.put);
router.delete(path, endpoint.runRemoveAll);
router.delete(path + ':id', endpoint.remove);

export default router;
