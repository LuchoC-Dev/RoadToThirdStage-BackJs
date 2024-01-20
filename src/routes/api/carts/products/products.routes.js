import { Router } from 'express';
import mdw from '../../../../middlewares/api/carts/products/products.middlewares.js';
import endpoint from '../../../../controllers/api/carts/products/ProductsController.js';

const router = Router();
const path = '/api/carts/:id/products/';

router.post(path + ':prodId', endpoint.postById);
router.put(path + ':prodId', endpoint.putById);
router.delete(path + ':prodId', endpoint.deleteById);

export default router;
