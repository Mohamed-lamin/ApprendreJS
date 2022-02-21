import React, { useEffect, useState } from "react"

import { useSelector, useDispatch } from "react-redux"
import { getContenu } from "../../actions/contenu"
import { Container, Grid, Typography, Paper } from "@material-ui/core"
import useStyles from "./styles"

import Post from "../posts/Post"

const Home = () => {
  const [user, setUser] = useState(localStorage.getItem("profile"))
  const contenus = useSelector(state => state.reducersContenu)

  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    dispatch(getContenu())
  }, [dispatch])
  return (
    <Container className={classes.container} maxWidth="lg">
      {!user ? (
        <Paper
          elevation={3}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          className={classes.paperTow}
        >
          <Typography
            variant="h5"
            style={{
              fontFamily: "Open Sans",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            Veuillez vous inscrire
          </Typography>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {contenus.map(contenu => (
            <Post key={contenu._id} data={contenu}></Post>
          ))}
        </Grid>
      )}
    </Container>
  )
}

export default Home
