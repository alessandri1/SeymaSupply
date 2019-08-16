const productsCtrl = {};

const Product = require('../models/Product');

productsCtrl.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

productsCtrl.createProduct = async (req, res) => {
    const { descripcion,codigo,departamento } = req.body;
    const newProduct = new Product({
        descripcion,
        codigo,
        departamento
    });
    await newProduct.save();
    res.json('New Product added');
};

productsCtrl.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
}

productsCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.json('Product Deleted');
}

productsCtrl.updateProduct = async (req, res) => {
    const { descripcion,codigo,departamento } = req.body;
    await Product.findByIdAndUpdate(req.params.id, {
        descripcion,
        codigo,
        departamento
    });
    res.json('Product Updated');
}

module.exports = productsCtrl;