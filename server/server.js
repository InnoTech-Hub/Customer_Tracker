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
app.use('/admin', require('./routes/admin/adminRoutes'));

// routes for customer
app.use('/customer', require('./routes/user/customerRoutes'));

// error handling middleware
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});
