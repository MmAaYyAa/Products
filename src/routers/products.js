import { Router } from 'express';
import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  patchProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/products', ctrlWrapper(getAllProductsController));
router.get('/products/:productId', ctrlWrapper(getProductByIdController));

router.post('/products', ctrlWrapper(createProductController));

router.patch('/products/:productId', ctrlWrapper(patchProductController));

export default router;
