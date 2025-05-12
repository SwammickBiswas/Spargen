import express from 'express';
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStipe, updateStatus, userOrders, verifyRazorpay, verifyStripe } from '../controllers/order.controller.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';



const orderRouter = express.Router()

orderRouter.post("/list",adminAuth,allOrders)
orderRouter.post("/status",adminAuth,updateStatus)




orderRouter.post("/place",authUser,placeOrder)
orderRouter.post("/razorpay",authUser,placeOrderRazorpay)
orderRouter.post("/stripe",authUser,placeOrderStipe)


orderRouter.post("/userorders",authUser,userOrders)


orderRouter.post("/verifyStripe",authUser,verifyStripe)
orderRouter.post("/verifyRazorpay",authUser,verifyRazorpay)


export default orderRouter