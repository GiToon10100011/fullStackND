const { Product } = require("../models");

exports.getProducts = async (req, res) => {
  const { orderBy } = req.query;
  console.log(req.query);
  // Product.create() : 삽입
  // Product.findAll() : 조회
  // Product.findByPk() : 기본키로 조회
  // Product.findOne() : 조건에 맞는 첫 번째 데이터 조회
  // Product.update() : 수정
  // Product.destroy() : 삭제
  try {
    // const products = await Product.findAll();
    const { count, rows } = await Product.findAndCountAll({
      attributes: ["id", "name", "price", "description", "spec", "imageUrl"],
      order: [[...orderBy.split("^")]],
      limit: 5,
      offset: 0,
    });
    res.status(200).json({ status: "success", products: rows, count });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "error", message: "DB Error", error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    if (!newProduct) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid product data" });
    }
    const product = await Product.create(newProduct);
    res.status(201).json({ status: "success", data: product });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "error", message: "DB Error", error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    }
    res.status(200).json({ status: "success", data: product });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "error", message: "DB Error", error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const [updatedCount] = await Product.update(updatedData, {
      where: { id },
    });
    if (updatedCount === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    }
    const updatedProduct = await Product.findByPk(id);
    res.status(200).json({ status: "success", data: updatedProduct });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "error", message: "DB Error", error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.destroy({
      where: { id },
    });
    if (result === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    }
    res.status(200).json({ status: "success", message: "Product deleted" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "error", message: "DB Error", error: error.message });
  }
};
