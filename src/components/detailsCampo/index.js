import React, { useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getDetailApi } from "../../feature/detailapi/details.action";

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
        <Box>
          <Typography className={classes.text}>
            {detail.walletAddress}
          </Typography>
        </Box>
        <Box> {detail.username}</Box>
      </Box>
    </>
  );
};

export default Aertdetailsmap;
const useStyles = makeStyles((theme) => ({
  card: {
    marginLeft: 50,
    width: 300,
    height: 450,
    marginBottom: 50,
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  imagebox: {
    position: "relative",
    left: 90,
    bottom: 35,
    width: 90,
    height: 90,
    borderRadius: 50,
    border: "4px solid white",
  },
  text: {
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
