// controllers/productController.js
const Product = require("../models/Product");



// addProduct.js - admin only
exports.addProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      mainCategory,
      facets,
      price,
      imageUrls,
      stock,
      rating,
      isAvailable,
      rentType,
    } = req.body;

    if (
      !title ||
      !description ||
      !mainCategory ||
      !price ||
      !imageUrls ||
      !Array.isArray(imageUrls) ||
      imageUrls.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const product = await Product.create({
      title,
      description,
      mainCategory,
      facets,
      price,
      imageUrls,
      stock,
      rating,
      isAvailable,
      rentType,
      owner: req.user._id, // ensure req.user is set from middleware
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Add Product Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while creating product",
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
