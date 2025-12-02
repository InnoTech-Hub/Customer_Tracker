const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the product name"],
    },
    price: {
        type: Number,
        required: [true, "Please enter the product price"],
    },
    description: {
        type: String,
        required: [true, "Please enter the product description"],
    },
    category: {
        type: String,
        required: [true, "Please enter the product category"],
    },
    // countInStock: {
    //     type: Number,
    //     required: [true, "Please enter the number of products in stock"],
    //     default: 0,
    // },
},
    { timestamps: true }
);


module.exports = mongoose.model('Product', productSchema);