import express from "express"
import { signin } from "../Controllers/Users.js"
import { signup } from "../Controllers/Users.js"


const router = express.Router()

router.post("/signin", signin)
router.post("/signup", signup)


export default router
