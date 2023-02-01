const { product } = require("../modules/Product.js");

const productController = {
  getAll: (req, res) => {
    product.find(function (err, docs) {
      if (!err) {
        res.json(docs);
      } else {
        res.status(500).json(err);
      }
    });
  },

  Add: (req, res) => {
    let newProduct = new product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    });

    newProduct.save(function (err, doc) {
      if (!err) {
        res.json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  },
  Delete: (req, res) => {
    let id = req.params.id;
    product.findById(id, (err, doc) => {
      doc.isDeleted = true;
      doc.save();
      res.json({ message: "success" });
    });
  },

  update: (req, res) => {
    let id = req.params.id;
    let updatedProduct = new product({
      _id: id,
      name: req.body.name,
      description: req.body.description,
      date: Date.now(),
    });
    product.findByIdAndUpdate(
      id,
      updatedProduct,
      { new: true, runValidators: true },
      (err, doc) => {
        if (!err) {
          res.json(doc);
        } else {
          res.status(500).json(err);
        }
      }
    );
  },
};

module.exports = {
  productController,
};
