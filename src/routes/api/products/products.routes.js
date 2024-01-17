import { Router } from 'express';

const router = Router();
const path = '/api/products/';

router.get(path + ':id', ProductsMdw.checkGet, ProductsCrud.runGet);

export default router;
