const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/User.route');
const productRoutes = require('./routes/Product.route')
const cors = require('cors')

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes)
app.use('/products', productRoutes)

const connectToDb = async () => {
    try{
        const connection = await mongoose.connect('mongodb://localhost:27017/ecommerce')
        if(connection){
            console.log('Connected To MongoDB')
            app.listen(8000, () => console.log(`Server is running on port: 8000`))
        } else {
            console.log('Failed to connect to mongodb')
        }
    } catch(error){
        console.log(`Connection error: ${error}`)
    }
}

connectToDb();