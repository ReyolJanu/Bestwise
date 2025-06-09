// controllers/productController.js
const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      price,
      imageUrls,
      stock,
      isAvailable,
      rentType,
      eventType
    } = req.body;

    if (!title || !description || !category || !price || !imageUrls) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all required fields',
      });
    }

    const product = await Product.create({
      title,
      description,
      category,
      price,
      imageUrls,
      stock,
      isAvailable,
      rentType,
      eventType,
      owner: req.user._id // auto-assign from logged-in user
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while creating product',
      error: error.message,
    });
  }
};

// get single Product
exports.getProduct = async (req, res) =>{
     try {
    const productId = req.params.id;  

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);  // Send the product data as JSON
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }

}

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().limit(10); // Fetch all products from the DB

    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }

    res.status(200).json(products); // Send all products as JSON
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
