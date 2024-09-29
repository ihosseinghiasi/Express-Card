import express from "express"
// const categoryController = require("../../../../controllers/admin/categoryController")
// const upload = require("../../../../upload/upload")

const router = express.Router()


/**
 * @swagger
 * /adminPanel/category/addCategory:
 *   post:
 *     tags:
 *       - Categories
 *     summary: Add New Category
 *     parameters:
 *      - in: body
 *        name: Category
 *        description: Add New Category
 *        schema:
 *          type: object
 *          properties:
 *            categoryName: 
 *              type: string
 *            title: 
 *              type: string
 *            description: 
 *              type: string
 *            image: 
 *              type: string
 *     responses:
 *       200:
 *         description: Create A New Category
 */
// router.post('/addCategory', upload.single('file'), (req, res, next) => {
//   if(!req.file) {
//     req.body.image = null
//   }else {
//     req.body.image = req.file.filename
//   }
//   next()
// }, categoryController.newCategory)

/**
 * @swagger
 * /adminPanel/category/allCategories:
 *   get:
 *     tags:
 *      - Categories
 *     summary: Get All Categories
 *     responses:
 *       200:
 *         description: Returns All Categories
 */
// router.get('/allCategories', categoryController.allCategories)

/**
 * @swagger
 * /adminPanel/category/showCategory/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The Category ID.
 *     tags:
 *      - Categories
 *     summary: Get A Category
 *     responses:
 *       200:
 *         description: Returns A Category
 */
// router.get('/showCategory/:id', categoryController.showCategory)

/**
 * @swagger
 * /adminPanel/category/updateCategory/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The Category ID.
 *       - in: body
 *         name: Category
 *         description: update A Category
 *         schema:
 *          type: object
 *          properties:
 *           categoryName: 
 *            type: string
 *           title: 
 *            type: string
 *           description: 
 *            type: string
 *           image: 
 *            type: string
 *     tags:
 *      - Categories
 *     summary: Upadte A Category
 *     responses:
 *       200:
 *         description: Upadte A Category
 */
// router.put('/updateCategory/:id', upload.single('file'), categoryController.updateCategory)

/**
 * @swagger
 * /adminPanel/Category/deleteCategory/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The Category ID.
 *     tags:
 *      - Categories
 *     summary: Delete A Category
 *     responses:
 *       200:
 *         description: Delete A Category
 */
// router.delete('/deleteCategory/:id', categoryController.deleteCategory)
// router.post('/category', categoryController.category)

export default router