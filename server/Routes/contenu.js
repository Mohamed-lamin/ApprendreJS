import express from "express"
import { fetchContenu } from "../Controllers/contenu.js"

const router = express.Router()

router.get("/", fetchContenu)

export default router
