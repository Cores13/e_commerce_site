const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try{
        const products = await Product.fint();

        res.json(products);
    }catch(err){
        console.error(err);
        res.status(500).json({message: 'Server error.'});
    }
};

const getProductById = async (req, res) => {
    try{
        const product = await Product.fint(req.params.id);

        res.json(product);
    }catch(err){
        console.error(err);
        res.status(500).json({message: 'Server error.'});
    }
};

module.exports = {
    getAllProducts,
    getProductById,
}