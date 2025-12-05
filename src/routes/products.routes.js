import {Router} from "express";
import { getProducts, getProduct, createNewProduct, deleteProductById, updateProductById } from "../controllers/products.controller.js";

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/crear', createNewProduct)
router.delete('/:id', deleteProductById);
router.put('/:id', updateProductById);

export default router;