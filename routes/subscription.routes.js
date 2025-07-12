import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({
        "Title": "Get all subscriptions"
    })
})


subscriptionRouter.post('/', authorize, createSubscription);
subscriptionRouter.get('/user/:id', authorize, getUserSubscription);

export default subscriptionRouter;
