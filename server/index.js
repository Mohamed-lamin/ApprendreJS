import express from "express"
import mongoose from "mongoose"
import userRoutes from "./Routes/Users.js"
import contenuRoutes from "./Routes/contenu.js"
import bodyParser from "body-parser"
import cors from "cors"
import "dotenv/config"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(bodyParser.json())

app.use(cors())
app.use("/users", userRoutes)
app.use("/posts", contenuRoutes)
app.get("/", (req, res) => {
  res.send("Hello vous etes la pour apprendre JS")
})
const PORT = process.env.PORT || 5000
mongoose
  .connect(process.env.MONGO_DB)
  .then(
    app.listen(PORT, () => {
      console.log(`server listening on PORT ${PORT}`)
    })
  )
  .catch(err => console.log(`${err} did not connect`))
