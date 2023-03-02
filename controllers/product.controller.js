const Product = require("../models/product.model");


const getProducts = async (request, response) => {
  try {
    const products = await Product.find();
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json(error);
  }
};


const getProduct = async (request, response) => {
  try {
    const product = await Product.findById(request.params.id);
    response.status(200).json(product);
  } catch (error) {
    response.status(500).json(error);
  }
};


const createProduct = async (request, response) => {
  try {
    const product = await Product.create(request.body);
    response.status(201).json(product);
  } catch (error) {
    response.status(500).json(error);
  }
};


const updateProduct = async (request, response) => {
  try {
    const product = await Product.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    });
    response.status(200).json(product);
  } catch (error) {
    response.status(500).json(error);
  }
};


const deleteProduct = async (request, response) => {
  try {
    const product = await Product.findByIdAndDelete(request.params.id);
    response.status(200).json(product);
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};