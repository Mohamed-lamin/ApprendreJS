import mongoose from "mongoose"
import contenu from "../Models/contenu.js"

export const fetchContenu = async (req, res) => {
  try {
    const lecontenu = await contenu.find()

    res.status(200).json(lecontenu)
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}
