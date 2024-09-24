const router = require("express").Router();
const productController = require("../../../../controllers/admin/productController");
const upload = require("../../../../upload/upload");

/**
 * @swagger
 * /adminPanel/product/addProduct:
 *   post:
 *     tags:
 *       - Products
 *     summary: Add New Product
 *     parameters:
 *      - in: body
 *        name: Product
 *        description: Add New Product
 *        schema:
 *          type: object
 *          properties:
 *            ProductName:
 *              type: string
 *            title:
 *              type: string
 *            description:
 *              type: string
 *            price:
 *              type: number
 *            cycle:
 *              type: number
 *            accessible:
 *              type: boolean
 *            fields:
 *              type: []
 *            count:
 *              type: string
 *            categoryTitle:
 *              type: string
 *            image:
 *              type: string
 *     responses:
 *       200:
 *         description: Create A New Product
 */
router.post(
  "/addProduct",
  upload.single("file"),
  (req, res, next) => {
    if (!req.file) {
      req.body.image = null;
    } else {
      req.body.image = req.file.filename;
    }
    next();
  },
  productController.addProduct
);

/**
 * @swagger
 * /adminPanel/product/allProducts:
 *   get:
 *     tags:
 *      - Products
 *     summary: Get All Products
 *     responses:
 *       200:
 *         description: Returns All Products
 */
router.get("/allProducts", productController.allProducts);

/**
 * @swagger
 * /adminPanel/product/showProduct/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The Product ID.
 *     tags:
 *      - Products
 *     summary: Get A Product
 *     responses:
 *       200:
 *         description: Returns A Product
 */
router.get("/showProduct/:id", productController.showProduct);

/**
 * @swagger
 * /adminPanel/product/updateProduct/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The Product ID.
 *       - in: body
 *         name: Product
 *         description: update A Product
 *         schema:
 *          type: object
 *          properties:
 *            ProductName:
 *              type: string
 *            title:
 *              type: string
 *            description:
 *              type: string
 *            price:
 *              type: number
 *            cycle:
 *              type: number
 *            accessible:
 *              type: boolean
 *            fields:
 *              type: []
 *            count:
 *              type: string
 *            categoryTitle:
 *              type: string
 *            image:
 *              type: string
 *     tags:
 *      - Products
 *     summary: Upadte A Product
 *     responses:
 *       200:
 *         description: Upadte A Product
 */
router.put(
  "/updateProduct/:id",
  upload.single("file"),
  productController.updateProduct
);

/**
 * @swagger
 * /adminPanel/Product/deleteProduct/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The Product ID.
 *     tags:
 *      - Products
 *     summary: Delete A Product
 *     responses:
 *       200:
 *         description: Delete A Product
 */
router.delete("/deleteProduct/:id", productController.deleteProduct);
router.post("/product", productController.product);

module.exports = router;
