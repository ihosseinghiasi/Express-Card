const Category = require('../../models/category')
const Product = require('../../models/product')

module.exports.newCategory = async (req, res, next) => {
    try {

      const image = req.file.filename
      const { title, description, categoryName } = req.body
      const data = {
        categoryName,
        title,
        description,
        image
      }
      const newCategory = await Category.create(data)
      if(newCategory) {
        res.json({ status: "OK" })
      }
    } catch (err) {
      next(err)
    }
  }

  module.exports.allCategories = async (req, res, next) => {
    try {

        const categories = await Category.find({})
        return res.json({ categories })

    } catch (err) {
        next(err)
    }
}

module.exports.showCategory = async (req, res, next) => {
  try {
      const categoryId = req.params.id
      const category = await Category.findOne({ _id: categoryId })
      res.send({ category })  
  } catch (err) {
      next(err)
  }
}

module.exports.updateCategory = async (req, res, next) => {
  try {
    const id = req.params.id
    const newCategoryImage = req.file
    const { categoryName, title, description, image } = req.body
    const data = {
      categoryName,
      title,
      description,
      image
    }
    if (newCategoryImage !== undefined) {
      data.image = req.file.filename
    } 

    const categoryUpdated = await Category.updateOne({_id: id }, { $set: data })
    if(categoryUpdated) {
      res.json({ status: "OK" })
    }
  } catch (err) {
    next(err)
  }
}

module.exports.deleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id
    const deletedCategory = await Category.deleteOne({ _id: id })
    if (deletedCategory) res.json({ status: "Ok" })  
  } catch (err) {
    next(err)
  }
}

module.exports.category = async (req, res, next) => {
  try {
    const { id } = req.body
    const category = await Category.findById({ _id: id })
    const categoryProducts = await Product.find({ categoryTitle: category.title }) 
    if(category) res.json({ status: "Ok", category, categoryProducts })
  } catch (err) {
    next(err)
  }
}