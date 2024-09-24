const router = require("express").Router();
const ProfileController = require("../../../../controllers/user/profile");

/**
 * @swagger
 * /userPanel/user/updateUser/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The User ID.
 *       - in: body
 *         name: User
 *         description: update An User
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
 *     tags:
 *      - User Profile
 *     summary: Edit An User
 *     responses:
 *       200:
 *         description: Edit An User
 */
router.put("/:id", ProfileController.profile);

module.exports = router;
