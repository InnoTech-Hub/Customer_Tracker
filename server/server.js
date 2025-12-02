const express = require('express');

const connectDB = require('./configurations/dbConnection');
const {errorHandler} = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

// app initialization
const app = express();
connectDB();

// middleware to parse json responses
app.use(express.json());

// routes for admin
app.use('/orders', require('./routes/orderRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// routes for customer
app.use('/login', require('./routes/user/loginRoutes'));
app.use('/createAccount', require('./routes/user/accountRoutes'));
app.use('/api/product', require('./routes/productRoutes'));

// error handling middleware
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});
