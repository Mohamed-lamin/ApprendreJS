import mongoose from "mongoose"

const contenuSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
})

const contenu = mongoose.model("contenu", contenuSchema)
export default contenu
