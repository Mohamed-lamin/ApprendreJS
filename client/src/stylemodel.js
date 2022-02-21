import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  divmodel: {
    position: "fixed",
    width: "100vw",
    height: "100%",

    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  divcontenu: {
    width: "80%",
    height: "80vh",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "90px",
  },

  [theme.breakpoints.down("sm")]: {
    box: {
      textAlign: "center",
    },
  },

  fermeture: {
    width: "100vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
 
}))
