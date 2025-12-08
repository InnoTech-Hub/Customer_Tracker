const express = require('express');
//const mongoose = require('mongoose');
const router = express.Router();
const { createProduct } = require('../../middleware/modelController');
const {Customer} = require('../../models/customerModel');
const Product = require('../../models/productModel');


// Admin route to get all customers
router.get('/get/customers', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// create a new product
router.post('/addProduct', createProduct);

// get all products
router.get('/getProducts', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


// get product by id
// 

// router.get('/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;

//         // Validate MongoDB ObjectId
//         if (!mongoose.isValidObjectId(id)) {
//             return res.status(400).json({ message: "Invalid product ID format" });
//         }

//         // Find product by ID
//         const product = await Product.findById(id);

//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }

//         // Success response
//         res.status(200).json(product);

//     } catch (error) {
//         res.status(500).json({ 
//             message: 'Server error', 
//             error: error.message 
//         });
//     }
// });

router.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }   
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ 
            message: 'Server error',
            error: error.message
        });
    }
});


// Search/GET products by various criteria
// router.get('/products/search', async (req, res) => {
//     try {
//         const { id, name, category, keyword, minPrice, maxPrice } = req.query;

//         let filter = {};

//         // Search by ID
//         if (id) {
//             if (!mongoose.isValidObjectId(id)) {
//                 return res.status(400).json({ message: "Invalid product ID" });
//             }
//             filter._id = id;
//         }

//         // Search by name (case-insensitive)
//         if (name) {
//             filter.name = new RegExp(name, "i");
//         }

//         // Search by category
//         if (category) {
//             filter.category = new RegExp(category, "i");
//         }

//         // Keyword search (name, category, description)
//         if (keyword) {
//             filter.$or = [
//                 { name: new RegExp(keyword, "i") },
//                 { category: new RegExp(keyword, "i") },
//                 { description: new RegExp(keyword, "i") }
//             ];
//         }

//         // Price range
//         if (minPrice || maxPrice) {
//             filter.price = {};
//             if (minPrice) filter.price.$gte = Number(minPrice);
//             if (maxPrice) filter.price.$lte = Number(maxPrice);
//         }

//         const products = await Product.find(filter);

//         if (products.length === 0) {
//             return res.status(404).json({ message: 'No products found' });
//         }

//         res.status(200).json(products);

//     } catch (error) {
//         res.status(500).json({ 
//             message: 'Server error', 
//             error: error.message 
//         });
//     }
// });


// update product by id
router.put('/products/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// delete product by id
router.delete('/products/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});




module.exports = router;