/**
 * @swagger
 * definitions:

 *   Order:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       userId:
 *         type: integer
 *       status:
 *         type: string
 *         enum:
 *           - WAIT
 *           - COMPLETE
 *       price:
 *         type: integer
 *       createdAt:
 *         type: string
 *       updatedAt:
 *         type: string
 *   Transaction:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       status:
 *         type: string
 *         enum:
 *           - PENDING
 *           - COMPLETE
 *           - FAIL
 *       userId:
 *         type: integer
 *       amount:
 *         type: integer
 *       currency:
 *         type: string
 *       orderId:
 *         type: integer
 *       createdAt:
 *         type: string
 *       updatedAt:
 *         type: string
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       status:
 *         type: string
 *         enum:
 *           - ACTIVE
 *           - INACTIVE
 *           - UNAUTHORIZED
 *       email:
 *         type: string
 *       phone:
 *         type: string
 *       birthday:
 *         type: string
 *       password:
 *         type: string
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       createdAt:
 *         type: string
 *       updatedAt:
 *         type: string
*/ 
//# sourceMappingURL=models.js.map