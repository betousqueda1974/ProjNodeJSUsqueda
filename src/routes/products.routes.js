import {Router} from "express";
import { getProducts, getProduct, createNewProduct, deleteProductById, updateProductById } from "../controllers/products.controller.js";
import { verifyToken } from "../middlewares/authJWT.js";

const router = Router();

router.get('/', getProducts);
router.get('/:id', verifyToken, getProduct);
router.post('/crear', createNewProduct)
router.delete('/:id', deleteProductById);
router.put('/:id', updateProductById);

export default router;