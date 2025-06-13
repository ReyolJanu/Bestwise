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

    // Main category (for rough grouping)
    mainCategory: {
      type: String,
      required: true,
      enum: {
        values: [
          "Balloon",
          "Card",
          "Gift Box",
          "Cake Topper",
          "Decoration Item",
          "Photo Frame",
          "Mug",
          "Toy",
          "Other",
        ],
        message: "Please select a valid category",
      },
    },

    // 🎯 Faceted Attributes
    facets: {
      events: [
        {
          type: String,
          enum: [
            "Anniversary",
            "Birthday",
            "British Souvenir",
            "Christmas",
            "Easter",
            "Father's Day",
            "Mother's Day",
            "Halloween",
            "Teachers & Graduation",
            "Valentine's Day",
            "Wedding",
            "Other",
          ],
        },
      ],
      relation: {
        type: String,
        enum: [
          "Father",
          "Mother",
          "Brother",
          "Sister",
          "Friend",
          "Grandfather",
          "Grandmother",
          "Husband",
          "Wife",
          "Other",
        ],
      },
      material: {
        type: String,
        enum: ["Foil", "Latex", "Paper", "Plastic", "Ceramic", "Wood", "Other"],
      },
      size: {
        type: String,
        enum: ["Small", "Medium", "Large", "Extra Large"],
      },
      color: {
        type: String,
      },
      type: {
        type: String,
        enum: [
          "Helium Balloon",
          "Air Balloon",
          "Pop-up Card",
          "Musical Card",
          "LED Gift",
          "Customizable",
          "Combo",
          "Other",
        ],
      },
    },

    price: {
      type: Number,
      required: [true, "Please enter price"],
    },

    imageUrls: [
      {
        type: String,
        required: true,
      },
    ],

    stock: {
      type: Number,
      default: 0,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
    rating:{
      type:Number,
      default: 0
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Optional for rental
    rentType: {
      type: String,
      enum: ["none", "daily", "weekly", "monthly"],
      default: "none",
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
