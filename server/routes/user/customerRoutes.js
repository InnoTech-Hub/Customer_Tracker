const express = require('express');
const router = express.Router();
const Customer = require('../../models/customerModel');

// create account
router.post('/createAccount', async (req, res) => {
    const {customername} = req.body;
    try {
        const existingCustomer = await
            Customer.findOne({ customername: customername });
        if (existingCustomer) {
            return res.status(400).json({ message: `Welcome back ${customername}` });
        }
        const newCustomer = new Customer({ customername });
        const savedCustomer = await newCustomer.save();
        res.status(201).json({ message: 'Account created', customer: savedCustomer });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// route to handle user login
router.post('/', async (req, res) => {
    const { customername } = req.body;
    try {
        const customer = await Customer

            .findOne({ customername: customername });
        if (customer) {
            res.status(200).json({ message: 'Login successful', customer });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;