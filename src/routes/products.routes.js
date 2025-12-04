import {Router} from "express";
import { getProducts, getProduct, createNewProduct, deleteProductById, updateProductById } from "../controllers/products.controller.js";
//import {getProduct,getProducts,createNewProuct,deleteProductById,updateProductById} from "../controller/product.controller.js";

const router = Router();


router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/crear', createNewProduct)
//router.post('/crear',createNewProuct);

router.delete('/:id', deleteProductById);
router.put('/:id', updateProductById);

export default router;