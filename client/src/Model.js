import { Box, Grid, Typography } from "@material-ui/core"
import React from "react"

import useStyles from "./stylemodel"

const Model = ({ id, data, onclose }) => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.divmodel}
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      id={id}
    >
      <Box className={classes.divcontenu} style={{ backgroundColor: "yellow" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "20px",
              marginLeft: "10px",
            }}
          >
            {data.title}
          </Typography>
          <Box
            component="span"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <button
              onClick={onclose}
              style={{
                marginTop: "5px",
                marginRight: "5px",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
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
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "10px",
              marginLeft: "10px",
            }}
          >
            {data.text2}
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
            {data.text3}
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}

export default Model
