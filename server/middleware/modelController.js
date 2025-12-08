const Product = require('../models/productModel');
const Category = require('../models/categoryModel');

// Creating a new product and automatically update the corresponding category field
const createProduct = async (req, res) => {
    try {
        const { name, price, description, category } = req.body;

        // Create the product
        const newProduct = new Product({
            name,
            price,
            description,
            category,
        });

        const savedProduct = await newProduct.save();

        // Determining which field in Category to update
        const categoryFieldMap = {
            fruits: 'fruits',
            vegetables: 'vegetables',
            dairy: 'dairy',
            bakery: 'bakery',
            beverages: 'beverages',
            snacks: 'snacks',
            household: 'household',
            personalCare: 'personalCare',
            others: 'others',
        };

        const fieldToUpdate = categoryFieldMap[category.toLowerCase()];
        if (!fieldToUpdate) {
            return res.status(400).json({ message: 'Invalid category name' });
        }

        // Update the Category (create if not exists)
        const updatedCategory = await Category.findOneAndUpdate(
            {}, // one document for all categories
            { [fieldToUpdate]: name }, // dynamically update the field
            { upsert: true, new: true } // create if doesn't exist
        );

        return res.status(201).json({
            message: 'Product created and category updated',
            product: savedProduct,
            category: updatedCategory,
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createProduct,
};
