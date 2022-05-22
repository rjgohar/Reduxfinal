import React, { useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

import img from "../../assets/cover.png";
import Aertdetailsmap from "../../components/detailsCampo";

const Aertdetails = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainSection}>
      <Box className={classes.header}>
        <img className="image" src={img} alt="imagecover" />
      </Box>

      <Aertdetailsmap />
    </Box>
  );
};

export default Aertdetails;
const useStyles = makeStyles((theme) => ({
  header: {
    "& .image": {
      width: "100%",
      height: 300,
      backgroungPosition: "center",
      backgroundSize: "cover",
      [theme.breakpoints.down("sm")]: {},
    },
  },
}));
