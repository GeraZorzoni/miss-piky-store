const db = require("../data/db");

const productServices = {
  getAllProducts: () => {
    return db.products.showAll();
  },
  getProduct: (id) => {
    const product = db.products.findById(id);
    return product;
  },
  createProduct: (product) => {
    db.products.create(product);
  },
  updateProduct: (id, product) => {
    console.log(`Updating IN SERVICE product ${product.name}`);
    db.products.update(id, product);
  },
  deleteProduct: (id) => {
    db.products.delete(id);
  },
};

module.exports = productServices;
