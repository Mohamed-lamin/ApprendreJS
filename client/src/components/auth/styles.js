import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
    },
  },
  formregistre: {
    marginTop: theme.spacing(16),
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}))
