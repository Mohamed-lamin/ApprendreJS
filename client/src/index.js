import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import index from "./reducers"
import thunk from "redux-thunk"
import "./index.css"

const store = createStore(index, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
)
