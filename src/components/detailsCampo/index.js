import React, { useEffect } from "react";
import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getDetailApi } from "../../feature/detailapi/details.action";
import { shortenAddress } from "../../constants";

const Aertdetailsmap = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { username } = useParams();

  useEffect(() => {
    dispatch(getDetailApi(username));
  }, []);

  const {
    detailApiSlice: { detail },
  } = useSelector((state) => state);

  return (
    <>
      <Box className={classes.card}>
        <Box className={classes.imagebox}>
          <img className={classes.profileImage} src={detail.img} alt="ima" />
        </Box>
        <Box className={classes.addressBox}>
          <Typography className={classes.text}>
            {shortenAddress(detail.walletAddress)}
          </Typography>
        </Box>
        <Box pt={2} className={classes.usernameBox}>
          {" "}
          <Typography variant="h5">{detail.username}</Typography>
        </Box>
        <Box className={classes.bioBox}>
          <Typography>bio</Typography>
          <Divider className={classes.divider} />
          <Typography variant="p">{detail.bio}</Typography>
        </Box>
        <Box className={classes.bioBox}>
          <Typography>Links</Typography>
          <Divider className={classes.linkdivider} />
          <Typography variant="p">No links</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Aertdetailsmap;
const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    bottom: 3,
    marginLeft: 50,
    width: 300,
    height: 450,
    marginBottom: 50,
    borderRadius: 5,
    boxShadow: "0px 0px 10px rgb(0 0 0 / 15%)",
    [theme.breakpoints.down("sm")]: {
      width: 310,
      margin: "auto",
    },
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imagebox: {
    position: "relative",
    left: 90,
    bottom: 35,
    width: 100,
    height: 100,
    borderRadius: 50,
    border: "4px solid white",
  },
  text: {
    textAlign: "center",
  },
  addressBox: {
    margin: "0px 40px 0px 40px",
    width: 200,
    borderRadius: 25,
    boxShadow:
      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
  },
  usernameBox: {
    paddingTop: 20,
  },
  bioBox: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: 100,
    margin: "10px 10px",
  },
  linkdivider: {
    width: 200,
    margin: "10px 10px",
  },
}));
