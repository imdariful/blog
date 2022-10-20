const Category = require('../models/Category');

const createCategory = async (req, res) => {
  const category = new Category(req.body);
  try {
    const result = await category.save();
    res.status(201).json({
      message: `Category ${category.name} created.`,
      data: result,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const result = await Category.find();
    res
      .status(200)
      .json({ message: 'Displaying all categories.', data: result });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
