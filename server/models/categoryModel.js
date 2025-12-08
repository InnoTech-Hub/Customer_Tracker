const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    fuits: {
        type: String,
    },
    vegetables: {
        type: String,
    },
    dairy: {
        type: String,
    },
    bakery: {
        type: String,
    },
    beverages: {
        type: String,
    },
    snacks: {
        type: String,
    },
    household: {
        type: String,
    },
    personalCare: {
        type: String,
    },
    others: {
        type: String,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
