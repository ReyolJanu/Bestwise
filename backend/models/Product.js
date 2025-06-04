const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter product title"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    category: {
        type: String,
        required: [true, "Please enter product category"],
        enum: {
            values: [
                'Electronics',
                'Mobilephones',
                'Laptops',
                'Accessories',
                'Headphones',
                'Foods',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoors',
                'Home'
            ],
            message: "Please select a correct category"
        }
    },
    price: {
      type: Number,
      required: [true, "Please enter price"],
    },
    imageUrls: [
      {
        type: String, // Cloudinary URL or static image path
        required: true,
      },
    ],
    stock: {
      type: Number,
      default: 0,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    rentType: {
      type: String,
      enum: ["none", "daily", "weekly", "monthly"],
      default: "none",
    },
    eventType: {
      type: String,
      enum: ["all", "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
      default: "all",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
