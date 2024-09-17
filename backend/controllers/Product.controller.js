const Product = require('../models/Product.model');

let getProducts = async (req, res) => {
    try{
        const products = await Product.find()
        res.status(200).json(products)
    } catch(error){
        res.status(500).json({message: error})
    }
}

let getProduct = async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)

    if(!product){
        res.status(404).json({message: 'Product Not Found'})
    } else {
        res.status(200).json(product)
    }
}

let createProduct = async (req, res) => {
    try{
        const { name, category, image, new_price, old_price } = req.body
        if(name && category && image && new_price && old_price){
            const product = new Product({
                name,
                category,
                image,
                new_price,
                old_price
            })

            await product.save();
            res.status(200).json(product)
        } else {
            res.json({message: 'Something went wrong.'})
        }

    } catch(error){
        res.status(500).json({message: error})
    }
}

let updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);  // Fetch the product

        if (product) {
            const { name, category, image, new_price, old_price } = req.body;

            // Update product fields with new values or keep the old ones
            product.name = name || product.name;
            product.category = category || product.category;
            product.image = image || product.image;
            product.new_price = new_price || product.new_price;
            product.old_price = old_price || product.old_price;

            // Save the updated product
            await product.save();

            res.status(200).json(product);  // Send the updated product back to the client
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: `Failed to update product: ${error}` });
    }
};


let deleteProduct = async(req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id)

        if(product){
            res.status(200).json({message: 'Product deleted successfully'})
        } else {
            res.status(404).json({message: 'Product not found'})
        }
    } catch (error){
        res.status(500).json({message: `Failed to delete product: ${error}`})
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}