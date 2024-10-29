import { ProductsCollection } from '../db/model.js';

export const getAllProducts = async () => {
  const products = await ProductsCollection.find();
  return products;
};

export const getProductById = async (productId) => {
  const product = await ProductsCollection.findById(productId);
  return product;
};

export const createProduct = async (payload) => {
  const product = await ProductsCollection.create(payload);
  return product;
};

export const editProduct = async (productId, payload) => {
  const product = await ProductsCollection.findOneAndUpdate(
    { _id: productId },
    payload,
    { new: true },
  );
  return product;
};
