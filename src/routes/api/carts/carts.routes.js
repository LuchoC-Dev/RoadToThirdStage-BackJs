import { Router } from 'express';
import endpoint from '../../../controllers/api/carts/CartsController.js';
import mdw from '../../../middlewares/api/carts/CartMiddlewares.js';

const router = Router();
const path = '/api/carts/';

router.get(path, endpoint.get);
router.get(path + ':id', endpoint.getById);
router.post(path, endpoint.post);
router.put(path + ':id', endpoint.putById);
router.delete(path, endpoint.delete);
router.delete(path + ':id', endpoint.deleteById);

// Mover a otra carpeta de products
// router.post(path + ':id/products/:prodId', endpoint.postById);
// router.put(path + ':id/products/:prodId', endpoint.putById);
// router.delete(path + ':id/products/:prodId', endpoint.removeById);

export default router;
