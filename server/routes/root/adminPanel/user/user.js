const router = require('express').Router()
const { addUser, allUsers, showUser, updateUser, deleteUser } = require('../../../../controllers/admin/userController')

/**
 * @swagger
 * /adminPanel/user/addUser:
 *   post:
 *     tags:
 *       - Users
 *     summary: Add New User
 *     parameters:
 *      - in: body
 *        name: User
 *        description: Add New User
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
 *     responses:
 *       200:
 *         description: Create A New User
 */
router.post('/addUser', addUser)

/**
 * @swagger
 * /adminPanel/user/allUsers:
 *   get:
 *     tags:
 *      - Users
 *     summary: Get All Users
 *     responses:
 *       200:
 *         description: Returns All Users
 */
router.get('/allUsers', allUsers)

/**
 * @swagger
 * /adminPanel/user/showUser/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The User ID.
 *     tags:
 *      - Users
 *     summary: Get A User
 *     responses:
 *       200:
 *         description: Returns A User
 */
router.get('/showUser/:id', showUser)

/**
 * @swagger
 * /adminPanel/user/updateUser/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The Admin ID.
 *       - in: body
 *         name: Admin
 *         description: update A Admin
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
 *            type: string
 *           password: 
 *             type: string
 *           department: 
 *             type: string
 *     tags:
 *      - Users
 *     summary: Update A User
 *     responses:
 *       200:
 *         description: Update A User
 */
router.put("/updateUser/:id", updateUser);

/**
 * @swagger
 * /adminPanel/User/deleteUser/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The User ID.
 *     tags:
 *      - Users
 *     summary: Delete A User
 *     responses:
 *       200:
 *         description: Delete A User
 */
router.delete('/deleteUser/:id', deleteUser)

module.exports = router