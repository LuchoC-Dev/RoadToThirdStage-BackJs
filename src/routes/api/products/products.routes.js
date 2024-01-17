import { Router } from 'express';

const router = Router();
const path = '/api/products/';

router.get(path + ':id', ProductsMdw.checkGet, ProductsCrud.runGet);
router.post(path + ':id', ProductsMdw.checkPost, ProductsCrud.runPost);
router.put(path + ':id', ProductsMdw.checkPut, ProductsCrud.runPut);
router.delete(path + ':id', ProductsMdw.checkDelete, ProductsCrud.runDelete);

export default router;
