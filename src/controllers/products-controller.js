const productServices = require("../services/products-service");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    const products = productServices.getAllProducts();
    res.render("products", { products });
  },

  productDetail: (req, res) => {
    res.render("productDetail");
  },
  // DETAIL - Detail from one product ID
  detailById: (req, res) => {
    const id = req.params.id;
    const product = productServices.getProduct(id);
    res.render("detailById", { product });
  },
  // CART
  productCart: (req, res) => {
    res.render("productCart");
  },

  // ADD PRODUCT
  // form to create
  add: (req, res) => {
    res.render("productAdd");
  },
  // Method to store data from form
  store: (req, res) => {
    console.log("body", req.body);
    console.log("file", req.file);

    const product = {
      name: req.body.name,
      marca: req.body.marca,
      sku: req.body.sku,
      stock: req.body.stock,
      color: req.body.color,
      price: Number(req.body.price),
      delivery: req.body.delivery,
      promotion: req.body.promotion,
      discount: Number(req.body.discount),
      logo: "default-logo.jpg",
      description: req.body.description,
      category: req.body.category,
      specs: req.body.specs,
      image: req.file ? req.file.filename : "default-image.jpeg",
    };
    productServices.createProduct(product); // aca manda a la base de datos via servicio
    res.redirect("/products");
  },

  //Form to edit
  edit: (req, res) => {
    const id = req.params.id;
    const product = productServices.getProduct(id);
    res.render("productEdit", { product });
  },
  update: (req, res) => {
    const product = req.body;
    console.log(req.body);
    const id = req.params.id;
    productServices.updateProduct(id, product);
    res.redirect("/products");
  },
  // Delete - Delete one product from DB
  destroy: (req, res) => {
    const id = req.params.id;
    productServices.deleteProduct(id);
    res.redirect("/products");
  },
};

module.exports = controller;
