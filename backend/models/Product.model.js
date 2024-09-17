const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,  
    }, 
    category: {
        type: String,
        required: true,
        trim: true,  
    },
    image: {
        type: [String],
        default: [],  
    },
    new_price: {
        type: Number,
        min: [0, 'New price must be a positive number'],
    },
    old_price: {
        type: Number,
        min: [0, 'Old price must be a positive number'],
    }
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;