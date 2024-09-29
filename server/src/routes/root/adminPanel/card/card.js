const router = require('express').Router()
const cardController = require('../../../../controllers/admin/cardController')

router.get('/getCardsAndProducts', cardController.getCategoriesAndProducts)

/**
 * @swagger
 * /adminPanel/card/addCard:
 *   post:
 *     tags:
 *       - Cards
 *     summary: Add New cards
 *     parameters:
 *      - in: body
 *        name: cards
 *        description: Add New cards
 *        schema:
 *          type: object
 *          properties:
 *            cardCategory: 
 *              type: string
 *            cardProduct: 
 *              type: string
 *            CardStatus: 
 *              type: string
 *            cardFields: 
 *              type: []
 *     responses:
 *       200:
 *         description: Create A New cards
 */
router.post('/addCard', cardController.addCard)

/**
 * @swagger
 * /adminPanel/card/allCards:
 *   get:
 *     tags:
 *      - Cards
 *     summary: Get All Cards
 *     responses:
 *       200:
 *         description: Returns All Cards
 */
router.get('/allCards', cardController.allCards)

/**
 * @swagger
 * /adminPanel/card/showCard/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The cards ID.
 *     tags:
 *      - Cards
 *     summary: Get A cards
 *     responses:
 *       200:
 *         description: Returns A cards
 */
router.get('/showCard/:id', cardController.showCard)

/**
 * @swagger
 * /adminPanel/card/updateCard/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The cards ID.
 *       - in: body
 *         name: cards
 *         description: update A cards
 *         schema:
 *          type: object
 *          properties:
 *            cardCategory: 
 *              type: string
 *            cardProduct: 
 *              type: string
 *            CardStatus: 
 *              type: string
 *            cardFields: 
 *              type: []
 *     tags:
 *      - Cards
 *     summary: Upadte A cards
 *     responses:
 *       200:
 *         description: Upadte A cards
 */
router.put('/updateCard/:id', cardController.updateCard)

/**
 * @swagger
 * /adminPanel/cards/deleteCard/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The cards ID.
 *     tags:
 *      - Cards
 *     summary: Delete A cards
 *     responses:
 *       200:
 *         description: Delete A cards
 */
router.delete('/deleteCard/:id', cardController.deleteCard)

module.exports = router