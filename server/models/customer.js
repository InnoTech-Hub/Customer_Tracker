const mongoose = require('mongoose');
const {nanoid} = require('nanoid');

const customerSchema = mongoose.Schema({
    customername: {
        type: String,
        required: [true, "Please enter your name"],
    },
    uid: {
        type: String,
        required: true,
        unique: true,
        default: () => nanoid(8), // generate a unique id of length 8
    },
    
},
    { timestamps: true }
);

module.exports = mongoose.model('Customer', customerSchema);