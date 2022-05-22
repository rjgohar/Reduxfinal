import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import img1 from "../../assets/logo.png";
import { Box, makeStyles } from "@material-ui/core";
import Button from "../buttons";
import { Link } from "react-router-dom";
const Header = (props) => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.header__container}>
        <Box className={classes.image__container}>
          <img className={classes.image__container_img} src={img1} alt="img" />

          <Box className={classes.root}>
            <input className={classes.input} placeholder="Search" />
            <SearchIcon className={classes.icon} />
          </Box>
        </Box>

        <Box className={classes.ButtonContainer}>
          {" "}
          <Link to="/home">
            <Button className={classes.menu_Button} variant="none">
              HOME
            </Button>
          </Link>
          <Link to="/artist">
            <Button variant="none" className={classes.menu_Button}>
              ARTIST
            </Button>
          </Link>
          <Button variant="none" className={classes.menu_Button}>
            ABOUT US
          </Button>
          <Button variant="none" className={classes.menu_Button}>
            BLOG
          </Button>
          <Button variant="none" className={classes.menu_Button}>
            FAQ
          </Button>
          <Button variant="none" className={classes.menu_Button}>
            Register/login
          </Button>
        </Box>
        <Box>
          <Button variant="outline" className={classes.connect__Button}>
            creator
          </Button>{" "}
          <Button variant="contain" className={classes.connect__Button}>
            Connect wallet
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default Header;

const useStyle = makeStyles((theme) => ({
  header__container: {
    display: "flex",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  image__container: {
    display: "flex",
    cursor: "pointer",
    fontFamily: "Montserrat",
    alignItems: "center",
  },
  image__container_img: {
    maxWidth: 100,
    maxHeight: 100,
  },
  ButtonContainer: {
    fontFamily: "Montserrat",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menu_Button: {
    cursor: "pointer",
    border: "none",
    borderRadius: "10px",

    height: "30px",
    backgroundColor: "white",
    color: "#000",
    "& menu_Button:hover ": {
      backgroundColor: "rgb(0, 0, 0)",
      color: "white",
    },
  },
  root: {
    padding: "0px 15px",
    border: "1.5px solid black",
    borderRadius: 25,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  connect__Button: {
    cursor: "pointer",
    border: "none",

    height: "50px",
    width: "140px",
    backgroundcolor: "rgb(0, 0, 0)",
    color: "white",
  },

  input: {
    padding: "2px",
    border: "none",
  },
  icon: {
    marginTop: 8,
  },
}));
