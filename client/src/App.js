import React from "react"
import Navbar from "./components/navbar/Navbar"

import Auth from "./components/auth/auth"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import { Container } from "@material-ui/core"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container maxWidth="lg">
        <Switch>
          <Route path="/auth" exact component={Auth} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
