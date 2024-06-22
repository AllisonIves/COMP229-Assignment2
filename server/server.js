const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const productRoutes = require('./routes/product');

mongoose.connect('mongodb+srv://aives1:dcrC82015@cluster0.i9vcrk3.mongodb.net/Marketplace');

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Mongo DB'));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/product', productRoutes );


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})