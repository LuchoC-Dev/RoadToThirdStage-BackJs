import { Router } from 'express';
import mdw from '../../../middlewares/api/products/ProductsMiddlewares.js';
import endpoint from '../../../controllers/api/products/ProductsController.js';

const router = Router();
const path = '/api/products/';

router.get(path, endpoint.get);
router.get(path + ':id', endpoint.getById);
router.post(path, endpoint.post);
router.put(path + ':id', endpoint.putById);
router.delete(path, endpoint.delete);
router.delete(path + ':id', endpoint.deleteById);

export default router;
