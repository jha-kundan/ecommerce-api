const express = require('express');
const connectDB = require('./config/db');

const productRoute = require('./routes/productRoutes');
const userRoute = require('./routes/userRoutes');
const cartRoute = require('./routes/cartRoute');
const reviewRoute = require('./routes/reviewRoute')
const categoryRoute = require('./routes/categoryRoute')
const orderRoute = require('./routes/orderRoute')
const inventoryRoute = require('./routes/inventoryRoute');
const discountRoute = require('./routes/discountRoute');

require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
app.use('/api/products', productRoute);
app.use('/api/users', userRoute);
app.use('/api/carts', cartRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/orders', orderRoute);
app.use('/api/inventory', inventoryRoute);
app.use('/api/discounts', discountRoute);