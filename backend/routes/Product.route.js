const express = require('express')
const router = express.Router();
const ProductController = require('../controllers/Product.controller')

const { getProduct, getProducts, createProduct, updateProduct, deleteProduct } = ProductController

router.get('/', getProducts);                
router.get('/:id', getProduct);             
router.post('/create', createProduct);     
router.put('/update/:id', updateProduct);    
router.delete('/delete/:id', deleteProduct);

module.exports = router;