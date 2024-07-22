import express from 'express'
import { listOrders, placeOrder, updateStatus, userOrders , verifyOrder } from '../controllers/OrderController.js'
import authMiddleware from '../middleware/Auth.js'

const orderRouter = express.Router()

orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddleware,userOrders)
orderRouter.post("/status",updateStatus)
orderRouter.get("/list",listOrders)



export default orderRouter
