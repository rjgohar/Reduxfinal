import { alpha, Button, withStyles } from "@material-ui/core";

/**
 * @dev custom button designed upon Material UI's Button component. It accepts all props the MuI button accepts. moreover, the following props have been overridden. the default styles is contained primary
 * @props variant can be either contained or outlined
 * @props color can be primary or secondary
 */
export default withStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    textAlign: "center",
    border: "none",
    fontWeight: 500,
    fontsize: 11,
    textTransform: "capitalize",
  },

  outline: {
    background: " #B3A16C",
    borderRadius: 10,
    "&:hover": {
      backgroundColor: alpha("#B3A16C", 0.9),
    },
  },
  none: {
    "&:hover": {
      backgroundColor: alpha("#ffffff", 0.0),
    },
  },
  contain: {
    borderRadius: 10,
    background: "#0A1A72",

    "&:hover": {
      backgroundColor: alpha("#0A1A72", 0.9),
    },
  },
  buttoncontainer: {
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    border: "none",
    height: 45,
    padding: "5px 24px",
    overflow: "hidden",
    minWidth: 50,
    boxshadow: "0px 1px 7px 2px #afafaf78",
    whiteSpace: "nowrap",
    paddingLeft: "2px",
    borderRadius: "50px",
    textOverflow: "ellipsis",
    backgroundColor: "#ffff",
  },
  button_image: {
    width: 43,
    height: 43,
    display: "flex",
    paddingTop: 2,
    marginRight: 5,
    borderRadius: 50,
    paddingRottom: 2,
  },
}))(Button);
