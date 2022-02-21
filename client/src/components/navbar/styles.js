import { makeStyles } from "@material-ui/core/styles"
import { deepPurple } from "@material-ui/core/colors"

export default makeStyles(theme => ({
  vbar: {
    borderRadius: 4,
    backgroundColor: "#212121",
    display: "flex",
    justifyContent: "space-between",

    alignItems: "center",
    flexDirection: "row",
  },

  toolBar: {
    width: "200px",
    display: "flex",
    justifyContent: "flex-end",
  },
  tool: {
    width: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  droitbar: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    marginLeft: "50px",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down("sm")]: {
    name: {
      display: "none",
    },
    tool: {
      display: "flex",
      justifyContent: "start",
      marginRight: "10px",
    },
    nom: {},
    logo: {
      marginLeft: "7px",
    },
  },
}))
