import User from "../Models/Users.js"
import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const router = express.Router()
export const signin = async (req, res) => {
  const { email, password } = req.body
  try {
    const inScrit = await User.findOne({ email })
    if (!inScrit) return res.status(404).json("User n'exsit pas")
    const VerifPasswordInscrit = await bcrypt.compare(
      password,
      inScrit.password
    )
    if (!VerifPasswordInscrit)
      return res.status(202).json("Mot de passe invalid")
    const token = await jwt.sign(
      { email: inScrit.email, password: inScrit.password },
      process.env.JWT_TOKEN,
      { expiresIn: "1h" }
    )
    res.status(200).json({ result: inScrit, token })
  } catch (error) {
    res.status(500).json({ message: "qqchose ne va pas" })
  }
}

export const signup = async (req, res) => {
  const { name, lastname, email, password } = req.body
  try {
    const inScrit = await User.findOne({ email })
    if (inScrit)
      return res.status(403).json({ message: "identifiant existe déja" })
    const hashedPassword = await bcrypt.hash(password, 12)
    const result = await User.create({
      name,
      lastname,
      email,
      password: hashedPassword,
    })
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT_TOKEN,
      {
        expiresIn: "1h",
      }
    )

    res.status(200).json({ result, token })
  } catch (error) {
    res.status(500).json({ message: "error est arrivée" })
    console.log(error)
  }
}
export default router
