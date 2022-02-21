import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { signup, signin } from "../../actions/users"
import { Paper, TextField, Button, Container } from "@material-ui/core"
import useStyles from "./styles"
import { useHistory } from "react-router-dom"
import { GoogleLogin } from "react-google-login"
import Icon from "./icon"

const Auth = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const classes = useStyles()
  const [formData, setFormdata] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  })
  const [isEnregister, setIsEnregister] = useState(true)
  const enregister = () => setIsEnregister(!isEnregister)
  const hundlechange = e => {
    setFormdata({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (isEnregister) {
      dispatch(signup(formData, history))
    } else {
      dispatch(signin(formData, history))
    }
    console.log(formData)
  }
  const googleSuccess = async res => {
    const result = res?.profileObj
    const token = res?.tokenId

    dispatch({ type: "AUTH", data: { result, token } })
    history.push("/")
  }
  const googleFailure = () => {
    console.log("failure")
  }

  return (
    <Container compenent="main" maxWidth="md">
      <Paper
        className={classes.formregistre}
        elevation={3}
        style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
      >
        <form
          className={`${classes.form} ${classes.root}`}
          onSubmit={handleSubmit}
        >
          {isEnregister && (
            <>
              <TextField
                type="text"
                name="name"
                placeholder="FristName"
                onChange={hundlechange}
              />
              <TextField
                type="text"
                name="lastname"
                placeholder="LastName"
                onChange={hundlechange}
              />
            </>
          )}

          <TextField
            type="email"
            name="email"
            placeholder="Email"
            onChange={hundlechange}
          />
          <TextField
            type="password"
            name="password"
            placeholder="Password"
            onChange={hundlechange}
          />

          {isEnregister && (
            <TextField
              type="password"
              name="password"
              placeholder="Confirme Password"
              onChange={hundlechange}
            />
          )}

          <Button
            color="primary"
            variant="contained"
            type="submit"
            style={{ marginTop: "5px", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            {isEnregister ? "S'inscrire" : "s'enregistrer"}
          </Button>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLEI_ID}
            buttonText="identifiez vous avec google"
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            render={renderProps => (
              <Button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                style={{ marginTop: "10px" }}
              >
                Identifier avec Google
              </Button>
            )}
          />
          <Button onClick={enregister} style={{ marginTop: "5px" }}>
            {isEnregister
              ? "Vous  avez déja un compte?"
              : "Vous n'avez pas de compte?"}
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
