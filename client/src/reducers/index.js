import { combineReducers } from "redux"
import reducersContenu from "./contenu"
import reducers from "./auth"
const rootreducers = combineReducers({ reducers, reducersContenu })

export default rootreducers
