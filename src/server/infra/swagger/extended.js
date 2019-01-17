/**
 * @swagger
 * definitions:
 *   ExtendedUser:
 *     allOf:
 *       - $ref: '#/definitions/User'
 *       - type: object
 *       - properties:
 *           pockets:
 *             type: array
 *             items:
 *               $ref: '#/definitions/Pocket'
 *           connectedAccounts:
 *             type: array
 *             items:
 *               $ref: '#/definitions/ConnectedAccount'
 */
