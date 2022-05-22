import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import SendIcon from "@material-ui/icons/Send";
import logo from "../../assets/logo.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TouchAppIcon from "@material-ui/icons/TouchApp";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footerMain}>
      <Box className={classes.fstSection}>
        <Box>
          <img src={logo} />
        </Box>
        <Box>
          <Typography variant="">© Copyright 2022</Typography>
        </Box>
      </Box>
      <Box className={classes.sndSection}>
        <Typography variant="body"> Help Center</Typography>
      </Box>
      <Box className={classes.sndSection}>
        <Typography variant="body">Terms and Conditions</Typography>
      </Box>
      <Box className={classes.fourthSection}>
        <Box className={classes.iconSection}>
          <InstagramIcon />
          <SendIcon className={classes.SendIcon} />
          <LinkedInIcon />
        </Box>
        <Box className={classes.sndSectionIcon}>
          <FacebookIcon />
          <TwitterIcon />
        </Box>
      </Box>
      <Box className={classes.lsatSection}>
        <Box className={classes.lstinner}>
          <input
            type="text"
            placeholder="email address"
            className={classes.input}
          />
          <TouchAppIcon className={classes.iconToch} />
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
const useStyles = makeStyles((theme) => ({
  footerMain: {
    padding: "5px 0px",
    fontFamily: "Poppins, sans-serif",
    borderTop: " 1px solid #E6E8EC",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gap: 10,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr",
      mariginTop: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  fstSection: {
    display: "flex",
    flexDirection: "column",
  },
  sndSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: 600,
    "& :hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 30,
    },
  },
  SendIcon: {
    transform: "rotate(-50deg)",
  },
  iconSection: {
    paddingTop: 30,
    display: "flex",
    gap: 10,
    justifyContent: "space-evenly",
  },
  fourthSection: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 30,
    },
  },
  sndSectionIcon: {
    paddingTop: 30,
    paddingLeft: "45px",
    display: "flex",
    alignItems: "start",
    gap: 49,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 85,
      gap: 85,
    },
  },
  input: {
    border: "1px solid gray",
    borderRadius: 5,
    padding: "10px 30px",
  },
  lstinner: {
    paddingTop: 30,
  },
  iconToch: {
    mariginTop: 5,
  },
}));
