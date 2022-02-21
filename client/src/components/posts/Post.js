import React, { useState } from "react"
import {
  Paper,
  Box,
  
  Typography,
  Container,
} from "@material-ui/core"
import useStyles from "./styles"
import Model from "../../Model"
const Post = ({ id, data }) => {
  const classes = useStyles()
  const [model, setModel] = useState(false)
  return (
    <Container className={classes.container} style={{ marginTop: "30px" }}>
      <Paper
        className={classes.paper}
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      >
        <Box id={id}>
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            {data.title}
          </Typography>
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "10px",
              marginLeft: "10px",
            }}
          >
            {data.text1}
          </Typography>
        </Box>

        <button
          // variant="contained"
          // color="primary"
          onClick={() => setModel(true)}
          style={{
            width: "60px",
            height: "30px",
            marginLeft: "45%",
            marginBottom: "10px",
            borderRadius: "6px",
            backgroundColor: "rgba(0,0,0,0.4)",
            color: "white",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          Plus...
        </button>
      </Paper>
      <div>
        {model && <Model id={id} data={data} onclose={() => setModel(false)} />}
      </div>
    </Container>
  )
}

export default Post
