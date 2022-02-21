import React, { useState, useEffect } from "react"

import { Button, AppBar, Typography, Toolbar, Avatar } from "@material-ui/core"
import { Link, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../../actions/users"
import useStyles from "./styles"
import logo from "../photos/logo.svg"

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
  const location = useLocation()

  const classes = useStyles()
  const dispatch = useDispatch()

  const signout = () => {
    setUser(null)
    dispatch(logout())
    window.location.reload()
  }
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")))
  }, [location])

  return (
    <AppBar
      className={classes.vbar}
      style={{
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div className={classes.droitbar}>
        <Typography
          className={classes.nom}
          variant="h5"
          style={{ fontFamily: "Open Sans", marginLeft: "20px" }}
        >
          Apprendre JAVASCRIPT
        </Typography>
      </div>
      <div className={classes.logo}>
        <img src={logo} alt="logo" height="60" />
      </div>

      <Toolbar className={classes.toolBar}>
        {user ? (
          <div className={classes.tool}>
            <Avatar className={classes.purple}>
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.name} style={{ marginLeft: "5px" }}>
              {user.result.name}
            </Typography>
            <Button
              style={{ marginLeft: "5px" }}
              variant="contained"
              color="primary"
              onClick={signout}
            >
              Quiter
            </Button>
          </div>
        ) : (
          <div>
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
              className={classes.btn}
            >
              Entrer
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
