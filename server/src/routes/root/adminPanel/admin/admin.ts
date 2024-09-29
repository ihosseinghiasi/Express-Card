import express from "express"

const router = express.Router()
// const {
//   newAdmin,
//   allAdmins,
//   showAdmin,
//   updateAdmin,
//   deleteAdmin,
// } = require("../../../../controllers/admin/adminController");



/**
 * @swagger
 * /adminPanel/admin/newAdmin:
 *   post:
 *     tags:
 *       - Admins
 *     summary: Add New Admin
 *     parameters:
 *      - in: body
 *        name: Admin
 *        description: Add New Admin
 *        schema:
 *          type: object
 *          properties:
 *            firstName:
 *              type: string
 *            lastName:
 *              type: string
 *            email:
 *              type: string
 *            phoneNumber:
 *              type: string
 *            password:
 *              type: string
 *            department:
 *              type: string
 *            isAdmin:
 *              type: boolean
 *            isProduct:
 *              type: boolean
 *            isCard:
 *              type: boolean
 *            isEmail:
 *              type: boolean
 *            isReport:
 *              type: boolean
 *            isticket:
 *              type: boolean
 *            isCategory:
 *              type: boolean
 *            isUser:
 *              type: boolean
 *            isPayment:
 *              type: boolean
 *     responses:
 *       200:
 *         description: Create A New Admin
 */
// router.post("/newAdmin", newAdmin);

/**
 * @swagger
 * /adminPanel/admin/allAdmins:
 *   get:
 *     tags:
 *      - Admins
 *     summary: Get All Admins
 *     responses:
 *       200:
 *         description: Returns All Admins
 */
// router.get("/allAdmins", allAdmins);

/**
 * @swagger
 * /adminPanel/admin/showAdmin/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The Admin ID.
 *     tags:
 *      - Admins
 *     summary: Get An Admin
 *     responses:
 *       200:
 *         description: Returns An Admin
 */
// router.get("/showAdmin/:id", showAdmin);

/**
 * @swagger
 * /adminPanel/admin/updateAdmin/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The Admin ID.
 *       - in: body
 *         name: Admin
 *         description: update An Admin
 *         schema:
 *          type: object
 *          properties:
 *           firstName:
 *            type: string
 *           lastName:
 *            type: string
 *           email:
 *            type: string
 *           phoneNumber:
 *             type: string
 *           password:
 *             type: string
 *           department:
 *             type: string
 *           isAdmin:
 *             type: boolean
 *           isProduct:
 *             type: boolean
 *           isCard:
 *             type: boolean
 *           isEmail:
 *             type: boolean
 *           isReport:
 *             type: boolean
 *           isticket:
 *             type: boolean
 *           isCategory:
 *             type: boolean
 *           isUser:
 *             type: boolean
 *           isPayment:
 *             type: boolean
 *     tags:
 *      - Admins
 *     summary: Edit An Admin
 *     responses:
 *       200:
 *         description: Edit An Admin
 */
// router.put("/updateAdmin/:id", updateAdmin);

/**
 * @swagger
 * /adminPanel/admin/deleteAdmin/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The Admin ID.
 *     tags:
 *      - Admins
 *     summary: Delete An Admin
 *     responses:
 *       200:
 *         description: Delete An Admin
 */
// router.delete("/deleteAdmin/:id", deleteAdmin);

export default router;
