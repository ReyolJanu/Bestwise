const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts } = require('../controllers/productController');
const { isAuthenticated, authorizeRoles } = require('../middleware/authMiddleware');

router.route('/addProduct').post(isAuthenticated, authorizeRoles('admin'), addProduct);
router.route('/getAllProducts').get(getAllProducts);


module.exports = router;
