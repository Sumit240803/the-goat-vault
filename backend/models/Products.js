const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    discount: { type: Number, default: 0, min: 0, max: 100 },
    discountedPrice: {
      type: Number,
      default: function () {
        return this.price - (this.price * this.discount) / 100;
      },
    },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    stock: { type: Number, required: true, min: 0 },
    images: [{ url: String, public_id: String }],
    ratings: { type: Number, default: 0, min: 0, max: 5 },
    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        name: String,
        rating: { type: Number, min: 1, max: 5 },
        comment: String,
      },
    ],
    dimensions: {
      length: { type: Number, required: true, min: 0 }, // in cm or inches
      width: { type: Number, required: true, min: 0 },
      height: { type: Number, required: true, min: 0 },
    },
    weight: { type: Number, required: true, min: 0 }, // in kg or grams
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
