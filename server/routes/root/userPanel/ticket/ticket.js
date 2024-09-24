const router = require('express').Router()
const { addTicket } = require("../../../../controllers/user/ticketConroller")

/**
 * @swagger
 * /userPanel/user/addTicket:
 *   post:
 *     tags:
 *       - User Tickets
 *     summary: Add New Ticket
 *     parameters:
 *      - in: body
 *        name: Ticket
 *        description: Add New Ticket
 *        schema:
 *          type: object
 *          properties:
 *            userId:
 *              type: string
 *            title:
 *              type: string
 *            status:
 *              type: string
 *            targetDepartment:
 *              type: string
 *            tickets:
 *              type: number
 *            adminTickets:
 *              type: number
 *            userTickets:
 *              type: number
 *            newAdminTickets:
 *              type: number
 *            newUserTickets:
 *              type: number
 *            ticket:
 *              type: object
 *     responses:
 *       200:
 *         description: Create A New Ticket
 */
router.post("/addTicket", addTicket);

module.exports = router