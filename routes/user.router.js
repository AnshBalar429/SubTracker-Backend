import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get('/', getUsers);


userRouter.get('/:id', authorize, getUser);


userRouter.post('/', (req, res) => {
    res.send({
        "Title": "Create new User"
    })
})


userRouter.put('/:id', (req, res) => {
    res.send({
        "Title": "Update User"
    })
})

userRouter.delete('/:id', (req, res) => {
    res.send({
        "Title": "Delete User"
    })
})


export default userRouter;

